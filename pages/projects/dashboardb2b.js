import Head from 'next/head'
import Layout from '../../components/layout.js'
import utilStyles from '../../styles/utils.module.css'

export default function dashboardb2b() {
    return (
        <Layout>
        <Head>
            <title>B2B Dashboard</title>
        </Head>
        <section className={utilStyles.headingMd}>
                <h1 className="text-4xl text-black"> B2B Dashboard</h1>
                <h3 className="text-m">SaaS Software for charter companies</h3>
                <p className="text-sm italic text-light">UX Research</p>
                <p className="mb-4 text-sm italic text-light">Usability</p>
                <img className="rounded-md" src="/images/MockupDashboard.png"
                alt="Title B2B"/>

            <section>
                <h3 className="mt-8 text-3xl font-bold text-black">Summary</h3>
                <ul className="pb-4 pl-6 list-disc list-inside">
                    <li><a href="#myrole">My role</a></li>
                    <li><a href="#tools">Tools</a></li>
                    <li><a href="#problem">Main Problem</a></li>
                    <li><a href="#persona">User Persona</a></li>
                    <li><a href="#userstory">User Story 1</a></li>
                    <li><a href="#userstory2">User Story 2</a></li>
                    <li><a href="#userstory3">User Story 3</a></li>
                    <li><a href="#userstory4">User Story 4 and 5</a></li>
                    <li><a href="#prototype">Prototype</a></li>
                    <li><a href="#nextsteps">Next Steps</a></li>
                    <li><a href="#conclusion">Learnings</a></li>
                </ul>
            </section>
            
            <p className="mt-8 text-xl font-bold text-center">·  ·  ·</p>

            <section id="myrole">
                <h2 className="mt-10 text-3xl font-bold text-black">My role</h2>
                    <ul className="pb-4 pl-6 list-disc list-inside">
                        <li>Product designer / UX designer</li>
                        <li><span className="font-bold">Duration: </span>4 months</li>
                    </ul>
            </section>

            <section id="tools">
                <h3 className="mt-10 text-3xl font-bold text-black">Tools</h3>
                    <ul className="pb-4 pl-6 list-disc list-inside">
                        <li><span className="font-bold">Milanote: </span>Moodboard</li>
                        <li><span className="font-bold">Mural: </span>Brainstorming, card sorting, MVP (Moscow diagram), Information Architecture, summarize qualitative research</li>
                        <li><span className="font-bold">Sketch: </span>Wireframes, user persona template</li>
                        <li><span className="font-bold">Invision: </span>Interactive prototype</li>
                    </ul>
            </section>

            <p className="mt-8 text-xl font-bold text-center">·  ·  ·</p>

             <section id="problem" >
                <h3 className="mt-10 text-3xl font-bold text-black">Main problem</h3>
                <p className="mt-2 mb-4"> Currently in Colombia, the companies that rent charters (+20 companies) had some of their processes in white boards, papers or in several spreadsheets.</p>
                <img className="rounded-md" src="/images/white_board.jpg"
                alt="User Persona B2B"/>
                <p className="mb-4 text-xs text-center">Photo by <a href="https://unsplash.com/@officestock?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Sebastian Herrmann</a> on <a href="https://unsplash.com/s/photos/white-board?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></p>
                <p className="mb-4">Right now because of the COVID restrictions their sales have been lower compared to last year, and they currently need to reach more people that might be part of their market but they don't know that the company exists. 
                This companies are trying to create alliances with charter marketplaces that can help them to reach further markets but also they need to modernize and standardize their processes online. </p>
             </section>

             <p className="mt-8 text-xl font-bold text-center">·  ·  ·</p>

             <section id="persona">
                <h3 className="mt-8 text-3xl font-bold text-black">Our User Persona</h3>
                <img className="rounded-md" src="/images/UserPersonaB2B .jpg"
                alt="User Persona B2B"/>
            </section>

            <p className="mt-8 text-xl font-bold text-center">·  ·  ·</p>

            <section id="userstory">
                <h3 className="mt-4 text-3xl font-bold text-black"> User Story 1</h3>
                <p className="mt-2">As a charter operator, I want to know which are the flights that where reserved with Flapz and all the information needed for the logistics so that will allow me to prepare the Flapz flights on time.</p>

                <p className="my-4 text-xl font-bold text-black"> · Solution</p>   
                    <img className="rounded-md" src="/images/dashboard/Calendar-Mockup.jpg"
                    alt="Calendar dashboard"/>                
                <p className="mt-2"> The first page is the table where the user can find all the flights of their fleet scheduled from the marketplace. 
                    The main objective is that by clicking on each of the rows the user can also check all the data needed, in order to create the permission to the Colombian Civil Aviation Authority. </p>
                <p className="my-4">For this version there's some data missing for the authorization that the operator already knows, such as the altitude in the destination, which is the recommended exit that the pilot should take, possible gasoline stops, etc.</p>
            </section>

            <section id="userstory2">
                <h3 className="mt-12 text-3xl font-bold text-black"> User Story 2</h3>
                <p className="mt-2">As a charter operator, I want to do a follow up of my fleet state so that will allow Flapz and me to know which of the charters in my fleet are available to rent.</p>
                
                <p className="my-4 text-xl font-bold text-black"> · Solution</p>   
                <p className="my-4">For this version we decided that as an MVP, the best and most solution for now, was to create a table that shows which is the current state of the fleet. 
                The user can update it by creating an event in the main calendar and choosing which is the current state of the flight.</p>
            </section>

            <section id="userstory3">
                <h3 className="mt-12 text-3xl font-bold text-black"> User Story 3</h3>
                <p className="mt-2">As a charter operator, I want to follow up all pilots' flight information, such as the flight hours done in the current month or when does their licenses expire 
                so that will allow me to know if they can be asign to any of the coming flights.</p>
                
                <p className="my-4 text-xl font-bold text-black"> · Solution</p>  
                <p className="my-4">For this MVP, the product team decided that the best decision was to simply create a table with the main basic information such as name, license number, Planes allowed and number of hours done in the current month.  
                For the next version is expected to add the dates when the licenses expire.</p> 
                
            </section>

            <section id="userstory4">
                <h3 className="mt-12 text-3xl font-bold text-black"> User Story 4 and 5</h3>
                <p className="mt-2">As a charter operator, I don't want to fill repeated information for each one of the quotes that I receive, so that will allow me to have more time to do other logistic things needed.</p>
                <p className="mt-2">As Flapz, I want to know the price of each charter per route, so that we can show the quote on real time.</p>
                
                <p className="my-4 text-xl font-bold text-black"> · Solution</p>   
                <img className="rounded-md" src="/images/dashboard/Rutas-Mockup.jpg"
                    alt="Routes Dash"/>  
                <p className="my-4">Through this solution we expect that this will help the marketplace page to have automatic quotes so the users can see immediately their flight prices, currently they last between 1-2 weeks answering thhe client and sending the quote. </p>
                <p>Also we expect that this will reduce "the stress" that they had everytime that they did a lot of quotes, and just a few of them turned in to a sale. Which means that they have less effort and faster doing the quote process.</p> 
            </section>

            <p className="mt-8 text-xl font-bold text-center">·  ·  ·</p>

            <section id="prototype">
                <h3 className="mt-8 text-3xl font-bold text-black">Final Prototype</h3>
                <p>Check the <a className="font-bold" src="https://designflapz283427.invisionapp.com/console/share/351I0VXCKG/480485697">prototype here</a></p>
                <a src="https://designflapz283427.invisionapp.com/console/share/351I0VXCKG/480485697">
                <img className="my-4 transform rounded-md shadow-md hover:scale-105" src="/images/login.jpeg"
                alt="Link Prototype Dashboard"/>
                </a>
            </section>

            <p className="mt-8 text-xl font-bold text-center">·  ·  ·</p>

            <section id="nextsteps">
            <h3 className="mt-8 text-3xl font-bold text-black">Next Steps</h3>
                <p>Based on the usability testing done, these are the recommended changes for the next version of the platform:</p>
                <ol className="pb-4 pl-6 list-decimal list-outside">
                    <li>An option where the users can increase the text size. Some of the users, have issues with  their  close up view. (Accesibility)</li>
                    <li>Add the information of when does the pilot's licenses expire.</li>
                    <li>Add a  modal which shows more information about the events in the calendar.</li>
                    <li>Add an option where the user can edit the prices based on the season of the year.</li>
                    <li>Create automaticaly the document that the charter operators need to send to the Colombian Civil Aviation Authority.  
                        Because this feature would motivate them to use constantly the platform and to see that reduces their effort. </li>
                </ol>
            </section>

            <p className="mt-8 text-xl font-bold text-center">·  ·  ·</p>

            <section id="conclusion">
            <h3 className="mt-8 text-3xl font-bold text-black">Learnings through the process</h3>
                <ul className="pb-4 pl-6 mt-2 list-disc list-inside">
                    <li>One of the main learnings is that the charter operators are the ones who manage all the logistics and have closer contact with all the operations, that's why their perspective was broader compare to the owner of the company (which has different needs).</li>
                    <li>This software can help to reduce the work that all charter operator needs to do everyday and also can help to digitalize their processes so everyone in the company can see how is everything being running.</li>
                </ul>
                <p className="mt-8 italic">If you want to create awesome things with tech and know about my projects contact me through <a className="font-bold" href="https://www.linkedin.com/in/paola-latino/">LinkedIn</a></p>
            </section>
        </section>           
    </Layout>       
    )
}      






