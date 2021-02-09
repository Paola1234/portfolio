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
                <h1 className="text-4xl text-black"> Flapz Design System</h1>
                <h3 className="text-m">A standard created to design faster and have better communication with the developers</h3>
                <p className="text-sm italic text-light">UI Design</p>
                <p className="mb-4 text-sm italic text-light">Figma</p>
                <img className="rounded-md" src="https://cdn-images-1.medium.com/max/5696/1*bxbiPdfbIQ5fU5BtfydciA.png"
                alt="TitleDesignSystem"/>

            <section id="summary">
                <h3 className="mt-8 text-3xl font-bold text-black">Summary</h3>
                <ul className="pb-4 pl-6 list-disc list-inside">
                    <li><a href="#myrole">My role</a></li>
                    <li><a href="#tools">Tools</a></li>
                    <li><a href="#color">Color Palette</a></li>
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
                        <li><span className="font-bold">Code reference: </span>Tailwind CSS.</li>
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






