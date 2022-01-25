import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import underConstruction from '../../public/svgs/under-construction.svg';
import Head from 'next/head';

export default function Shop() {
  return (
    <>
      <Head>
        <title>Fineline Tattoo Artist - Tattoo by Amy - Shop</title>
        <meta
          name="description"
          content="Fineline Tattoo Studio Wuppertal - Amelie Göbel - Shop - currently under construction"
        />
      </Head>

      <Header />

      <div className="flex flex-col md:min-h-92vh md:flex-row md:justify-center 2xl:justify-between md:max-w-screen-xl md:mx-auto md:items-center">
        <div className="mx-5 mt-12 flex flex-col justify-center items-center text-center md:mt-0">
          <h2 className="font-medium text-gray text-base uppercase md:text-xl tracking-wider">
            Tattoo by amy
          </h2>

          <h1 className="font-semibold text-4xl my-3 sm:text-5xl lg:text-6xl tracking-wider">
            Shop is comming
            <br /> soon...
          </h1>
        </div>

        <div className="my-24 mx-5 md:mx-0 h-full md:w-2/4 md:flex md:flex-col md:justify-center md:m-0 sm:mx-10">
          <Image
            src={underConstruction}
            alt=""
            layout="responsive"
            className="object-contain -z-1 md:z-0"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
