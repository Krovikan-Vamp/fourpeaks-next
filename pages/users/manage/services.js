import Head from 'next/head'
import dynamic from 'next/dynamic';


export default function ManageServicesPage() {
    const ManagerComponent = dynamic(() => import('../../../components/userFunctions.tsx').then(mod => mod.UserFunctions), { ssr: false });

    return (
        <>
            <Head>
                <title>Manage Services</title>
            </Head>
            <h1>Manage Services</h1>
        </>
    )
}