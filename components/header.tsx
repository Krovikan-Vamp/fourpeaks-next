import { useState, useEffect } from 'react';
import Link from 'next/link';
// @ts-ignore
import ToggleDM from './darkToggle.tsx';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="dark:bg-gray-800 bg-gray-100 transition-all ease-in border-b-4 border-teal-400">
            <div className="px-4 py-6 mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between lg:justify-center lg:space-x-16">
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        <li className="p-1 rounded-lg">
                            <Link href="/about" aria-label="Our product" title="Our product">
                                <a className="font-medium tracking-wide dark:text-gray-100">About</a>
                            </Link>
                        </li>
                        <li className="p-1 rounded-lg inline-flex items-center">
                            <Link href="/patients" aria-label="Our product" title="Our product">
                                <a className="peer  font-medium tracking-wide dark:text-gray-100">Patients</a>
                            </Link>
                            <div className="hidden dark:bg-gray-700 transition-all ease-in peer-hover:flex hover:flex flex-col bg-white drop-shadow-lg absolute z-10 translate-y-[6rem] rounded-md">
                                <Link href="/paperwork"><a className='px-5 py-3 dark:text-white dark:hover:text-black hover:bg-gray-300 hover:rounded-md'>Paperwork</a></Link>
                                <Link href="/services"><a className='px-5 py-3 dark:text-white dark:hover:text-black hover:bg-gray-300'>Services</a></Link>
                                <Link href="/surgeons"><a className='px-5 py-3 dark:text-white dark:hover:text-black hover:bg-gray-300'>Testimonials</a></Link>
                                <hr />
                                <Link href="/contact"><a className='px-5 py-3 dark:text-white dark:hover:text-black hover:bg-gray-300 hover:rounded-md'>One Medical Passport</a></Link>
                            </div>
                        </li>
                    </ul>
                    <svg className="w-8 text-teal-400" viewBox="0 0 24 24" strokeLinejoin="round" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" stroke="currentColor" fill="none">
                        <rect x="3" y="1" width="7" height="12" />
                        <rect x="3" y="17" width="7" height="6" />
                        <rect x="14" y="1" width="7" height="6" />
                        <rect x="14" y="11" width="7" height="12" />
                    </svg>
                    <span className="ml-2 text-xl font-bold tracking-wide dark:text-gray-100 uppercase">
                        <Link href="/" aria-label="Company" title="FPSC" className="inline-flex items-center">
                            Four Peaks Surgery Center
                        </Link>
                    </span>
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        <li className="p-1 rounded-lg">
                            <Link href="/surgeons" aria-label="About us" title="About us" className="font-medium tracking-wide dark:text-gray-100">
                                <a className="font-medium tracking-wide dark:text-gray-100">
                                    Surgeons
                                </a>
                            </Link>
                        </li>
                        <li className="p-1 rounded-lg">
                            <Link href="/contact" aria-label="Product pricing" title="Product pricing" className="font-medium tracking-wide dark:text-gray-100">
                                <a className="font-medium tracking-wide dark:text-gray-100">
                                    Contact
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <div className="lg:hidden z-10">
                        <button aria-label="Open Menu" title="Open Menu" className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline" onClick={() => setIsMenuOpen(true)}>
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z" />
                                <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z" />
                                <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z" />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full ">
                                <div className="transition-all p-5 bg-white border-2 dark:border-teal-400 rounded shadow-lg dark:bg-gray-800">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="inline-flex items-center hover:cursor-pointer">
                                            <svg className="w-8 text-teal-400" viewBox="0 0 24 24" strokeLinejoin="round" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" stroke="currentColor" fill="none">
                                                <rect x="3" y="1" width="7" height="12" />
                                                <rect x="3" y="17" width="7" height="6" />
                                                <rect x="14" y="1" width="7" height="6" />
                                                <rect x="14" y="11" width="7" height="12" />
                                            </svg>
                                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase dark:text-gray-100">Four Peaks Surgery Center</span>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-3 ">
                                            <li className="p-1 rounded-lg w-fit">
                                                <Link href="/about" aria-label="Our product" title="Our product">
                                                    <a className="font-medium tracking-wide text-gray-700 dark:text-gray-200 transition-colors duration-200 dark:hover:text-teal-400 hover:text-teal-400">About</a>
                                                </Link>
                                            </li>
                                            <li className="p-1 rounded-lg inline-flex items-center">
                                                <Link href="/patients" aria-label="Our product" title="Our product">
                                                    <a className="peer  font-medium tracking-wide dark:text-gray-100">Patients</a>
                                                </Link>
                                                <div className="hidden dark:bg-gray-700 transition-all ease-in peer-hover:flex hover:flex flex-col bg-white drop-shadow-lg absolute z-10 translate-y-[6rem] rounded-md">
                                                    <Link href="/paperwork"><a className='px-5 py-3 dark:text-white dark:hover:text-black hover:bg-gray-300 hover:rounded-md'>Paperwork</a></Link>
                                                    <Link href="/services"><a className='px-5 py-3 dark:text-white dark:hover:text-black hover:bg-gray-300'>Services</a></Link>
                                                    <Link href="/surgeons"><a className='px-5 py-3 dark:text-white dark:hover:text-black hover:bg-gray-300'>Testimonials</a></Link>
                                                    <hr />
                                                    <Link href="/contact"><a className='px-5 py-3 dark:text-white dark:hover:text-black hover:bg-gray-300 hover:rounded-md'>One Medical Passport</a></Link>
                                                </div>
                                            </li>
                                            <li className="p-1 rounded-lg w-fit">
                                                <Link href="/surgeons" aria-label="Product pricing" title="Product pricing">
                                                    <a className="font-medium tracking-wide text-gray-700 dark:text-gray-200 transition-colors duration-200 dark:hover:text-teal-400 hover:text-teal-400">Surgeons</a>
                                                </Link>
                                            </li>
                                            <li className="p-1 rounded-lg w-fit">
                                                <Link href="/contact" aria-label="About us" title="About us">
                                                    <a className="font-medium tracking-wide text-gray-700 dark:text-gray-200 transition-colors duration-200 dark:hover:text-teal-400 hover:text-teal-400">Contact</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Darkmode button */}
                    <div className="flex items-center justify-end">
                        <ToggleDM />
                    </div>

                </div>
            </div>

        </div>
    );
};

export { Header };