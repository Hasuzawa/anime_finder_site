import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Test from "~/components/Test";


import Feeds from "~/components/Feeds";

import SideLogoBar from "~/components/SideLogoBar";

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen flex">
      <Head>
        <title>Anime Lister</title>
      </Head>
      <div id="side-bar" className="w-80 bg-blue-300 flex relative">
          <div className={"flex-auto min-h-0"}>
            <h1>logo here</h1>
          </div>
          <SideLogoBar />
      </div>
      {/* add custom scroller to this main */}
      <main id="main" className="w-280 max-h-full bg-red-300 overflow-y-auto">
        <Feeds />
        {/* <Test /> */}
      </main>

    </div>
  )
}

export default Home
