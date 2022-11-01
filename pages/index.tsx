import Head from "next/head";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Top from "../components/sections/Top";
import Showcase from "../components/sections/Showcase";
// import Faq from "../components/sections/Faq";
import Trending from "../components/sections/Trending";
import Collections from "../components/sections/Collections";

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
      <Collections />
      <Showcase />
      {/* <Faq /> */}
      <Footer />
    </div>
  );
}
