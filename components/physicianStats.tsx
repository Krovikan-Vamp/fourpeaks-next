import { useState, useEffect } from 'react';
import { firestore } from '../utils/firebase.ts';
import { sleep } from '../utils/sleep.ts';
import { collection, getDocs, orderBy, query } from "@firebase/firestore"
import { useSpring, animated, useTrail, easings, config } from "react-spring";

const PhysicianInformation = () => {
    const [loading, setLoading] = useState(true);


    const getPhysicians = async () => {
        const physCollection = collection(firestore, 'Auto Suggestions');

        const [physicians, setPhysicians] = useState([]);
        setLoading(true);
        const physicianQuery = query(physCollection);
        const qSnapshot = await getDocs(physicianQuery);

        const result = [];
        qSnapshot.forEach(doc => {
            result.push(doc.data());
        }
        );
        setPhysicians(result);
        localStorage.setItem('physicians', JSON.stringify(result));
        setLoading(false);
    }

    useEffect(() => {
        localStorage.getItem('physicians') === null ? getPhysicians() : setLoading(false);

    }, [])

    sleep(1).then(() => {
        // @ts-ignore
        if (typeof (window)) {
            let items = document.querySelectorAll('.svc');

            function liveSearch() {
                // @ts-ignore
                let query = document.getElementById('search').value.toLowerCase();
                for (let i = 0; i < items.length; i++) {
                    let headerText = items[i].querySelector('h2')?.innerText.toLowerCase();
                    let phoneInfo = items[i].querySelector('.phoneInfo')?.innerText.toLowerCase();
                    let faxInfo = items[i].querySelector('.faxInfo')?.innerText.toLowerCase();

                    // headerText?.includes(query.toLowerCase()) ? items[i].classList.remove('hidden') : items[i].classList.add('hidden');
                    // phoneInfo?.includes(query.toLowerCase()) ? items[i].classList.remove('hidden') : items[i].classList.add('hidden');
                    // faxInfo?.includes(query.toLowerCase()) ? items[i].classList.remove('hidden') : items[i].classList.add('hidden');

                    if ((headerText?.includes(query.toLowerCase()) || phoneInfo?.includes(query.toLowerCase()) || faxInfo?.includes(query.toLowerCase())) === false) {
                        items[i].classList.add('hidden');
                    } else {
                        items[i].classList.remove('hidden');
                    }


                }
                document.querySelectorAll('.hidden').length >= 1
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

    let springs = useSpring(
        {
            from: { opacity: 0 }, to: { opacity: 1 }, config: config.molasses
        }
    )
    if (loading) return <div>Loading...</div>;

    if (typeof window !== 'undefined') {
        return (<>
            <section className="dark:text-gray-200 dark:bg-gray-700 text-gray-600 body-font min-h-screen">
                <div className="container px-5 py-12 mx-auto ">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 dark:text-teal-400 tracking-widest">PHYSICIAN INFORMATION</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-gray-400">See the information collected via Speckles, the medical records software.</p>
                        <div className="relative mt-4 -mb-4 dark:bg-gray-700">
                            <input type="text" id='search' className="dark:bg-gray-600 dark:shadow-gray-500 bg-gray-50 shadow-md h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none" placeholder='Press "/" to jump to search' />
                        </div>
                    </div>

                    <div className="flex flex-wrap my-12 mx-24 justify-center">
                        {/* Map function here */}
                        {JSON.parse(localStorage.getItem('physicians')).length > 1 ? JSON.parse(localStorage.getItem('physicians')).map((physician, index) => {
                            return (
                                <animated.div style={springs} className="svc transition-all rounded-md p-4 lg:w-1/4 h-full md:w-1/2 dark:hover:shadow-lg dark:hover:shadow-gray-800 hover:shadow-md" key={index}>
                                    <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                        <div className="flex-grow sm:pl-8 h-max">
                                            {/* Header in teal */}
                                            <h2 className="svc-name title-font font-medium text-lg text-teal-500 dark:text-teal-400 mb-3">{physician.dr.map(char => String.fromCharCode(char - 25))} {physician.drType.map(char => String.fromCharCode(char - 25))}</h2>
                                            {/* Body */}
                                            <ul className="mb-4">
                                                <li className="phoneInfo">Phone: {physician.phone.map(char => String.fromCharCode(char - 25))}</li>
                                                <li className="faxInfo">Fax: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{physician.fax.map(char => String.fromCharCode(char - 25))}</li>
                                            </ul>

                                            {/* Footer */}
                                            {/* <p className="text-right w-full -mt-4">
                                                <a className="text-teal-500 inline-flex items-center group hover:cursor-pointer" target="_blank" rel='noreferrer' href={``}>Learn More
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2 group-hover:translate-x-[3px] transition-all" viewBox="0 0 24 24">
                                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                            </p> */}
                                        </div>
                                    </div>
                                </animated.div>
                            )
                        })
                            : <p>Loading</p>
                        }
                        <div id="noResults" className="hidden w-full text-center dar:text-gray-600">
                            No results found
                        </div>

                    </div>
                </div>
            </section>
        </>)
    }
}

export { PhysicianInformation }