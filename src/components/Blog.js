import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  // Dummy blog data
  const blogPosts = [
    {
      id: 1,
      title: "The Science Behind Himalayan Shilajit: What Makes It So Powerful?",
      excerpt: "Discover the scientific research and studies that prove Shilajit's incredible health benefits and why it's considered nature's most potent superfood.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      author: "Dr. Ayurveda Expert",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "Science"
    },
    {
      id: 2,
      title: "5 Amazing Benefits of Shilajit for Energy and Vitality",
      excerpt: "Learn how daily Shilajit consumption can boost your energy levels, improve stamina, and enhance overall vitality naturally.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      author: "Health Specialist",
      date: "Dec 10, 2024",
      readTime: "4 min read",
      category: "Health"
    },
    {
      id: 3,
      title: "How to Use Shilajit: Complete Dosage Guide for Beginners",
      excerpt: "A comprehensive guide on how to properly consume Shilajit, including dosage recommendations, timing, and best practices for maximum benefits.",
      image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      author: "Wellness Coach",
      date: "Dec 5, 2024",
      readTime: "6 min read",
      category: "Guide"
    },
    {
      id: 4,
      title: "Shilajit vs. Other Supplements: Why Natural is Better",
      excerpt: "Compare Shilajit with synthetic supplements and understand why this natural resin outperforms artificial alternatives in health benefits.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      author: "Nutritionist",
      date: "Nov 28, 2024",
      readTime: "7 min read",
      category: "Comparison"
    },
    {
      id: 5,
      title: "Customer Success Stories: Real Results with Himalayan Shilajit",
      excerpt: "Read inspiring testimonials and success stories from our customers who transformed their health with authentic Himalayan Shilajit.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2320&q=80",
      author: "Customer Relations",
      date: "Nov 20, 2024",
      readTime: "8 min read",
      category: "Success Stories"
    },
    {
      id: 6,
      title: "The Ancient History of Shilajit in Ayurvedic Medicine",
      excerpt: "Explore the rich history of Shilajit in traditional Ayurvedic medicine and how ancient wisdom meets modern science.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      author: "Ayurvedic Scholar",
      date: "Nov 15, 2024",
      readTime: "6 min read",
      category: "History"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest From Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500">
              Blog
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover expert insights, health tips, and the latest research about Himalayan Shilajit
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-amber-600 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      {post.author.split(' ').map(name => name[0]).join('')}
                    </div>
                    <span>{post.author}</span>
                  </div>
                  <div className="text-right">
                    <div>{post.date}</div>
                    <div className="text-amber-600 font-medium">{post.readTime}</div>
                  </div>
                </div>

                {/* Read More Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 w-full bg-gradient-to-r from-amber-600 to-yellow-500 text-white font-semibold py-2 px-4 rounded-lg hover:shadow-lg transition-all"
                >
                  Read More
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Blogs Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white border-2 border-amber-500 text-amber-600 font-bold py-3 px-8 rounded-lg hover:bg-amber-500 hover:text-white transition-all shadow-lg"
          >
            View All Blog Posts
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
