import Link from 'next/link';
import { signUp } from '../utils/auth.ts';

const SignUpComponent = () => {
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        let status = await signUp(e.target[0].value, e.target[1].value);

        console.log(`HEY THERE HTML =>`, status);
    }

    return (<div className='flex min-h-screen'>
        <div className='container max-w-lg border-2 shadow-lg p-4 m-auto rounded-lg mt-auto '>
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Sign Up</h2>
            <p className="leading-relaxed mb-5 text-gray-600">Create your account here, or <Link href="/login"><span className="text-blue-300 cursor-pointer">log in</span></Link>.</p>

            {/* The form */}
            <form onSubmit={handleSubmit}>
                <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                    <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                    <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <p hidden className="text-xs text-gray-500 my-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>

                <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign In</button>
            </form>
            <p className="text-xs text-gray-500 mt-3">We will never share you email or password with anyone.</p>
        </div>
    </div>);
}

export { SignUpComponent }