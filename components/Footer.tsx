import Image from 'next/image';
import Link from 'next/link';
import instagram from '../public/svgs/instagram.svg';

export default function Footer() {
  return (
    <div className="bg-gray-light">
      <div className="px-5 md:px-0 mt-16 pt-16 md:max-w-screen-2xl md:mx-10 2xl:mx-auto md:mt-24 md:pt-24">
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left md:items-stretch">
          <div className="flex-shrink-0">
            <h3 className="font-semibold text-3xl lg:text-4xl tracking-wider mb-4">Kontakt</h3>
            <p className="leading-8 text-black-secondary text-lg">
              Amy Tattoos
              <br />
              Ludwigstr. 100
              <br />
              42105 Wuppertal
              <br />
            </p>
            <p className="leading-8 mt-8 text-black-secondary text-lg">
              kontakt@at-tattoo.com
              <br />
              <br />
            </p>
          </div>
          <div className="w-full md:w-8/12 my-8 md:my-0 relative">
            <iframe
              src="https://maps.google.com/maps?width=100%25&amp;height=100%&amp;hl=en&amp;q=Ludwigstr.%20100+(at-tattoo)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              loading="lazy"
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col md:flex-row text-center md:text-left md:items-center justify-between md:mt-16 md:pb-2">
          <a href="https://www.instagram.com/tattoo.by.amy/">
            <div className="my-4 text-black-secondary text-lg flex justify-center items-center">
              <Image src={instagram} alt="" />
              <span className="ml-4">tattoo.by.amy</span>
            </div>
          </a>
          <div className="text-black-secondary text-lg md:flex md:items-center">
            <Link href="/datenschutz" passHref>
              <a>{/* <div className="my-8 underline md:mr-5">Datenschutz</div> */}</a>
            </Link>
            <Link href="/impressum" passHref>
              <a>
                <div className="my-8 underline md:mr-5">Impressum</div>
              </a>
            </Link>
            <div className="my-4">© 2022 by Jan Füchtener</div>
          </div>
        </div>
      </div>
    </div>
  );
}
