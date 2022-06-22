import axios from 'axios';
import Router from 'next/router'

async function signUp(email: string, password: string, returnToken?: Boolean): Promise<XMLHttpRequest> {
    let endpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY}`

    let response = await axios.post(endpoint, {
        email: email,
        password: password,

        // On signup success, we want to redirect the user to the signin page
    }).then(res => {
        res.status == 200 ? document.cookie = `userInfo=${JSON.stringify(res.data)}& ` + `expires=${new Date(Date.now() + 3600 * 1000).toUTCString()}` : ``
        sessionStorage?.setItem('signedUp', 'true')

        Router.push('/login');
        return res.data;

        // on signup failure, we want to redirect the user to the signup page
    }).catch(err => {
        console.error(err.response.data.error.message)

        switch (err.response.data.error.message) {
            // Try to sign in with the existing account
            case `EMAIL_EXISTS`:
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
    }).then(res => {
        res.status == 200 ? document.cookie = `userInfo=${JSON.stringify(res.data)}& ` + `expires=${new Date(Date.now() + 3600 * 1000).toUTCString()}` : ``

        alert(`Welcome ${res.data.displayName}`)
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