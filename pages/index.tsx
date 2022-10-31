import Head from "next/head";
import About from "../components/sections/About";
import Companies from "../components/sections/Companies";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import NFTGrid from "../components/sections/NFTGrid";
import ProjectGrid from "../components/sections/ProjectGrid";
import Top from "../components/Top";
import Roadmap from "../components/sections/Roadmap";
import Showcase from "../components/sections/Showcase";
import Faq from "../components/sections/Faq";
import { Inter } from '@next/font/google'
import Trending from "../components/sections/Trending";

export default function Home() {
  return (
    <div>
      <Head>
        <title>NFT Marketplace</title>
        <meta name="description" content="NFT Marketplace Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Top />
      <Trending />
      {/* <About />
      <Roadmap />
      <Showcase />
      <Faq /> */}

      {/* <Companies />
      <NFTGrid />
      <ProjectGrid /> */}

      {/* <Footer /> */}
    </div>
  );
}
