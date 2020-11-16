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
        <p className="text-center mb-4">Let me tell you a few facts about me</p>
        <p className="mb-4">
        I’m a computer engineer and designer whose 
        love for tech and creativity who questions everyday “How can I make people’s life easier?”
        </p>
        <p className="mb-4">
        That’s why I create experiences through tech. I'm continuously learning about topics related 
        to UX, gamification, mobile design, and innovative ways to improve people's experience.
        </p>
        <div className="row">
            <div className="column_equal">
                <h3 className="purple-bold-text">Hard Skills</h3>
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
            <div className="column_equal">
            <h3 className="purple-bold-text">Soft Skills</h3>
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
            <a href="https://drive.google.com/file/d/17eth5n0I086cch3-ZM6cdYjCRmnh0F89/view?usp=sharing">
              <button className=" m-4 right-auto left-auto bg-purple-700 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded">
               Download my CV
              </button>
            </a>
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
