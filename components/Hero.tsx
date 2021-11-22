import Link from 'next/link';
import Image from 'next/image';
import amelieGoebel from '../public/images/amelie-goebel.png';

export default function Hero() {
  return (
    <div className="flex flex-col h-92vh md:flex-row md:justify-center 2xl:justify-between md:max-w-screen-xl md:mx-auto md:items-center">
      <div className="mx-5 mt-12 flex flex-col justify-center items-center text-center md:mt-0">
        <h2 className="font-medium text-gray text-base uppercase md:text-xl tracking-wider">
          Tattoo by amy
        </h2>

        <h1 className="font-semibold text-4xl my-3 sm:text-5xl lg:text-6xl tracking-wider whitespace-nowrap">
          Fineline Tattoo
          <br /> Artist
        </h1>

        <div className="my-7">
          <Link href="/#bookings">
            <a className="bg-secondary px-6 py-4 rounded uppercase tracking-wide">
              Book now
            </a>
          </Link>
        </div>
      </div>

      <div className="mt-6 h-full md:w-2/4 md:flex md:flex-col md:justify-center md:m-0 sm:mx-10">
        <Image
          src={amelieGoebel}
          alt="Amelie Goebel Fineline Tattoo Artist"
          width={436}
          height={436}
          layout="responsive"
          className="object-contain -z-1 md:z-0"
        />
      </div>

      <div className="hidden translate-y-1/2 mr-6 md:flex absolute transform rotate-180 bottom-0 right-0 text-vertical-rl flex-row-reverse items-center">
        <span className="mt-3 text-gray tracking-widest uppercase">scroll</span>
        <div className="w-0.5 h-48 bg-black"></div>
      </div>
    </div>
  );
}
