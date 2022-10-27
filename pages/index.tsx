import Head from 'next/head'
import Carousel from '../components/sections/Carousel';
import Companies from '../components/sections/Companies';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import NFTGrid from '../components/sections/NFTGrid';
import ProjectGrid from '../components/sections/ProjectGrid';
import Top from '../components/Top';

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
      <Carousel />

      <Companies />
      
      <NFTGrid />
      <ProjectGrid />
      <Footer />
    </div>
  )
}
