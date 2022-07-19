import dynamic from 'next/dynamic';

export default function UserIndex() {
    const UserFunctionsComponent = dynamic(() => import('../../components/userFunctions.tsx').then(mod => mod.UserFunctions), { ssr: false });
    return (<>
        <UserFunctionsComponent />
    </>)
}