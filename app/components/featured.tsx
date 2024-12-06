import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Featured = () => {
    return (
        <>
            <section className='w-full h-auto bg-[#FFFFFF] my-12'>
                <div className='px-6 md:px-12 py-6'>
                    <div className='flex items-center gap-4 '>
                        <div className='w-[20px] h-[70px] bg-[#DB4444] rounded-md'></div>
                        <h1 className='text-2xl text-[#DB4444]'>Featured</h1>
                    </div>
                    <div className='flex  gap-12 py-6  md:text-2xl font-bold'>
                        <h1>New Arrival</h1>
                    </div>

                    <div className='w-full flex md:flex-row flex-col gap-4 md:gap-4'>
                        <div className='w-full md:w-1/2 h-[600px] bg-black rounded-md bg-[url("/images/feature.png")] bg-cover bg-center bg-no-repeat bg-origin-content'>
                            <div className='text-white flex flex-col justify-end h-full px-10 py-10  items-start '>
                                <h1 className='text-2xl'>PlayStation 5</h1>
                                <h2 className='text-white py-4'>Black and White version of the PS5 <br /> coming out on sale.</h2>
                                <h2 ><Link href={'/'} className='font-bold underline underline-offset-8'>Shop Now</Link></h2>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='w-full h-[300px] border-2 border-black flex md:flex-row flex-col justify-between  bg-black'>
                                <div className='flex flex-col justify-end h-full px-10 py-10  items-start text-white'>
                                    <h1>Women’s Collections</h1>
                                    <p className=' py-4'>Featured woman collections that <br /> give you another vibe.</p>
                                    <h2 ><Link href={'/'} className='font-bold underline underline-offset-8'>Shop Now</Link></h2>
                                </div>
                                <div className=''>
                                    <Image src={'/images/woman.png'} alt={'featured2'} width={450} height={450} />
                                </div>
                            </div>

                            <div className='flex gap-4 md:flex-row flex-col'>
                                <div className='w-full md:w-1/2 h-[280px] border-2 border-black mt-[210px] md:my-4 bg-black flex flex-col justify-center items-center'>
                                <Image src={'/images/speaker.png'} width={150} height={150} alt='speaker' />
                                <div className='mr-14 text-white'>
                                <h1 className="text-2xl font-bold">Speakers</h1>
                                <p className='py-2'>Amazon wireless speakers</p>
                                <h2 ><Link href={'/'} className='font-bold underline underline-offset-8'>Shop Now</Link></h2>
                                </div>
                                </div>
                                <div className='w-full md:w-1/2 h-[280px] border-2 border-black mt  md:my-4 bg-black flex flex-col justify-center items-center'>
                                <Image src={'/images/perfume.png'} width={150} height={150} alt='speaker' />
                                <div className='mr-14 text-white'>
                                <h1 className="text-2xl font-bold">Perfume</h1>
                                <p className='py-2'>GUCCI INTENSE OUD EDP</p>
                                <h2 ><Link href={'/'} className='font-bold underline underline-offset-8'>Shop Now</Link></h2>
                                </div>

                                </div>

                            </div>



                        </div>



                    </div>



                </div>


            </section>
        </>
    )
}

export default Featured