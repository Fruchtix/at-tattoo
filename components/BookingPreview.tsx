import { useState } from 'react';
import Image from 'next/image';
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
      className="md:flex md:justify-between md:max-w-screen-2xl 2xl:mx-auto relative"
    >
      <div className="mx-5 pt-64 md:pt-0 flex-grow mr-32">
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
            desc="Füller das Buchenungsformular of letters, as opposed to using Content here, content here. therefore you must there go and."
          />
          <ToggleBox
            isOpen={toggleBoxTwoOpen}
            id={1}
            handleToggleboxClick={handleToggleboxClick}
            title="2. Ich gehe deine Anfrage durch"
            desc="content"
          />
          <ToggleBox
            isOpen={toggleBoxThreeOpen}
            id={2}
            handleToggleboxClick={handleToggleboxClick}
            title="3. Wir finden einen passenden Termin"
            desc="Füller das Buchenungsformular of letters, as opposed to using Content here, content here.
        therefore you must there go and."
          />
        </div>
      </div>

      <div className="absolute top-0 right-0 md:static -z-1">
        <Image src={bookingsBlob} alt="" />
      </div>
    </section>
  );
}
