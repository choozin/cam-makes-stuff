import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import dynamic from 'next/dynamic'

import StarrySky from "../components/Starfield/StarrySky";
import Logo from "../components/Logo/Logo";
import PlanetMenu from "../components/PlanetMenu/PlanetMenu";

import Test from '../components/PlanetMenu/SelectionPresentations/Items'


import "@fontsource/rubik-gemstones";
import "@fontsource/rubik-dirt";
import "@fontsource/permanent-marker";
import "@fontsource/shadows-into-light";
import "@fontsource/special-elite";
import "@fontsource/aldrich";
import "@fontsource/marcellus-sc";////
import "@fontsource/gugi";
import "@fontsource/monofett";
import "@fontsource/im-fell-dw-pica-sc";////
import "@fontsource/silkscreen";////
import "@fontsource/codystar";//
import "@fontsource/odibee-sans";
import "@fontsource/covered-by-your-grace";//
import "@fontsource/orbitron";//


const DynamicPlanetMenu = dynamic(() => import('../components/PlanetMenu/PlanetMenu'), {
  loading: () => 'Loading...',
})

const DynamicStarrySky = dynamic(() => import('../components/Starfield/StarrySky'), {
  loading: () => 'Loading...',
})

export default function Home() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        margin: '0 auto',
      }}
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Logo />
      <DynamicPlanetMenu/>

      <DynamicStarrySky />
    </div>
  );
}
