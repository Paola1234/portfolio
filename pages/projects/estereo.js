import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout.js'
import utilStyles from '../styles/utils.module.css'


export default function estereo() {
  return (
    <Layout>
      <Head>
        <title>Estereo Picnic</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2> Estereo Picnic</h2>
      </section>
      <section>
        <div className="storibckg">
          <img src="/icons/projectlogos/estereo.png" alt=""/>
          <h2>Gamification and rewards using a credit card</h2>
            <a href="#">Design Process</a>
            <a href="#">Problem</a>
            <a href="#">Solution</a>
            <p>Mobile app</p>
            <p>Gamification</p>
        </div>
      </section>
    </Layout>
  )
}