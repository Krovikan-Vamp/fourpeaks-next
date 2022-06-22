import Head from 'next/head';
import { UserFunctions } from '../../components/userFunctions.tsx';

export default function UserIndex() {
            return (<>
        <Head>
            <title>Four Peaks User  </title>
        </Head>
        <UserFunctions />
    </>)
}