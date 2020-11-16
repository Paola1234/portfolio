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
          <img className="flex justify-around " src="/images/mv-logo.png"></img>
          <h2 className="center-title"> Why Mindvalley?</h2>
        </section>
        <section>
        <div>
              <h3 className="m-4">Hi design team! </h3> 
              <p className="m-4">The first time I heard about Mindvalley was when I was in a NGO and I took one of your courses,
               since that time I admired how your courses can improve people's life and I feel identified with that. </p> 
              <p className="m-4">I felt motivated to apply because I've seen how your company culture had help people in your team to be 
                  their best version in their professional and personal life, and for my next steps I've been investing on
                  me to achieve the same, by buying books and taking courses about personal development and UX design. </p> 
               <p className="m-4">Also I know the impact that your platform can do and I want to be part of your "J.A.R.V.I.S" for personal 
                   development project through being a junior web designer because it's aligned with my passion and my mission 
                   in life to improve people's life through tech and I know I can do it with my design and developer abilities. </p>
              <p className="m-4">I really hope to hear from you soon</p>
          </div>
        </section>
      </Layout>
    )
  }