import Img from 'next-image-export-optimizer';
import axios from 'axios';
import { useState, useEffect } from 'react';
// @ts-ignore
import { useSprings, animated } from 'react-spring';

const Surgeons = () => {
    const [loading, setLoading] = useState(false);
    const [surgeons, setSurgeons] = useState([]);

    async function getSurgeons() {
        setLoading(true);
        await axios.get('https://firestore.googleapis.com/v1/projects/fourpeaks-sc/databases/(default)/documents/Surgeons')
            .then((res) => {
                console.log('inside the function', res.data.documents);
                res.data.documents.forEach(document => {
                    document.index = res.data.documents.indexOf(document);
                })
                window.localStorage.setItem('surgeonData', JSON.stringify(res.data.documents));
                setLoading(false)
                setSurgeons(res.data.documents);
            });
    }

    useEffect(() => {
        // @ts-ignore
        window.localStorage.getItem('surgeonData') === null ? getSurgeons() : setSurgeons(JSON.parse(window.localStorage.getItem('surgeonData')));
        setLoading(false)
    }, []);

    const springs = useSprings(
        surgeons.length,
        surgeons.map((item, index) => ({ from: { opacity: 0, translateY: 100 }, to: { opacity: 1, translateY: 0 }, delay: index * 55 }))
    );

    return (<>
        <section className="dark:text-gray-200 dark:bg-gray-700 text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto ">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 dark:text-teal-400 tracking-widest">OUR TEAM</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-gray-400">See more of what our surgeons have to offer from past experiences, informational confrences, and their own biographies</p>
                </div>
                <div className="flex flex-wrap -m-4 justify-center">
                    {surgeons.map((surgeon, index) => {
                        // @ts-ignore
                        let lastName = surgeon.fields.surgeon.mapValue.fields.name.stringValue.split(' ');
                        lastName = lastName[lastName.length - 2];
                        lastName = lastName.substring(0, lastName.length - 1).toLowerCase();

                        return (
                            <animated.div style={springs[index]} className="p-4 lg:w-1/2 md:w-full rounded-md" key={index}>
                                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                    {/* @ts-ignore */}
                                    <Img className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-top sm:mb-0 mb-4 lg:rounded-full" alt={surgeon.fields.surgeon.mapValue.fields.name.stringValue} aria-label={surgeon.fields.surgeon.mapValue.fields.name.stringValue} src={lastName !== "devakumar" ? `https://www.academic-urology.com/images/${lastName}-cutout.png` : `https://www.academic-urology.com/images/${lastName}.png`} />
                                    <div className="flex-grow sm:pl-8">
                                        {/* @ts-ignore */}
                                        <h2 className="title-font font-medium text-lg text-teal-500 dark:text-teal-400 mb-3">{surgeon.fields.surgeon.mapValue.fields.name.stringValue}</h2>
                                        {/* @ts-ignore */}
                                        <p className="mb-4">{surgeon.fields.surgeon.mapValue.fields.description.stringValue}</p>
                                        <p className="text-right w-full -mt-4">
                                            {/* @ts-ignore */}
                                            <a className="text-teal-500 inline-flex items-center group hover:cursor-pointer" target="_blank" rel='noreferrer' href={surgeon.fields.surgeon.mapValue.fields.long_description.stringValue}>Learn More
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2 group-hover:translate-x-[3px] transition-all" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </animated.div>
                        )
                    })
                    }
                </div>
            </div>
        </section>
    </>)
}

export { Surgeons };