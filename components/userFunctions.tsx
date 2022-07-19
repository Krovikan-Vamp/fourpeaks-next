import Router from 'next/router';
import Head from 'next/head';
import { UserInfo } from '../utils/interfaces.ts';
import React from 'react';
import Link from 'next/link';
import { useSpring, useTrail, animated } from 'react-spring';

const UserFunctions = () => {
    let user: UserInfo | null = null;

    const logout = () => {
        localStorage.removeItem('userInfo');
        localStorage.removeItem('userSessionToken');
        Router.push('/login')
    }





    if (localStorage.getItem('userInfo') === null) {
        alert(`Looks like you are not logged in, we're redirecting you to the login page.`);
        Router.push('/login')

        return null;

    } else if (localStorage.getItem('userInfo') !== null) {
        console.log(`User info found in cookie storage`);
        user = JSON.parse(localStorage.getItem('userInfo'));
        let testimonialMonths = sessionStorage.getItem(`testimonials`) ? [...new Set(JSON.parse(sessionStorage.getItem('testimonials')).map((o) => o.fields.date_M_Y.stringValue))] : [];
        const testStatSpring2 = useSpring({
            from: { val: 0 },
            to: { val: testimonialMonths.length },
            config: { friction: 250 },
            delay: 500,
        })
        const physStatSpring = useSpring({
            from: { val: 0 },
            to: { val: JSON.parse(localStorage.getItem('physicians') || '[]').length },
            config: { friction: 250 },
            delay: 500,
        })

        const testStatSpring = useSpring({
            from: { val: 0 },
            to: { val: JSON.parse(sessionStorage.getItem('testimonials') || '[]').length },
            config: { friction: 250 },
            delay: 500,
        })

        const mainCardTrails = useTrail(6, {
            from: { opacity: 0, transform: 'translateX(-175px)' },
            to: { opacity: 1, transform: 'translateX(0px)' },

        })

        return (<>
            <Head>
                <title>Welcome {user.email.split(`@`)[0]}!</title>
            </Head>
            <div className="container mx-auto pt-14 -mb-24">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Good to see you, {user.email.split(`@`)[0]}! <button onClick={logout} className="hover:underline text-teal-400 translate-x-10">Logout</button></h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">Here are you are able to manage users, add testimonials, view physician information, and change site information. In the event of any issues or bugs please contact Zack.</p>
                </div>
            </div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">

                        <animated.div style={mainCardTrails[0]} className="p-4 lg:w-1/3 ">
                            <div className="transition-all hover:-translate-y-3 hover:shadow-md h-full bg-gray-200 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CONTACTS</h2>
                                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Physician Contact Information</h1>
                                <p className="leading-relaxed mb-3">View the physician contact information that has been collected with Speckles, the medical records software.</p>
                                <Link href="/users/physicians">
                                    <a className="group text-teal-500 inline-flex items-center">View Contact Information
                                        <svg className="group-hover:translate-x-1 transition-all w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </Link>
                                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>&nbsp;<animated.span>{physStatSpring.val.to(val => Math.floor(val) * 2)}</animated.span>
                                    </span>
                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>&nbsp;<animated.span>{physStatSpring.val.to(val => Math.floor(val))}</animated.span>
                                    </span>
                                </div>
                            </div>
                        </animated.div>
                        <animated.div style={mainCardTrails[1]} className="p-4 lg:w-1/3 ">
                            <div className="transition-all hover:-translate-y-3 hover:shadow-md h-full bg-gray-200 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">PATIENT SATISFACTION</h2>
                                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Add Patient Testimonials</h1>
                                <p className="leading-relaxed mb-3">Add patient testimonials as requested per administration after choosing month and year. </p>
                                <Link href="/users/testimonial_upload">
                                    <a className="group text-teal-500 inline-flex items-center">Add Testimonial
                                        <svg className="group-hover:translate-x-1 transition-all w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </Link>
                                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                        </svg>&nbsp;<animated.span>{testStatSpring.val.to(val => Math.floor(val))}</animated.span>
                                    </span>
                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>&nbsp;<animated.span>{testStatSpring2.val.to(val => Math.floor(val))}</animated.span>
                                    </span>
                                </div>
                            </div>
                        </animated.div>
                        <animated.div style={mainCardTrails[2]} className="p-4 lg:w-1/3 ">
                            <div className="transition-all hover:-translate-y-3 hover:shadow-md h-full bg-gray-200 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">INFORMATION</h2>
                                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Manage About Information</h1>
                                <p className="leading-relaxed mb-3">Change information available on the <Link href="/about"><span className="text-teal-500 hover:cursor-pointer">About</span></Link> page. This page contains important information regarding the staff , services, and programs of the practice.</p>
                                <a className="group text-teal-500 inline-flex items-center"><Link href="/users/manage/about">Manage About</Link>
                                    <svg className="group-hover:translate-x-1 transition-all w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>1.2K
                                    </span>
                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>6
                                    </span>
                                </div>
                            </div>
                        </animated.div>

                        {/* ============================================== SECOND ROW ==============================================  */}
                        <animated.div style={mainCardTrails[3]} className="p-4 lg:w-1/3 ">
                            <div className="transition-all hover:-translate-y-3 hover:shadow-md h-full bg-gray-200 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">INFORMATION</h2>
                                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Manage Paperwork Information</h1>
                                <p className="leading-relaxed mb-3">Change documents, descriptions, and more regarding the paperwork for patients.</p>
                                <a className="group text-teal-500 inline-flex items-center"><Link href="/users/manage/paperwork">Manage Paperwork</Link>
                                    <svg className="group-hover:translate-x-1 transition-all w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>1.2K
                                    </span>
                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>6
                                    </span>
                                </div>
                            </div>
                        </animated.div>
                        <animated.div style={mainCardTrails[4]} className="p-4 lg:w-1/3 ">
                            <div className="transition-all hover:-translate-y-3 hover:shadow-md h-full bg-gray-200 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">INFORMATION</h2>
                                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Manage Services Information</h1>
                                <p className="leading-relaxed mb-3">Change the services and descriptions provided by Four Peaks Surgery Center.</p>
                                <a className="group text-teal-500 inline-flex items-center"><Link href="/users/manage/services">Manage Services</Link>
                                    <svg className="group-hover:translate-x-1 transition-all w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>1.2K
                                    </span>
                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>6
                                    </span>
                                </div>
                            </div>
                        </animated.div>
                        <animated.div style={mainCardTrails[5]} className="p-4 lg:w-1/3 ">
                            <div className="transition-all hover:-translate-y-3 hover:shadow-md h-full bg-gray-200 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">INFORMATION</h2>
                                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Manage Surgeon Information</h1>
                                <p className="leading-relaxed mb-3">Change the information available on the Surgeons page. Add, remove, and update surgeon information.</p>
                                <a className="group text-teal-500 inline-flex items-center"><Link href="/users/manage/surgeons">Manage Surgeons</Link>
                                    <svg className="group-hover:translate-x-1 transition-all w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>1.2K
                                    </span>
                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>6
                                    </span>
                                </div>
                            </div>
                        </animated.div>
                    </div>
                </div>
            </section>

        </>)
    } else {
        Router.push('/')
    }




}


export { UserFunctions } 