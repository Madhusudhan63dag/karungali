import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
//   useEffect(() => {
//     // Ensure page starts at top and add smooth scrolling
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     document.documentElement.style.scrollBehavior = 'smooth';
    
//     return () => {
//       document.documentElement.style.scrollBehavior = 'auto';
//     };
//   }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation Header */}
      <div className="bg-gray-900 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link 
            to="/" 
            className="text-amber-400 hover:text-amber-300 transition-colors flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Home</span>
          </Link>
          <h1 className="text-xl font-bold text-amber-400">Himalayan Shilajit</h1>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
                Terms & Conditions
              </span>
            </h1>
            <p className="text-gray-300 text-lg">
              Please read these terms carefully before using our services
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-amber-400 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using our Himalayan Shilajit products and services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-amber-400 mb-4">2. Product Information</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                Our Shilajit products are natural supplements sourced from the Himalayas. Please note:
              </p>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• Products are not intended to diagnose, treat, cure, or prevent any disease</li>
                <li>• Consult your healthcare provider before use</li>
                <li>• Individual results may vary</li>
                <li>• Not suitable for pregnant or nursing women without medical advice</li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-amber-400 mb-4">3. Orders and Payment</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                When placing an order with us:
              </p>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• All orders are subject to availability and confirmation</li>
                <li>• Prices are subject to change without notice</li>
                <li>• Payment must be made in full before dispatch</li>
                <li>• We reserve the right to refuse any order</li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-amber-400 mb-4">4. Shipping and Delivery</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                Regarding shipping and delivery:
              </p>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• Delivery times are estimates and not guaranteed</li>
                <li>• Risk of loss passes to you upon delivery</li>
                <li>• Additional charges may apply for remote locations</li>
                <li>• We are not responsible for delays due to external factors</li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-amber-400 mb-4">5. Returns and Refunds</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                Our return policy includes:
              </p>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• Returns accepted within 15 days of delivery</li>
                <li>• Products must be unopened and in original condition</li>
                <li>• Customer responsible for return shipping costs</li>
                <li>• Refunds processed within 7-10 business days</li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-amber-400 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-amber-400 mb-4">7. Contact Information</h2>
              <p className="text-gray-300 leading-relaxed">
                For any questions regarding these terms and conditions, please contact us at:
              </p>
              <p className="text-amber-400 mt-2">Phone: +91 9030732444</p>
            </div>

            <div className="text-center text-gray-400 text-sm mt-8">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
