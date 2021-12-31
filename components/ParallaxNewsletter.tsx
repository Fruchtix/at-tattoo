import Image from 'next/image';
import parallaxImage from '../public/images/parallax.png';

export default function ParallaxNewsletter() {
  return (
    <div className="relative">
      <Image src={parallaxImage} alt="" height={1436} layout="responsive" />

      <div className="absolute py-12 top-0 left-0 right-0 bottom-0 flex items-center text-center justify-between text-white mx-5 text-lg font-semibold flex-col md:flex-row md:max-w-screen-2xl md:mx-10 2xl:mx-auto">
        <h3 className="font-semibold text-3xl sm:text-4xl tracking-wider md:text-left md:w-7/12">
          Du willst die Bookings nicht verpassen?
        </h3>
        <div className="p-2 bg-primary rounded mt-6 md:mr-40">
          <span className="text-black text-sm tracking-wider">Jetzt Newsletter erhalten</span>
        </div>
      </div>
    </div>
  );
}
