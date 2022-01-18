import Image from 'next/image';
import bookingsImage from '../public/images/bookings.png';

export default function BookingInformation() {
  return (
    <div className="px-5 mt-0 flex flex-col-reverse md:items-center md:flex-row md:max-w-screen-2xl md:mx-10 2xl:mx-auto overflow-hidden">
      <div className="-translate-y-20 -mb-20 z-10 md:mb-0 md:w-screen/2 md:translate-y-0 md:mt-40 md:mr-16">
        <h3 className="text-gray tracking-wider">Amy Tattoos</h3>
        <h2 className="font-semibold text-4xl sm:text-5xl lg:text-6xl tracking-wider">Bookings</h2>

        <p className="text-gray my-5 text-lg">
          Tut mir leid, zur Zeit nehme ich leider keine Terminanfragen an! 🤍 Bitte sende mir daher
          bis zu den nächsten Bookings keine Motivwünsche oder Preisanfragen. Das Kontaktformular
          ist ausschließlich gedacht für: Wannado-Anfragen, Nachstechanfragen, Fragen zu deinem
          bestehenden Tattoo und sonstige Anliegen. Sobald die bookings offen sind kannst du hier
          das formular ausfüllen. <br />
          <br />
          Das Kontaktformular ist ausschließlich gedacht für: Wannado-Anfragen, Nachstechanfragen,
          Fragen zu deinem bestehenden Tattoo und sonstige Anliegen. Sobald die bookings offen sind
          kannst du hier das formular ausfüllen.
        </p>
      </div>

      <div className="translate-x-1/2 md:translate-x-0 md:w-screen/2 md:mt-16">
        <Image src={bookingsImage} alt="" width={660} height={565} layout="responsive" />
      </div>
    </div>
  );
}
