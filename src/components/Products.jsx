import React from 'react';

// Placeholder Image URL (You can replace this with any placeholder image you prefer)
const placeholderImage = 'https://via.placeholder.com/150';

// Product Data
const products = [
  {
    name: 'Per Month',
    price: '₹ 199 INR',
    image: 'https://i0.wp.com/jupiterseotool.com/wp-content/uploads/2024/01/Grammarly-Group-Buy-Seo-300x70-1.webp?fit=300%2C70&ssl=1',
  },
  {
    name: 'Per Month',
    price: '₹ 249 INR',
    image: 'https://i0.wp.com/jupiterseotool.com/wp-content/uploads/2024/06/Text-to-Voice-16.png?w=381&ssl=1',
  },
  {
    name: 'per month',
    price: '₹ 499 INR',
    image: 'https://i0.wp.com/jupiterseotool.com/wp-content/uploads/2024/05/Talking-Network-11.png?w=381&ssl=1',
  },
  {
    name: 'per month',
    price: '₹ 599 INR',
    image: 'https://i0.wp.com/jupiterseotool.com/wp-content/uploads/2024/07/Talking-Network-20.png?w=381&ssl=1', // Replace with a valid image URL or keep as is for error handling
  },
  {
    name: 'Yearly',
    price: '₹ 199 INR',
    image: 'https://i0.wp.com/jupiterseotool.com/wp-content/uploads/2024/01/619c9f12e1402-4.png?w=381&ssl=1', // Replace with a valid image URL or keep as is for error handling
  },
  {
    name: 'yearly',
    price: '₹ 199 INR',
    image: 'https://i0.wp.com/jupiterseotool.com/wp-content/uploads/2024/01/Untitled-design-30.png?w=397&ssl=1', // Replace with a valid image URL or keep as is for error handling
  },
];

// ProductCard Component
function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden flex flex-col">
      {/* Product Image */}
      <div className="flex items-center justify-center h-40 p-4 mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="object-contain h-full w-full"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null; // Prevent infinite loop if placeholder fails
            e.target.src = placeholderImage;
          }}
        />
      </div>
      
      {/* Price */}
      <div className="text-center text-lg font-medium text-red-600 mb-2">
        {product.price}
      </div>
      
      {/* Product Name */}
      <h3 className="text-xl font-semibold mb-4 text-center">
        {product.name}
      </h3>
      
      {/* Spacer to push the button to the bottom */}
      <div className="flex-grow"></div>
      
      {/* Send Message Button */}
      <button className="w-full bg-blue-800 text-white py-2 rounded-b-lg hover:bg-blue-700 transition-colors duration-300">
  <a href="https://wa.me/8239555834?text=Hello%20I%20am%20interested%20in%20your%20product" target="_blank" rel="noopener noreferrer">
    Send Message
  </a>
</button>
    </div>
  );
}

// Products Component
function Products() {
  return (
    <section id="products" className="container mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Our Individual Products</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Products;






// import React from 'react';

// const products = [
//   {
//     name: 'Per Month',
//     price: '₹ 799 INR',
//     image:
//       'https://i0.wp.com/jupiterseotool.com/wp-content/uploads/2024/01/Grammarly-Group-Buy-Seo-300x70-1.webp?fit=300%2C70&ssl=1',
//     about: [
//       'Access to premium features',
//       'Unlimited revisions',
//       'Priority customer support',
//       'Customizable settings',
//       'Regular updates',
//     ],
//   },
//   {
//     name: 'TGrammerly',
//     price: '₹ 999 INR',
//     image:
//       'https://i0.wp.com/jupiterseotool.com/wp-content/uploads/2024/01/Grammarly-Group-Buy-Seo-300x70-1.webp?fit=300%2C70&ssl=1',
//     about: [
//       'Advanced grammar checks',
//       'Style suggestions',
//       'Plagiarism detection',
//       'Vocabulary enhancement',
//       'Tone adjustments',
//     ],
//   },
//   // ... add other products as needed
// ];

// function Products() {
//   return (
//     <section id="products" className="container mx-auto py-20 px-4">
//       <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
//         {products.map((product, index) => (
//           <div
//             key={index}
//             className="group relative bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden"
//           >
//             {/* Card Content */}
//             <div className="p-6 transition-opacity duration-300 group-hover:opacity-0 group-hover:invisible">
//               {/* Product Image */}
//               <div className="flex items-center justify-center mb-4">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="object-contain h-16"
//                 />
//               </div>
//               {/* Price */}
//               <div className="text-center text-lg font-medium text-red-600 mb-0">
//                 {product.price}
//               </div>
//               {/* Product Name */}
//               <h3 className="text-xl font-semibold mb-4 text-center">
//                 {product.name}
//               </h3>
//               {/* Send Message Button */}
//               <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 mt-4">
//                 Send Message
//               </button>
//             </div>

//             {/* About Section */}
//             <div className="opacity-0 invisible absolute inset-0 bg-blue-600 p-6 flex flex-col justify-center items-center text-center transition-opacity duration-300 group-hover:opacity-100 group-hover:visible">
//               <h3 className="text-2xl font-semibold mb-4 text-white">
//                 About {product.name}
//               </h3>
//               <ul className="list-disc list-inside text-left text-white space-y-2">
//                 {product.about.map((point, idx) => (
//                   <li key={idx}>{point}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Products;
