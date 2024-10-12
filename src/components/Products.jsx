import React from 'react';

// Placeholder Image URL (You can replace this with any placeholder image you prefer)
const placeholderImage = 'https://via.placeholder.com/150';

// Product Data
const products = [
  {
    name: 'Per Month',//grammerly
    price: '₹ 129 INR',
    image: 'https://i0.wp.com/jupiterseotool.com/wp-content/uploads/2024/01/Grammarly-Group-Buy-Seo-300x70-1.webp?fit=300%2C70&ssl=1',
  },
  {
    name: 'Per Month',//chatgpt
    price: '₹ 299 INR',
    image: 'https://i0.wp.com/jupiterseotool.com/wp-content/uploads/2024/06/Text-to-Voice-16.png?w=381&ssl=1',
  },
  {
    name: 'per month',//freepik
    price: '₹ 249 INR',
    image: 'https://i0.wp.com/jupiterseotool.com/wp-content/uploads/2024/05/Talking-Network-11.png?w=381&ssl=1',
  },
  {
      name: 'Lifetime (On Personal Mail)',//drive
      price: '₹ 499 INR',
      image: 'https://logowik.com/content/uploads/images/996_google_drive.jpg', 
    },
  {
    name: 'per month',//ahref
    price: '₹ 449 INR',
    image: 'https://i0.wp.com/jupiterseotool.com/wp-content/uploads/2024/07/Talking-Network-20.png?w=381&ssl=1', 
  },
  {
      name: '6 Months (On Personal Mail)',//Linkedin
      price: '₹ 1399 INR',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/80/LinkedIn_Logo_2013.svg', 
    },
  {
    name: 'Yearly (Personal Mail)',//canva
    price: '₹ 199 INR',
    image: 'https://i0.wp.com/jupiterseotool.com/wp-content/uploads/2024/01/619c9f12e1402-4.png?w=381&ssl=1', 
  },
  {
    name: 'Per Month',//quill bot
    price: '₹ 129 INR',
    image: 'https://mma.prnewswire.com/media/2032096/QuillBot_logo_Logo.jpg?w=200', 
  },
  {
    name: 'Per Month',//leonardo ai
    price: '₹ 499 INR',
    image: 'https://www.bworldonline.com/wp-content/uploads/2024/07/Leonardo-AI-logo.jpg', 
  },
  {
    name: 'Per Month',//netflix
    price: '₹ 89 INR',
    image: 'https://store-images.s-microsoft.com/image/apps.56161.9007199266246365.1d5a6a53-3c49-4f80-95d7-78d76b0e05d0.a3e87fea-e03e-4c0a-8f26-9ecef205fa7b?h=307', 
  },
  {
    name: 'Per Month',//semrush
    price: '₹ 199 INR',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/5/304852598/CL/DY/FW/189067380/semrush-seo-marketing-500x500.png', 
  },
  {
    name: 'Per Month',//perpexxlity
    price: '₹ 249 INR',
    image: 'https://b3718828.smushcdn.com/3718828/wp-content/uploads/2024/03/Perplexity-AI.Blog_-2.jpg?lossy=2&strip=1&webp=1', 
  },
  {
    name: 'One Year (On Personal Mail)',//perpexlity
    price: '₹ 2999 INR',
    image: 'https://b3718828.smushcdn.com/3718828/wp-content/uploads/2024/03/Perplexity-AI.Blog_-2.jpg?lossy=2&strip=1&webp=1', 
  },
  {
    name: 'Lifetime(On Personal Mail)',//office
    price: '₹ 599 INR',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/8/RA/JO/AN/90848123/office-365-premium-software-500x500.png', 
  },
  {
    name: 'Per Month',//turnitin
    price: '₹ 199 INR',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Turnitin_logo_%282021%29.svg', 
  },
  {
    name: 'Per Month',//nord vpn
    price: '₹ 199 INR',
    image: 'https://apps.whmcs.com/security/nordvpn/logo.png', 
  },
  {
    name: 'Per Month',//coursera
    price: '₹ 249 INR',
    image: 'https://i.pcmag.com/imagery/reviews/06bnqFCCqMYNmhahHfpuUFs-13.fit_scale.size_1028x578.v1620226809.png', 
  },
  {
    name: 'One Year (On Personal Mail)',//coursera
    price: '₹ 999 INR',
    image: 'https://i.pcmag.com/imagery/reviews/06bnqFCCqMYNmhahHfpuUFs-13.fit_scale.size_1028x578.v1620226809.png', 
  },
  {
    name: 'Per Month',//envanto
    price: '₹ 249 INR',
    image: 'https://cabinetm-beta.s3.amazonaws.com/00000160-f64e-981b-451d-6eb4eed4181e.png', 
  },
  {
    name: 'Two Years',//figma
    price: '₹ 799 INR',
    image: 'https://cdn.worldvectorlogo.com/logos/figma-5.svg', 
  },
  {
    name: 'Per Month',//udemy
    price: '₹ 249 INR',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg', 
  },
  {
    name: 'Per Month',//amozon
    price: '₹ 89 INR',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg', 
  },
  {
    name: 'Per Month (On Personal Mail)',//adobe
    price: '₹ 549 INR',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png', 
  },
  {
    name: 'One Year (On Personal Mail)',//adobe
    price: '₹ 3999 INR',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png', 
  },
  {
    name: 'Per Month',//claude
    price: '₹ 299 INR',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Claude_AI_logo.png', 
  },
  {
    name: 'Per Month',//per month
    price: '₹ 249 INR',
    image: 'https://logowik.com/content/uploads/images/invideo12525.logowik.com.webp', 
  },
  {
    name: 'Per Month',//cap cut
    price: '₹ 199 INR',
    image: 'https://logos-world.net/wp-content/uploads/2024/01/CapCut-Logo.png', 
  },
  {
    name: 'Per Month',//abode atock
    price: '₹ 199 INR',
    image: 'https://www.seekpng.com/png/full/229-2292763_adobe-stock-adobe-stock-logo.png', 
  },
  {
    name: 'Per Month',//stuuter stock
    price: '₹ 199 INR',
    image: 'https://cdn.freebiesupply.com/logos/large/2x/shutterstock-logo-png-transparent.png', 
  },
  {
    name: 'Per Month',//story block
    price: '₹ 199 INR',
    image: 'https://logowik.com/content/uploads/images/storyblocks116.logowik.com.webp', 
  },
  {
    name: 'Per Month',//heluim qo
    price: '₹ 249 INR',
    image: 'https://marketplace.walmart.com/wp-content/uploads/2021/10/helium10-logo.png', 
  },
  {
    name: 'Per Month',//you.com
    price: '₹ 149 INR',
    image: 'https://logowik.com/content/uploads/images/youcom-new-20242443.logowik.com.webp', 
  },
  {
      name: 'Per Month',//skill share
      price: '₹ 199 INR',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Skillshare_logo_2020.svg', 
    },
  // {
  //   name: 'Per Month',//sppechify
  //   price: '₹ 199 INR',
  //   image: '', 
  // },
  // {
  //   name: 'Per Month',//
  //   price: '₹ 199 INR',
  //   image: '', 
  // },
  // {
  //   name: 'Per Month',//
  //   price: '₹ 199 INR',
  //   image: '', 
  // },


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
      <button 
  onClick={() => window.open("https://wa.me/8239555834?text=Hello%20I%20am%20interested%20in%20your%20product", "_blank", "noopener,noreferrer")}
  className="w-full bg-blue-800 text-white py-2 rounded-b-lg hover:bg-black transition-colors duration-300"
>
  Buy Now
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
