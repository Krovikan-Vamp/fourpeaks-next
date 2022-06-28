import Head from "next/head";
import { AddTestimonialComponent } from "../../components/addTestimonial.tsx";

export default function TestimonialUploadPage() {
    return (<>
        <Head>
            <title>Testimonial Upload</title>
        </Head>
        <AddTestimonialComponent />
    </>)
}