import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/images/at-tattoo-logo.png';
import { useState, useEffect } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<null | boolean>(null);

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

  function handleMenuItemClick() {
    setMenuOpen(false);
  }

  return (
    <section
      id="header"
      className="flex justify-between items-center sticky top-0 md:h-8vh bg-white z-50"
    >
      <div className="w-1/3 relative m-3 md:m-2 md:ml-6 z-20 md:w-1/12 cursor-pointer">
        <Link href="/">
          <a>
            <Image
              src={logo}
              alt="at-tattoo logo"
              layout="responsive"
              width={648}
              height={185}
              quality={100}
              priority={true}
            />
          </a>
        </Link>
      </div>

      <nav role="navigation">
        <button
          className="relative w-8 h-5 mr-6 md:hidden z-20"
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
          className={`fixed top-0 left-0 z-10 h-screen w-screen bg-primary rounded-3xl transform translate-y-full scale-0 invisible md:hidden ${
            menuOpen ? 'animate-floatUp' : menuOpen === false && 'animate-floatDown'
          }`}
        ></div>

        <ul
          id="menu"
          className={`absolute h-92vh flex flex-col h-90vh w-full justify-center items-center top-0 left-0 gap-14 lg:gap-14 md:gap-10 mr-6 opacity-0 transition-opacity duration-200 md:w-auto md:h-auto md:flex-row md:static md:opacity-100 md:visible ${
            menuOpen ? 'opacity-100 delay-500 z-10 visible' : 'delay-0 invisible'
          }`}
        >
          <li>
            <Link href="/">
              <a
                className="relative font-medium tracking-widest text-3xl md:text-2xl md:font-normal"
                onClick={handleMenuItemClick}
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/shop">
              <a
                className="font-medium tracking-widest text-3xl md:text-2xl md:font-normal"
                onClick={handleMenuItemClick}
              >
                Shop
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#about">
              <a
                className="font-medium tracking-widest text-3xl md:text-2xl md:font-normal"
                onClick={handleMenuItemClick}
              >
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#gallery">
              <a
                className="font-medium tracking-widest text-3xl md:text-2xl md:font-normal"
                onClick={handleMenuItemClick}
              >
                Gallery
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
