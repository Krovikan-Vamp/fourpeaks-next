<section className="dark:text-gray-200 dark:bg-gray-700 text-gray-600 body-font">
    <div className="container px-5 py-12 mx-auto ">
        <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 dark:text-teal-400 tracking-widest">OUR TEAM</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-gray-400">See more of what our surgeons have to offer from past experiences, informational confrences, and their own biographies!</p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">

            {/* Map function here */}
            {surgeons.map((prop, index) => {
                let lastName = prop.split(' ');
                lastName = lastName[lastName.length - 2];
                lastName = lastName.substring(0, lastName.length - 1).toLowerCase();

                return (
                    <div className="p-4 lg:w-1/2 md:w-full rounded-md" key={index}>
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-top sm:mb-0 mb-4 lg:rounded-full" alt={prop} aria-label={prop} src={lastName !== "devakumar" ? `https://www.academic-urology.com/images/${lastName}-cutout.png` : `https://www.academic-urology.com/images/${lastName}.png`} />
                            <div className="flex-grow sm:pl-8">
                                <h2 className="title-font font-medium text-lg text-teal-500 dark:text-teal-400 mb-3">{prop}</h2>
                                {/* <h3 className="text-gray-500 dark:text-teal-600 mb-3">Surgeon</h3> */}
                                <p className="mb-4">{surgeon.fields.surgeon.mapValue.fields.description.stringValue}</p>
                                <p className="text-right w-full -mt-4">
                                    <a className="text-teal-500 inline-flex items-center group hover:cursor-pointer" target="_blank" rel='noreferrer' href={surgeon.fields.surgeon.mapValue.fields.long_description.stringValue}>Learn More
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