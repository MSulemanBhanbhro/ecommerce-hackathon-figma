import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { RiFacebookLine, RiLinkedinLine } from "react-icons/ri";
import { PiTwitterLogoThin } from "react-icons/pi";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <section className="w-full h-auto bg-black mt-2">
        <div className="px-6 md:px-12 py-6">
          <div className="flex flex-wrap justify-between md:flex-row flex-col gap-8">
            {/* Subscribe Section */}
            <div className="text-white w-full md:w-auto">
              <h1 className="text-lg md:text-xl font-bold">Exclusive</h1>
              <h1 className="py-2"><Link href={'/'}>Subscribe</Link></h1>
              <h1 className="py-2"><Link href={'/'}>Get 10% off your first order</Link></h1>
              <input
                type="email"
                className="w-full text-white p-2 bg-transparent border border-white rounded-md my-2"
                placeholder="Enter your email"
              />
            </div>

            {/* Support Section */}
            <div className="text-white w-full md:w-auto">
              <h1 className="text-lg md:text-xl font-bold">Support</h1>
              <h1 className="py-2">
                111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
              </h1>
              <h1 className="py-2"><Link href={'/'}>exclusive@gmail.com</Link></h1>
              <h1>+88015-88888-9999</h1>
            </div>

            {/* Accounts Section */}
            <div className="text-white w-full md:w-auto">
              <h1 className="text-lg md:text-xl font-bold">Accounts</h1>
              <h1 className="py-2"><Link href={'/'}>My Account</Link></h1>
              <h1 className="py-2"><Link href={'/'}>Login/Register</Link></h1>
              <h1 className="py-2"><Link href={'/'}>Cart</Link></h1>
              <h1 className="py-2"><Link href={'/'}>WishList</Link></h1>
              <h1 className="py-2"><Link href={'/'}>Shop</Link></h1>
            </div>

            {/* Quick Links Section */}
            <div className="text-white w-full md:w-auto">
              <h1 className="text-lg md:text-xl font-bold">Quick Links</h1>
              <h1 className="py-2"><Link href={'/'}>Privacy Policy</Link></h1>
              <h1 className="py-2"><Link href={'/'}>Terms of use</Link></h1>
              <h1 className="py-2"><Link href={'/'}>FAQ</Link></h1>
              <h1 className="py-2"><Link href={'/'}>Contact</Link></h1>
            </div>

            {/* Download App Section */}
            <div className="text-white w-full md:w-auto">
              <h1 className="text-lg md:text-xl font-bold">Download App</h1>
              <h1 className="py-2"><Link href={'/'}>Save $3 with App New User Only</Link></h1>
              <div className="flex flex-wrap gap-4">
                {/* QR Code */}
                <div className="w-32 h-32 md:w-auto">
                  <Image src={'/images/scan.png'} width={160} height={160} alt="Scan QR Code" className="w-full h-full" />
                </div>

                {/* App Store Links */}
                <div className="flex flex-col gap-4 w-full md:w-auto">
                  <div className="border border-gray-400 p-2 flex items-center gap-2 rounded-md">
                    <FaGooglePlay size={38} className="text-[#F4B400]" />
                    <h1>
                      <Link href={'/'}>
                        GET IT ON <br />
                        <span className="text-xl font-bold">Google Play</span>
                      </Link>
                    </h1>
                  </div>
                  <div className="border border-gray-400 p-2 flex items-center gap-2 rounded-md">
                    <FaApple size={42} />
                    <h1>
                      <Link href={'/'}>
                        Download on the <br />
                        <span className="text-xl font-bold">App Store</span>
                      </Link>
                    </h1>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="my-4 flex gap-4 justify-center md:justify-start">
                <Link href={'/'}><RiFacebookLine size={30} /></Link>
                <Link href={'/'}><PiTwitterLogoThin size={30} /></Link>
                <Link href={'/'}><CiInstagram size={30} /></Link>
                <Link href={'/'}><RiLinkedinLine size={30} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <hr className="h-[0.5px] bg-gray-700" />
      <footer className="bg-black text-[#F5F5F5] py-4 text-center text-sm">
        <p>&copy; Copyright Rimel 2022. All right reserved</p>
      </footer>
    </>
  );
};

export default Footer;
