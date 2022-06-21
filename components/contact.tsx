import { useTrail, useSpring, animated, config } from 'react-spring';

const Contact = () => {
    const trails = useTrail(3, {
        from: { opacity: 0, translateY: 50 },
        to: { opacity: 1, translateY: 0 },
        delay: 1500
    });
    const bgSpring = useSpring({ from: { opacity: 0 }, config: config.gentle, to: { opacity: 1 } });

    const closeCard = () => {
        document.querySelector(`#hide-card`)?.remove()
    }
    return (
        <section className="text-gray-600 body-font relative min-h-[80vh]">
            <animated.div className="hover:blur-none  lg:blur-sm md:blur-sm transition-all duration-500 absolute inset-0 bg-gray-300 dark:bg-gray-700 contrast-[1.05] dark:invert-[85%] dark:contrast-[1.05]">
                <iframe width="100%" height="100%" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.7478607717476!2d-112.26588958479579!3d33.63777908072076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b42eb42a4f5bf%3A0x336ca4f0f302ff2e!2sFour%20Peaks%20Surgery%20Center!5e0!3m2!1sen!2sus!4v1655761710582!5m2!1sen!2sus"></iframe>
            </animated.div>
            <animated.div style={trails[0]} className="container lg:px-24 lg:py-24 mx-auto" id="hide-card">
                <div className="lg:w-1/2 md:w-1/2 bg-white dark:bg-gray-800 dark:border-gray-600  rounded-xl p-8 flex flex-col md:ml-auto w-full lg:mt-10 md:mt-0 relative z-10 shadow-md border-4">
                    <h2 className="text-teal-400 dark:text-teal-500 text-lg mb-1 font-medium title-font flex w-full">Contact Us<button onClick={closeCard} className='ml-auto lg:hidden md:hidden'>X</button></h2>
                    <p className="leading-relaxed mb-5 text-gray-700 dark:text-gray-300">Feel free to reach out with your comments or concerns</p>

                    {/* Start of cards */}
                    <animated.div style={trails[1]} className="p-2 w-full mx-auto">
                        <div className="hover:shadow-lg hover:-translate-y-2 transition-all hover:cursor-default flex border-2 dark:shadow-gray-700 bg-gray-50 rounded-lg dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 border-gray-300 border-opacity-50 p-8 sm:flex-row flex-col">
                            <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-teal-100 text-teal-500 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-teal-400 dark:text-teal-500 text-lg title-font font-medium mb-3">Phone and Fax</h2>
                                <p className="leading-relaxed text-base">Phone: <a className="font-bold" href="tel:+16233996880">(623) 399-6880</a></p>
                                <p className="leading-relaxed text-base">Fax: (623) 322-1504</p>
                                <p className="leading-relaxed text-base">Weekdays 8:00am - 5:00pm</p>

                            </div>
                        </div>
                    </animated.div>

                    <animated.div style={trails[2]} className="p-2 w-full mx-auto">
                        <div className="hover:shadow-lg hover:-translate-y-2 transition-all hover:cursor-default flex border-2 dark:shadow-gray-700 bg-gray-50 rounded-lg dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 border-gray-300 border-opacity-50 p-8 sm:flex-row flex-col">
                            <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-teal-100 text-teal-500 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-teal-400 dark:text-teal-500 text-lg title-font font-medium mb-3">Visit Our Location</h2>
                                <p className="leading-relaxed text-base">9425 West Bell Road<br />Sun City, Arizona 85383<br />Weekdays 8:00am - 5:00pm</p>
                            </div>
                        </div>
                    </animated.div>
                </div>
            </animated.div>
        </section>
    )
}

export { Contact }