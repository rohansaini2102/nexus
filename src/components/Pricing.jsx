// src/components/Pricing.jsx

import React from 'react';
import { FaCheck } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Pricing() {
  const plans = [
    {
      name: 'Writer Plan ✍️',
      price: '₹799/month',
      discount: '60% Off',
      features: [
        'ChatGPT Plus 💬',
        'Grammarly ✏️',
        'QuillBot 🖋️',
        'Word AI 📄',
        'Writesonic 📝',
        'WriteHuman 🗒️',
        'Hixai 🧠',
        'StealthWriter 🕵️‍♂️',
        'BypassGPT 🔄',
        'Turnitin 📚',
        'You.com 🔍',
        
      ],
      message: 'Hello, I am interested in the Writer Plan.',
    },
    {
      name: 'Designer Plan 🎨',
      price: '₹999/month',
      discount: 'Limited Time Offer',
      features: [
        'Leonardo.ai – Unlimited Plan 🧠',
        'InVideo AI 🎥',
        'Envato 🛍️',
        'PicMonkey 📸',
        'DesignAI 🎨',
        'Shutterstock 📷',
        'Adobe Stock 🖼️',
        'Canva 🖌️',
        'Vecteezy 🖍️',
        'Epidemic Sounds 🎵',
       
      ],
      message: 'Hello, I am interested in the Designer Plan.',
      isFeatured: true, // Marking as featured plan
    },
    {
      name: 'Agency Plan 🚀',
      price: '₹1,299/month',
      discount: 'Best Value',
      features: [
        // AI & Writing Tools
        'AI & Writing',
        'ChatGPT Plus 💬',
        'Leonardo.ai 🧠',
        'You.com 🔍',
        'Grammarly ✏️',
        'QuillBot 🖋️',
        'WriteHuman 🗒️',
        'Hixai 🧠',
        'BypassGPT 🔄',
        'Word AI 📄',
        'Writesonic 📝',
        'Wordtune',
        // Design & Creative Tools
        'Design & Creative',
        'InVideo 🎥',
        'Storyblocks 📽️',
        'Envato 🛍️',
        'PicMonkey 📸',
        'DesignAI 🎨',
        'Renderforest 🌐',
        'Canva 🖌️',
        'Vecteezy 🖍️',
        'Adobe Stock 🖼️',
        'CapCut ✂️',
        'Placeit by Envato 📱',
        // SEO & Marketing Tools
        'SEO & Marketing',
        'SEMrush 📈',
        'Moz Pro 🔧',
        'Ubersuggest 🌟',
        'KW Finder 🔍',
        'SEO Optimizer ⚙️',
        'Helium 10 🛠️',
        'Answer the Public ❓',
        'Sell The Trend 📊',
        'VidIQ 📹',
        // Education & Learning Tools
        'Education & Learning',
        'Udemy 🎓',
        'Coursera 📚',
        'LinkedIn Learning 🧑‍💼',
        'Skillshare 🖥️',
        // Other Essentials
        'Other Essentials',
        'Turnitin 📚',
        'Epidemic Sounds 🎵',
        
      ],
      message: 'Hello, I am interested in the Agency Plan.',
    },
  ];

  // Slider settings for mobile view
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide arrows on mobile
  };

  return (
    <section id="pricing" className="relative py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 animate-fade-in">
          Pricing Plans
        </h2>

        {/* Desktop View */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-8 bg-glass backdrop-filter backdrop-blur rounded-2xl shadow-glass animate-fade-in transition-transform transform hover:scale-105 ${
                plan.isFeatured
                  ? 'border-4 border-blue-800'
                  : 'border border-glass'
              }`}
            >
              {/* Discount Badge as Circle */}
              {plan.discount && (
                <div className="absolute -top-4 right-4 bg-blue-800 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg">
                  <span className="text-sm font-bold text-center px-2">
                    {plan.discount}
                  </span>
                </div>
              )}

              {/* Special Offer Badge for Featured Plan */}
              {plan.isFeatured && (
                <div className="absolute top-4 left-4 bg-red-800 text-white px-4 py-1 rounded-md shadow-lg">
                  Special Offer
                </div>
              )}

              <div className="mb-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {plan.name}
                </h3>
                <p className="text-4xl font-bold text-blue-800">{plan.price}</p>
              </div>

              <hr className="border-t border-gray-300 my-6" /> {/* Line separator */}

              {/* Features List with Scroll */}
              <div className="mb-6 flex-grow overflow-y-auto max-h-96">
                <ul className="text-gray-700">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="mb-2 flex items-start">
                      <FaCheck className="text-blue-800 mr-2 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() =>
                  window.open(
                    `https://wa.me/8239555834?text=${encodeURIComponent(
                      plan.message
                    )}`,
                    '_blank',
                    'noopener,noreferrer'
                  )
                }
                className="w-full py-3 bg-blue-800 text-white font-semibold rounded-xl shadow-md hover:bg-black transition-colors duration-300 mt-auto"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="lg:hidden">
          {plans.slice(0, 1).map((plan, index) => (
            <div key={index} className="px-4 mb-8">
              <div
                className={`relative flex flex-col p-8 bg-glass backdrop-filter backdrop-blur rounded-2xl shadow-glass animate-fade-in transition-transform transform hover:scale-105 ${
                  plan.isFeatured
                    ? 'border-4 border-blue-800'
                    : 'border border-glass'
                }`}
              >
                {/* Discount Badge as Circle */}
                {plan.discount && (
                  <div className="absolute -top-4 right-4 bg-blue-800 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg">
                    <span className="text-sm font-bold text-center px-2">
                      {plan.discount}
                    </span>
                  </div>
                )}

                {/* Special Offer Badge for Featured Plan */}
                {plan.isFeatured && (
                  <div className="absolute top-4 left-4 bg-yellow-500 text-white px-4 py-1 rounded-md shadow-lg">
                    Special Offer
                  </div>
                )}

                <div className="mb-6 text-center">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-4xl font-bold text-blue-800">{plan.price}</p>
                </div>

                <hr className="border-t border-gray-300 my-6" /> {/* Line separator */}

                {/* Features List with Scroll */}
                <div className="mb-6 flex-grow overflow-y-auto max-h-80">
                  <ul className="text-gray-700">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="mb-2 flex items-start">
                        <FaCheck className="text-blue-800 mr-2 mt-1" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() =>
                    window.open(
                      `https://wa.me/8239555834?text=${encodeURIComponent(
                        plan.message
                      )}`,
                      '_blank',
                      'noopener,noreferrer'
                    )
                  }
                  className="w-full py-3 bg-blue-800 text-white font-semibold rounded-xl shadow-md hover:bg-black transition-colors duration-300 mt-auto"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
          <Slider {...sliderSettings}>
            {plans.slice(1).map((plan, index) => (
              <div key={index} className="px-4">
                <div
                  className={`relative flex flex-col p-8 bg-glass backdrop-filter backdrop-blur rounded-2xl shadow-glass animate-fade-in transition-transform transform hover:scale-105 ${
                    plan.isFeatured
                      ? 'border-4 border-blue-800'
                      : 'border border-glass'
                  }`}
                >
                  {/* Discount Badge as Circle */}
                  {plan.discount && (
                    <div className="absolute -top-4 right-4 bg-blue-800 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg">
                      <span className="text-sm font-bold text-center px-2">
                        {plan.discount}
                      </span>
                    </div>
                  )}

                  {/* Special Offer Badge for Featured Plan */}
                  {plan.isFeatured && (
                    <div className="absolute top-4 left-4 bg-yellow-500 text-white px-4 py-1 rounded-md shadow-lg">
                      Special Offer
                    </div>
                  )}

                  <div className="mb-6 text-center">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-4xl font-bold text-blue-800">{plan.price}</p>
                  </div>

                  <hr className="border-t border-gray-300 my-6" /> {/* Line separator */}

                  {/* Features List with Scroll */}
                  <div className="mb-6 flex-grow overflow-y-auto max-h-80">
                    <ul className="text-gray-700">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="mb-2 flex items-start">
                          <FaCheck className="text-blue-800 mr-2 mt-1" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() =>
                      window.open(
                        `https://wa.me/8239555834?text=${encodeURIComponent(
                          plan.message
                        )}`,
                        '_blank',
                        'noopener,noreferrer'
                      )
                    }
                    className="w-full py-3 bg-blue-800 text-white font-semibold rounded-xl shadow-md hover:bg-black transition-colors duration-300 mt-auto"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
