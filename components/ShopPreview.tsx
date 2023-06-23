import Image from 'next/image';
import Link from 'next/link';
import shopImageOne from '../public/images/shop_product_1.png';
import shopImageTwo from '../public/images/shop_product_2.png';
import shopImageThree from '../public/images/shop_product_3.png';

export default function ShopPreview() {
  return (
    <section
      id="shop"
      data-anchor-link
      className="bg-gray-light px-5 md:px-0 my-16 py-16 md:my-36 md:py-36"
    >
      <div className="md:max-w-screen-2xl md:flex md:flex-row-reverse md:justify-between md:mx-10 2xl:mx-auto">
        <div className="flex flex-shrink-0 items-stretch relative md:flex-grow">
          <div className="rotate-180 text-vertical-rl font-semibold text-3xl mr-5 sm:text-5xl lg:text-6xl tracking-wider md:w-4/12 md:mr-0 md:self-start md:flex md:flex-col md:justify-center">
            <p className="">Check out</p>
            <div className="mr-2">
              <span className="h-16 mt-16 mb-3 md:h-52 inline-block border-black"></span>
              <span>my shop</span>
            </div>
          </div>

          <div className="flex-grow flex pb-5 md:pb-10">
            <div className="w-full -mr-12 z-10 self-end">
              <Image
                src={shopImageTwo}
                alt=""
                width={2633}
                height={3942}
                layout="responsive"
                placeholder="blur"
              />
            </div>
            <div className="w-full self-start pb-16 lg:pb-28">
              <Image
                src={shopImageThree}
                alt=""
                width={3999}
                height={6000}
                layout="responsive"
                placeholder="blur"
              />
            </div>
          </div>
          <Link href="https://shop.at-tattoo.com/" passHref>
            <div className="absolute bottom-0 cursor-pointer right-0 py-3 px-10 bg-white border-black border-2 z-20 sm:py-6 sm:px-32 md:bottom-5 transition-all before:absolute before:bg-black before:bottom-0 before:left-0 before:right-0 before:top-full before:-z-1 before:transition-all hover:before:top-0 hover:text-white">
              <a>
                <span className="text-xl font-medium sm:font-semibold sm:text-2xl">
                  Explore now
                </span>
              </a>
            </div>
          </Link>
        </div>

        <div className="mt-18 md:mt-0 md:w-3/12">
          <div className="relative">
            <Image
              src={shopImageOne}
              width={3072}
              height={4606}
              alt=""
              layout="responsive"
              placeholder="blur"
            />
          </div>
          <p className="relative pl-2 pr-28 text-lg font-medium md:pr-16 xl:pr-32 mt-10 text-black-secondary lg:text-lg before:bg-black before:w-px before:-top-0.5 before:left-0 before:-bottom-0.5 before:absolute">
            You can get all my tattoo designs also printed on tshirts and hoodys.
          </p>
        </div>
      </div>
    </section>
  );
}
