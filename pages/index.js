import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Layout from '../components/layout.js'
import utilStyles from '../styles/utils.module.css'


export default function index() {
  return (
    <Layout home>
      <Head>
        <title>Paola Latino Designer Developer</title>
      </Head>
      <div className="row pr-8">
            <div className="column-right pr-8 ">
                <h3 className="mt-4">Passion for Tech + Design. Completely passionate to improve people's experience in 
          tech through my ideas with UX/UI design.</h3>
            </div>
            <div className="column_left mr-8">
                <h3 className="mt-4 ">Grid with picture</h3>

            </div>
        </div>
      <section className={utilStyles.headingMd}>
        <p>Passion for Tech + Design. Completely passionate to improve people's experience
           in tech through my ideas with UX/UI design.</p>
      </section>
    </Layout>
  )
}