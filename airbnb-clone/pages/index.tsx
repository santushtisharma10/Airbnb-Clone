import Head from 'next/head'
import Header from "../components/Header"
import Carousel from "../components/Carousel"
import Explore from "../components/Explore"

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Carousel />
      <div className='max-w-6xl mx-auto bg-slate-300 px-8 sm:px-16'>
      <Explore/>
      </div>
    </div>
  )
}
