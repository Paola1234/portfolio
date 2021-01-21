import Head from 'next/head'
import Layout from '../components/layout.js'
import utilStyles from '../styles/utils.module.css'

export default function google() {
    return (
      <Layout >
        <Head>
          <title>Google</title>
        </Head>
        <section>          
          <img className="flex justify-around mx-auto img-small" src="/images/mv-logo.png"></img>
          <h2 className="center-title"> Why Google?</h2>
        </section>
        <section>
        <div>
              <h3 className="my-4">Hi design team! </h3> 
              <p className="my-2">The first time I heard about Mindvalley, It was by the time when a close friend recommended me to start to meditate 
                and <span className="font-bold">I took "The 6 phase of meditation" by Vishen </span>, since that time <span className="font-bold">I admired how your 
                courses can improve people's life and I feel identified with it.</span> </p> 
                <video controls autoPlay width="800" height="600" name="Video Name" src="/images/6PhaseMeditation.mov"></video>
                
              <p className="my-8">I felt motivated to apply because <span className="font-bold">I've seen how your company culture had help people in your team to be 
                  their best version in their professional and personal life</span>, and for my next steps I've been investing on
                  me to achieve the same, by buying books and taking courses about personal development and UX design. </p> 

              <p className="mt-8">Based on this abilities and passions I consider I'm the perfect candidate for the product designer role: </p>
              <ul className="pl-6 list-disc list-inside">
                <li className="my-1"> <span className="font-bold">My excitement towards Mindvalley’s mission.</span>  My thesis is a good example of it because I did a deep research about personal 
                  development platforms and I learned a lot from yours and others from the market 
                  which helped me to understand the reality of the market and to love this topic.</li>
                <li className="my-1"> I combine both of my strengths: <span className="font-bold">developer by night and designer by day.</span></li>
                <li className="my-1"> I <span className="font-bold">love doing user flows</span> for my designs and sometimes to organize my ideas.</li>
                <li className="my-1"> As you can check in my projects I use <span className="font-bold"> UX artifacts for my designs</span> and research.</li>
                <li> I have a <span className="font-bold">constant thirst for learning and improvement:</span> Since I started on design, I've been taking at least 3 online courses (per month)
                  related with UX/UI, gamification and psychology. Right now, I'm taking in the IDF: "Psychology of an e-commerce", "Human-Computer Interaction 
                  HCI" and "How to design for AR/VR" .</li>
                <li className="my-1"> I'm used to work with Adobe Photoshop, Adobe Illustrator, <span className="font-bold">Figma</span> and Sketch.</li>
                <li className="my-1"> I like to <span className="font-bold">understand the user, the problem and design based on the user behavioural data</span> (using tools like Hotjar).</li>
                <li className="my-1"> I love UX! I consider that <span className="font-bold">understanding the user and loving the problem </span> has helped me to bring more amazing ideas
                  (as you can check in my projects). </li>
              </ul>
              <p className="mt-8"> I have a challenging mission where I want to <span className="font-bold">create a startup/agency </span>(that's why my domain is platino.digital), where I
              can help people with big dreams, low initial resources and have a lack of knowledge on tech, to create their web pages so they can have a digital 
              businesses -> </p>
              
              <p className="mt-2 italic">Right now, <span className="font-bold">I'm doing freelance</span> for a startup that wants to create an insurance web page more accesible for users who don't have any 
              experience with the product but it can be useful in cases such as having a rented apartment and the people living there might get broke because 
              of COVID so the insurance can help them to pay the rent while they find a job. </p>

              <p className="mt-8">At the same time, I would love to have a <span className="font-bold">project/side business related with mental or physical health </span> 
              which will help the users to have a better lifestyle. And that's how mindvalley is related with my mission in life, because I know that with your team I can 
              practice the skills I need for starting my agency. </p>

               <p className="my-4"> I <span className="font-bold">know the impact that your platform can do and I want to be part of your projects</span>, especially your "J.A.R.V.I.S" for personal 
                   development project through being a Product Designer because it's aligned with my passion and my mission 
                   in life to improve people's life through tech, create an agency that helps businesses to materialize start-up's ideas and I know I can do it with my design and developer abilities. </p>
              <p className="my-4">I really hope to hear from you soon. Thanks for reading and I recommend you to <a className="font-bold" href="/projects/estereo">check this project about responsive design, </a><a className="font-bold" href="/projects/figmaprojects">check some of my UI projects in Figma</a> and <a className="font-bold" href="https://life.mindvalley.com/report/210551">my lifebook result</a></p>
          </div>
        </section>
      </Layout>
    )
  }