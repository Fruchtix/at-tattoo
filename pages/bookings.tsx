import Footer from '../components/Footer';
import Header from '../components/Header';
import BookingInformation from '../components/BookingInformation';
import BookingContact from '../components/BookingContact';
import NewsletterSignUp from '../components/NewsletterSignUp';
import bookingsJson from '../fixtures/bookings.json';
import Head from 'next/head';
import { useEffect } from 'react';

export default function Bookings() {
  const currentDate = new Date();
  const openingDate = new Date(bookingsJson.open);
  const closingDate = new Date(bookingsJson.close);
  const bookingsOpen = currentDate > openingDate && currentDate < closingDate;

  useEffect(() => {
    applyScrollMarginToAnchors();
  }, []);

  function applyScrollMarginToAnchors() {
    const anchors = document.querySelectorAll<HTMLElement>('[data-anchor-link]');
    const headerHeight = document.getElementById('header');

    anchors.forEach(anchor => {
      anchor.style.scrollMarginTop = `${headerHeight.offsetHeight + 50}px`;
    });
  }

  return (
    <div>
      <Head>
        <title>Fineline Tattoo Artist - Tattoo by Amy - Bookings</title>
        <meta
          name="description"
          content="Fineline Tattoo Studio Wuppertal - Amelie Göbel - Bookings"
        />
      </Head>

      <Header />
      <BookingInformation />
      {bookingsOpen ? <BookingContact /> : <NewsletterSignUp />}
      <Footer />
    </div>
  );
}
