import Head from 'next/head';
import dynamic from 'next/dynamic';

export default function AboutPage () {
    const AboutComponent = dynamic(() => import('../components/about.tsx').then(mod => mod.About), { ssr: false });
    return (<>
        <Head>
            <title>About</title>
        </Head>
        <AboutComponent />
    </>)
}