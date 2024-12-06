import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { FaHeadphonesAlt } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";

const Service = () => {
  return (
    <>
    <section className='w-full h-auto bg-[#FFFFFF] my-12'>
        <div className='px-6 md:px-20 py-6'>
            <div className='w-full h-auto flex flex-col items-center justify-between md:flex-row gap-6'>
                <div className=' w-1/3 h-auto p-6 flex flex-col items-center justify-center'>
                <div className='w-[200px] h-[200px] bg-[#009688] rounded-full flex items-center justify-center'>
                    <div className='w-[150px] h-[150px] bg-black rounded-full flex items-center justify-center'>
                    <TbTruckDelivery size={50} className='text-white'/>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center my-6'>
                    <h1 className='text-xl font-bold text-center py-2'>FREE AND FAST DELIVERY</h1>
                    <h2 className='text-center'>Free delivery for all orders over $140</h2>
                </div>
                

                </div>
                <div className=' w-1/3 h-auto p-6 flex flex-col items-center justify-center'>
                <div className='w-[200px] h-[200px] bg-[#009688] rounded-full flex items-center justify-center'>
                    <div className='w-[150px] h-[150px] bg-black rounded-full flex items-center justify-center'>
                    <FaHeadphonesAlt size={50} className='text-white'/>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center my-6'>
                    <h1 className='text-xl font-bold text-center py-2'>24/7 CUSTOMER SERVICE</h1>
                    <h2 className='text-center'>Friendly 24/7 customer support</h2>
                </div>
                

                </div>
                <div className=' w-1/3 h-auto p-6 flex flex-col items-center justify-center'>
                <div className='w-[200px] h-[200px] bg-[#009688] rounded-full flex items-center justify-center'>
                    <div className='w-[150px] h-[150px] bg-black rounded-full flex items-center justify-center'>
                    <AiFillSafetyCertificate size={50} className='text-white'/>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center my-6'>
                    <h1 className='text-xl font-bold text-center py-2'>MONEY BACK GUARANTEE</h1>
                    <h2 className='text-center'>We reurn money within 30 days</h2>
                </div>
                

                </div>
            </div>

        </div>

    </section>
    </>
  )
}

export default Service