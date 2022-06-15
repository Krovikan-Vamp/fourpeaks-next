import Link from "next/link";

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font border-t-4 border-teal-400  transition-all ease-in bg-gray-100 dark:bg-gray-800">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">

                <Link href="/">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <svg className="w-8 text-teal-400" viewBox="0 0 24 24" strokeLinejoin="round" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" stroke="currentColor" fill="none">
                            <rect x="3" y="1" width="7" height="12" />
                            <rect x="3" y="17" width="7" height="6" />
                            <rect x="14" y="1" width="7" height="6" />
                            <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-3 text-xl dark:text-white">Four Peaks Surgery Center</span>
                    </a>
                </Link>
                <p className="text-sm text-gray-500 dark:text-gray-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 Four Peaks Surgery Center
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    Phone: (623) 399-6880<br />
                    Fax:   (623) 322-1504
                </span>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    9425 West Bell Rd <br />
                    Sun City, AZ 85305
                </span>
            </div>
        </footer>
    )
}

export { Footer };