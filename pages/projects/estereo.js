import Head from 'next/head'
import Layout from '../../components/layout.js'
import utilStyles from '../../styles/utils.module.css'

export default function estereo() {
    return (
        <Layout>
        <Head>
            <title>Estereo Picnic Project</title>
        </Head>
        <section className={utilStyles.headingMd}>
                <h1 className="text-4xl text-black"> Estereo Picnic Festival —Case Study</h1>
                <h3 className="text-m">A new festival experience during COVID — 19 times</h3>
                <p className="text-sm italic text-light">Responsive Design</p>
                <p className="mb-4 text-sm italic text-light">Mobile First</p>
                <img src="https://cdn-images-1.medium.com/max/5696/1*bxbiPdfbIQ5fU5BtfydciA.png"
                alt="Title Estereo"/>

            <section>
                <h3 className="mt-8 text-3xl font-bold text-black">Summary</h3>
                <ul className="pb-4 pl-6 list-disc list-inside">
                    <li><a href="#myrole">My role</a></li>
                    <li><a href="#tools">Tools</a></li>
                    <li><a href="#problem">Main Problem</a></li>
                    <li><a href="#persona">User Persona</a></li>
                    <li><a href="#journey">User Journey</a></li>
                    <li><a href="#solution">Solution</a></li>
                    <li><a href="#design">Design</a></li>
                    <li><a href="#wireframes">Prototype</a></li>
                    <li><a href="#hifi">Hi-Fi</a></li>
                    <li><a href="#nextsteps">Next Steps</a></li>
                    <li><a href="#conclusion">Learnings</a></li>
                </ul>
            </section>

            <section id="myrole">
                <h2 className="mt-8 text-3xl font-bold text-black">My role</h2>
                    <ul className="pb-4 pl-6 list-disc list-inside">
                        <li>UX Researcher/UI Designer.</li>
                        <li>Freelancer and fan of the festival.</li>
                        <li><span className="font-bold">Duration: </span>1 week</li>
                    </ul>
            </section>

            <section id="tools">
                <h3 className="mt-8 text-3xl font-bold text-black">Tools</h3>
                    <ul className="pb-4 pl-6 list-disc list-inside">
                        <li><span className="font-bold">Milanote: </span>Moodboard.</li>
                        <li><span className="font-bold">Adobe Photoshop: </span>Pixel art.</li>
                        <li><span className="font-bold">Mural: </span>Brainstorming, card sorting, MVP (Moscow diagram), Information Architecture, summarize qualitative research.</li>
                        <li><span className="font-bold">Sketch: </span>Wireframes, user persona template.</li>
                        <li><span className="font-bold">Principle: </span>Hi-Fi animation.</li>
                    </ul>
            </section>

             <section id="problem" >
                <h3 className="mt-8 text-3xl font-bold text-black">Main problem</h3>
                <p className="mt-4 mb-4"> The Estereo Picnic Festival (Festival Estéreo Picnic in Spanish) is a festival created in Bogota in 2010, which usually happens in the last weeks of March or the beginning of April. In the first edition, they had 2800 
                spectators but in the last year (2019) they had 87000 spectators, this data shows that this festival is the biggest one in the country. In the festival, you can find different artists from genres such as rock, EDM, pop, salsa, and Vallenato (typical genre from Colombia).</p>
                <p className="mb-4">Right now <span className="font-bold"> the festival was postponed because of COVID-19 and was moved to the next year.</span> Some of the people that already bought the tickets said that they think that the festival might be canceled because of the restrictions 
                done by that the government that says that all the big events will be canceled until the 31st of December of 2020 or until the virus is controlled.</p>
                <p className="mt-4 italic">In this article, I will show you how I designed a possible solution to help the festival organizers to motivate the people that already have the tickets, so they can experience the privileges of having it and help them to give their users a similar festival experience from their 
                houses. I will know this project is a success if more or less of the 50% of the users that purchased the tickets attend to the online event, also I will know that it’s a success if this helps to promote the purchase of more tickets for the event in December.</p>
             </section>

             <section id="persona">
                <h3 className="mt-8 text-3xl font-bold text-black">Our User Persona</h3>
                <img src="https://cdn-images-1.medium.com/max/6400/1*IDBifHnFyvIr3fgALc47OA.png"
                alt="User Persona Estereo"/>
            </section>

            <section id="journey">
                <h3 className="mt-8 text-3xl font-bold text-black">His journey</h3>
                <p className="">This is the journey of a user in any of the lasts editions of the festival, as you can see the user can move along the festival in a different experience, and this helps the user to explore different environments.</p>
                <img src="https://cdn-images-1.medium.com/max/2048/1*uP5M7UVes2eAMG0pXrywNQ.png"
                alt="Common User Journey in the festival"/>
            </section>

            <section id="solution">
                <h3 className="text-3xl font-bold text-black">Solution</h3>
                <p className="mb-4">Based on the results and the user persona, I decided to create a responsive web page for the special online event and after that, another web page will be available after that event until December. After doing a brainstorm of all the possible features that can help the user to have a similar experience online, I used the Moscow Diagram that helped me to choose the “must-have” and the “should have” features on both web pages.</p>
                <p className="mb-4">After that, I did the Value vs effort diagram to choose the MVP that can be developed in this phase which helped me to choose the MVP for this project and the solution for this.</p>
                <p className="mb-4">The solution is divided into two important web pages:</p>
                <ol className="pb-4 list-decimal list-inside">
                  <li><span className="font-bold">The main online event:</span> This web page has features like:</li>
                    <ul className="pb-4 pl-6 list-disc list-inside">
                        <li>Chronometer to check how much time is until the main event in December.</li>
                        <li>Three different parallel stages where the user can move through, with the. sponsors names.</li>
                        <li>Picnic zone where users can watch any of the stages while they have a video call with friends (only for people who purchased the tickets). </li>
                        <li>Buy tickets for the event in December (which also gives some privileges in the online event).</li>
                        <li>An exclusive stage with content like: exclusive interviews of the lineup for this year, zoom background with iconic places of the festival, exclusive videos from then past versions, access to picnic zone, and send questions to their favorite artists of the lineup.</li>
                        <li>Donate for the main NGO that needs support because of COVID.</li>
                    </ul>
                    <li><span className="font-bold">Page for after the main online event:</span> </li>
                    <ul className="pb-4 pl-6 list-disc list-inside">
                        <li>Chronometer until the main event.</li>
                        <li>Same features as the current page like buying tickets, pay for transportation until the event, glamping, etc.</li>
                    </ul>
                </ol>
            </section>

            <section id="design">
                <h3 className="mt-8 text-3xl font-bold text-black">Design</h3>
                <p className="mb-4">Before starting to do the prototype I decided to create a moodboard that gathers all the feelings, colors, and visual guidelines used in the previous editions. If you want to check better the UI, you can access the article in <a className="font-bold" href="https://www.behance.net/gallery/97974401/Responsive-web-page-for-online-event-in-COVID-19-times">Behance</a></p>
                <img src="https://cdn-images-1.medium.com/max/3840/1*G9-A9YQO1o_m8uget4cXVw.png"
                alt="Moodboard of the festival"/>
                <p className="mt-6 mb-2">Based on this, for both of the solutions the style tile used for the final prototype was:</p>
                <p className="mb-4">The first page (that will be used <span className="italic font-bold">during the main digital event</span>), is in pixel art due that I wanted to bring back the memories related to old videogames and also because this festival experience supposed to be a field outside the capital.</p>
                <img src="https://cdn-images-1.medium.com/max/5752/1*SA6cGriA2_Mk9NNsfHUYKg.png"
                alt="Style tile of the main online event"/>
                <p className="mt-4 mb-4">The page that will be used <span className="italic font-bold">after the main event</span> which continues to promote the event in December mixes the style tile used in the current official web page plus the pixel art from the online event, so the user won’t a big difference.</p>
                <img src="https://cdn-images-1.medium.com/max/5396/1*acFoQkZ_lgo-1xWHFO7d4w.png"
                alt="Style tile after the online event web page."/>
            </section>

            <section id="wireframes">
                <h3 className="mt-8 text-3xl font-bold text-black">Prototype</h3>
                <h3 className="mt-2 text-xl font-bold text-black">Low</h3>
                <p className="mb-4">I started first with the design of the Low-Fi prototypes in the phone, tablet, and at the end, with the computer, and because of this in this medium I will show you the prototype in different devices. All the detailed UI in the 3 layouts are in my Behance.</p>
                <p className="mb-4">These are the main changes that were done in the prototype Low-fi to Mid-fi:</p>
                <img src="https://cdn-images-1.medium.com/max/5652/1*YSfr2af5BikjdS9hoJLvUA.png"
                alt="Some of the changes from Low to Mid after testing the prototype."/>
                <ul className="pb-4 pl-6 list-disc list-inside">
                    <li>Add the ball pool party concept (because without it there’s no festival).</li>
                    <li>Reduce the stage information and moved it inside the stage.</li>
                    <li>Changed the stage’s layout to be more like in a videogame.</li>
                </ul>
                <h3 className="mt-8 text-xl font-bold text-black">Mid</h3>
                <p className="mt-6 mb-2 italic">Mid wireframe of the main online event in tablet:</p>
                <img src="https://cdn-images-1.medium.com/max/2204/1*qBxB6jJFXELrTzo6YgaJzg.png"
                alt="Tablet version of the web page and the flow of how a user can access an exclusive stage."/>
                <p className="mt-6 mb-2 italic"> Mid- Flow of the page after the main event:</p>
                <img src="https://cdn-images-1.medium.com/max/2996/1*2cSwaJSdg_GnWKntfhfWSQ.png"
                alt="Mid — Fi version of the page after the online event"/>

                <p className="mb-4">These are the main changes that were done in the prototype Mid-Fi to High-Fi:</p>
                <ul className="pb-4 pl-6 list-disc list-inside">
                    <li><span className="font-bold">Changed the location of the chronometer:</span> First the main introduction and under that there’s the chronometer. I changed it because it was confusing the objective of the chronometer.</li>
                    <li><span className="font-bold">Moved the main logo to be lower:</span> because it was too close to the top.</li>
                    <li>On the page for the main online event, I changed the layout used inside the stages, and also added some tabs so the user can see exclusive videos from previous festival versions.</li>
                </ul>
            </section>

            <section id="hifi">
                <h3 className="mt-8 text-3xl font-bold text-black">Hi-Fi</h3>
                <p>This is the final prototype of the <span className="italic font-bold">main online event </span>in the computer version, if you want to check better the UI, you can access the article in <a className="font-bold" href="https://www.behance.net/gallery/97974401/Responsive-web-page-for-online-event-in-COVID-19-times">Behance</a></p> 
               <img className="-pt-4" src="https://cdn-images-1.medium.com/max/2000/1*sbk4mUhwS7z_NDm8yxO_xQ.gif"
                alt="This is the desktop version of the online event web page."/>
                <p>Access to the live prototype:<a className="font-bold" href="#"> Phone version</a>  for the website used for during the main event.</p>
               <p className="mt-4">And this is the complete final version of the web page that will be used <span className="italic font-bold">after the online event</span> until the event in December:</p>
               <img className="" src="https://cdn-images-1.medium.com/max/2000/1*zFk0j1MGdWuxZSUATtDKsA.gif"
                alt="This is the “after-web page” in the Hi-Fi prototype for the tablet."/>
                <p>Access to the live prototype:<a className="font-bold" href="#"> Phone version</a>  for the website used for during the main event.</p>
            </section>

            <section id="nextsteps">
            <h3 className="mt-8 text-3xl font-bold text-black">Next Steps</h3>
                <ul className="pb-4 pl-6 list-disc list-inside">
                    <li>A Picnic zone adapted as a chill zone were people that purchased their tickets can talk with their friends while they watch any of the stages on the web page.</li>
                    <li>Create an option/service where restaurants or sponsors can promote their brand so people can see their products.</li>
                </ul>
            </section>

            <section id="conclusion">
            <h3 className="mt-8 text-3xl font-bold text-black">Learnings through the process</h3>
                <ul className="pb-4 pl-6 list-disc list-inside">
                    <li>One of the main learnings is that this strategy might work also to promote tickets to people that didn’t purchase it yet.</li>
                    <li>After finishing the digital hi-fi prototype, I talked with some of the users that already purchased the tickets and they mentioned that is a good idea and that they might use it with their friends, the main issue is that if the 
                        festival is canceled they would ask for reimbursement because the price of the ticket covers more than simply this such as discounts on food, beers, and transportation. Also, some users suggested me to add more description of the features in the stages because they couldn’t understand the objective of some of these features.</li>
                </ul>
                <p className="italic">If you want to create awesome things with tech and know about my projects contact me through <a className="font-bold" href="https://www.linkedin.com/in/paola-latino/">LinkedIn</a></p>
            </section>
        </section>           
    </Layout>       
    )
}      






