import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ToggleBox from './ToggleBox';
import bookingsBlob from '../public/svgs/bookings-blob.svg';

export default function BookingPreview() {
  const [toggleBoxOneOpen, setToggleBoxOneOpen] = useState(true);
  const [toggleBoxTwoOpen, setToggleBoxTwoOpen] = useState(false);
  const [toggleBoxThreeOpen, setToggleBoxThreeOpen] = useState(false);

  function handleToggleboxClick(id) {
    switch (id) {
      case 0:
        setToggleBoxOneOpen(isOpen => !isOpen);
        setToggleBoxTwoOpen(false);
        setToggleBoxThreeOpen(false);
        break;
      case 1:
        setToggleBoxOneOpen(false);
        setToggleBoxTwoOpen(isOpen => !isOpen);
        setToggleBoxThreeOpen(false);
        break;
      case 2:
        setToggleBoxOneOpen(false);
        setToggleBoxTwoOpen(false);
        setToggleBoxThreeOpen(isOpen => !isOpen);
        break;
    }
  }

  return (
    <section
      id="bookings"
      data-anchor-link
      className="md:flex mb-20 md:justify-between md:max-w-screen-2xl px-5 md:ml-10 md:px-0 2xl:mx-auto relative"
    >
      <div className="md:pt-0 flex-grow md:w-8/12">
        <div className="mb-4">
          <h3 className="text-gray tracking-wider">3 Schritte</h3>
          <h2 className="font-semibold text-4xl sm:text-5xl lg:text-6xl tracking-wider">
            Termin buchen
          </h2>
        </div>

        <div>
          <ToggleBox
            isOpen={toggleBoxOneOpen}
            id={0}
            handleToggleboxClick={handleToggleboxClick}
            title="1. Buchungsformular ausfüllen"
          >
            Erst einmal vielen Dank für dein Interesse, ein Tattoo von mir zu bekommen. Fülle mein{' '}
            <Link href="/bookings">
              <a className="font-semibold underline">Buchungsformular</a>
            </Link>{' '}
            aus, damit ich deine Anfrage entsprechend bearbeiten kann. Dabei wäre es gut, wenn du
            mir deine Tattoo-Idee so weit schilderst, dass ich einen ersten Eindruck davon bekomme,
            was du dir vorstellst. Kleine Details oder Änderungen können wir noch vor Ort
            besprechen.
          </ToggleBox>
          <ToggleBox
            isOpen={toggleBoxTwoOpen}
            id={1}
            handleToggleboxClick={handleToggleboxClick}
            title="2. Ich gehe deine Anfrage durch"
          >
            Nachdem du deine Anfrage verschickt hast, kannst du dich erstmal zurücklehnen. Ich gehe
            in Ruhe alle Anfrage durch und schaue, welche am besten zu meinem Stil passen. Das kann
            ein paar Tage dauern.
          </ToggleBox>
          <ToggleBox
            isOpen={toggleBoxThreeOpen}
            id={2}
            handleToggleboxClick={handleToggleboxClick}
            title="3. Wir finden einen passenden Termin"
          >
            Wenn ich mir deine Tattoo Idee gut vorstellen kann, erhälst du eine Email mit allen
            weiteren Details wie Adresse, Kostenschätzung und einen Terminvorschlag. Keine Angst,
            sollte dir der Termin nicht passen, finden wir auch einen anderen!
          </ToggleBox>
        </div>
      </div>

      {/* <div className="absolute top-0 right-0 md:static -z-1 md:w-4/12 w-screen">
        <Image src={bookingsBlob} alt="" width={1438} height={2326} layout="responsive" />
      </div> */}
    </section>
  );
}
