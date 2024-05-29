import { useEffect } from "react";
import "flowbite";

import { h1, h2, h3, h4, t1, t2, t3 } from "../assets";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    const loadFlowbite = async () => {
      const { Carousel } = await import("flowbite");
      const carousels = document.querySelectorAll("[data-carousel]");
      carousels.forEach((carouselElement) => {
        new Carousel(carouselElement, {
          interval: 5000,
        });
      });
    };
    loadFlowbite();
  }, []);

  return (
    <>
      <h1 className=" text-center mb-10 text-4xl tracking-widest font-bold">26-Maktab</h1>
      <div className="max-w-[1000px] mx-auto mb-10">
        <div id="default-carousel" className="relative w-full " data-carousel="slide">
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src={h1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 1" />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src={h2} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 2" />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src={h3} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 3" />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src={h4} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 4" />
            </div>
          </div>
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
          </div>
          <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30  group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-none group-focus:outline-none">
              <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-none group-focus:outline-none">
              <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
      <section className="py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-14">26-maktab to'garaklari</h2>
          <div className="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
              <div className="flex items-center mb-6">
                <img src={t1} alt="Harsh image" className="rounded-lg w-full h-[260px] object-cover" />
              </div>
              <div className="block">
                <h4 className="text-gray-900 font-medium leading-8 mb-9">Adabiyot to'garagi</h4>
                <div className="flex items-center justify-between  font-medium">
                  <h6 className="text-sm text-gray-500">26-maktab.</h6>
                  <span className="text-sm text-indigo-600">2024 yil</span>
                </div>
              </div>
            </div>
            <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
              <div className="flex items-center mb-6">
                <img src={t2} alt="John image" className="rounded-lg w-full h-[260px] object-cover" />
              </div>
              <div className="block">
                <h4 className="text-gray-900 font-medium leading-8 mb-9">Matematika to'garagi</h4>
                <div className="flex items-center justify-between  font-medium">
                  <h6 className="text-sm text-gray-500">26-maktab</h6>
                  <span className="text-sm text-indigo-600">2024 yil</span>
                </div>
              </div>
            </div>
            <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
              <div className="flex items-center mb-6">
                <img src={t3} alt="Alexa image" className="rounded-lg w-full h-[260px] object-cover" />
              </div>
              <div className="block">
                <h4 className="text-gray-900 font-medium leading-8 mb-9">Deksikologiya to'garagi</h4>
                <div className="flex items-center justify-between  font-medium">
                  <h6 className="text-sm text-gray-500">26-maktab</h6>
                  <span className="text-sm text-indigo-600">2024 yil</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;