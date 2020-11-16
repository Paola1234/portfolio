import Head from 'next/head'
import Layout from '../components/layout.js'
import utilStyles from '../styles/utils.module.css'

export default function mindvalley() {
    return (
      <Layout >
        <Head>
          <title>Mindvalley</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <img src="/images/mindvalleylogo.svg"></img>
          <h2 className="center-title"> Why Mindvalley?</h2>
        </section>
        <section>
        <div>
              <p>I want to join because I want to achieve...</p>
              <p>I really hope to hear from you soon</p>
          </div>
        </section>
      </Layout>
    )
  }