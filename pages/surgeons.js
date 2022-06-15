import Head from 'next/head'
import { Surgeons } from '../components/surgeonList.tsx'
export default function SurgeonPage() {
    return (
        <>
            <Head>
                <title>Surgeons</title>
            </Head>
            <Surgeons />
        </>
    )
}
