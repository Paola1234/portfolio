import Head from 'next/head'
import Layout from '../components/layout.js'
import utilStyles from '../styles/utils.module.css'


export default function aboutme() {

    return (
        <Layout>
      <Head>
        <title>About me</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2 className="center-title"> About Me </h2>
        <p className="mb-4 text-center">Let me tell you a few facts about me</p>
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
            <h3 className="mb-2 center-text">If you want to know more about my experience</h3>
            <p className="pb-2 text-center">I've designed and developed web pages for startups and NGOs. In my CV you can find the latest 2 experiences in web design.</p>
            <a  className="flex flex-wrap justify-around px-4 py-2" href="https://drive.google.com/file/d/1JbFLHALH9IVVdv2cTt4tnLEZYOU-yDEd/view?usp=sharing">
              <button className="flex flex-wrap justify-around px-4 py-2 font-bold text-white bg-purple-700 rounded hover:bg-purple-500">
               Download my CV
              </button>
            </a>
      </section>
      <section>
            <h3 className="pt-6 center-text">Contact me here</h3>
            <div className="rowMedia">
            <a href="https://www.behance.net/paola-latino" ><img className="mediaIcons" src="/icons/socialMedia/behance.svg" alt=""/></a>
            <a href="https://www.linkedin.com/in/paola-latino/"><img className="mediaIcons"src="/icons/socialMedia/linkedin.svg" alt=""/></a>  
            <a href="https://medium.com/@paolalat188"><img className="mediaIcons"src="/icons/socialMedia/medium.svg" alt=""/></a> 
            <a href="https://github.com/Paola1234" ><img className="w-10 mediaIcons" src="/icons/socialMedia/github.svg" alt=""/></a>
            <a href="mailto: paolalat188@gmail.com"><img className="mediaIcons"src="/icons/socialMedia/email.svg" alt=""/></a>
        </div>
      </section>
    </Layout>
    )
}
