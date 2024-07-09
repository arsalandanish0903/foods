import React from 'react'





function Image() {
    const images = [
        { src: 'https://foods-images.netlify.app/images/about1.jpg', alt: 'About Image 1' },
        { src: 'https://foods-images.netlify.app/images/about2.jpg', alt: 'About Image 1' },
        { src: 'https://foods-images.netlify.app/images/about3.jpg', alt: 'About Image 1' },
        { src: 'https://foods-images.netlify.app/images/about4.jpg', alt: 'About Image 1' }
    ]
    return (
        <>
            <div className="container mx-auto px-16 my-8 z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {images.map((image, index) => (
                            <img src={image.src} alt={image.alt} key={index}
                                className="object-cover h-56 w-full"
                            />
                        ))}
                    </div>
                    <div className="pl-6 py-5 align-middle">
                        <h5 className='about-us-title after-line text-xl font-bold text-[#FEA116]'>About Us</h5>
                        <p className='font-bold text-4xl my-2'>Welcome to <i className="fa fa-cutlery px-2 text-[#FEA116] text-2xl" aria-hidden="true"></i> Restoran</p>
                        <p className='text-lg text-gray-500 my-5'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                        <p className='text-lg text-gray-500 my-5'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <div className='md:flex md:items-center md:justify-between md:columns-2'>
                            <div className="flex items-center mb-4 md:mb-0">
                                <div className='pr-5'>
                                    <h5 className='font-bold text-6xl text-[#FEA116]'>15</h5>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-xl'>Years Of</span>
                                    <strong className='text-2xl'>Experience</strong>
                                </div>
                            </div>
                            <div className="flex items-center mb-4 md:mb-0">
                                <div className='pr-5'>
                                    <h5 className='font-bold text-6xl text-[#FEA116]'>15</h5>
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-xl'>Popular</span>
                                    <strong className='text-2xl'>Master Chef</strong>
                                </div>
                            </div>
                            <button className='bg-[#FEA116] text-white px-5 py-3 font-bold rounded hover:bg-yellow-500'>Read More</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Image