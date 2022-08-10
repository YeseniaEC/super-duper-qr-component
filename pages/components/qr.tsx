import React from 'react'
import Image from 'next/image';


function Qr
() {
  return (
		<div className='h-[497px] w-80 mx-[28px] bg-white rounded-xl'>
			<div className='pt-4 mt-0 mx-4 mb-6'>
				<Image
					src='/images/image-qr-code.png'
					alt='QR Code'
					height={288}
                  width={288}
                  objectFit='fill'
					className='rounded-lg'
				/>
			</div>
			<div id='text' className='h-[129px] w-[288px] mx-4 '>
				<h1 className='font-Outfit font-bold text-center text-[22px] mx-4 leading-[27.72px] mb-4'>
					Improve your front-end skills by building projects
				</h1>
				<h2 className='text-[15px] font-Outfit text-center mx-4 leading-[18.9px]'>
					Scan the QR code to visit Frontend Mentor and take your coding skills
					to the next level
				</h2>
			</div>
		</div>
	);
}

export default Qr
   