import Head from 'next/head'
import Layout from '../components/layout.js'
import utilStyles from '../styles/utils.module.css'


export default function aboutme() {

    return (
        <Layout home>
      <Head>
        <title>About me</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2 className="center-title"> About Me </h2>
        <span className="subtitle text-center">Let me tell you a few facts about me</span>
        <p>
        I’m a computer engineer and designer whose 
        love for tech and creativity who questions everyday “How can I make people’s life easier?”
        </p>
        <p>
        That’s why I create experiences through tech. I'm continuously learning about topics related 
        to UX, gamification, mobile design, and innovative ways to improve people's experience.
        </p>
        <div className="row pr-8">
            <div className="column_equal pr-8 ">
                <h3 className="purple-bold-text mt-4">Hard Skills</h3>
                <ul className="list-disc">
                    <li>Adobe XD</li>
                    <li>Adobe Illustrator</li>
                    <li>Adobe Photoshop</li>
                    <li>CSS</li>
                    <li>Data analysis</li>
                    <li>HTML</li>
                    <li>Invision</li>
                    <li>Figma</li>
                    <li>Principle</li>
                    <li>Sketch</li>
                    <li>Swift</li>
                    <li>Spreadsheet fan</li>
                    <li>UX Research</li>
                    <li>Usability Testing</li>
                    <li>Zeplin</li>
                </ul>
            </div>
            <div className="column_equal mr-8">
            <h3 className="purple-bold-text mt-4 ">Soft Skills</h3>
                <ul className="list-disc">
                    <li>Analytic</li>
                    <li>Always learning</li>
                    <li>Creative</li>                    
                    <li>Detail Oriented</li>
                    <li>Empathetic</li>
                    <li>Multitasker</li>
                    <li>Resilient</li>
                    <li>Solutions Oriented</li>
                    <li>Team Player</li>                    
                    <li>Passionate for design and UX</li>
                </ul>
            </div>
        </div>
      </section>
      <section>
            <h3 className="center-text">If you want to know more about my experience</h3>
            <button></button>

      </section>
      <section>
            <h3 className="center-text">Contact me here</h3>
            <div className="rowMedia">
            <img className="mediaIcons" src="/icons/socialMedia/behance.svg" alt=""/>
            <img className="mediaIcons"src="/icons/socialMedia/linkedin.svg" alt=""/>
            <img className="mediaIcons"src="/icons/socialMedia/medium.svg" alt=""/>
            <img className="mediaIcons"src="/icons/socialMedia/email.svg" alt=""/>
        </div>
      </section>
    </Layout>
    )
}
