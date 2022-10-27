import Head from 'next/head'
import Carousel from '../components/Carousel';
import Companies from '../components/Companies';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import NFTGrid from '../components/NFTGrid';
import ProjectGrid from '../components/ProjectGrid';
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
      <Companies />
      <Carousel />
      <NFTGrid />
      <ProjectGrid />
      <Footer />
    </div>
  )
}
