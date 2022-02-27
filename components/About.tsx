import Image from 'next/image';
import studio from '../public/images/at-tattoo-studio.png';

export default function About() {
  return (
    <section
      id="about"
      data-anchor-link
      className="mx-5 mt-0 md:mt-40 md:flex md:flex-row-reverse md:max-w-screen-2xl md:mx-10 2xl:mx-auto"
    >
      <div className="md:mt-10 xl:mt-20 md:w-screen/2 md:pl-10 xl:pl-16">
        <h3 className="text-gray tracking-wider">Fineline Artist</h3>
        <h2 className="font-semibold text-4xl sm:text-5xl lg:text-6xl tracking-wider">About me</h2>

        <p className="text-gray my-5 text-lg">
          Willkommen auf meiner Website. Ich bin Amelie, auch bekannt als Amy und habe es schon als
          Kind geliebt zu zeichnen. Meine Kreativität kann ich jetzt nicht nur in meinem
          Kommunikationsdesign Studium, sondern auch in meinem Job als Tätowiererin ausleben. Schon
          mit 17 habe ich meine eigene Tattoo Maschine besessen und konnte schließlich mein Hobby
          zum Beruf machen. Spezialisiert habe ich mich auf dünne Linien und dezente Schattierungen,
          wobei ich am liebsten florale, abstrakte oder tierische Motive umsetze.
        </p>
      </div>

      <div className="md:flex-grow md:w-screen/2">
        <Image
          src={studio}
          alt="amy tattoos studio"
          width={360}
          height={202}
          layout="responsive"
          placeholder="blur"
        />
      </div>
    </section>
  );
}
