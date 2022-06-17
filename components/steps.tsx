import { animated, useTrail } from "react-spring";
import { useState, useEffect, useRef } from "react";

const Steps = () => {
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

    const trail = useTrail(4, { from: { opacity: 0, translateY: 100 }, to: { opacity: dataRef?.isIntersecting ? 1 : 0, translateY: dataRef?.isIntersecting ? 0 : 100 } });

    return (
        <section className="text-gray-600 body-font dark:text-white dark:bg-gray-800 border-y-4 border-teal-400 bg-gray-100 transition-all ease-linear">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <animated.div style={trail[0]} className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-2 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-teal-400 text-white relative z-10 title-font font-medium text-sm">2017</div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <div className="flex-shrink-0 w-24 h-24 bg-teal-100 dark:bg-teal-200 dark:text-teal-600 text-teal-500 rounded-full inline-flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                            </svg>
                        </div>
                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                            <h2 className="font-medium title-font text-gray-900 dark:text-gray-300 mb-1 text-xl">Grand Opening</h2>
                            <p className="leading-relaxed">Four providers (Aaron LaTowsky, Jennifer Klauschie, Jeffrey Stern, David Kaplan) from Academic Urology open Four Peaks Surgery Center to perform services outside of the hospital and office environments.</p>
                        </div>
                    </div>
                </animated.div>
                <animated.div style={trail[1]} className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-2 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-teal-400 text-white relative z-10 title-font font-medium text-sm">2018</div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <div className="flex-shrink-0 w-24 h-24 bg-teal-100 dark:bg-teal-200 dark:text-teal-600 text-teal-500 rounded-full inline-flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                            </svg>
                        </div>
                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                            <h2 className="font-medium title-font text-gray-900 dark:text-gray-300 mb-1 text-xl">Insurance Contracted</h2>
                            <p className="leading-relaxed">Many more insurance providers began to accept and join contracts with Four Peaks Surgery Center as a provider at a cheaper cost to policy-holders.</p>
                        </div>
                    </div>
                </animated.div>

                <animated.div style={trail[2]} className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-2 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-teal-400 text-white relative z-10 title-font font-medium text-sm">2019</div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <div className="flex-shrink-0 w-24 h-24 bg-teal-100 dark:bg-teal-200 dark:text-teal-600 text-teal-500 rounded-full inline-flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                            <h2 className="font-medium title-font text-gray-900 dark:text-gray-300 mb-1 text-xl">Patient Count Grows</h2>
                            <p className="leading-relaxed">2019 was a year of large growth for both patient satisfaction and Four Peaks&apos; productivity. The total amount of cases increased by <span className="font-bold">150%</span> Better yet, it kept growing.</p>
                        </div>
                    </div>
                </animated.div>
            <div ref={triggerRef} />

                <animated.div style={trail[2]} className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-2 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-teal-400 text-white relative z-10 title-font font-medium text-sm">2020</div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <div className="flex-shrink-0 w-24 h-24 bg-teal-100 dark:bg-teal-200 dark:text-teal-600 text-teal-500 rounded-full inline-flex items-center justify-center">
                            <svg width="24" height="28" className="scale-150 rotate-45" xmlns="http://www.w3.org/2000/svg"><path d="M14 22h-4c-.8 0-1.602-1.123-2.274-2.726L5 22l-1-1v-4l2.383-2.383C6.14 13.325 6 12.057 6 11c0-4 3-9 6-9s6 5 6 9c0 1.058-.14 2.325-.383 3.617L20 17v4l-1 1-2.726-2.726C15.602 20.877 14.801 22 14 22Zm-2-2h-1.615a3.136 3.136 0 0 1-.179-.249c-.347-.532-.72-1.365-1.059-2.383C8.455 15.29 8 12.755 8 11c0-3.198 2.444-7 4-7s4 3.802 4 7c0 1.755-.455 4.291-1.147 6.368-.34 1.018-.712 1.85-1.06 2.383a3.136 3.136 0 0 1-.178.249H12Zm0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fillRule="evenodd" /></svg>
                        </div>
                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                            <h2 className="font-medium title-font text-gray-900 dark:text-gray-300 mb-1 text-xl">To be continued...</h2>
                            <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                        </div>
                    </div>
                </animated.div>

            </div>
        </section>
    )
}

export { Steps }