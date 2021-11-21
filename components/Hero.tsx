import Link from 'next/link';
import Image from 'next/image';
import amelieGoebel from '../public/images/amelie-goebel.png';

export default function Hero() {
  return (
    <div className="flex flex-col h-90vh">
      <div className="mx-5 mt-8 flex flex-col justify-center items-center text-center">
        <h2 className="font-medium text-gray text-base tracking-widest uppercase">
          Tattoo by amy
        </h2>

        <h1 className="font-semibold text-4xl my-3">
          Fineline Tattoo
          <br /> Artist
        </h1>

        <div className="my-8">
          <Link href="/#bookings">
            <a className="bg-secondary px-6 py-4 rounded uppercase">Book now</a>
          </Link>
        </div>
      </div>

      <div className="">
        <Image
          src={amelieGoebel}
          alt="Amelie Goebel Fineline Tattoo Artist"
          width={436}
          height={436}
          layout="responsive"
          className="object-contain -z-1"
        />
      </div>
    </div>
  );
}
