import React from 'react'
import { MdPhoneAndroid } from "react-icons/md";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { MdOutlineCameraAlt } from "react-icons/md";
import { PiHeadphonesLight } from "react-icons/pi";
import { MdOutlineVideogameAsset } from "react-icons/md";

const Categories = () => {
    return (
        <>
            <section className='w-full h-auto bg-[#FFFFFF] my-2'>
                <div className='px-6 md:px-12 py-6'>
                    <div className='flex items-center gap-4 '>
                        <div className='w-[20px] h-[70px] bg-[#DB4444] rounded-md'></div>
                        <h1 className='text-2xl text-[#DB4444]'>Categories</h1>
                    </div>
                    <div className='flex  gap-12 py-6  md:text-2xl font-bold'>
                    <h1>Browse By Category</h1>
                    </div>

                    <div  className='flex items-center gap-4 flex-wrap'>
                        <div className='w-full md:w-[230px] h-[200px]  rounded-md p-4 flex flex-col items-center justify-center gap-4 border border-gray-300'>
                        <MdPhoneAndroid size={36}/>
                       <p>Phones</p>
                        </div>
                        <div className='w-full md:w-[230px] h-[200px]  rounded-md p-4 flex flex-col items-center justify-center gap-4 border border-gray-300'>
                        <HiOutlineDesktopComputer size={36}/>
                       <p>Computers</p>
                        </div>
                        <div className='w-full md:w-[230px] h-[200px]  rounded-md p-4 flex flex-col items-center justify-center gap-4 border border-gray-300'>
                        <BsSmartwatch size={36}/>
                       <p>SmartWatch</p>
                        </div>
                        <div className='w-full md:w-[230px] h-[200px]  rounded-md p-4 flex flex-col items-center justify-center gap-4 border border-gray-300'>
                        <MdOutlineCameraAlt size={36}/>
                       <p>Camera</p>
                        </div>
                        <div className='w-full md:w-[230px] h-[200px]  rounded-md p-4 flex flex-col items-center justify-center gap-4 border border-gray-300'>
                        <PiHeadphonesLight size={36}/> 
                       <p>HeadPhones</p>
                        </div>
                        <div className='w-full md:w-[230px] h-[200px]  rounded-md p-4 flex flex-col items-center justify-center gap-4 border border-gray-300'>
                        <MdOutlineVideogameAsset size={36}/>
                       <p>Gaming</p>
                        </div>

                    </div>
                    <hr className='my-12'/>
                </div>
            </section>
        </>
    )
}

export default Categories