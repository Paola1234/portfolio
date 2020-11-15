import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import headerIndex from '../components/headerIndex'


export default function index() {
  return (
    <Layout home>
      <Head>
        <title>Paola Latino Portfolio</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Passion for Tech + Design. Completely passionate to improve people's experience in tech through my ideas with UX/UI design.</p>
      </section>
      <headerIndex></headerIndex>
    </Layout>
  )
}