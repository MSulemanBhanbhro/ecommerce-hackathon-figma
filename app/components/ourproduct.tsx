import React from 'react'
import Image from 'next/image'
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const Ourproduct = () => {
  return (
    <>
     <section className='w-full h-auto bg-[#FFFFFF] my-2'>
                <div className='px-6 md:px-12 py-6'>
                    <div className='flex items-center gap-4 '>
                        <div className='w-[20px] h-[70px] bg-[#DB4444] rounded-md'></div>
                        <h1 className='text-2xl text-[#DB4444]'>Our Products</h1>
                    </div>
                    <div className='flex items-center justify-between gap-12 py-6  md:text-2xl font-bold'>
                        <h1>Explore Our Products</h1>
                        <button className='bg-[#DB4444] text-lg md:px-8 px-4  py-2 rounded-md text-white'>View All</button>
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
                            <Image src={'/images/bread.png'} width={120} height={120} alt='game' className='mx-auto py-10' />
                            <div className='px-[-5px] bg-white pt-2'>
                                <p>Breed Dry Dog Food</p>
                                
                            </div>
                            <div className='px-[-5px] py-2 flex items-center gap-2 flex-wrap text-[#FFAD33] bg-white'>
                            <p className='text-[#DB4444] text-xl'>$100 <span className='line-through pl-2 text-[#9A9A9A]'></span></p>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar className='text-gray-500' />
                                <FaStar className='text-gray-500'/>
                                <p className='text-[#9A9A9A] text-xl'>(35)</p>

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
                            <Image src={'/images/camera.png'} width={170} height={170} alt='game' className='mx-auto py-10' />
                            <div className='px-[-5px] bg-white pt-2'>
                                <p>CANON EOS DSLR Camera</p>
                                
                            </div>
                            <div className='px-[-5px] py-2 flex items-center gap-2 flex-wrap text-[#FFAD33] bg-white'>
                            <p className='text-[#DB4444] text-xl'>$360 <span className='line-through pl-2 text-[#9A9A9A]'></span></p>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar className='text-gray-500'/>
                                <p className='text-[#9A9A9A] text-xl'>(95)</p>

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
                            <Image src={'/images/laptop.png'} width={180} height={180} alt='game' className='mx-auto py-10' />
                            <div className='px-[-5px] bg-white pt-2'>
                                <p>ASUS FHD Gaming Laptop</p>
                                
                            </div>
                            <div className='px-[-5px] py-2 flex items-center gap-2 flex-wrap text-[#FFAD33] bg-white'>
                            <p className='text-[#DB4444] text-xl'>$700 <span className='line-through pl-2 text-[#9A9A9A]'></span></p>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <p className='text-[#9A9A9A] text-xl'>(325)</p>

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
                            <Image src={'/images/ponds.png'} width={200} height={200} alt='game' className='mx-auto py-10' />
                            <div className='px-[-5px] bg-white pt-2'>
                                <p>Curology Product Set </p>
                                
                            </div>
                            <div className='px-[-5px] py-2 flex items-center gap-2 flex-wrap text-[#FFAD33] bg-white'>
                            <p className='text-[#DB4444] text-xl'>500 <span className='line-through pl-2 text-[#9A9A9A]'></span></p>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <p className='text-[#9A9A9A] text-xl'>(145)</p>

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
                            <Image src={'/images/car.png'} width={160} height={160} alt='game' className='mx-auto py-10' />
                            <div className='px-[-5px] bg-white pt-2'>
                                <p>Kids Electric Car</p>
                                
                            </div>
                            <div className='px-[-5px] py-2 flex items-center gap-2 flex-wrap text-[#FFAD33] bg-white'>
                            <p className='text-[#DB4444] text-xl'>$960 <span className='line-through pl-2 text-[#9A9A9A]'></span></p>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <p className='text-[#9A9A9A] text-xl'>(65)</p>
                            </div>

                            <div className='flex gap-4 bg-white'>
                                <div className='w-[20px] h-[20px] bg-red-500 rounded-full p-2 border-black border-[2px]'></div>
                                <div className='w-[20px] h-[20px] bg-red-500 rounded-full'></div>
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
                            <Image src={'/images/shoe.png'} width={135} height={135} alt='game' className='mx-auto py-10' />
                            <div className='px-[-5px] bg-white pt-2'>
                                <p>Jr. Zoom Soccer Cleats</p>
                                
                            </div>
                            <div className='px-[-5px] py-2 flex items-center gap-2 flex-wrap text-[#FFAD33] bg-white'>
                            <p className='text-[#DB4444] text-xl'>$1160 <span className='line-through pl-2 text-[#9A9A9A]'></span></p>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <p className='text-[#9A9A9A] text-xl'>(35)</p>

                            </div>
                            <div className='flex gap-4 bg-white'>
                                <div className='w-[20px] h-[20px] bg-yellow-300 rounded-full p-2 border-black border-[2px]'></div>
                                <div className='w-[20px] h-[20px] bg-red-500 rounded-full'></div>
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
                            <Image src={'/images/game1.png'} width={140} height={140} alt='game' className='mx-auto py-10' />
                            <div className='px-[-5px] bg-white pt-2'>
                                <p>GP11 Shooter USB Gamepad</p>
                                
                            </div>
                            <div className='px-[-5px] py-2 flex items-center gap-2 flex-wrap text-[#FFAD33] bg-white'>
                            <p className='text-[#DB4444] text-xl'>$660 <span className='line-through pl-2 text-[#9A9A9A]'></span></p>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar className='text-gray-500'/>
                                <p className='text-[#9A9A9A] text-xl'>(55)</p>

                            </div>
                            <div className='flex gap-4 bg-white'>
                                <div className='w-[20px] h-[20px] bg-black rounded-full p-2 border-black border-[2px]'></div>
                                <div className='w-[20px] h-[20px] bg-red-500 rounded-full'></div>
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
                            <Image src={'/images/jacket1.png'} width={125} height={125} alt='game' className='mx-auto py-10' />
                            <div className='px-[-5px] bg-white pt-2'>
                                <p>Quilted Satin Jacket</p>
                                
                            </div>
                            <div className='px-[-5px] py-2 flex items-center gap-2 flex-wrap text-[#FFAD33] bg-white'>
                            <p className='text-[#DB4444] text-xl'>$960 <span className='line-through pl-2 text-[#9A9A9A]'></span></p>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar className='text-gray-500'/>
                                <p className='text-[#9A9A9A] text-xl'>(55)</p>

                            </div>
                            <div className='flex gap-4 bg-white'>
                                <div className='w-[20px] h-[20px] bg-black rounded-full p-2 border-black border-[2px]'></div>
                                <div className='w-[20px] h-[20px] bg-red-500 rounded-full'></div>
                            </div>

                        </div>

                        

                    </div>

                    <div className='w-full flex flex-col items-center justify-center'>
                            <button className=' rounded-md  w-[250px] py-4 text-white my-10 bg-[#DB4444] tracking-widest'>View All Products</button>
                        </div>


                </div>

            </section>
    </>
  )
}

export default Ourproduct