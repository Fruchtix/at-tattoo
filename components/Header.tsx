import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  function handleMenuClick() {
    setMenuOpen(isOpen => !isOpen);
  }

  return (
    <div className="flex justify-between items-center sticky top-0 bg-white">
      <div className="w-1/3 relative m-2 z-20 sm:w-1/12">
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
          className="relative w-8 h-5 mr-6 sm:hidden z-20"
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

        {/* mobile menu background */}
        <div
          className={`fixed top-0 left-0 h-screen w-screen bg-primary rounded-3xl transform translate-y-full scale-0 invisible sm:hidden ${
            menuOpen ? 'animate-floatUp' : 'animate-floatDown'
          }`}
        ></div>

        <ul
          id="menu"
          className={`absolute flex flex-col h-screen w-full justify-center items-center top-0 left-0 gap-6 mr-6 z-10 opacity-0 transition-opacity duration-200 sm:w-auto sm:h-auto sm:flex-row sm:static sm:opacity-100 ${
            menuOpen ? 'opacity-100 delay-500' : 'delay-75'
          }`}
        >
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Tattoos</li>
        </ul>
      </nav>
    </div>
  );
}
