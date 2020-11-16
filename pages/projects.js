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
        <h2 className="center-title mb-8"> My projects</h2>
      </section>
      <section>
        <div className="storibckg py-16" >
          <img className="flex justify-around img-small" src="/icons/projectlogos/stori.png" alt=""/>
          <h2 className="white-center-text">Gamification and rewards using a credit card</h2>
          <div className="flex justify-around mt-4 px-16">
            <a href="/stori"><button className="bg-transparent hover:bg-white-500 text-white
          font-semibold hover:text-white py-1 px-2 border border-white-700 hover:border-transparent rounded">Design Process</button></a>
            <a href="/stori"><button className="bg-transparent hover:bg-white-500 text-white
          font-semibold hover:text-white py-1 px-2 border border-white-700 hover:border-transparent rounded">Problem</button></a>
            <a href="/stori"><button className="bg-transparent hover:bg-white-500 text-white 
          font-semibold hover:text-white py-1 px-2 border border-white-700 hover:border-transparent rounded">Solution</button></a>
          </div>
          <p className="white-center-text mt-4">Mobile app</p>
          <p className="white-center-text">Gamification</p>
        </div>
      </section>
      <section>
        <div className="estereobckg">
          <img src="/icons/projectlogos/estereo.png" alt=""/>
          <h2>Gamification and rewards using a credit card</h2>
            <a href="#"><button className="bg-transparent hover:bg-white-500 text-white
          font-semibold hover:text-white py-1 px-2 border border-white-700 hover:border-transparent rounded">Design Process</button></a>
            <a href="#"><button className="bg-transparent hover:bg-white-500 text-white
          font-semibold hover:text-white py-1 px-2 border border-white-700 hover:border-transparent rounded">Problem</button></a>
            <a href="#"><button className="bg-transparent hover:bg-white-500 text-white
          font-semibold hover:text-white py-1 px-2 border border-white-700 hover:border-transparent rounded">Solution</button></a>
            <p>Mobile app</p>
            <p>Gamification</p>
        </div>
      </section>
    </Layout>
  )
}