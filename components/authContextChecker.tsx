import Router from 'next/router';
import { useEffect } from 'react'

const AuthContextChecker = () => {
    // Check if a token is past the expiration date
    function isExpired() {
        const token: string | null = localStorage.getItem('userSessionToken');

        token === null ? (alert(`Looks like you forgot to login, please login.`), Router.push('/login')) : null;

        let expirationDate = new Date(parseInt(token));
        const expired: Boolean = expirationDate < new Date()

        expired ? (alert(`Looks like your session expired, please login again`), Router.push('/login')) : null;
    }

    useEffect(() => {
        isExpired();
    })
    return null
}

export { AuthContextChecker }