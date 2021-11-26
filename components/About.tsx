import Image from 'next/image';
import studio from '../public/images/at-tattoo-studio.png';

export default function About() {
  return (
    <div
      id="about"
      data-anchor-link
      className="mx-5 mt-0 md:mt-40 md:flex md:flex-row-reverse md:max-w-screen-2xl md:mx-10 2xl:mx-auto"
    >
      <div className="md:mt-10 xl:mt-20 md:w-screen/2 md:pl-10 xl:pl-16">
        <h3 className="text-gray tracking-wider">Fineline Artist</h3>
        <h2 className="font-semibold text-4xl sm:text-5xl lg:text-6xl tracking-wider">About me</h2>

        <p className="text-gray my-5 text-lg">
          It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal. Distribution of letters, as opposed to using Content here, content
          here, making it look like readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search
        </p>
      </div>

      <div className="md:flex-grow md:w-screen/2">
        <Image src={studio} alt="amy tattoos studio" width={360} height={202} layout="responsive" />
      </div>
    </div>
  );
}
