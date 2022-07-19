import Link from 'next/link';
import Img from 'next-image-export-optimizer'
import { useSpring, animated } from 'react-spring';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const About = () => {
    const [loading, setLoading] = useState(false);
    const [about, setAbout] = useState(``);

    const headerSpring = useSpring({
        from: { opacity: 0, scale: 0.2 },
        to: { opacity: 1, scale: 1 },
        config: { duration: 1000 },
        delay: 1000 - 750
    });
    const subtitleSpring = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 500 },
        delay: 2250 - 750
    })
    const contentSpring = useSpring({
        from: { opacity: 0, },
        to: { opacity: 1, },
        config: { duration: 500 },
        delay: 2500
    });
    const buttonSpring = useSpring({
        from: { opacity: 0, },
        to: { opacity: 1, },
        config: { duration: 1250 },
        delay: 3575 - 750
    });

    async function getAbout() {
        // setLoading(true);
        await axios.get('https://firestore.googleapis.com/v1/projects/fourpeaks-sc/databases/(default)/documents/pages/about')
            .then((res) => {
                console.log('inside the function', res.data);
                window.localStorage.setItem('aboutData', JSON.stringify(res.data.fields.main_body.stringValue));
                setAbout(res.data.fields.main_body.stringValue);
                // setLoading(false)
                // setAbout(res.data);
            });
    }

    useEffect(() => {
        // @ts-ignore
        window.localStorage.getItem('aboutData') === null | undefined 
        ? getAbout() 
        : setAbout(JSON.parse(window?.localStorage.getItem('aboutData')));

        console.log(`Looks like we have data in localStorage: ${window.localStorage.getItem('aboutData')}`);
        // setLoading(false)
    }, []);
    
    loading ? <div>Loading...</div> : null;
    return (<>
        <section className="text-gray-600 body-font min-h-full my-15 dark:bg-gray-700">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <Img className="object-cover object-center rounded border-white" alt="hero" src="about-surgeon.avif" height={'720px'} width={'600px'} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <animated.h1 style={headerSpring} className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-200">Four Peaks
                        <br className="hidden lg:inline-block" /> Surgery Center
                    </animated.h1>
                    <animated.h2 style={subtitleSpring} className="text-md pb-5 -mt-2 dark:text-gray-400">And what it&apos;s all about</animated.h2>
                    <animated.p style={contentSpring} className="mb-8 leading-relaxed dark:text-gray-300"><div style={{whiteSpace: 'pre-line'}}>{(about).replaceAll(`<br />`, `\n`)}</div></animated.p>
                    <div className="flex justify-center">
                        <animated.button style={buttonSpring} className="inline-flex text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg active:bg-teal-700"><a href="https://www.academic-urology.com/contact-us.cfm">Contact AUUA</a></animated.button>
                        <animated.button style={buttonSpring} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 dark:bg-gray-200 dark:hover:bg-gray-300 rounded text-lg"><Link href="https://www.academic-urology.com/about-us.html"><a target="_blank">Learn More</a></Link></animated.button>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export { About }