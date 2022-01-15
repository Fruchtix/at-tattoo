import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import chevronRight from '../public/svgs/chevron-up.svg';
import reviewImageOne from '../public/images/shop_product_2.png';
import Review from './Review';

export default function Reviews() {
  const refSlider = useRef(null);
  const refSlideOne = useRef(null);
  const refSlideTwo = useRef(null);
  const refSlideThree = useRef(null);
  const [selectedSlide, setSelectedSlide] = useState(1);

  useEffect(() => {
    const slider = refSlider.current;

    function handleScroll() {
      if (isElementInViewport(refSlideOne.current)) {
        setSelectedSlide(1);
      } else if (isElementInViewport(refSlideTwo.current)) {
        setSelectedSlide(2);
      } else if (isElementInViewport(refSlideThree.current)) {
        setSelectedSlide(3);
      }
    }

    slider.addEventListener('scroll', handleScroll);

    return () => {
      slider.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function scrollToSlide(number) {
    setSelectedSlide(number);

    switch (number) {
      case 1:
        refSlideOne.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 2:
        refSlideTwo.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 3:
        refSlideThree.current.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();

    return (
      rect.left >= 0 && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  return (
    <div className="px-5 md:px-0 mt-16 md:max-w-screen-2xl md:mx-10 2xl:mx-auto md:mt-36">
      <a href="https://www.instagram.com/tattoo.by.amy/">
        <div className="flex justify-end items-center">
          <span className="mr-2">More inpspiration on my insta</span>
          <div className="bg-gray-dark rounded-full flex rotate-90">
            <Image src={chevronRight} alt="" />
          </div>
        </div>
      </a>

      <div ref={refSlider} className="slider flex overflow-x-auto">
        <div className="hidden md:block md:w-4/12">
          <div className="flex flex-col items-center absolute">
            <div className="rotate-180 text-vertical-rl translate-y-6 font-semibold text-5xl lg:text-6xl tracking-wider text-gray opacity-30">
              People
              <br />
              say
            </div>
            <div className="rounded-full w-36 h-36 xl:w-52 xl:h-52 bg-primary"></div>
            <div className="rotate-180 text-vertical-rl -translate-y-16 font-semibold text-5xl lg:text-6xl tracking-wider">
              People
              <br />
              say
            </div>
          </div>
        </div>

        <div
          id="slide-1"
          ref={refSlideOne}
          className="slide w-full flex-shrink-0 md:w-4/12 md:pr-10"
        >
          <Review
            image={reviewImageOne}
            profileImage={reviewImageOne}
            text="Ja ich mag das, war wirklich toll. Aber einmal reicht."
          />
        </div>
        <div
          id="slide-2"
          ref={refSlideTwo}
          className="slide w-full flex-shrink-0 md:w-4/12 md:pl-10"
        >
          <Review
            image={reviewImageOne}
            profileImage={reviewImageOne}
            text="Joa ich mag das, war ganz toll. Aber einmal reicht. Joa ich mag das, war ganz toll. Aber einmal reicht."
          />
        </div>
        <div id="slide-3" ref={refSlideThree} className="slide w-full flex-shrink-0 md:hidden">
          <Review
            image={reviewImageOne}
            profileImage={reviewImageOne}
            text="Nein ich mag das, war wirklich toll. Aber einmal reicht."
          />
        </div>
      </div>

      <div className="flex justify-center mt-8 md:hidden">
        <div
          onClick={() => scrollToSlide(1)}
          className={`w-5 h-5 mx-2 rounded-full ${
            selectedSlide === 1 ? 'bg-gray' : 'bg-gray-light'
          }`}
        ></div>
        <div
          onClick={() => scrollToSlide(2)}
          className={`w-5 h-5 mx-2 rounded-full ${
            selectedSlide === 2 ? 'bg-gray' : 'bg-gray-light'
          }`}
        ></div>
        <div
          onClick={() => scrollToSlide(3)}
          className={`w-5 h-5 mx-2 rounded-full ${
            selectedSlide === 3 ? 'bg-gray' : 'bg-gray-light'
          }`}
        ></div>
      </div>
    </div>
  );
}
