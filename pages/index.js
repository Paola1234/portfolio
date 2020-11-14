import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Paola Latino Portfolio</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Passion for Tech + Design. Completely passionate to improve people's experience in tech through my ideas with UX/UI design.</p>
        <p>
          (This is a sample of my Portfolio Welcome!)
        </p>
      </section>
    </Layout>
  )
}