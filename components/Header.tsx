import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuClick() {
    setMenuOpen(isOpen => !isOpen);
  }

  return (
    <div className="flex justify-between items-center sticky top-0 bg-white">
      <div className="w-1/3 relative m-2 sm:w-1/12">
        <Image
          src="/../public/svgs/at-tattoo-logo.svg"
          alt="at-tattoo logo"
          layout="responsive"
          width={400}
          height={200}
        />
      </div>

      <nav role="navigation">
        <button
          className={`relative w-8 h-5 mr-6 sm:hidden ${
            menuOpen ? 'bg-red' : ''
          }`}
          aria-expanded={menuOpen ? 'true' : 'false'}
          aria-controls="menu"
          aria-label="Menu"
          onClick={handleMenuClick}
        >
          <span
            className={`block absolute top-0 w-full rounded-sm transform origin-center bg-black h-1 transition duration-300 ease-in-out ${
              menuOpen ? 'rotate-45 translate-y-2 scale-105' : ''
            }`}
          ></span>
          <span
            className={`block absolute top-2 w-full rounded-sm transform bg-black h-1 transition duration-300 ease-in-out ${
              menuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`block absolute top-4 w-full rounded-sm transform origin-center bg-black h-1 transition duration-300 ease-in-out ${
              menuOpen ? '-rotate-45 -translate-y-2 scale-105' : ''
            }`}
          ></span>
        </button>

        <ul id="menu" className="gap-6 mr-6 hidden sm:flex">
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Tattoos</li>
        </ul>
      </nav>
    </div>
  );
}
