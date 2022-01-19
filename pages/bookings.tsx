import Footer from '../components/Footer';
import Header from '../components/Header';
import BookingInformation from '../components/BookingInformation';
import BookingContact from '../components/BookingContact';
import NewsletterSignUp from '../components/NewsletterSignUp';
import bookingsJson from '../fixtures/bookings.json';

export default function bookings() {
  const currentDate = new Date();
  const openingDate = new Date(bookingsJson.open);
  const closingDate = new Date(bookingsJson.close);
  const bookingsOpen = currentDate > openingDate && currentDate < closingDate;

  return (
    <div>
      <Header />
      <BookingInformation />
      {bookingsOpen ? <BookingContact /> : <NewsletterSignUp />}
      <Footer />
    </div>
  );
}
