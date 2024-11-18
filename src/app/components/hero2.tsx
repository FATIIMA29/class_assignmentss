import Image from 'next/image'
import Course1 from '../../../public/slide4.jpg'
import Course2 from '../../../public/slide5.jpg'
export default function section_03() {
  return (
    <div className="flex-col flex sm:flex-row justify-evenly my-5 mx-5">
     
    <div className='border rounded-md border-gray-300 w-[100%] sm:w-6/12  mx-2 mt-4  '>
       <Image alt='slide1' src={Course1} className='p-3 object-cover  rounded-xl'/>
       <p className='m-4'></p>
    </div>
        
    <div className='border rounded-md border-gray-300 w-[100%] sm:w-6/12 mx-2 mt-4  '>
       <Image alt='slide1' src={Course2} className='p-3 object-cover  rounded-xl'/>
       <p className='m-2  '></p>
    </div>
 
    </div>
  );
};