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
  // logo unscharf
  // check out my und dann irgendeine linie
  // bilder austauschen
  // impressum
  // datenschutz
  // send form data via mail
  // option to disable bookings and the newsletter signup
  // alt text
  // header with seo
  // favicon
  // shop under construction image

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
      <Reviews />
      <Footer />
    </>
  );
}
