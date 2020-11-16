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
          <img src="/images/mv-logo.svg"></img>
          <h2 className="center-title"> Why Mindvalley?</h2>
        </section>
        <section>
        <div>
              <p>I felt motivated to apply because I've seen how your company culture can</p>
              <p>I really hope to hear from you soon</p>
          </div>
        </section>
      </Layout>
    )
  }