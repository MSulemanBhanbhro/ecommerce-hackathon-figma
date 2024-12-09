import Image from 'next/image'
import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { FaHeadphonesAlt } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { FaSackDollar } from "react-icons/fa6";
import { SiHomeassistantcommunitystore } from "react-icons/si";

const About = () => {
    return (
        <>
            <section className='w-full h-auto bg-[#FFFFFF] my-8'>
                <div className='px-6 md:px-12 py-12'>
                    <div className='flex flex-col-reverse md:flex-row items-center md:items-start'>
                        {/* Left Section (Text Content) */}
                        <div className='w-full md:w-[60%] h-auto md:h-[70vh] px-4 md:px-12 py-6 md:py-12'>
                            <h1 className='text-2xl md:text-4xl font-bold py-4'>Our Story</h1>
                            <p className='py-4'>
                                Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh.
                                Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands
                                and serves 3 million customers across the region.
                            </p>
                            <p className='py-2'>
                                Exclusive has more than 1 million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment
                                in categories ranging from consumer goods to electronics, fashion, and more.
                            </p>
                        </div>

                        {/* Right Section (Image with adjusted height and width) */}
                        <div className='w-full md:w-[40%] bg-[#EB7EA8] flex justify-center items-center rounded-md h-[400px] md:h-[500px]'>
                            <Image
                                src={'/images/girl.png'}
                                width={500}
                                height={500}
                                alt='girl illustration'
                                className='object-contain w-full h-full rounded-md' // Image scaling properly
                            />
                        </div>
                    </div>

                    {/* Cards Section */}
                    <div className='w-full h-auto flex flex-col items-center justify-between md:flex-row gap-6 mt-10'>
                        <div className='w-full sm:w-1/4 md:w-1/4 h-auto p-6 flex flex-col items-center justify-center border border-[#009688] rounded-md transition-transform transform hover:scale-105 hover:shadow-lg'>
                            <div className='w-[150px] h-[150px] bg-[#009688] rounded-full flex items-center justify-center'>
                                <div className='w-[100px] h-[100px] bg-black rounded-full flex items-center justify-center'>
                                    <SiHomeassistantcommunitystore size={50} className='text-white'/>
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center my-6'>
                                <h1 className='text-4xl font-bold text-center py-2'>10.5k</h1>
                                <h2 className='text-center text-lg'>Sellers active on our site</h2>
                            </div>
                        </div>
                        
                        <div className='w-full sm:w-1/4 md:w-1/4 h-auto p-6 flex flex-col bg-[#DB4444] items-center justify-center border border-[#009688] rounded-md transition-transform transform hover:scale-105 hover:shadow-lg'>
                            <div className='w-[150px] h-[150px] bg-[#009688] rounded-full flex items-center justify-center'>
                                <div className='w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center'>
                                    <AiOutlineDollarCircle size={50} className='text-black'/>
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center my-6'>
                                <h1 className='text-4xl font-bold text-center py-2 text-white'>33k</h1>
                                <h2 className='text-center text-lg text-white'>Customers active on our site</h2>
                            </div>
                        </div>

                        <div className='w-full sm:w-1/4 md:w-1/4 h-auto p-6 flex flex-col items-center justify-center border border-[#009688] rounded-md transition-transform transform hover:scale-105 hover:shadow-lg'>
                            <div className='w-[150px] h-[150px] bg-[#009688] rounded-full flex items-center justify-center'>
                                <div className='w-[100px] h-[100px] bg-black rounded-full flex items-center justify-center'>
                                    <RiShoppingBag4Fill size={50} className='text-white'/>
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center my-6'>
                                <h1 className='text-4xl font-bold text-center py-2'>45.5k</h1>
                                <h2 className='text-center text-lg'>Products sold on our site</h2>
                            </div>
                        </div>

                        <div className='w-full sm:w-1/4 md:w-1/4 h-auto p-6 flex flex-col items-center justify-center border border-[#009688] rounded-md transition-transform transform hover:scale-105 hover:shadow-lg'>
                            <div className='w-[150px] h-[150px] bg-[#009688] rounded-full flex items-center justify-center'>
                                <div className='w-[100px] h-[100px] bg-black rounded-full flex items-center justify-center'>
                                    <FaSackDollar size={50} className='text-white'/>
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center my-6'>
                                <h1 className='text-4xl font-bold text-center py-2'>25k</h1>
                                <h2 className='text-center text-lg'>Annual gross sales on our site</h2>
                            </div>
                        </div>
                    </div>

                    <div className='w-full h-auto flex flex-col items-center justify-between md:flex-row gap-6 my-20'>
    <div className='w-full sm:w-1/2 lg:w-1/3 h-auto p-6 flex flex-col items-center justify-center'>
        <div className='w-[150px] sm:w-[180px] lg:w-[200px] h-[150px] sm:h-[180px] lg:h-[200px] bg-[#009688] rounded-full flex items-center justify-center'>
            <div className='w-[100px] sm:w-[130px] lg:w-[150px] h-[100px] sm:h-[130px] lg:h-[150px] bg-black rounded-full flex items-center justify-center'>
                <TbTruckDelivery size={50} className='text-white' />
            </div>
        </div>
        <div className='flex flex-col items-center justify-center my-6'>
            <h1 className='text-lg sm:text-xl font-bold text-center py-2'>FREE AND FAST DELIVERY</h1>
            <h2 className='text-center text-sm sm:text-base'>Free delivery for all orders over $140</h2>
        </div>
    </div>

    <div className='w-full sm:w-1/2 lg:w-1/3 h-auto p-6 flex flex-col items-center justify-center'>
        <div className='w-[150px] sm:w-[180px] lg:w-[200px] h-[150px] sm:h-[180px] lg:h-[200px] bg-[#009688] rounded-full flex items-center justify-center'>
            <div className='w-[100px] sm:w-[130px] lg:w-[150px] h-[100px] sm:h-[130px] lg:h-[150px] bg-black rounded-full flex items-center justify-center'>
                <FaHeadphonesAlt size={50} className='text-white' />
            </div>
        </div>
        <div className='flex flex-col items-center justify-center my-6'>
            <h1 className='text-lg sm:text-xl font-bold text-center py-2'>24/7 CUSTOMER SERVICE</h1>
            <h2 className='text-center text-sm sm:text-base'>Friendly 24/7 customer support</h2>
        </div>
    </div>

    <div className='w-full sm:w-1/2 lg:w-1/3 h-auto p-6 flex flex-col items-center justify-center'>
        <div className='w-[150px] sm:w-[180px] lg:w-[200px] h-[150px] sm:h-[180px] lg:h-[200px] bg-[#009688] rounded-full flex items-center justify-center'>
            <div className='w-[100px] sm:w-[130px] lg:w-[150px] h-[100px] sm:h-[130px] lg:h-[150px] bg-black rounded-full flex items-center justify-center'>
                <AiFillSafetyCertificate size={50} className='text-white' />
            </div>
        </div>
        <div className='flex flex-col items-center justify-center my-6'>
            <h1 className='text-lg sm:text-xl font-bold text-center py-2'>MONEY BACK GUARANTEE</h1>
            <h2 className='text-center text-sm sm:text-base'>We return money within 30 days</h2>
        </div>
    </div>
</div>

                </div>
            </section>
        </>
    )
}

export default About;
