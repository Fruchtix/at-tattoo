import Image from 'next/image';
import shopImageOne from '../public/images/shop_product_1.png';
import shopImageTwo from '../public/images/shop_product_2.png';
import shopImageThree from '../public/images/shop_product_3.png';

export default function ShopPreview() {
  return (
    <div className="bg-gray-light px-5 mt-10 py-10">
      <div className="flex flex-shrink-0 items-start">
        <div className="rotate-180 text-vertical-rl">
          <p>Check out</p>
          <div>
            <span>x </span>
            <span>my shop</span>
          </div>
        </div>

        <div className="flex-grow">
          <Image src={shopImageTwo} alt="" width={144} height={180} layout="responsive" />
          <Image src={shopImageThree} alt="" width={144} height={178} layout="responsive" />
        </div>
      </div>

      <div className="mt-16">
        <div>
          <Image src={shopImageOne} alt="" width={300} height={485} layout="responsive" />
        </div>
        <p className="relative pl-2 pr-28 mt-10 text-black-secondary before:bg-black before:w-px before:-top-0.5 before:left-0 before:-bottom-0.5 before:absolute">
          You can get all my tattoo designs also printed on tshirts and hoodys.
        </p>
      </div>
    </div>
  );
}
