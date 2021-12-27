import { useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import ShopPreview from '../components/ShopPreview';
import BookingPreview from '../components/BookingPreview';
import ParallaxNewsletter from '../components/ParallaxNewsletter';

export default function Home() {
  useEffect(() => {
    applyScrollMarginToAnchors();
  }, []);

  function applyScrollMarginToAnchors() {
    const anchors = document.querySelectorAll<HTMLElement>('[data-anchor-link]');
    const headerHeight = document.getElementById('header');

    anchors.forEach(anchor => {
      anchor.style.scrollMarginTop = `${headerHeight.offsetHeight}px`;
    });
  }

  return (
    <>
      <Head>
        <title>at Tattoo Homepage</title>
      </Head>

      <Header />
      <Hero />
      <About />
      <ShopPreview />
      <BookingPreview />
      <ParallaxNewsletter />

      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </>
  );
}
