import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import logo from '../assets/logo.png';

const Checkout = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const [customerDetails, setCustomerDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    country: 'India'
  });

  const [orderItems, setOrderItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('full');
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState({});

  // Updated product options for Karungali Mala
  const [productOptions] = useState([
    {
      id: 1,
      name: 'Sacred Karungali Mala',
      quantity: 1,
      price: 1290,
      originalPrice: 2999,
      sku: 'KAR001',
      description: 'Authentic Ebony Wood Sacred Mala',
      benefits: ['Divine Protection', 'Spiritual Growth', 'Negative Energy Shield']
    }
  ]);

  // Initialize with single Karungali Mala product
  const [selectedProduct] = useState(productOptions[0]);

  // Order calculations
  const subtotal = selectedProduct.price;
  const discountAmount = selectedProduct.originalPrice - selectedProduct.price;
  const totalAmount = subtotal;
  
  // For advance payment (if needed in future)
  const advanceAmount = 650; // Half of total amount
  const balanceAmount = totalAmount - advanceAmount;

  const getPaymentAmount = () => {
    return paymentMethod === 'full' ? totalAmount : advanceAmount;
  };

  // Load Razorpay script
  useEffect(() => {
    const loadRazorpayScript = () => {
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      });
    };

    loadRazorpayScript();
  }, []);

  useEffect(() => {
    setOrderItems([selectedProduct]);
  }, [selectedProduct]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!customerDetails.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!customerDetails.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!customerDetails.email.trim()) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(customerDetails.email)) newErrors.email = 'Email is invalid';
    if (!customerDetails.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!/^\d{10}$/.test(customerDetails.phone.replace(/\D/g, ''))) newErrors.phone = 'Phone number must be 10 digits';
    if (!customerDetails.address.trim()) newErrors.address = 'Address is required';
    if (!customerDetails.city.trim()) newErrors.city = 'City is required';
    if (!customerDetails.state.trim()) newErrors.state = 'State is required';
    if (!customerDetails.zip.trim()) newErrors.zip = 'PIN code is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const createRazorpayOrder = async () => {
    try {
      const paymentAmount = getPaymentAmount();
      const response = await fetch('https://razorpaybackend-wgbh.onrender.com/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: paymentAmount,
          currency: 'INR',
          receipt: `receipt_${Date.now()}`,
          notes: {
            customerName: `${customerDetails.firstName} ${customerDetails.lastName}`,
            customerEmail: customerDetails.email,
            customerPhone: customerDetails.phone,
            productName: selectedProduct.name,
            totalAmount: totalAmount,
            paymentType: paymentMethod,
            advanceAmount: paymentMethod === 'advance' ? advanceAmount : 0,
            balanceAmount: paymentMethod === 'full' ? 0 : balanceAmount,
            paidAmount: paymentAmount
          }
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        return data;
      } else {
        throw new Error(data.message || 'Failed to create order');
      }
    } catch (error) {
      console.error('Order creation error:', error);
      throw error;
    }
  };

  const handleRazorpayPayment = async (orderData) => {
    const options = {
      key: orderData.key,
      amount: orderData.order.amount,
      currency: orderData.order.currency,
      name: 'Sacred Karungali Collection',
      description: `${selectedProduct.name} Purchase`,
      order_id: orderData.order.id,
      handler: async function (response) {
        try {
          const verifyResponse = await fetch('https://razorpaybackend-wgbh.onrender.com/verify-payment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const verifyData = await verifyResponse.json();
          
          if (verifyData.success) {
            await handleSuccessfulPayment(response);
          } else {
            throw new Error('Payment verification failed');
          }
        } catch (error) {
          console.error('Payment verification error:', error);
          alert('Payment verification failed. Please contact support.');
          setIsProcessing(false);
        }
      },
      prefill: {
        name: `${customerDetails.firstName} ${customerDetails.lastName}`,
        email: customerDetails.email,
        contact: customerDetails.phone,
      },
      theme: {
        color: '#f59e0b',
      },
      modal: {
        ondismiss: function() {
          setIsProcessing(false);
        }
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleSuccessfulPayment = async (paymentResponse) => {
    try {
      const orderNumber = `KAR${Date.now()}`;
      
      await sendOrderConfirmation(orderNumber, paymentResponse);
      
      const baseAddress = `${customerDetails.address}${customerDetails.apartment ? ', ' + customerDetails.apartment : ''}, ${customerDetails.city}, ${customerDetails.state} - ${customerDetails.zip}, ${customerDetails.country}`;
      const shippingAddressWithNote = paymentMethod === 'advance' 
        ? `${baseAddress} [ADVANCE PAID: ₹${advanceAmount}, BALANCE: ₹${balanceAmount}]`
        : `${baseAddress} [FULL PAYMENT COMPLETED]`;
      
      navigate('/thank-you', {
        state: {
          orderData: {
            orderNumber: orderNumber,
            productName: selectedProduct.name,
            totalAmount: totalAmount,
            paymentType: paymentMethod,
            paidAmount: getPaymentAmount(),
            advanceAmount: paymentMethod === 'advance' ? advanceAmount : 0,
            balanceAmount: paymentMethod === 'full' ? 0 : balanceAmount,
            paymentMethod: 'Razorpay',
            paymentId: paymentResponse.razorpay_payment_id,
            customerName: `${customerDetails.firstName} ${customerDetails.lastName}`,
            customerEmail: customerDetails.email,
            customerPhone: customerDetails.phone,
            shippingAddress: shippingAddressWithNote
          }
        }
      });
      
    } catch (error) {
      console.error('Post-payment processing error:', error);
      alert('Payment successful but there was an issue processing your order. Our team will contact you shortly.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      alert('Please fill in all required fields correctly.');
      return;
    }
    
    setIsProcessing(true);
    
    try {
      const orderData = await createRazorpayOrder();
      await handleRazorpayPayment(orderData);
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Failed to process order. Please try again.');
      setIsProcessing(false);
    }
  };

  const sendOrderConfirmation = async (orderNumber, paymentResponse) => {
    try {
      const baseShippingAddress = `${customerDetails.address}${customerDetails.apartment ? ', ' + customerDetails.apartment : ''}, ${customerDetails.city}, ${customerDetails.state} - ${customerDetails.zip}, ${customerDetails.country}`;
      
      const emailData = {
        customerEmail: customerDetails.email,
        orderDetails: {
          orderNumber: orderNumber,
          products: [{
            name: selectedProduct.name,
            quantity: selectedProduct.quantity,
            price: selectedProduct.price,
            description: selectedProduct.description
          }],
          totalAmount: totalAmount,
          paymentType: paymentMethod,
          paidAmount: getPaymentAmount(),
          advanceAmount: paymentMethod === 'advance' ? advanceAmount : 0,
          balanceAmount: paymentMethod === 'full' ? 0 : balanceAmount,
          currency: '₹',
          paymentMethod: 'Razorpay',
          paymentId: paymentResponse.razorpay_payment_id,
          quantity: selectedProduct.quantity,
          productName: selectedProduct.name,
          shippingNote: paymentMethod === 'advance' 
            ? `ADVANCE PAID: ₹${advanceAmount}, BALANCE: ₹${balanceAmount} COD`
            : 'FULL PAYMENT COMPLETED',
          paymentNote: paymentMethod === 'advance' 
            ? `Advance payment of ₹${advanceAmount} received. Balance amount ₹${balanceAmount} to be collected on delivery.`
            : `Full payment of ₹${totalAmount} completed online. No amount due on delivery.`,
          shippingAddress: baseShippingAddress,
          shippingAddressWithNote: paymentMethod === 'advance' 
            ? `${baseShippingAddress}\n\n** PAYMENT NOTE: Advance ₹${advanceAmount} paid online, Balance ₹${balanceAmount} to collect on delivery **`
            : `${baseShippingAddress}\n\n** PAYMENT NOTE: Full payment ₹${totalAmount} completed online **`
        },
        customerDetails: customerDetails,
        productName: selectedProduct.name
      };

      const apiEndpoint = paymentMethod === 'advance' 
        ? 'https://razorpaybackend-wgbh.onrender.com/send-advance-payment-confirmation'
        : 'https://razorpaybackend-wgbh.onrender.com/send-order-confirmation';

      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      const data = await response.json();
      
      if (!data.success) {
        console.error('Email sending failed:', data);
      }
    } catch (error) {
      console.error('Email error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-zinc-900 text-white relative overflow-hidden">
      {/* Sacred Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-radial from-amber-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-radial from-yellow-400/15 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Sacred Header Navigation */}
      <nav className="relative z-10 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border-b border-amber-500/20 px-6 py-4 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <img src={logo} alt="Sacred Karungali Collection" className="h-16 transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </a>
          <div className="flex items-center space-x-4">
            <span className="text-amber-200 font-medium tracking-wide">Sacred Checkout</span>
            <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse shadow-lg shadow-amber-400/50"></div>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Sacred Progress Indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-6 mb-8">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-black font-bold shadow-lg shadow-amber-500/30">1</div>
              <span className="ml-3 text-amber-300 font-semibold tracking-wide">Sacred Details</span>
            </div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-amber-500 to-amber-400"></div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-zinc-800 border-2 border-amber-500/30 rounded-full flex items-center justify-center text-amber-300 font-bold">2</div>
              <span className="ml-3 text-amber-100/60">Divine Payment</span>
            </div>
            <div className="w-16 h-0.5 bg-zinc-700"></div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-zinc-800 border-2 border-zinc-600 rounded-full flex items-center justify-center text-zinc-400 font-bold">3</div>
              <span className="ml-3 text-zinc-400">Sacred Blessing</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sacred Customer Details Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-zinc-900/60 via-zinc-800/40 to-zinc-900/60 rounded-3xl p-8 border border-amber-500/20 backdrop-blur-sm relative overflow-hidden">
              {/* Decorative Sacred Corners */}
              <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-amber-400/50"></div>
              <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-amber-400/50"></div>
              <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-amber-400/50"></div>
              <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-amber-400/50"></div>

              {/* Sacred Header */}
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-amber-500/30">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white font-serif">Sacred Information</h2>
                  <p className="text-amber-100/70 text-sm">Provide your details for divine delivery</p>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-amber-200 font-semibold mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={customerDetails.firstName}
                      onChange={handleInputChange}
                      className={`w-full p-4 bg-zinc-800/50 border-2 rounded-xl text-white placeholder-amber-100/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 backdrop-blur-sm ${
                        errors.firstName ? 'border-red-500 bg-red-900/20' : 'border-amber-500/30 hover:border-amber-400/50'
                      }`}
                      placeholder="Enter your first name"
                      required
                    />
                    {errors.firstName && (
                      <span className="text-red-400 text-sm font-medium flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.firstName}
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-amber-200 font-semibold mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={customerDetails.lastName}
                      onChange={handleInputChange}
                      className={`w-full p-4 bg-zinc-800/50 border-2 rounded-xl text-white placeholder-amber-100/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 backdrop-blur-sm ${
                        errors.lastName ? 'border-red-500 bg-red-900/20' : 'border-amber-500/30 hover:border-amber-400/50'
                      }`}
                      placeholder="Enter your last name"
                      required
                    />
                    {errors.lastName && (
                      <span className="text-red-400 text-sm font-medium flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.lastName}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-amber-200 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={customerDetails.email}
                      onChange={handleInputChange}
                      className={`w-full p-4 bg-zinc-800/50 border-2 rounded-xl text-white placeholder-amber-100/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 backdrop-blur-sm ${
                        errors.email ? 'border-red-500 bg-red-900/20' : 'border-amber-500/30 hover:border-amber-400/50'
                      }`}
                      placeholder="your@email.com"
                      required
                    />
                    {errors.email && (
                      <span className="text-red-400 text-sm font-medium flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.email}
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-amber-200 font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={customerDetails.phone}
                      onChange={handleInputChange}
                      className={`w-full p-4 bg-zinc-800/50 border-2 rounded-xl text-white placeholder-amber-100/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 backdrop-blur-sm ${
                        errors.phone ? 'border-red-500 bg-red-900/20' : 'border-amber-500/30 hover:border-amber-400/50'
                      }`}
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                    {errors.phone && (
                      <span className="text-red-400 text-sm font-medium flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="address" className="block text-amber-200 font-semibold mb-2">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={customerDetails.address}
                    onChange={handleInputChange}
                    className={`w-full p-4 bg-zinc-800/50 border-2 rounded-xl text-white placeholder-amber-100/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 backdrop-blur-sm ${
                      errors.address ? 'border-red-500 bg-red-900/20' : 'border-amber-500/30 hover:border-amber-400/50'
                    }`}
                    placeholder="House number, street name"
                    required
                  />
                  {errors.address && (
                    <span className="text-red-400 text-sm font-medium flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.address}
                    </span>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="apartment" className="block text-amber-200 font-semibold mb-2">
                    Apartment, Suite, etc. (Optional)
                  </label>
                  <input
                    type="text"
                    id="apartment"
                    name="apartment"
                    value={customerDetails.apartment}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-zinc-800/50 border-2 border-amber-500/30 rounded-xl text-white placeholder-amber-100/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 hover:border-amber-400/50 backdrop-blur-sm"
                    placeholder="Apartment, floor, building"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="city" className="block text-amber-200 font-semibold mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={customerDetails.city}
                      onChange={handleInputChange}
                      className={`w-full p-4 bg-zinc-800/50 border-2 rounded-xl text-white placeholder-amber-100/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 backdrop-blur-sm ${
                        errors.city ? 'border-red-500 bg-red-900/20' : 'border-amber-500/30 hover:border-amber-400/50'
                      }`}
                      placeholder="Your city"
                      required
                    />
                    {errors.city && (
                      <span className="text-red-400 text-sm font-medium flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.city}
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="state" className="block text-amber-200 font-semibold mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={customerDetails.state}
                      onChange={handleInputChange}
                      className={`w-full p-4 bg-zinc-800/50 border-2 rounded-xl text-white placeholder-amber-100/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 backdrop-blur-sm ${
                        errors.state ? 'border-red-500 bg-red-900/20' : 'border-amber-500/30 hover:border-amber-400/50'
                      }`}
                      placeholder="Your state"
                      required
                    />
                    {errors.state && (
                      <span className="text-red-400 text-sm font-medium flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.state}
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="zip" className="block text-amber-200 font-semibold mb-2">
                      PIN Code *
                    </label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      value={customerDetails.zip}
                      onChange={handleInputChange}
                      className={`w-full p-4 bg-zinc-800/50 border-2 rounded-xl text-white placeholder-amber-100/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 backdrop-blur-sm ${
                        errors.zip ? 'border-red-500 bg-red-900/20' : 'border-amber-500/30 hover:border-amber-400/50'
                      }`}
                      placeholder="123456"
                      required
                    />
                    {errors.zip && (
                      <span className="text-red-400 text-sm font-medium flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.zip}
                      </span>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
          
          {/* Sacred Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <div className="bg-gradient-to-br from-zinc-900/60 via-zinc-800/40 to-zinc-900/60 rounded-3xl p-8 border border-amber-500/20 backdrop-blur-sm relative overflow-hidden">
                {/* Decorative Sacred Corners */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-amber-400/50"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-amber-400/50"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-amber-400/50"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-amber-400/50"></div>
                
                <div className="flex items-center mb-8">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mr-3 shadow-lg shadow-amber-500/30">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-serif">Sacred Order</h3>
                    <p className="text-amber-100/70 text-sm">Your divine protection</p>
                  </div>
                </div>
                
                {/* Sacred Product Display */}
                <div className="bg-gradient-to-br from-amber-500/10 via-amber-600/5 to-amber-500/10 rounded-xl p-6 border border-amber-400/30 mb-8">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-lg mb-2">{selectedProduct.name}</h4>
                      <p className="text-amber-200 text-sm mb-1">{selectedProduct.description}</p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {selectedProduct.benefits.map((benefit, index) => (
                          <span key={index} className="px-2 py-1 bg-amber-500/20 text-amber-300 text-xs rounded-full border border-amber-400/30">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-amber-400 font-bold text-xl">₹{selectedProduct.price.toLocaleString()}</p>
                      <p className="text-amber-100/60 text-sm line-through">₹{selectedProduct.originalPrice.toLocaleString()}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-amber-500/20">
                    <span className="text-amber-200 text-sm font-medium">Quantity: {selectedProduct.quantity}</span>
                    <div className="bg-gradient-to-r from-amber-500/30 to-amber-600/20 rounded-lg px-3 py-1 border border-amber-400/30">
                      <span className="text-amber-200 font-semibold text-sm">
                        Save ₹{discountAmount.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Sacred Order Totals */}
                <div className="space-y-4 mb-8 border-t border-amber-500/20 pt-6">
                  <div className="flex justify-between text-amber-100/80">
                    <span>Subtotal:</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-green-400 font-semibold">
                    <span>Sacred Discount:</span>
                    <span>-₹{discountAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-amber-100/80">
                    <span>Sacred Shipping:</span>
                    <span className="text-green-400 font-semibold">FREE</span>
                  </div>
                  <div className="flex justify-between text-white font-bold text-xl pt-4 border-t border-amber-500/20">
                    <span>Total:</span>
                    <span className="text-amber-400">₹{totalAmount.toLocaleString()}</span>
                  </div>
                </div>

                {/* Sacred Payment Method */}
                <div className="mb-8">
                  <h4 className="text-amber-300 font-bold mb-4 font-serif">Payment Method</h4>
                  <div className="bg-gradient-to-r from-amber-500/15 via-amber-600/10 to-amber-500/15 border border-amber-400/30 rounded-xl p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <svg className="w-6 h-6 mr-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <span className="text-amber-200 font-semibold">Full Sacred Payment</span>
                          <p className="text-amber-100/70 text-sm">Complete divine transaction</p>
                        </div>
                      </div>
                      <div className="text-amber-400 font-bold text-lg">₹{totalAmount.toLocaleString()}</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 bg-zinc-800/50 rounded-lg p-3 border border-amber-500/20">
                    <div className="flex items-center text-amber-200 text-sm">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      Secure payment via Cards, UPI, Net Banking
                    </div>
                  </div>
                </div>
                
                {/* Sacred Submit Button */}
                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isProcessing}
                  className={`w-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 text-black font-bold py-4 px-6 rounded-xl text-lg transition-all duration-300 transform shadow-lg shadow-amber-500/30 ${
                    isProcessing 
                      ? 'opacity-70 cursor-not-allowed' 
                      : 'hover:scale-105 hover:shadow-xl hover:shadow-amber-500/40'
                  }`}
                >
                  {isProcessing ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-3"></div>
                      Processing Sacred Payment...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      Complete Sacred Order - ₹{totalAmount.toLocaleString()}
                    </div>
                  )}
                </button>
                
                {/* Sacred Payment Note */}
                <div className="mt-6 bg-gradient-to-r from-zinc-900/50 via-zinc-800/30 to-zinc-900/50 rounded-lg p-4 border border-amber-500/20">
                  <div className="flex items-center text-amber-200 text-sm mb-2">
                    <svg className="w-4 h-4 mr-2 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    Sacred & Secure Payment
                  </div>
                  <p className="text-xs text-amber-100/70 leading-relaxed">
                    Your sacred Karungali Mala will be blessed before shipping. Complete payment ensures immediate processing and divine protection begins.
                  </p>
                </div>

                {/* Emergency Sacred Contact */}
                <div className="mt-6 text-center p-4 bg-gradient-to-r from-amber-500/15 via-amber-600/10 to-amber-500/15 border border-amber-400/30 rounded-xl">
                  <p className="text-amber-200 text-sm mb-2 font-medium">Need Divine Guidance?</p>
                  <a 
                    href="tel:+919030648333"
                    className="inline-flex items-center gap-2 text-amber-400 font-bold hover:text-amber-300 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    Call +91 9030648333
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
