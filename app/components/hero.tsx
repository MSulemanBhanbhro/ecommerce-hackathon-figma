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
        <div className="px-6 md:px-12 w-full flex flex-wrap justify-between gap-8 md:gap-16">
          {/* Sidebar */}
          <div className="border-r border-gray-300 w-full md:w-1/5 pt-6">
            <ul className="text-lg md:text-xl space-y-3 md:space-y-4">
              <li>
                <Link href="/" className="flex items-center justify-between">
                  Woman&rsquo;s Fashion <MdKeyboardArrowRight size={24} />
                </Link>
              </li>
              <li>
                <Link href="/" className="flex items-center justify-between">
                  Men&rsquo;s Fashion <MdKeyboardArrowRight size={24} />
                </Link>
              </li>
              <li><Link href="/">Electronics</Link></li>
              <li><Link href="/">Home & Lifestyle</Link></li>
              <li><Link href="/">Medicine</Link></li>
              <li><Link href="/">Sport&rsquo;s & Outdoor</Link></li>
              <li><Link href="/">Baby&rsquo;s & Toy&rsquo;s</Link></li>
              <li><Link href="/">Accessories & Pet&rsquo;s</Link></li>
              <li><Link href="/">Health & Beauty</Link></li>
            </ul>
          </div>

          {/* Hero Section */}
          <div className="w-full md:w-[70em] border-2 border-black h-auto md:h-[370px] mt-6 bg-black flex flex-wrap md:flex-nowrap items-center gap-8 md:gap-20 p-4 md:p-0">
            {/* Left Content */}
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-4 md:gap-10 px-6 md:px-[70px] pt-6 md:pt-12">
                <Image
                  src="/images/appleicon.png"
                  width={50}
                  height={50}
                  alt="apple"
                  className="object-contain"
                />
                <p className="text-white text-lg md:text-xl">iPhone 14 series</p>
              </div>
              <div className="px-6 md:px-[80px] pt-4 md:pt-[20px]">
                <h2 className="text-4xl md:text-2xl text-white tracking-wide leading-tight">
                  Up to 10%  off Voucher
                </h2>
              </div>
              <div className="px-6 md:px-[80px] py-4 md:py-[20px]">
                <h2>
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-white text-lg md:text-xl underline underline-offset-8"
                  >
                    Shop Now <GoArrowRight size={24} />
                  </Link>
                </h2>
              </div>
            </div>

            {/* Right Content with Slider */}
            <div className="w-full md:w-1/2">
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination, Autoplay]} // Add Autoplay for automatic slide change
                loop={true}
                autoplay={{
                  delay: 3000, // 3-second delay
                  disableOnInteraction: false,
                }}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Image
                    src="/images/hero.png"
                    width={350}
                    height={350}
                    alt="hero"
                    className="object-contain"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/images/iphone.png"
                    width={350}
                    height={350}
                    alt="woman"
                    className="object-contain"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/images/iphones.png"
                    width={350}
                    height={350}
                    alt="bag"
                    className="object-contain"
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
