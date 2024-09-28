import React from 'react';

function Header() {
  return (
    <header className="bg-blue-800 text-white p-4 fixed w-full z-10 top-0">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#hero" className="hover:underline">Nexus Tools</a>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#products" className="hover:underline">
              Products
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:underline">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
