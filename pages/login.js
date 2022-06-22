import Head from "next/head";
import { LoginComponent } from "../components/login.tsx";

export default function LoginPage() {

    return (<>
        <Head>
            <title>Login</title>
        </Head>
        <LoginComponent />
    </>)
}