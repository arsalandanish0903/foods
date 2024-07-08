import React from 'react';
import Cards from '../Components/Cards';
import Image from '../Components/Image';
import Tabs from '../Components/Tabs';

function Home() {
    return (
        <>
            <div className='relative h-screen w-full overflow-hidden'>
                <div className='bg-[url("./public/images/bg-hero.jpg")] bg-cover bg-center h-full w-full absolute top-0'>
                    <div className='bg-black bg-opacity-70 h-full w-full absolute top-0'></div>
                    <div className='p-8 md:p-16 relative w-full flex flex-col md:flex-row md:items-center h-full'>
                        <div className='md:w-1/2 mb-6 md:mb-0 md:mr-3 mt-24'>
                            <h1 className='text-white text-3xl md:text-5xl font-bold py-2'>Enjoy Our Delicious Meal</h1>
                            <p className='text-white text-lg md:text-xl py-4'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <button className='bg-[#FEA116] font-bold text-white px-4 py-2 focus:outline-none my-4 rounded hover:bg-yellow-500'>Book A Table</button>
                        </div>
                        <div className='md:w-1/2 flex justify-center md:p-11'>
                            <img
                                className='w-3/4 md:w-full h-auto object-cover animate-imgRotate'
                                src="./public/images/hero.png"
                                alt="Hero Image"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Cards />
            <Image />
            <Tabs />
        </>
    );
}

export default Home;
