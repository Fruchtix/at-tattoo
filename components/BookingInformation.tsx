import Image from 'next/image';
import bookingsImage from '../public/images/bookings.png';

export default function BookingInformation({ bookingsOpen }) {
  return (
    <div className="px-5 mt-0 flex flex-col-reverse md:items-center md:flex-row md:max-w-screen-2xl md:mx-10 2xl:mx-auto overflow-hidden">
      <div className="-translate-y-20 -mb-20 z-10 md:mb-0 md:w-screen/2 md:translate-y-0 md:mt-40 md:mr-16">
        <h3 className="text-gray tracking-wider">Amy Tattoos</h3>
        <h2 className="font-semibold text-4xl sm:text-5xl lg:text-6xl tracking-wider">Bookings</h2>

        {bookingsOpen ? (
          <p className="text-gray my-5 text-lg">
            Juhu, ich nehme Termine an! Sende mir gerne eine Anfrage mit deinem Traummotiv. Solltest
            du ein Wanna do von mir wollen, schreibe es gerne in die Textbox unten und füge das
            entsprechende Bild hinzu. Ich schaue alle Anfragen in den nächsten Wochen durch. ‬{' '}
            <br />
            <br />
            Wenn mir deine Idee gut gefällt, bekommst du eine E-Mail mit weiteren Infos und einem
            Terminvorschlag. Schreibe mir am besten irgendwo in die Anfrage noch deine Möglichen
            Zeiten. Ich freue mich auf dich!
          </p>
        ) : (
          <p className="text-gray my-5 text-lg">
            Tut mir leid, zurzeit nehme ich leider keine Terminanfragen an. Sende mir daher bitte
            keine Motivwünsche oder Preisanfragen. Solltest du anderweitige Fragen haben oder
            möchtest du zum Nachstechen kommen, sende mir gerne eine E-Mail. ‬ <br />
            <br />
            Für alle weiteren Infos, schaue gerne auf meinem Instagram Account vorbei. Dort teile
            ich aktuelle Neuigkeiten und Aktionen wie zum Beispiel Gewinnspiele. Bis zu den nächsten
            Bookings, ich freue mich auf dich!
          </p>
        )}
      </div>

      <div className="translate-x-1/2 md:translate-x-0 md:w-screen/2 md:mt-16">
        <Image
          src={bookingsImage}
          alt=""
          width={1435}
          height={1321}
          layout="responsive"
          priority={true}
        />
      </div>
    </div>
  );
}
