import React, { useEffect } from 'react';

const HeroSection = () => {
  useEffect(() => {
    const items = document.querySelectorAll('[data-carousel-item]');
    let currentIndex = 0;
    const intervalTime = 3000; // Time in milliseconds for auto-slide

    const showItem = (index) => {
      items.forEach((item, i) => {
        if (i === index) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    };

    const nextSlide = () => {
      currentIndex = (currentIndex + 1) % items.length;
      showItem(currentIndex);
    };

    const prevSlide = () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      showItem(currentIndex);
    };

    showItem(currentIndex);

    const nextButton = document.querySelector('[data-carousel-next]');
    const prevButton = document.querySelector('[data-carousel-prev]');

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    const interval = setInterval(nextSlide, intervalTime);

    // Clean up event listeners and interval on component unmount
    return () => {
      nextButton.removeEventListener('click', nextSlide);
      prevButton.removeEventListener('click', prevSlide);
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96  ">
        {/* <!-- Item 1 --> */}
        <div className="duration-700 ease-in-out" data-carousel-item>
          <img
            src="/assets/banner1.jpg"
            className=" w-full object-contain"
            alt="Carousel"
          />
           <div className="absolute bottom-20 left-20 w-full  text-white p-4 text-center">
            <h2 className="md:text-5xl sm:text-xl font-bold">What's special today ?</h2>
            <button className="text-base font-semibold bg-pink-500 rounded px-2 py-1 mt-5">Shop now</button>
          </div>
        </div>
        {/* <!-- Item 2 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/assets/bannerTwo.jpg"
            className=" w-full object-contain "
            alt="Carousel"
          />
           <div className="absolute bottom-20 left-20 w-full  text-white p-4 text-center">
            <h2 className="md:text-5xl sm:text-xl font-bold">What's special today ?</h2>
            <button className="text-base font-semibold bg-pink-500 rounded px-2 py-1 mt-5">Shop now</button>
          </div>
        </div>
        {/* <!-- Item 3 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/assets/banner3.jpg"
            className=" w-full object-contain"
            alt="Carousel"
          />
           <div className="absolute bottom-20 left-20 w-full  text-white p-4 text-center">
            <h2 className="md:text-5xl sm:text-xl font-bold">What's special today ?</h2>
            <button className="text-base font-semibold bg-pink-500 rounded px-2 py-1 mt-5">Shop now</button>
          </div>
        </div>
        {/* <!-- Item 4 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/assets/banner4.jpg"
            className=" object-contain w-full"
            alt="Carousel"
          />
           <div className="absolute md:bottom-20 md:left-20 sm:bottom-0 sm:left-0 w-full  text-white p-4 text-center">
            <h2 className="md:text-5xl sm:text-xl font-bold">What's special today ?</h2>
            <button className="text-base font-semibold bg-pink-500 rounded px-2 py-1 mt-5">Shop now</button>
          </div>
        </div>
      </div>
      {/* <!-- Slider indicators --> */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse ">
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
      </div>
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full  group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full  group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800 group-focus:outline-none">
        <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default HeroSection;
