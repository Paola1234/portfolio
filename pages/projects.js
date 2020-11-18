import Head from 'next/head'
import Layout from '../components/layout.js'
import utilStyles from '../styles/utils.module.css'


export default function projects() {
  return (
    <Layout>
      <Head>
        <title>My projects</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2 className="mb-8 center-title"> My projects</h2>
      </section>
      <section>
        <div className="py-16 storibckg" >
          <img className="flex justify-around img-small center-img" src="/icons/projectlogos/stori.png" alt=""/>
          <h2 className="white-center-text">Gamification and rewards using a credit card</h2>
          <div className="flex flex-wrap justify-around px-16 mt-4">
            <a href="/stori#Process"><button className="px-2 py-1 mb-2 font-semibold text-white bg-transparent border rounded hover:bg-white-500 hover:text-white border-white-700 hover:border-transparent"> Process</button></a>
            <a href="/stori#Main problem"><button className="px-2 py-1 mb-2 font-semibold text-white bg-transparent border rounded hover:bg-white-500 hover:text-white border-white-700 hover:border-transparent">Problem</button></a>
            <a href="/stori#Wireframes"><button className="px-2 py-1 font-semibold text-white bg-transparent border rounded hover:bg-white-500 hover:text-white border-white-700 hover:border-transparent">Wireframes</button></a>
          </div>
          <p className="mt-4 white-center-text">Mobile app</p>
          <p className="mb-4 white-center-text">Gamification</p>
          <img className="center img-small center-img" src="/images/projectsImage/cardsStori.svg" alt=""/>
        </div>
      </section>
      <section>
        <div className="estereobckg">
          <img className="flex justify-around img-small center-img" src="/icons/projectlogos/estereo.png" alt=""/>
          <h2 className="white-center-text">A new Festival experience during COVID-19 times</h2>
          <div className="flex flex-wrap justify-around px-16 mt-4">
            <a href="/estereo"><button className="px-2 py-1 mb-2 font-semibold text-white bg-transparent border rounded hover:bg-white-500 hover:text-white border-white-700 hover:border-transparent">Process</button></a>
            <a href="/estereo"><button className="px-2 py-1 mb-2 font-semibold text-white bg-transparent border rounded hover:bg-white-500 hover:text-white border-white-700 hover:border-transparent">Problem</button></a>
            <a href="/estereo"><button className="px-2 py-1 font-semibold text-white bg-transparent border rounded hover:bg-white-500 hover:text-white border-white-700 hover:border-transparent">Solution</button></a>
          </div>
            <p className="mt-4 white-center-text">Responsive Design</p>
            <p className="mb-4 white-center-text">Mobile First</p>
          <img className="center img-small center-img" src="/images/projectsImage/estereoMockup.png" alt=""/>
        </div>
      </section>
      <section>
        <div className="bg-gray-400">
        <h2 className="pt-10 text-xl text-center text-black">Foodie experience</h2>
          <p className="text-center text-black">for latin american backpackers in Southeast Asia</p>
          <div className="flex flex-wrap justify-around px-16 mt-4">
            <a href="/backpackers"><button className="px-2 py-1 mb-2 font-semibold text-black bg-transparent border border-black rounded hover:bg-white-500 hover:text-white hover:border-white">Design Process</button></a>
            <a href="/backpackers"><button className="px-2 py-1 mb-2 font-semibold text-black bg-transparent border border-black rounded hover:bg-white-500 hover:text-white hover:border-white">Problem</button></a>
            <a href="/backpackers"><button className="px-2 py-1 font-semibold text-black bg-transparent border border-black rounded hover:bg-white-500 hover:text-white hover:border-white">Solution</button></a>
          </div>
            <p className="mt-4 text-center text-black">Mobile App</p>
            <p className="mb-4 text-center text-black">UX Research</p>
            <img className="flex justify-around pb-10 img-small center-img" src="/icons/projectlogos/BackpackerWireframes.svg" alt=""/>
        </div>
      </section>
    </Layout>
  )
}