import axios from 'axios';
import { firestore } from '../utils/firebase.ts'
import { Testimonial } from '../utils/interfaces.ts'
import { collection, addDoc } from 'firebase/firestore'

const AddTestimonialComponent = () => {

    const handleSubmit = async (e) => {
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        e.preventDefault(); // Prevent page reload
        let date = e.target[0].value; // returns the month, year like this -> MM-YYYY
        let comments = e.target[1].value; // string
        date = date.split('-') // Sets `date` to ['MM', 'YYYY']
        let new_date: Testimonial = { month: parseInt(date[1]), year: parseInt(date[0]), date_M_Y: `${months[date[1] - 1].toString()} ${date[0]}`, comment: comments } // date = {month: M, year: YYYY, full_date: "spelledmonth, YYYY"}
        
        const testimonialsCollection = collection(firestore, 'Testimonials');
        
        addDoc(testimonialsCollection, new_date)
            .then((res) => {
                console.log(res)
                e.target[1].value = '';
            })

    }

    return (<div className='flex min-h-screen'>
        <div className='container max-w-lg border-2 shadow-lg p-4 m-auto lg:mt-32  rounded-lg'>
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Add Testimonial</h2>
            <p className="leading-relaxed mb-5 text-gray-600">Choose month and year and type the comments in the text area.</p>

            {/* The form */}
            <form onSubmit={handleSubmit}>
                <div className="relative mb-4">
                    <label htmlFor="month" className="leading-7 text-sm text-gray-600">Month</label>
                    <input type="month" id="month" name="month" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                    <label htmlFor="Comment" className="leading-7 text-sm text-gray-600">Comments</label>
                    <textarea rows={5} id="Comment" name="Comment" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <p hidden className="text-xs text-gray-500 my-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>

                <button type="submit" className="text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg">Submit</button>
            </form>
        </div>
    </div>)
}

export { AddTestimonialComponent }