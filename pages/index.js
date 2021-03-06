import Head from 'next/head'
import Layout from '../components/layout.js'
import utilStyles from '../styles/utils.module.css'


export default function index() {
  return (
    <Layout home>
      <Head>
        <title>Paola Latino Designer Developer</title>
      </Head>
      <div className="h-screen bg-right bg-cover pb-14 bg-imgIndex">
      <div className="pr-8 mt-8 row">
            <div className="auto-cols-auto">
            <h1 className="text-5xl leading-10 md:mb-1 tracking-in-expand-fwd text-gradient">Paola Latino</h1>
            <h1 className="mb-4 text-5xl leading-10 tracking-in-expand-fwd text-gradient">Tovar</h1>
            <p className="mb-4 fade-in">Computer engineer and Designer. Passionate for Tech + Design. </p>
            <p className="mt-4 mb-6 fade-in">Completely passionate for improving people's experience in 
                tech through my ideas with UX/UI design.</p>
                  <div className="flex flex-wrap pr-8 row">
                      <a href="/projects">
                        <button className="left-auto right-auto px-4 py-2 my-4 mr-1 font-bold text-white transform rounded btn-gradient fade-in hover:scale-105 hover:bg-purple-500">
                          My projects
                        </button>
                      </a>
                      <a href="/aboutme">
                        <button className="left-auto right-auto px-4 py-2 mb-4 font-bold text-white transform rounded md:ml-1 md:mt-4 md:mx-1 btn-gradient fade-in hover:scale-105 hover:bg-purple-500">
                          About me
                        </button>
                      </a>
                  </div>  
                  <img src="/icons/Dots Back.svg" className="flex justify-start max-w-sm sm:pt-4"/>         
            </div>
            <div className="column_left">
              <img className="center fade-in img-medium" src="/images/foto-sin-fondo.png" alt=""/>
            </div>
        </div>
        <div className="flex-wrap mt-4 rowMedia">
            <a href="https://www.behance.net/paola-latino" ><img className="mediaIcons slide-in-bottom-subtitle" src="/icons/socialMedia/behance.svg" alt="behancePlatino"/></a>
            <a href="https://www.linkedin.com/in/paola-latino/"><img className="mediaIcons slide-in-bottom-subtitle"src="/icons/socialMedia/linkedin.svg" alt="Linkedin"/></a>  
            <a href="https://medium.com/@paolalat188"><img className="mediaIcons slide-in-bottom-subtitle"src="/icons/socialMedia/medium.svg" alt=""/></a> 
            <a href="https://github.com/Paola1234" ><img className="w-10 mediaIcons slide-in-bottom-subtitle" src="/icons/socialMedia/github.svg" alt=""/></a>
            <a href="mailto: paolalat188@gmail.com"><img className="mediaIcons slide-in-bottom-subtitle"src="/icons/socialMedia/email.svg" alt=""/></a>
        </div>
        </div>
    </Layout>
  )
}