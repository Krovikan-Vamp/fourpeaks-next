import Head from 'next/head'
import { TestimonialDisplay } from '../components/testimonialDisplay.tsx'
import dynamic from 'next/dynamic'

export default function testimonials() {

    const TestimonialDisplayDynamic = dynamic(() => import('../components/testimonialDisplay.tsx').then(mod => mod.TestimonialDisplay), { ssr: false })

    return(<>
        <Head>
            <title>Testimonials</title>
        </Head>
        <TestimonialDisplayDynamic />
    </>)
}

