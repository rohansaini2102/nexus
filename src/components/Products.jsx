import React, { useState } from 'react';

// Sample product data with 5 products
const products = [
  {
    name: 'Tool A',
    image: 'path_to_image_a.jpg', // Replace with actual image paths
    features: [
      'Feature 1 of Tool A',
      'Feature 2 of Tool A',
      'Feature 3 of Tool A',
      'Feature 4 of Tool A',
      'Feature 5 of Tool A',
    ],
  },
  {
    name: 'Tool B',
    image: 'path_to_image_b.jpg',
    features: [
      'Feature 1 of Tool B',
      'Feature 2 of Tool B',
      'Feature 3 of Tool B',
      'Feature 4 of Tool B',
      'Feature 5 of Tool B',
    ],
  },
  {
    name: 'Tool C',
    image: 'path_to_image_c.jpg',
    features: [
      'Feature 1 of Tool C',
      'Feature 2 of Tool C',
      'Feature 3 of Tool C',
      'Feature 4 of Tool C',
      'Feature 5 of Tool C',
    ],
  },
  {
    name: 'Tool D',
    image: 'path_to_image_d.jpg',
    features: [
      'Feature 1 of Tool D',
      'Feature 2 of Tool D',
      'Feature 3 of Tool D',
      'Feature 4 of Tool D',
      'Feature 5 of Tool D',
    ],
  },
  {
    name: 'Tool E',
    image: 'path_to_image_e.jpg',
    features: [
      'Feature 1 of Tool E',
      'Feature 2 of Tool E',
      'Feature 3 of Tool E',
      'Feature 4 of Tool E',
      'Feature 5 of Tool E',
    ],
  },
];

function Products() {
  // State to track which products are expanded
  const [expandedProducts, setExpandedProducts] = useState(
    Array(products.length).fill(false)
  );

  const toggleDescription = (index) => {
    const newExpandedProducts = [...expandedProducts];
    newExpandedProducts[index] = !newExpandedProducts[index];
    setExpandedProducts(newExpandedProducts);
  };

  return (
    <section id="products" className="container mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              {/* Product Name */}
              <h3 className="text-2xl font-semibold mb-2 text-center">
                {product.name}
              </h3>
              {/* See Plan Button */}
              <button
                onClick={() => toggleDescription(index)}
                className="bg-blue-700 text-white px-4 py-2 rounded w-full mb-2 hover:bg-blue-800 transition-colors duration-300"
              >
                {expandedProducts[index] ? 'Hide Plan' : 'See Plan'}
              </button>
              {/* Features List */}
              {expandedProducts[index] && (
                <ul className="text-gray-700 mb-4 list-disc list-inside">
                  {product.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              )}
              {/* Send Message Button */}
              <a
                href="https://wa.me/8239555834?text=Hello%20I%20am%20interested%20in%20your%20product" // Replace with your actual WhatsApp link
                className="bg-green-500 text-white px-4 py-2 rounded w-full block text-center hover:bg-green-600 transition-colors duration-300 mt-2"
              >
                Send Message
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
