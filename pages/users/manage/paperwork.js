import Head from 'next/head'
import dynamic from 'next/dynamic';

export default function ManagePaperworkPage() {
    const ManagerComponent = dynamic(() => import('../../../components/userFunctions.tsx').then(mod => mod.UserFunctions), { ssr: false });

    window.history.go(-1)
    alert(`Page before`)
    window.history.go(-3)
    alert(`Page 3`)

    return (
        <>
            <Head>
                <title>Manage Paperwork</title>
            </Head>
            <h1>Manage Paperwork</h1>
        </>
    )
}