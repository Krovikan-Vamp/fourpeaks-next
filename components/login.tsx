import { signIn } from '../utils/auth.ts';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const LoginComponent = () => {
    const [signedUp, setSignedUp] = useState(false);
    const [status, setStatus] = useState('');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        console.log(`STATUS => `, status)
        e.preventDefault();

        let actionsResponse = await signIn(e.target[0].value, e.target[1].value);

        return typeof actionsResponse === typeof `` ? setStatus(actionsResponse) : `Success`;
    }
    useEffect(() => {
        sessionStorage.getItem('signedUp') === 'true' ? setSignedUp(true) : setSignedUp(false);
    })

    return (<div className='flex min-h-screen'>
        <div className='container max-w-lg border-2 shadow-lg p-4 m-auto rounded-lg mt-auto '>
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Sign In to Four Peaks</h2>
            {
                signedUp 
                ? <p className="leading-relaxed mb-5 text-gray-600">You have successfully signed up, please login to continue.</p> 
                : <p className="leading-relaxed mb-5 text-gray-600">If you already have an account you may sign in, or <Link href="/signup"><span className="text-blue-300 cursor-pointer">sign up</span></Link></p>
            }

            {/* The form */}
            <form onSubmit={ handleSubmit }>
                <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                    <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                    <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                    <p hidden={status.length === 0} className="text-xs text-red-500 my-3">
                        <span className="text-gray-700">We couldn't sign you in:</span> {status}
                    </p>
                <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign In</button>
            </form>
            <p hidden={status.length !== 0} className="text-xs text-gray-500 mt-3">We will never share you email or password with anyone.</p>
        </div>
    </div>)
}

export { LoginComponent }