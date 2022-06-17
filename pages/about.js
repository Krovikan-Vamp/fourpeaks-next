import Head from 'next/head';
import { About } from '../components/about.tsx';

export default function AboutPage () {
    return (<>
        <Head>
            <title>About</title>
        </Head>
        <About />
    </>)
}