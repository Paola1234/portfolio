import Head from 'next/head'
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
            <img src="/images/name.png" className="img-small"/>
            <p className="mb-4">Computer engineer and Designer. Passionate for Tech + Design. </p>
            <p className="mtb-4">Completely passionate for improving people's experience in 
                tech through my ideas with UX/UI design.</p>
                  <div className="row pr-8">
                      <a href="/projects">
                        <button className=" m-4 right-auto left-auto bg-purple-700 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded">
                          My projects
                        </button>
                      </a>
                      <a href="/aboutme">
                        <button className=" m-4 right-auto left-auto bg-purple-700 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded">
                          About me
                        </button>
                      </a>
                  </div>  
                  <img src="/icons/Dots Back.svg" className="flex justify-start"/>         
            </div>
            <div className="column_left mr-8">
                <h3 className="mt-4 ">Grid with picture</h3>

            </div>
        </div>
    </Layout>
  )
}