import Head from "next/head";
import { SignUpComponent } from "../components/signup.tsx";

export default function SignUpPage() {

    return (<>
        <Head>
            <title>Login</title>
        </Head>
        <SignUpComponent />
    </>)
}