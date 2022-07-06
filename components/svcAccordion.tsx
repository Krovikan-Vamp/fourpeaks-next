import axios from "axios";
import { useEffect, useState } from "react";
// @ts-ignore
import { sleep } from "../utils/sleep.ts";
import { useSprings, animated, useTrail, easings, config } from "react-spring";
import { fadeInSprings } from "../utils/springs.ts";

const SvcAccordion = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);

    async function getServices() {
        console.log(`Finding services...`);
        await axios.get("https://firestore.googleapis.com/v1/projects/fourpeaks-sc/databases/(default)/documents/services")
            .then((res) => {
                console.log('inside the function', res.data.documents);
                window.localStorage.setItem('serviceData', JSON.stringify(res.data.documents));
                setServices(res.data.documents);
            });
    }
    useEffect(() => {
        // @ts-ignore
        window.localStorage.getItem('serviceData') === null ? getServices() : setServices(JSON.parse(window.localStorage.getItem('serviceData')));
        setLoading(true)
        setLoading(false)
    }, [])

    sleep(1).then(() => {
        // @ts-ignore
        if (typeof (window)) {
            let items = document.querySelectorAll('.svc');

            function liveSearch() {
                // @ts-ignore
                let query = document.getElementById('search').value.toLowerCase();
                for (let i = 0; i < items.length; i++) {
                    let text = items[i].querySelector('h2')?.innerText.toLowerCase();

                    text?.includes(query.toLowerCase()) ? items[i].classList.remove('hidden') : items[i].classList.add('hidden');
                }
                document.querySelectorAll('.hidden').length >= 21
                    ? document.querySelector('#noResults')?.classList.remove('hidden')
                    : document.querySelector('#noResults')?.classList.add('hidden');
            }

            let searchInput = document.getElementById('search');

            document.addEventListener('keyup', (e) => {
                // @ts-ignore
                e.key === `/` ? document.querySelector('#search')?.focus() : null;
            })
            searchInput?.addEventListener('keyup', () => {
                sleep(50)
                liveSearch();
            });

        }
    })

    const springs = useSprings(
        services.length,
        services.map((_item: never[], index: number) => ({ from: { opacity: 0, translateY: 100 }, to: { opacity: 1, translateY: 0 }, delay: index * 55, config: config.gentle }))
    );

    return (<>
        <section className="dark:text-gray-200 dark:bg-gray-700 text-gray-600 body-font min-h-screen">
            <div className="container px-5 py-12 mx-auto ">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 dark:text-teal-400 tracking-widest">OUR SERVICES</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-gray-400">See what Four Peaks Surgery Center has to offer on the Urological and Urogynecological spectrum</p>
                    <div className="relative mt-4 -mb-4 dark:bg-gray-700">
                        <input type="text" id='search' className="dark:bg-gray-600 dark:shadow-gray-500 bg-gray-50 shadow-md h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none" placeholder='Press "/" to jump to search' />
                    </div>
                </div>

                <div className="flex flex-wrap -m-4 justify-center">

                    {/* Map function here */}
                    {services.length > 1 ? services.map((prop, index) => {
                        return (
                            <animated.div style={springs[index]} className="svc transition-all rounded-md p-4 lg:w-1/2 h-full md:w-full dark:hover:shadow-lg dark:hover:shadow-gray-800 hover:shadow-md" key={index}>
                                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                    <div className="flex-grow sm:pl-8 h-max">
                                        <h2 className="svc-name title-font font-medium text-lg text-teal-500 dark:text-teal-400 mb-3">{prop.fields.full_name.stringValue} — {prop.fields.short_name.stringValue}</h2>
                                        <p className="mb-4">{prop.fields.description.stringValue}</p>
                                        <p className="text-right w-full -mt-4">
                                        </p>
                                    </div>
                                </div>
                            </animated.div>
                        )
                    })
                        : <h1>Loading</h1>
                    }
                    <div id="noResults" className="hidden w-full text-center dar:text-gray-600">
                        No results found
                    </div>

                </div>
            </div>
        </section>
    </>)
}

export { SvcAccordion }