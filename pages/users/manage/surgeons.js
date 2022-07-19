import Head from 'next/head'
import dynamic from 'next/dynamic';
export default function ManageSurgeonsPage() {
    const ManagerComponent = dynamic(() => import('../../../components/userFunctions.tsx').then(mod => mod.UserFunctions), { ssr: false });

    return (
        <>
            <Head>
                <title>Manage Surgeons</title>
            </Head>
            <h1>Manage Surgeons</h1>
        </>
    )
}