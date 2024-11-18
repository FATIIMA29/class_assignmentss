import Image from 'next/image'
import Course1 from '../../../public/card1.jpg'
import Course2 from '../../../public/card2.jpg'
import Course3 from '../../../public/card.png'
export default function section_03() {
  return (
    <div className="">
      <h1 className=" mx-6 my-7 py-10 font-extrabold text-4xl text-center text-[#044e83] ">
        Core Courses Sequence
      </h1>
      <div className="mt-10 space-y-40 md:space-y-0 ml-3 md:flex">
        <div className="border-none shadow-xl shadow-gray-200 w-[80%] h-[320px] rounded-xl mx-5 md:w-[33%] object-fill hover:scale-105 transition-all duration-300">
          <Image
            src={Course1}
            alt="Courses Iamge"
          
            className="w-full h-[400px] object-cover  rounded-xl md:w-[100%] md:h-[250px] "
          ></Image>
          <p className="text-center font-bold text-xl text-gray-600 py-4">
            Programing Fundamentals
          </p>
        </div>
        <div className="border-none shadow-xl shadow-gray-200 w-[80%] h-[320px] rounded-xl mx-5 md:w-[33%] object-fill hover:scale-105 transition-all duration-300">
          <Image
            src={Course2}
            alt="Courses Iamge"
            
            className="w-full h-[400px] object-cover  rounded-xl md:w-[100%] md:h-[250px] "
          ></Image>
          <p className="text-center font-bold text-xl text-gray-600 py-4">
            Web2 Using Next.js
          </p>
        </div>
        <div className="border-none shadow-xl shadow-gray-200 w-[80%] h-[320px] rounded-xl mx-5 md:w-[33%] object-fill hover:scale-105 transition-all duration-300">
          <Image
            src={Course3}
            alt="Courses Iamge"
          
            className="w-full h-[400px] object-cover  rounded-xl md:w-[100%] md:h-[250px] "
          ></Image>
          <p className="text-center font-bold text-xl text-gray-600 py-4">
            Earn As You Learn
          </p>
        </div>
      </div>
    </div>
  );
};