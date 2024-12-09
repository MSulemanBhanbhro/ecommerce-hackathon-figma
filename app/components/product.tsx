import Image from 'next/image'
import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const Product = () => {
    return (
        <>
            <section className='w-full h-auto bg-[#FFFFFF] my-12'>
                <div className='px-6 md:px-12 py-12'>
                    <div className='flex items-center gap-4 '>
                        <div className='w-[20px] h-[70px] bg-[#DB4444] rounded-md'></div>
                        <h1 className='text-2xl text-[#DB4444]'>Today&rsquo;s</h1>
                    </div>

                    <div className='flex  gap-12 py-6  md:text-2xl font-bold'>
                        <h1>Flash Sales</h1>
                        <div className='flex items-center gap-4 text-center '>
                            <h1 >Days : <br /><span className=''>03</span></h1>
                            <h1 >Hours : <br /> <span>23</span></h1>
                            <h1 >Minutes : <br /> <span>19</span></h1>
                            <h1 >Seconds  <br /> <span>50</span></h1>
                        </div>

                    </div>

                    <div className='flex items-center gap-4 flex-wrap'>
                        <div className='w-full md:w-[355px] h-auto bg-[#F5F5F5] rounded-md'>
                            <div className='flex justify-between px-2 py-2'>
                                <p className='py-[8px] px-[15px] bg-[#DB4444] text-white rounded-md'>-40%</p>
                                <div className='flex flex-col gap-2'>
                                    <CiHeart />
                                    <FaEye />
                                </div>
                            </div>
                            <Image src={'/images/game.png'} width={120} height={120} alt='game' className='mx-auto py-10' />
                            <div className='px-[15px]'>
                                <p>HAVIT HV-G92 Gamepad</p>
                                <p className='text-[#DB4444] text-xl'>$120 <span className='line-through pl-2 text-[#9A9A9A]'>$160</span></p>
                            </div>
                            <div className='px-[15px] py-2 flex items-center gap-2 flex-wrap text-[#FFAD33]'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <p className='text-[#9A9A9A] text-xl'>(88)</p>

                            </div>

                        </div>
                        <div className='w-full md:w-[355px] h-auto bg-[#F5F5F5] rounded-md'>
                            <div className='flex justify-between px-2 py-2'>
                                <p className='py-[8px] px-[15px] bg-[#DB4444] text-white rounded-md'>-35%</p>
                                <div className='flex flex-col gap-2'>
                                    <CiHeart />
                                    <FaEye />
                                </div>
                            </div>
                            <Image src={'/images/keyboard.png'} width={200} height={200} alt='game' className='mx-auto py-10' />
                            <div className='px-[15px]'>
                                <p>AK-900 Wired Keyboard</p>
                                <p className='text-[#DB4444] text-xl'>$960 <span className='line-through pl-2 text-[#9A9A9A]'>$1160</span></p>
                            </div>
                            <div className='px-[15px] py-2 flex items-center gap-2 flex-wrap text-[#FFAD33]'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <p className='text-[#9A9A9A] text-xl'>(75)</p>

                            </div>

                        </div>
                        <div className='w-full md:w-[355px] h-auto bg-[#F5F5F5] rounded-md'>
                            <div className='flex justify-between px-2 py-2'>
                                <p className='py-[8px] px-[15px] bg-[#DB4444] text-white rounded-md'>-30%</p>
                                <div className='flex flex-col gap-2'>
                                    <CiHeart />
                                    <FaEye />
                                </div>
                            </div>
                            <Image src={'/images/pc.png'} width={140} height={140} alt='game' className='mx-auto py-10' />
                            <div className='px-[15px]'>
                                <p>IPS LCD Gaming Monitor</p>
                                <p className='text-[#DB4444] text-xl'>$370 <span className='line-through pl-2 text-[#9A9A9A]'>$400</span></p>
                            </div>
                            <div className='px-[15px] py-2 flex items-center gap-2 flex-wrap text-[#FFAD33]'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <p className='text-[#9A9A9A] text-xl'>(99)</p>

                            </div>

                        </div>

                        <div className='w-full md:w-[355px] h-auto bg-[#F5F5F5] rounded-md'>
                            <div className='flex justify-between px-2 py-2'>
                                <p className='py-[8px] px-[15px] bg-[#DB4444] text-white rounded-md'>-25%</p>
                                <div className='flex flex-col gap-2'>
                                    <CiHeart />
                                    <FaEye />
                                </div>
                            </div>
                            <Image src={'/images/chair.png'} width={110} height={110} alt='game' className='mx-auto py-[-40px]' />
                            <div className='px-[15px]'>
                                <p>S-Series Comfort Chair </p>
                                <p className='text-[#DB4444] text-xl'>$375 <span className='line-through pl-2 text-[#9A9A9A]'>$400</span></p>
                            </div>
                            <div className='px-[15px] py-2 flex items-center gap-2 flex-wrap text-[#FFAD33]'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <p className='text-[#9A9A9A] text-xl'>(99)</p>

                            </div>

                        </div>

                        <div className='w-full flex flex-col items-center justify-center'>
                            <button className=' rounded-md  w-[250px] py-4 text-white my-8 bg-[#DB4444] tracking-widest'>View All Products</button>
                        </div>

                    </div>


                    <hr />
                </div>





            </section>
        </>
    )
}

export default Product