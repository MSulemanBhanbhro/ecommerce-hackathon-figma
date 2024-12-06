import Image from 'next/image';
import React from 'react';

const Categorie = () => {
  return (
    <>
      <section className="w-full h-auto bg-[#FFFFFF] my-2">
        <div className="px-6 md:px-12 py-6">
          <div className="pb-6 w-full h-auto bg-black text-white flex flex-col md:flex-row gap-4">
            {/* Left Content */}
            <div className="py-8 px-4 md:px-6 w-full md:w-1/2">
              <h1 className="text-[#00FF66] py-4 text-xl md:text-2xl">Categories</h1>
              <h2 className="text-3xl md:text-6xl py-4 leading-tight">
                Enhance Yours <br /> Music Experience
              </h2>
              <div className="flex flex-wrap gap-4 mt-4">
                <h1 className="flex flex-col items-center justify-center bg-white text-black p-2 md:p-6 rounded-full font-bold text-sm md:text-lg">
                  23 <span>Hours</span>
                </h1>
                <h1 className="flex flex-col items-center justify-center bg-white text-black p-2 md:p-6 rounded-full font-bold text-sm md:text-lg">
                  05 <span>Days</span>
                </h1>
                <h1 className="flex flex-col items-center justify-center bg-white text-black p-4 md:p-4 rounded-full font-bold text-sm md:text-lg">
                  59 <span>Minutes</span>
                </h1>
                <h1 className="flex flex-col items-center justify-center bg-white text-black p-4 md:p-4 rounded-full font-bold text-sm md:text-lg">
                  35 <span>Seconds</span>
                </h1>
              </div>
              <div>
                <button className="bg-[#00FF66] text-black px-6 md:px-8 py-3 md:py-4 rounded-md mt-8 text-sm md:text-base">
                  Buy More
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center items-center w-full md:w-1/2">
              <Image
                src={'/images/buffer.png'}
                width={600}
                height={600}
                alt="buffer"
                className="w-full h-auto md:w-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categorie;
