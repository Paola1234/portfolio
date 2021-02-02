import Head from 'next/head'
import Layout from '../../components/layout.js'
import utilStyles from '../../styles/utils.module.css'


export default function figmaprojects() {
  return (
    <Layout>
      <Head>
        <title>My Figma projects</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2 className="mt-4 mb-8 text-black center-title"> Some of my UI projects</h2>
      </section>
      <section id="empowerment">
        <h3 className="mt-8 text-2xl font-bold leading-tight text-black">Empowerment and Entrepreneur support for Mexican Women</h3>
        <p className="italic">Web page design</p>
        <p>This project was designed for a hackaton which our main objective was to give support to mexican women who want to start their own business but they don't have the knowledge or the resources to do it.</p>
        <iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FqNxGUcgmg1m04tXER46xId%2FHi-Fis-HacktonMexico%3Fnode-id%3D0%253A2%26scaling%3Dscale-down-width" allowfullscreen></iframe>
        <p>This project was developed with 2 amazing designers and colleages: <a href="https://www.instagram.com/nicoleissocrazy/">Nicole Navarro</a> and <a href="https://www.instagram.com/ivanszjpg/">Ivan Sz</a></p>      
      </section>

      <p className="mt-8 text-xl font-bold text-center">·  ·  ·</p>
      
      <section id="insurance">
      <h3 className="mt-20 text-2xl font-bold leading-tight text-black">Insurance App for not so common products</h3>
        <p className="italic">Mobile App</p>
        <p className="pb-4">The main objective of this project was to design a mobile app in which people could buy not so common products like insurance for pets or insurance for short terms of period.</p>
        <iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F2RWfnvHk67Xc7cF6ZoQA9B%2FHi%3Fnode-id%3D0%253A2%26scaling%3Dcontain" allowfullscreen></iframe>
        <p>This project was designed in 5 days based on UX Research done between people with the user profile.</p>  
      </section>

      <p className="mt-8 text-xl font-bold text-center">·  ·  ·</p>
      
    </Layout>
  )
}