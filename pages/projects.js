import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'


export default function projects() {
  return (
    <>
      <Head>
        <title>My projects</title>
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
    </>
  )
}