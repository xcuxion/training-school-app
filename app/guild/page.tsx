"use client"
import React from 'react'
import Navigator from '../(root)/portfolio/navigator'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Guild = () => {
  return (
    <div className='relative'>
      <Navigator/>
    <section className="min-h-screen bg-black text-white py-6 md:py-12 px-5 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center mt-10"
      >
        <h1 className="text-2xl md:text-5xl font-bold text-primary">
          Join the XCUXION Guild
        </h1>
        <p className="mt-4 md:text-lg text-gray-300">
          A network of elite developers building cutting-edge software solutions.
        </p>
      </motion.div>

      {/* Sections */}
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 mt-4 md:mt-12 max-w-5xl mx-auto">
        {/* Developer Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-secondary p-3 md:p-6 rounded-xl shadow-lg"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-primary">For Developers</h2>
          <ul className="mt-3 text-gray-300 space-y-2">
            <li>🚀 Work on real-world projects & earn</li>
            <li>🎯 Level up through our ranking system </li>
            <li>🤝 Collaborate with top engineers</li>
            <li>💰 Get paid for your contributions</li>
          </ul>
          <p className="mt-4 text-sm text-gray-400">
            The app is not ready yet! Join the waitlist to be among the first to access exclusive projects.
          </p>
          <Link
            href="/guild/join"
            className="block mt-4 bg-primary text-black text-center py-2 md:rounded-lg rounded-md text-sm font-semibold hover:bg-yellow-400 transition md:text-base "
          >
            Join Developer Waitlist
          </Link>
        </motion.div>

        {/* Business Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="bg-secondary p-3 md:p-6 rounded-xl shadow-lg"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-primary">For Businesses</h2>
          <ul className="mt-3 text-gray-300 space-y-2">
            <li>💡 Custom software solutions</li>
            <li>⚡ Fast & reliable development teams</li>
            <li>🔒 Secure & scalable systems</li>
          </ul>
          <p className="mt-4 text-sm text-gray-400">
            Get access to our vetted team of engineers for your software projects.
          </p>
          <Link
              href="https://wa.me/233207565990"
              className="mt-4 bg-white text-black text-center py-2 rounded-md font-semibold flex items-center justify-center hover:border hover:border-primary transition text-sm md:text-base"
          >
            <FaWhatsapp className="mr-2 text-xl" /> Chat with Us on WhatsApp
          </Link>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-center mt-12 text-gray-400"
      >
        <p>Be among the first to join the XCUXION Guild.</p>
        <Link href="/" className="text-primary font-semibold">
          Go To Homepage
        </Link>
      </motion.div>
    </section>
    </div>
  )
}

export default Guild