import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { animated as a, config, useTrail } from "react-spring";

const HomeCards = () => {
    const triggerRef = useRef();
    const dataRef = useIntersectionObserver(triggerRef, { freezeOnceVisible: true });

    function useIntersectionObserver(elementRef, { threshold = 0, root = null, rootMargin = '0%', freezeOnceVisible = false }) {
        const [entry, setEntry] = useState();
        const frozen = entry?.isIntersecting && freezeOnceVisible;

        const updateEntry = ([entry]) => {
            setEntry(entry);
        }

        useEffect(() => {
            const node = elementRef?.current;
            const hasIOSupport = !!window.IntersectionObserver;

            if (!hasIOSupport || frozen || !node) return;
            const observerParams = { threshold, root, rootMargin };
            const observer = new IntersectionObserver(updateEntry, observerParams);

            observer.observe(node);

            return () => observer.disconnect();
        }, [elementRef, threshold, root, rootMargin, frozen]);

        return entry;
    }

    const trail = useTrail(6, { from: { opacity: 0, translateX: -100 }, to: { opacity: dataRef?.isIntersecting ? 1 : 0, translateX: dataRef?.isIntersecting ? 0 : -100 }, config: config.gentle });

    return (
        <section className="dark:bg-gray-700  dark:text-white text-gray-600 body-font transition-all ease-in">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-xs text-teal-500 tracking-widest font-medium title-font mb-1">FOUR PEAKS SURGERY CENTER</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 dark:text-white">Explore Our Practice</h1>
                </div>
                <div className="flex flex-wrap -m-4">

                    {/* Here are the cards */}
                    <div ref={triggerRef} />
                    <a.div style={trail[0]} className="p-4 md:w-1/3 ">
                        <div className="flex rounded-lg h-full transition-all hover:-translate-y-2 hover:shadow-md dark:hover:shadow-gray-500 bg-gray-100 p-8 flex-col dark:bg-gray-600">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-teal-500 text-white flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                                    </svg>
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium dark:text-white">Paperwork</h2>
                            </div>
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                <Link href="/paperwork">
                                    <a className="mt-3 text-teal-500 inline-flex items-center group hover:cursor-pointer">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2 group-hover:translate-x-[3px] transition-all" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </a.div>
                    <a.div style={trail[1]} className="p-4 md:w-1/3">
                        <div className="flex rounded-lg transition-all hover:-translate-y-2 hover:shadow-md dark:hover:shadow-gray-500 h-full bg-gray-100 p-8 flex-col dark:bg-gray-600">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-teal-500 text-white flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium dark:text-white">Surgeons</h2>
                            </div>
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                <Link href="/surgeons">
                                    <a className="mt-3 text-teal-500 inline-flex items-center group hover:cursor-pointer">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="group-hover:translate-x-[3px] transition-all w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>

                                    </a>
                                </Link>
                            </div>
                        </div>
                    </a.div><a.div style={trail[2]} className="p-4 md:w-1/3 ">
                        <div className="flex rounded-lg h-full transition-all hover:-translate-y-2 hover:shadow-md dark:hover:shadow-gray-500 bg-gray-100 p-8 flex-col dark:bg-gray-600">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-teal-500 text-white flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium dark:text-white">About</h2>
                            </div>
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                <Link href="/about">
                                    <a className="mt-3 text-teal-500 inline-flex items-center group hover:cursor-pointer">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2 group-hover:translate-x-[3px] transition-all" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </a.div>
                    <a.div style={trail[3]} className="p-4 md:w-1/3 ">
                        <div className="flex rounded-lg h-full transition-all hover:-translate-y-2 hover:shadow-md dark:hover:shadow-gray-500 bg-gray-100 p-8 flex-col dark:bg-gray-600">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-teal-500 text-white flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                    </svg>
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium dark:text-white">Testimonials</h2>
                            </div>
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                <a className="mt-3 text-teal-500 inline-flex items-center group hover:cursor-pointer">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2 group-hover:translate-x-[3px] transition-all" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </a.div>
                    <a.div style={trail[4]} className="p-4 md:w-1/3 ">
                        <div className="flex rounded-lg h-full transition-all hover:-translate-y-2 hover:shadow-md dark:hover:shadow-gray-500 bg-gray-100 p-8 flex-col dark:bg-gray-600">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-teal-500 text-white flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium dark:text-white">Services</h2>
                            </div>
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                <Link href="/services">
                                    <a className="mt-3 text-teal-500 inline-flex items-center group hover:cursor-pointer">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2 group-hover:translate-x-[3px] transition-all" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </a.div>
                    <a.div style={trail[5]} className="p-4 md:w-1/3 ">
                        <div className="flex rounded-lg h-full transition-all hover:-translate-y-2 hover:shadow-md dark:hover:shadow-gray-500 bg-gray-100 p-8 flex-col dark:bg-gray-600">
                            <div className="flex items-center mb-3">
                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-teal-500 text-white flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <h2 className="text-gray-900 text-lg title-font font-medium dark:text-white">Contact</h2>
                            </div>
                            <div className="flex-grow">
                                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                <Link href="/contact">
                                    <a className="mt-3 text-teal-500 inline-flex items-center group hover:cursor-pointer">Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2 group-hover:translate-x-[3px] transition-all" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </a.div>
                </div>
            </div>
        </section>
    )
}

export { HomeCards };