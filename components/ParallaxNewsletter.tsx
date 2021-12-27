import Image from 'next/image';
import parallaxImage from '../public/images/parallax.png';

export default function ParallaxNewsletter() {
  return (
    <div className="relative">
      <Image src={parallaxImage} alt="" width={1436} height={551} layout="responsive" />

      <div className="absolute py-2 top-0 left-0 right-0 bottom-0 flex items-center text-center justify-between text-white mx-5 text-lg font-semibold flex-col md:flex-row">
        <h3>Du willst die Bookings nicht verpassen?</h3>
        <div>button</div>
      </div>
    </div>
  );
}
