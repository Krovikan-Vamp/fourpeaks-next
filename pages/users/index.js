import Head from 'next/head';
import dynamic from 'next/dynamic';
import { UserFunctions } from '../../components/userFunctions.tsx';


export default function UserIndex() {
    const UserFunctionsComponent = dynamic(() => import('../../components/userFunctions.tsx').then(mod => mod.UserFunctions), { ssr: false });
    return (<>
        <UserFunctionsComponent />
    </>)
}