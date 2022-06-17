// @ts-ignore
import { HeroMain } from "../components/main.tsx";
import Head from "next/head";
import { HomeCards } from "../components/homecards.tsx";
import { Steps } from "../components/steps.tsx";


export default function Home() {
  return (<>
    <Head>
      <title>Four Peaks Surgery Center</title>
    </Head>


    <HeroMain />


    <Steps />


    <HomeCards />


  </>)
}