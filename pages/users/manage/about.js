import Head from 'next/head'
import dynamic from 'next/dynamic'

export default function ManageAboutPage() {
    const ManagerComponent = dynamic(() => import('../../../components/manager.tsx').then(mod => mod.ManageAbout), { ssr: false });

    return (
        <>
            <Head>
                <title>Manage About</title>
            </Head>
            <ManagerComponent />
        </>
    )
}