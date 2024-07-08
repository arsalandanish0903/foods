import React from 'react'

function Cards() {
  return (
    <>
      <div className='md:container md:columns-4 px-16 my-8 h-auto w-full'>
        <div className='group bg-white shadow-lg h-56 w-full flex flex-col items-start justify-center px-8 hover:bg-[#FEA116] hover:text-white transition-all duration-75 ease-in delay-75 rounded-md'>
          <i className="fa fa-user-secret text-4xl text-[#FEA116] group-hover:text-white" aria-hidden="true"></i>
          <h3 className='font-bold my-1 text-2xl '>Master Chefs</h3>
          <p className='mb-0'>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
        </div>
        <div className='group bg-white shadow-lg h-56 w-full flex flex-col items-start justify-center px-8 hover:bg-[#FEA116] hover:text-white transition-all duration-75 ease-in delay-75 rounded-md'>
          <i className="fa fa-cutlery text-4xl text-[#FEA116] group-hover:text-white" aria-hidden="true"></i>
          <h3 className='font-bold my-1 text-2xl'>Quality Food</h3>
          <p className='mb-0'>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
        </div>
        <div className='group bg-white shadow-lg h-56 w-full flex flex-col items-start justify-center px-8 hover:bg-[#FEA116] hover:text-white transition-all duration-75 ease-in delay-75 rounded-md'>
          <i className="fa fa-cart-plus text-4xl text-[#FEA116] group-hover:text-white" aria-hidden="true"></i>
          <h3 className='font-bold my-1 text-2xl'>Online Order</h3>
          <p className='mb-0'>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
        </div>
        <div className='group bg-white shadow-lg h-56 w-full flex flex-col items-start justify-center px-8 hover:bg-[#FEA116] hover:text-white transition-all duration-75 ease-in delay-75 rounded-md'>
          <i className="fa fa-headphones text-4xl text-[#FEA116] group-hover:text-white" aria-hidden="true"></i>
          <h3 className='font-bold my-1 text-2xl'>24/7 Service</h3>
          <p className='mb-0'>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
        </div>
      </div>
    </>
  )
}

export default Cards