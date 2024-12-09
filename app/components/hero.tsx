'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Hero = () => {
  return (
    <>
      <section className="w-full">
        <hr />
        <div className="px-4 md:px-12 w-full flex flex-wrap justify-between gap-8">
          {/* Sidebar */}
          <div className="border-r border-gray-300 w-full md:w-1/5 pt-6">
            <ul className="text-base md:text-lg space-y-3 md:space-y-4">
              <li>
                <Link href="/" className="flex items-center justify-between hover:text-gray-700 transition">
                  Woman&rsquo;s Fashion <MdKeyboardArrowRight size={20} />
                </Link>
              </li>
              <li>
                <Link href="/" className="flex items-center justify-between hover:text-gray-700 transition">
                  Men&rsquo;s Fashion <MdKeyboardArrowRight size={20} />
                </Link>
              </li>
              <li><Link href="/" className="hover:text-gray-700 transition">Electronics</Link></li>
              <li><Link href="/" className="hover:text-gray-700 transition">Home & Lifestyle</Link></li>
              <li><Link href="/" className="hover:text-gray-700 transition">Medicine</Link></li>
              <li><Link href="/" className="hover:text-gray-700 transition">Sport&rsquo;s & Outdoor</Link></li>
              <li><Link href="/" className="hover:text-gray-700 transition">Baby&rsquo;s & Toy&rsquo;s</Link></li>
              <li><Link href="/" className="hover:text-gray-700 transition">Accessories & Pet&rsquo;s</Link></li>
              <li><Link href="/" className="hover:text-gray-700 transition">Health & Beauty</Link></li>
            </ul>
          </div>

          {/* Hero Section */}
          <div className="w-full md:w-4/5 border border-black h-auto md:h-[400px] mt-6 bg-black flex flex-col md:flex-row items-center gap-6 md:gap-12 p-4">
            {/* Left Content */}
            <div className="w-full md:w-1/2 flex flex-col items-start justify-center space-y-6">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/appleicon.png"
                  width={50}
                  height={50}
                  alt="apple"
                  className="object-contain"
                />
                <p className="text-white text-lg md:text-xl">iPhone 14 Series</p>
              </div>
              <h2 className="text-2xl md:text-3xl text-white font-semibold tracking-wide">
                Up to 10% Off Voucher
              </h2>
              <Link
                href="/"
                className="flex items-center gap-2 text-white text-lg md:text-xl underline underline-offset-8 hover:text-gray-300 transition"
              >
                Shop Now <GoArrowRight size={20} />
              </Link>
            </div>

            {/* Right Content with Slider */}
            <div className="w-full md:w-1/2">
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination, Autoplay]}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                className="mySwiper w-full h-full"
              >
                <SwiperSlide>
                  <Image
                    src="/images/hero.png"
                    width={400}
                    height={400}
                    alt="hero"
                    className="object-contain mx-auto"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/images/iphone.png"
                    width={400}
                    height={400}
                    alt="iphone"
                    className="object-contain mx-auto"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/images/iphones.png"
                    width={400}
                    height={400}
                    alt="iphones"
                    className="object-contain mx-auto"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
