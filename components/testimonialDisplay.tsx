import axios from 'axios';
import { useState, useEffect } from 'react';
import { useTrail, animated, config } from 'react-spring';

const TestimonialDisplay = () => {
    const [loading, setLoading] = useState(false);
    const [testimonials, setTestimonials] = useState([]);

    const getTestimonials = async () => {
        console.log(`Retrieving testimonials...`);
        setLoading(true);
        await axios.get(`https://firestore.googleapis.com/v1/projects/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/databases/(default)/documents/Testimonials?key=${process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY}&pageSize=100`)
            .then((res) => {
                sessionStorage.setItem('testimonials', JSON.stringify(res.data.documents))
            })
            .catch((err) => {
                console.log(err);
                return err;
            })
        setTestimonials(JSON.parse(sessionStorage.getItem('testimonials')));
        setLoading(false);

    }

    useEffect(() => {
        sessionStorage.getItem('testimonials') === null ? getTestimonials() : setTestimonials(JSON.parse(sessionStorage.getItem('testimonials')));
    }, [])

    const choose = (options) => {
        return options[Math.floor(Math.random() * options.length)];
    }
    // Changesh it
    // Create two arrays reflecting the testimonials
    const arr1 = testimonials.map(test => {
        return { ...test, date: new Date(test.fields.date_M_Y.stringValue) }
    })
    // Create the second one as a new `Set` of unique months
    const months = [...new Set(testimonials.map((o) => o.fields.date_M_Y.stringValue))]

    // Sort them by date and descending order
    arr1.sort((a, b) => {
        return Number(new Date(a.date)) - Number(new Date(b.date))
    })
    months.sort((a, b) => {
        return Number(new Date(b)) - Number(new Date(a))
    })
    return (<>
        <section className="text-gray-600 body-font overflow-hidden dark:bg-gray-700">
            <div className="container px-5 py-24 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-100 dark:divide-gray-500">

                    {/* Start of maps */}
                    {
                        months.map((month, index) => {

                            return (
                                <animated.div style={trails[index]} key={index} className="py-8 flex flex-wrap md:flex-nowrap">
                                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                        <span className="font-semibold title-font text-gray-700 dark:text-gray-300 text-xl">{month.split(' ')[0]}</span>
                                        <span className="mt-1 text-gray-500 text-sm dark:text-gray-400">{month.split(' ')[1]}</span>
                                    </div>
                                    <div className="md:flex-grow">
                                        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2 dark:text-teal-400">{`Patient`}&apos;s {`${choose(["analysis", "evaluation", "assessment", "appraisal", "examination", "investigation", "inquiry", "exploration", "study", "audit", "critique", "notice", "assessment", "evaluation", "judgment", "rating", "commentary", "article",])}`}</h2>
                                        <ul>
                                            {
                                                arr1.filter((test) => {
                                                    return test.fields.date_M_Y.stringValue === month
                                                }).map((test, index) => {
                                                    return (
                                                        <li key={index} className="flex items-center mb-4">
                                                            {test.fields.comment.stringValue}
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </animated.div>
                            )
                        })
                    }
                    {/* End of maps */}

                </div>
            </div>
        </section>
    </>)
}

export { TestimonialDisplay }