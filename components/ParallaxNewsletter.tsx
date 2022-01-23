import Image from 'next/image';
import parallaxImage from '../public/images/parallax.png';
import NewsletterModal from './NewsletterModal';
import { useState } from 'react';

export default function ParallaxNewsletter() {
  const [modalOpen, setModalOpen] = useState(false);

  function openNewsletterModal() {
    setModalOpen(true);
  }

  return (
    <div className="relative">
      <div className="py-12 flex items-center text-center justify-between text-white mx-5 text-lg font-semibold flex-col md:flex-row md:max-w-screen-2xl md:mx-10 2xl:mx-auto md:py-16">
        <div className="absolute top-0 left-0 right-0 bottom-0 -z-1">
          <Image src={parallaxImage} alt="" layout="fill" objectFit="cover" />
        </div>
        <h3 className="font-semibold text-3xl sm:text-4xl tracking-wider md:text-left md:w-7/12">
          Du willst die Bookings nicht <br /> verpassen?
        </h3>
        <div
          className="px-4 py-2 bg-primary rounded mt-6 cursor-pointer"
          onClick={openNewsletterModal}
        >
          <span className="text-black text-sm tracking-wider sm:text-lg">
            Jetzt Newsletter erhalten
          </span>
        </div>
      </div>

      {modalOpen && <NewsletterModal closeModal={() => setModalOpen(false)} />}
    </div>
  );
}
