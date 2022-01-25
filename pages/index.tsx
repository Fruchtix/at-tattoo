import { useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import ShopPreview from '../components/ShopPreview';
import BookingPreview from '../components/BookingPreview';
import ParallaxNewsletter from '../components/ParallaxNewsletter';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    applyScrollMarginToAnchors();
  }, []);

  function applyScrollMarginToAnchors() {
    const anchors = document.querySelectorAll<HTMLElement>('[data-anchor-link]');
    const headerHeight = document.getElementById('header');

    anchors.forEach(anchor => {
      anchor.style.scrollMarginTop = `${headerHeight.offsetHeight + 25}px`;
    });
  }

  // Todo:
  // send form data via mail
  // newsletter signup
  // Hosting
  // impressum
  // datenschutz

  // logo unscharf
  // bilder austauschen
  // alt text
  // favicon

  return (
    <>
      <Head>
        <title>Fineline Tattoo Artist - Tattoo by Amy</title>
        <meta name="description" content="Fineline Tattoo Studio Wuppertal - Amelie Göbel" />
      </Head>

      <Header />
      <Hero />
      <About />
      <ShopPreview />
      <BookingPreview />
      <ParallaxNewsletter />
      <Reviews />
      <Footer />
    </>
  );
}
