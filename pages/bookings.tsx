import Footer from '../components/Footer';
import Header from '../components/Header';
import BookingInformation from '../components/BookingInformation';
import BookingContact from '../components/BookingContact';

export default function bookings() {
  return (
    <div>
      <Header />
      <BookingInformation />
      <BookingContact />
      <Footer />
    </div>
  );
}
