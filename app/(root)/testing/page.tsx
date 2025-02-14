import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 min-h-screen text-black">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Modern Website</h1>
        <p className="text-xl mb-6">We create amazing digital experiences.</p>
        <button className="bg-black text-gray-800 px-6 py-2 rounded-full shadow-md hover:bg-gray-100 transition">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-teal-400">
        <h2 className="text-4xl font-bold text-center mb-10">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-black text-gray-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Feature One</h3>
            <p>Discover the power of modern web design with our intuitive UI.</p>
          </div>
          <div className="bg-black text-gray-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Feature Two</h3>
            <p>Experience seamless integration and performance optimization.</p>
          </div>
          <div className="bg-black text-gray-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Feature Three</h3>
            <p>Enjoy a responsive and dynamic user experience.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-green-400 to-blue-600 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl mb-8">Join us today and enhance your digital presence.</p>
        <button className="bg-black text-gray-800 px-6 py-2 rounded-full shadow-md hover:bg-gray-100 transition">Join Now</button>
      </section>
    </div>
  );
};

export default HomePage;
