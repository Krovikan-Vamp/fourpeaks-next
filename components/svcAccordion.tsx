import axios from "axios";
import { useEffect, useState } from "react";

const SvcAccordion = () => {
    const [services, setServices] = useState([]);

    async function getServices() {
        console.log(`Finding services...`);
        await axios.get("https://firestore.googleapis.com/v1/projects/fourpeaks-sc/databases/(default)/documents/services")
            .then((res) => { console.log('inside the function', res.data.documents); window.localStorage.setItem('serviceData', JSON.stringify(res.data.documents)); });
    }
    useEffect(() => {
        window.localStorage.getItem('serviceData') === null ? getServices() : setServices(JSON.parse(window.localStorage.getItem('serviceData')));
        console.log(services)
    }, [])
    return (<>
        <section className="dark:text-gray-200 dark:bg-gray-700 text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto ">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 dark:text-teal-400 tracking-widest">OUR SERVICES</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-gray-400">See what Four Peaks Surgery Center has to offer on the Urological and Urogynecological spectrum</p>
                </div>
                <div className="flex flex-wrap -m-4 justify-center">

                    {/* Map function here */}
                    {services.map((prop, index) => {

                        return (
                            <div className="transition-all rounded-md p-4 lg:w-1/2 h-full md:w-full dark:hover:shadow-lg dark:hover:shadow-gray-800 hover:shadow-md" key={index}>
                                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                    <div className="flex-grow sm:pl-8 h-max">
                                        <h2 className="title-font font-medium text-lg text-teal-500 dark:text-teal-400 mb-3">{prop.fields.full_name.stringValue} — {prop.fields.short_name.stringValue}</h2>
                                        <p className="mb-4">{prop.fields.description.stringValue}</p>
                                        <p className="text-right w-full -mt-4">
                                            <a className="text-teal-500 inline-flex items-center group hover:cursor-pointer" target="_blank" rel='noreferrer' href={`https://www.google.com/search?q=${prop.fields.full_name.stringValue}`}>Learn More
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2 group-hover:translate-x-[3px] transition-all" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }


                </div>
            </div>
        </section>
    </>)
}

export { SvcAccordion }