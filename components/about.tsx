import Link from 'next/link';
import Img from 'next-image-export-optimizer'
import { useSpring, animated } from 'react-spring';

const About = () => {
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
                    <animated.p style={contentSpring} className="mb-8 leading-relaxed dark:text-gray-300">Four Peaks Surgery Center is a privately owned Urology and Urogynecology Outpatient surgical center by Dr. Jeffery Stern, Dr. David Kaplan, Dr. Aaron LaTowsky, and Dr. Jennifer Klauschie. These four partners offer amazing surgical and patient care and leave patients satisfied. <br /><br /> While they are the four proprietors, Dr. Chandan Kundavaram, Dr. Keri Wong, Dr. Amy Schlaifer, Dr. John Mai, and Dr. Hemikaa Devakumar also offer their amazing surgical services here at Four Peaks!<br /><br /> Daily operations are handled and ran by Nurse Administrator Michelle Kastler and Assistant Administrator Kriston Bertelsen!<br /><br /> Four Peaks Surgery Center is staffed with an amazing surgical and clinical staff, as well as helpful office staff tasked with helping patients and ensuring their happiness with their surgery, as well as providing easy and quick scheduling!<br /><br />Our other providers join us via Academic Urology and Urogynecology of Arizona (AUUA), give them a call to get your pre-surgery appointment information.</animated.p>
                    <div className="flex justify-center">
                        <animated.button style={buttonSpring} className="inline-flex text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg">Contact AUUA</animated.button>
                        <animated.button style={buttonSpring} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 dark:bg-gray-200 dark:hover:bg-gray-300 rounded text-lg"><Link href="https://www.academic-urology.com/about-us.html"><a target="_blank">Learn More</a></Link></animated.button>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export { About }