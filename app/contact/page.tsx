import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section className="w-full h-auto bg-[#FFFFFF] my-20">
      <div className="px-6 md:px-12 py-6">
        <div className="w-full flex flex-wrap gap-8">
          {/* Contact Information Card */}
          <div className="w-full md:w-[400px] h-auto md:h-[457px] border border-[#E5E5E5] rounded-[10px] px-6 py-6">
            <div className="flex gap-4 items-center">
              <div className="w-[40px] h-[40px] bg-red-400 text-white rounded-full flex items-center justify-center">
                <IoCallSharp size={20} />
              </div>
              <p className="text-lg font-semibold">Call To Us</p>
            </div>
            <div className="my-6 text-lg">
              <p>We are available 24/7, 7 days a week.</p>
              <p className="py-4">Phone: +8801611112222</p>

              <div className="w-full h-[1px] bg-black my-4"></div>
              <div className="flex gap-4 items-center">
                <div className="w-[40px] h-[40px] bg-red-400 text-white rounded-full flex items-center justify-center">
                  <MdOutlineEmail size={20} />
                </div>
                <p className="text-lg font-semibold">Write To Us</p>
              </div>
              <p className="py-4">
                Fill out our form and we will contact <br /> you within 24
                hours.
              </p>
              <p>Emails: customer@exclusive.com</p>
              <p className="py-4">Emails: support@exclusive.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-[900px] h-auto md:h-[457px] border border-[#E5E5E5] rounded-[10px] px-6 py-6">
            <div className="flex flex-wrap md:flex-nowrap gap-4">
              <div className="w-full md:w-[275px]">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="w-full p-4 bg-[#F5F5F5] rounded-md text-[16px] text-black outline-none"
                />
              </div>
              <div className="w-full md:w-[275px]">
                <input
                  type="text"
                  placeholder="Your Email *"
                  className="w-full p-4 bg-[#F5F5F5] rounded-md text-[16px] text-black outline-none"
                />
              </div>
              <div className="w-full md:w-[275px]">
                <input
                  type="text"
                  placeholder="Your Phone *"
                  className="w-full p-4 bg-[#F5F5F5] rounded-md text-[16px] text-black outline-none"
                />
              </div>
            </div>

            <div className="w-full mt-4">
              <textarea
                placeholder="Your Message"
                className="w-full p-4 bg-[#F5F5F5] h-[200px] rounded-md text-[16px] text-black outline-none"
              ></textarea>
            </div>

            <div className="flex justify-end mt-4">
              <button className="bg-red-400 px-8 py-4 text-white rounded-md">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
