import axios from 'axios';
import Router from 'next/router'
import { setCookie } from './cookies.ts';

async function signUp(email: string, password: string, returnToken?: Boolean): Promise<XMLHttpRequest> {
    let endpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY}`

    let response = await axios.post(endpoint, {
        email: email,
        password: password,

        // On signup success, we want to redirect the user to the signin page
    }).then(res => {
        res.status == 200 ? setCookie(`userInfo`, JSON.stringify(res.data), 7) : ``
        sessionStorage?.setItem('signedUp', 'true')

        Router.push('/login');
        return res.data;

        // on signup failure, we want to redirect the user to the signup page
    }).catch(err => {
        console.error(err.response.data.error.message)

        switch (err.response.data.error.message) {
            // Try to sign in with the existing account
            case `EMAIL_EXISTS`:
                alert(`Looks like you already have an account, we'll redirect you to the signin page`)
                Router.push('/login');
                break;

            default:
                break;
        }
        return err.response.data.error.message
    })

    return response
}

async function signIn(email: string, password: string, returnToken?: Boolean): Promise<XMLHttpRequest> {
    let endpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY}`

    let response = await axios.post(endpoint, {
        email: email,
        password: password,

        // Redirect to user landing page on signin success
    }).then(async (res) => {
        await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY}`, { idToken: res.data.idToken })
            .then((res2) => {
                res2.status == 200 ? (setCookie(`userInfo`, JSON.stringify(res2.data.users[0]), 7), localStorage.setItem('userInfo', JSON.stringify(res2.data.users[0]))) : ``;
                alert(localStorage.getItem('userInfo'))
                Router.push(`/users`)
            })

        return res.data
    }).catch(err => {
        console.log(`Error code should be below`)
        console.error(err.response.data.error.message)

        return err.response.data.error.message
    }
    )

    return response
}

export { signUp, signIn };