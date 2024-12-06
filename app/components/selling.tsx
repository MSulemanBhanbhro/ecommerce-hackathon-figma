import React from 'react'
import Image from 'next/image'
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const Sell = () => {
    return (
        <>
            <section className='w-full h-auto bg-[#FFFFFF] my-2'>
                <div className='px-6 md:px-12 py-6'>
                    <div className='flex items-center gap-4 '>
                        <div className='w-[20px] h-[70px] bg-[#DB4444] rounded-md'></div>
                        <h1 className='text-2xl text-[#DB4444]'>This Month</h1>
                    </div>
                    <div className='flex items-center justify-between gap-12 py-6  md:text-2xl font-bold'>
                        <h1>Best Selling Products</h1>
                        <button className='bg-[#DB4444] text-lg md:px-8 px-4 py-2 rounded-md text-white'>View All</button>
                    </div>

                    <div className='flex items-center gap-4 flex-wrap'>
                    <div className='w-full md:w-[355px] h-auto bg-[#F5F5F5] rounded-md'>
                            <div className='flex justify-between px-2 py-2'>
                                <p></p>
                                <div className='flex flex-col gap-2'>
                                    <CiHeart />
                                    <FaEye />
                                </div>
                            </div>
                            <Image src={'/images/jacket.png'} width={120} height={120} alt='game' className='mx-auto py-10' />
                            <div className='px-[-5px] bg-white pt-2'>
                                <p>The north coat</p>
                                <p className='text-[#DB4444] text-xl'>$260 <span className='line-through pl-2 text-[#9A9A9A]'>$360</span></p>
                            </div>
                            <div className='px-[-5px] py-2 flex items-center gap-2 flex-wrap text-[#FFAD33] bg-white'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <p className='text-[#9A9A9A] text-xl'>(65)</p>

                            </div>

                        </div>

                        <div className='w-full md:w-[355px] h-auto bg-[#F5F5F5] rounded-md'>
                            <div className='flex justify-between px-2 py-2'>
                                <p></p>
                                <div className='flex flex-col gap-2'>
                                    <CiHeart />
                                    <FaEye />
                                </div>
                            </div>
                            <Image src={'/images/bag.png'} width={170} height={170} alt='game' className='mx-auto py-10' />
                            <div className='px-[-5px] bg-white pt-2'>
                                <p>Gucci duffle bag</p>
                                <p className='text-[#DB4444] text-xl'>$960 <span className='line-through pl-2 text-[#9A9A9A]'>$1160</span></p>
                            </div>
                            <div className='px-[-5px] py-2 flex items-center gap-2 flex-wrap text-[#FFAD33] bg-white'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <p className='text-[#9A9A9A] text-xl'>(65)</p>

                            </div>

                        </div>

                        <div className='w-full md:w-[355px] h-auto bg-[#F5F5F5] rounded-md'>
                            <div className='flex justify-between px-2 py-2'>
                                <p></p>
                                <div className='flex flex-col gap-2'>
                                    <CiHeart />
                                    <FaEye />
                                </div>
                            </div>
                            <Image src={'/images/sound.png'} width={245} height={245} alt='game' className='mx-auto py-10' />
                            <div className='px-[-5px] bg-white pt-2'>
                                <p>RGB liquid CPU Cooler</p>
                                <p className='text-[#DB4444] text-xl'>$160 <span className='line-through pl-2 text-[#9A9A9A]'>$170</span></p>
                            </div>
                            <div className='px-[-5px] py-2 flex items-center gap-2 flex-wrap text-[#FFAD33] bg-white'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <p className='text-[#9A9A9A] text-xl'>(65)</p>

                            </div>

                        </div>

                        <div className='w-full md:w-[355px] h-auto bg-[#F5F5F5] rounded-md'>
                            <div className='flex justify-between px-2 py-2'>
                                <p></p>
                                <div className='flex flex-col gap-2'>
                                    <CiHeart />
                                    <FaEye />
                                </div>
                            </div>
                            <Image src={'/images/table.png'} width={95} height={95} alt='game' className='mx-auto py-10' />
                            <div className='px-[-5px] bg-white pt-2'>
                                <p>Small BookSelf</p>
                                <p className='text-[#DB4444] text-xl'>$360 <span className='line-through pl-2 text-[#9A9A9A]'></span></p>
                            </div>
                            <div className='px-[-5px] py-2 flex items-center gap-2 flex-wrap text-[#FFAD33] bg-white'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <p className='text-[#9A9A9A] text-xl'>(65)</p>

                            </div>

                        </div>

                    </div>


                </div>

            </section>
        </>
    )
}

export default Sell