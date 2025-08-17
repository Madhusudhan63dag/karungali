import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
                Privacy Policy
              </span>
            </h1>
            <p className="text-gray-300 text-lg">
              Your privacy is important to us. Learn how we protect your information.
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
              <h2 className="text-2xl font-semibold text-amber-400 mb-4">1. Information We Collect</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                We collect information you provide directly to us, such as:
              </p>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• Name and contact information</li>
                <li>• Shipping and billing addresses</li>
                <li>• Payment information</li>
                <li>• Order history and preferences</li>
                <li>• Communication preferences</li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-amber-400 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• Process and fulfill your orders</li>
                <li>• Communicate with you about your orders</li>
                <li>• Provide customer support</li>
                <li>• Send promotional materials (with your consent)</li>
                <li>• Improve our products and services</li>
                <li>• Comply with legal obligations</li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-amber-400 mb-4">3. Information Sharing</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                We do not sell, trade, or otherwise transfer your personal information to third parties except:
              </p>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• To trusted service providers who assist in our operations</li>
                <li>• When required by law or to protect our rights</li>
                <li>• With your explicit consent</li>
                <li>• To shipping companies for order delivery</li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-amber-400 mb-4">4. Data Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-amber-400 mb-4">5. Cookies and Tracking</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                We use cookies and similar technologies to:
              </p>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• Remember your preferences</li>
                <li>• Analyze website traffic and usage</li>
                <li>• Improve user experience</li>
                <li>• Provide personalized content</li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-amber-400 mb-4">6. Your Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                You have the right to:
              </p>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• Access your personal information</li>
                <li>• Correct inaccurate information</li>
                <li>• Request deletion of your information</li>
                <li>• Opt-out of marketing communications</li>
                <li>• Data portability</li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-amber-400 mb-4">7. Children's Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-amber-400 mb-4">8. Changes to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-amber-400 mb-4">9. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about this privacy policy, please contact us at:
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

export default PrivacyPolicy;
