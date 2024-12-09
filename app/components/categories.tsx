import React from 'react'
import { MdPhoneAndroid } from "react-icons/md";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { MdOutlineCameraAlt } from "react-icons/md";
import { PiHeadphonesLight } from "react-icons/pi";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { FaLaptop } from "react-icons/fa"; // Laptop icon

const Categories = () => {
    return (
        <>
            <section className='w-full h-auto bg-[#FFFFFF] my-2'>
                <div className='px-6 md:px-12 py-6'>
                    <div className='flex items-center gap-4 '>
                        <div className='w-[20px] h-[70px] bg-[#DB4444] rounded-md'></div>
                        <h1 className='text-2xl text-[#DB4444]'>Categories</h1>
                    </div>
                    <div className='flex gap-12 py-6 md:text-2xl font-bold'>
                        <h1>Browse By Category</h1>
                    </div>

                    {/* Grid for the cards */}
                    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-7 gap-4'>
                        {/* Phones Card */}
                        <div className='w-full h-[200px] rounded-md p-4 flex flex-col items-center justify-center gap-4 border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#DB4444] hover:text-white'>
                            <MdPhoneAndroid size={36} />
                            <p>Phones</p>
                        </div>
                        {/* Computers Card */}
                        <div className='w-full h-[200px] rounded-md p-4 flex flex-col items-center justify-center gap-4 border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#DB4444] hover:text-white'>
                            <HiOutlineDesktopComputer size={36} />
                            <p>Computers</p>
                        </div>
                        {/* SmartWatch Card */}
                        <div className='w-full h-[200px] rounded-md p-4 flex flex-col items-center justify-center gap-4 border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#DB4444] hover:text-white'>
                            <BsSmartwatch size={36} />
                            <p>SmartWatch</p>
                        </div>
                        {/* Camera Card */}
                        <div className='w-full h-[200px] rounded-md p-4 flex flex-col items-center justify-center gap-4 border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-lg bg-[#DB4444] text-white'>
                            <MdOutlineCameraAlt size={36} />
                            <p>Camera</p>
                        </div>
                        {/* HeadPhones Card */}
                        <div className='w-full h-[200px] rounded-md p-4 flex flex-col items-center justify-center gap-4 border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#DB4444] hover:text-white'>
                            <PiHeadphonesLight size={36} />
                            <p>HeadPhones</p>
                        </div>
                        {/* Gaming Card */}
                        <div className='w-full h-[200px] rounded-md p-4 flex flex-col items-center justify-center gap-4 border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#DB4444] hover:text-white'>
                            <MdOutlineVideogameAsset size={36} />
                            <p>Gaming</p>
                        </div>
                        {/* Laptops Card */}
                        <div className='w-full h-[200px] rounded-md p-4 flex flex-col items-center justify-center gap-4 border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#DB4444] hover:text-white'>
                            <FaLaptop size={36} />
                            <p>Laptops</p>
                        </div>
                    </div>

                    <hr className='my-12' />
                </div>
            </section>
        </>
    )
}

export default Categories;
