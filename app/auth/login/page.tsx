import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <>
      <section className='w-full h-auto bg-[#FFFFFF] my-8'>
        <div className='px-6 md:px-0 py-12'>
          <div className='flex flex-col-reverse md:flex-row'>
            {/* Left Section (Image) */}
            <div className='w-full md:w-[50%] bg-[#CBE4E8] flex justify-center items-center'>
              <Image 
                src={'/images/call.png'} 
                width={600} 
                height={600} 
                alt='call' 
                className='max-w-full h-auto'
              />
            </div>
            {/* Right Section (Form) */}
            <div className='w-full md:w-[40%] h-auto md:h-[70vh] flex justify-center items-center'>
              <div className='w-full md:w-[50%] px-4 md:px-0'>
                <h1 className='text-2xl font-bold text-center md:text-left py-2'>Log in to Exclusive</h1>
                <p className='text-center md:text-left'>Enter your details below</p>
                <form>
                  
                  <div className='my-4'>
                    <input 
                      type="text" 
                      placeholder='Email or Phone Number' 
                      className='bg-transparent border-b border-[#000000] p-2 outline-none w-full' 
                    />
                  </div>
                  <div className='my-4'>
                    <input 
                      type="password" 
                      placeholder='Password' 
                      className='bg-transparent border-b border-[#000000] p-2 outline-none w-full' 
                    />
                  </div>
                  <div className='flex justify-between items-center my-6'>
                    <div>
                        <button className='bg-[#DB4444] text-white px-4 py-2 rounded-md'>Login</button>
                    </div>
                    <div>
                        <p className='text-[#DB4444]'><Link href={'/'}>Forgot Password ?</Link></p>
                    </div>
                  </div>
                  
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
