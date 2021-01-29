import Head from 'next/head'
import Layout from '../components/layout.js'
import utilStyles from '../styles/utils.module.css'

export default function mediamonks() {
    return (
      <Layout >
        <Head>
          <title>Media Monks</title>
        </Head>
        <section>          
          <h2 className="center-title"> Why MediaMonks and why me?</h2>
        </section>
        <section>
        <div>
              <h3 className="mt-4">Hi MediaMonks Team! </h3>                 
              <p className="mt-6 mb-4">I felt motivated to apply because my current plan is to find a job 
              where I can stay at least 2 years and learn from Jedi-level designers so I can also improve in my design skills 
              and become an amazing designer. </p> 

              <img src="https://media.giphy.com/media/l1KsEwrdJ9gzewJ9u/giphy.gif" alt=""></img>

              <p className="my-4">In my experience in the NGO, I worked with people from different time-zones and different 
                nationalities which helped me to learn how to work and interact with  other cultures and personalities. </p>

              <p className="mt-4">I know I ca: </p>
              <ul className="list-disc list-inside">
                <li> Open to feedback because I know that makes me improve my design skills.</li>
                <li> Always trying to go further from what I’m being asked to do.</li>
                <li> Constant learner ready to take any challenge.</li>
                <li> Interpersonal skills.</li>
                <li> Constantly learning and always ready to take any challenge.</li>
                <li> My daily tools are Figma, Sketch and Adobe XD, I understand the basic UI patterns. </li>
                <li> For me it’s important that every design I do makes the user's life easier.</li>
             </ul>

               <p className="mt-4"> I know the impact that your agency has done and I know that I can create amazing things by being junior UI designer 
                   because it's aligned with my passion and my mission in life to improve people's life through tech; I know I can do it with my design and developer abilities. </p>
              <p className="mt-4">I really hope to hear from you soon. Thanks for reading</p>
          </div>
        </section>
      </Layout>
    )
  }