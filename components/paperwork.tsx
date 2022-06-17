import { useSprings, animated } from 'react-spring';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

const Paperwork = () => {
    const [loading, setLoading] = useState(false);
    const [paperwork, setPaperwork] = useState([]);

    async function getPaperwork() {
        setLoading(true);
        await axios.get('https://firestore.googleapis.com/v1/projects/fourpeaks-sc/databases/(default)/documents/Paperwork?orderBy=name')
            .then((res) => {
                console.log('inside the function', res.data.documents);
                res.data.documents.forEach(document => {
                    document.index = res.data.documents.indexOf(document);
                })
                window.localStorage.setItem('paperworkData', JSON.stringify(res.data.documents));
                setLoading(false)
                setPaperwork(res.data.documents);
            });
    }

    useEffect(() => {
        // @ts-ignore
        window.localStorage.getItem('paperworkData') === null ? getPaperwork() : setPaperwork(JSON.parse(window.localStorage.getItem('paperworkData')));
        setLoading(false)
    }, []);


    const springs = useSprings(
        paperwork.length,
        paperwork.map((item, index) => ({ from: { opacity: 0, translateY: 100 }, to: { opacity: 1, translateY: 0 }, delay: index * 55 }))
    );

    console.log(paperwork)
    return (
        <section className="text-gray-600 body-font overflow-hidden dark:bg-gray-700">
            <div className="container px-5 py-24 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-100 dark:divide-gray-500">
                    {/* Card 1 */}
                    {paperwork.map((paper, index) => {


                        return (
                            <animated.div style={springs[index]} key={index} className="py-8 flex flex-wrap md:flex-nowrap">
                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <span className="font-semibold title-font text-gray-700 dark:text-gray-300">{paper.fields.category.stringValue}</span>
                                    <span className="mt-1 text-gray-500 text-sm dark:text-gray-400">January 2022</span>
                                </div>
                                <div className="md:flex-grow">
                                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2 dark:text-teal-400">{paper.fields.name.stringValue}</h2>
                                    <p className="leading-relaxed dark:text-gray-300">{paper.fields.body.stringValue}</p>
                                    <a className="group text-teal-500 inline-flex items-center mt-4" target="_blank" rel="noreferrer" href={paper.fields.path.stringValue}>Learn More
                                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-[3px] transition-all" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </animated.div>
                        )
                    }
                    )}
                    
                </div>
            </div>
        </section>

    );
}

export { Paperwork }