import Link from 'next/link';
import Img from 'next/image';

export const HeroMain = () => {
    return (
        <div className="relative transition-all ease-in">
            <Img
                src="/../public/main-bg.jpg"
                className="absolute object-cover w-full h-full"
                layout='fill'
                alt=""
            />
            <div className="relative bg-gray-900 bg-opacity-75 transition-all ease-in">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12 my-10 py-10">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                Enjoy{' '}<span className="text-teal-300">exceptional care </span><br className="hidden md:block" />
                                and <span className="text-teal-300">surgical precision</span>
                            </h2>
                            <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                                With a wide range of urological procedures, providers, and costs we are able to offer the best possible care to our patients.
                            </p>
                            <Link href='/' className=""><a className='inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-400 hover:text-teal-700'>Learn more</a></Link>
                                <svg className="inline-block w-3 ml-2 text-teal-400" fill="currentColor" viewBox="0 0 12 12">
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                        </div>
                        <div className="max-w-md py-4 px-8 bg-gray-100 shadow-lg rounded-lg my-20 dark:bg-gray-800 transition-all ease-in">
                            <div className="flex justify-center md:justify-end -mt-16">
                                {/* @ts-ignore */}
                                <Img className="w-20 h-20 object-cover rounded-full border-2 border-teal-400" height={'100%'} width={'100%'} src="/../public/main-card.avif" />
                            </div>
                            <div>
                                <h2 className="text-black dark:text-white text-3xl font-semibold">Hear it for yourself...</h2>
                                <p className="mt-2 text-gray-600 dark:text-stone-300">AMAZING staff! This was my top experience at Four Peaks. Treated very well + would highly recommend to others. Also wanted to give kudos to your facility and staff!</p>
                            </div>
                            <div className="flex justify-end mt-4">
                                <Link href="#"><a className="text-xl font-medium text-teal-500 ">Hear More</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};