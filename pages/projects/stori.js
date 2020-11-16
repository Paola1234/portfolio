import Head from 'next/head'
import Layout from '../../components/layout.js'
import utilStyles from '../../styles/utils.module.css'

export default function stori() {
    return (
      <Layout >
        <Head>
          <title>Stori project</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <h2 className="center-title"> My projects</h2>
        </section>
        <section>
          <div className="storibckg" >
            <img src="/icons/projectlogos/stori.png" alt=""/>
            <h2 className="white-center-text">Gamification and rewards using a credit card</h2>
              <button><a href="#">Design Process</a></button>
              <a href="#">Problem</a>
              <a href="#">Solution</a>
              <p className="white-center-text">Mobile app</p>
              <p className="white-center-text">Gamification</p>
          </div>
        </section>
      </Layout>
    )
  }