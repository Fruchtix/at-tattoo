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
      className="md:flex mb-16 md:justify-between md:max-w-screen-2xl px-5 md:mx-10 md:px-0 2xl:mx-auto relative md:mb-36"
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
            Vielen Dank für dein Interesse ein Tattoo von mir zu bekommen. Fülle zuerst mein{' '}
            <Link href="/bookings">
              <a className="font-semibold underline">Buchungsformular</a>
            </Link>{' '}
            aus und schildere mir dabei deine Tattoo-Idee, so dass ich einen Eindruck von deinem
            Wunschmotiv bekomme. Kleine Details oder Abänderung besprechen wir dann vor Ort.‬
          </ToggleBox>
          <ToggleBox
            isOpen={toggleBoxTwoOpen}
            id={1}
            handleToggleboxClick={handleToggleboxClick}
            title="2. Ich gehe deine Anfrage durch"
          >
            Jetzt kannst du dich erstmal zurücklehnen. Ich gehe alle Anfragen durch und entscheide
            was ich mir illustrativ vorstellen kann.
          </ToggleBox>
          <ToggleBox
            isOpen={toggleBoxThreeOpen}
            id={2}
            handleToggleboxClick={handleToggleboxClick}
            title="3. Wir finden einen passenden Termin"
          >
            Wenn ich mir deine Tattoo Idee gut vorstellen kann, bekommst du eine E-Mail mit einem
            Terminvorschlag von mir. Alle weiteren Details bequatschen wir dann.‬
          </ToggleBox>
        </div>
      </div>
    </section>
  );
}
