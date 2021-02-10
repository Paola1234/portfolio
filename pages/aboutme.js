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
        <h2 className="mt-8 center-title fade-in"> About Me </h2>
        <p className="mb-8 text-center fade-in">Let me tell you a few facts about me</p>
        <p className="mb-4">
        I’m a computer engineer (by night) and designer (by day) whose love for tech and creativity who questions everyday “How can I make people’s life easier?”
        </p>
        <p className="mb-4">
        That’s why I create experiences through tech. I'm continuously learning about topics related 
        to UX, gamification, mobile design, and innovative ways to improve people's experience.
        </p>
        <div className="row">
            <div className="column_equal">
                <h3 className="mb-2 text-xl purple-bold-text fade-in">Hard Skills</h3>
                <ul className="list-disc list-inside fade-in">
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
            <h3 className="mb-2 text-xl purple-bold-text fade-in">Soft Skills</h3>
                <ul className="list-disc list-inside fade-in">
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

      <section className="my-12">
        <h2 className="mb-2 text-xl font-extrabold text-gradient"> My university Thesis</h2>
        <p className="mb-2"> This thesis proposed to explore the viability of creating a mobile application that can provide a service oriented
          towards the guidance of developing abilities for personal growth of the user. </p>
          <p className="mb-2">Currently, the tendency is 
          to hire a coach, but that is not the only solution, because of that, what is expected in the project is to understand
          a way to connect the personal trainers through technology, using different educational technics different from only coaching. </p>
          <p>The market segmentation that I expect to reach with the project is people with 1 to 5 years of professional 
          experience. </p>

          <div className="flex flex-wrap justify-around px-8 mt-4">
          <a  className="flex flex-wrap justify-around w-1/2 px-4 py-2" href="https://documentodegrado.uniandes.edu.co/acepto201699.php?id=20640.pdf">
              <button className="flex flex-wrap justify-around px-4 py-2 mx-auto font-bold text-white transform rounded btn-gradient hover:scale-105 hover:bg-purple-500">
               Explore the thesis document
              </button>
          </a>
          <a  className="flex flex-wrap justify-around w-1/2 px-4 py-2" href="https://xd.adobe.com/view/5282f035-f4c7-4547-7d5c-7767a6f722b7-24b3/">
              <button className="flex flex-wrap justify-around px-4 py-2 mx-auto font-bold text-white transform rounded btn-gradient hover:scale-105 hover:bg-purple-500">
               Explore the prototype
              </button>
          </a>
          </div>

      </section>
      <section>
            <h3 className="mt-10 mb-2 text-gradient">If you want to know more about my experience</h3>
            <p className="pb-2 ">I've designed and developed web pages for startups and NGOs. In my CV you can find the latest 2 experiences in web design.</p>
            <a  className="flex flex-wrap justify-around px-4 py-2" href="https://drive.google.com/file/d/1JbFLHALH9IVVdv2cTt4tnLEZYOU-yDEd/view?usp=sharing">
              <button className="flex flex-wrap justify-around px-4 py-2 mx-auto font-bold text-white transform rounded btn-gradient hover:scale-105 hover:bg-purple-500">
               Download my CV
              </button>
            </a>
      </section>
      <section>
            <h3 className="pt-6 mt-10 mb-2 center-text text-gradient">Contact me here</h3>
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
