import Head from 'next/head'
import Layout from '../../components/layout.js'
import utilStyles from '../../styles/utils.module.css'

export default function backpackers() {
    return (
        <Layout>
        <Head>
            <title>Backpackers Project</title>
        </Head>
        <section className={utilStyles.headingMd}>
                <h1 className="text-4xl text-black">Latin American Backpackers around southeast Asia- Case Study</h1>
                <p className="text-sm italic text-light">UX Research</p>
                <p className="mb-4 text-sm italic text-light">Mobile App </p>
                <img src="https://cdn-images-1.medium.com/max/5696/1*2mLq57jAM7EXq37MvsqlTw.png"
                alt="Title Backpacker"/>

            <section>
                <h3 className="mt-16 text-2xl font-bold text-black">Summary</h3>
                <ul className="pb-4 pl-6 mt-2 list-disc list-inside">
                    <li><a href="#myrole">My role</a></li>
                    <li><a href="#tools">Tools</a></li>
                    <li><a href="#process">Process</a></li>
                    <li><a href="#perception">Perception</a></li>
                    <li><a href="#stats">English speaking stats</a></li>
                    <li><a href="#insights">Important Insights</a></li>
                    <li><a href="#problem">Problem</a></li>
                    <li><a href="#solution">Solution</a></li>
                    <li><a href="#user">Our User Persona</a></li>
                    <li><a href="#journey">Her Journey</a></li>
                    <li><a href="#wireframes">Prototype</a></li>
                    <li><a href="#nextsteps">Next Steps</a></li>
                    <li><a href="#conclusion">Learnings</a></li>
                </ul>
            </section>

            <section id="myrole">
                <h2 className="mt-16 text-3xl font-bold text-black">My role</h2>
                    <ul className="pb-4 pl-6 mt-2 list-disc list-inside">
                        <li>UX Designer/Researcher.</li>
                        <li><span className="font-bold">Duration: </span>1 week</li>
                    </ul>
            </section>

            <section id="tools">
                <h3 className="mt-16 text-3xl font-bold text-black">Tools</h3>
                    <ul className="pb-4 pl-6 mt-2 list-disc list-inside">
                        <li><span className="font-bold">Mural: </span>Empathy and affinity map, mindmap, benchmark, sitemap, cardsorting, user flow and MVP.</li>
                        <li><span className="font-bold">Google Form: </span>Quantitative research.</li>
                        <li><span className="font-bold">Sketch: </span>Mid-fi Wireframes.</li>
                    </ul>
            </section>

             <section id="process" >
                <h3 className="mt-16 text-3xl font-bold text-black">Design Process</h3>
                <img className="mt-4" src="https://cdn-images-1.medium.com/max/8896/1*0rq9Seg7V8DiIfiQvPpHmQ.png" alt="Design Process Backpackers"/>
             </section>

            <section id="perception">
                <h3 className="mt-20 mb-4 text-3xl font-bold text-black">What is the first thing that comes to a South American mind when they think about Southeast Asia?</h3>
                <img src="https://cdn-images-1.medium.com/max/5756/1*u86eD1VhVeWNy1KMulygmQ.png"
                alt="Beaches and culture its the most common motivation. The photo was taken from [Unsplash](http://unsplash.com/)"/>
                <p className="my-4">Well, after interviewing 6 people: 2 natives from the region, 2 past backpackers that visited the region and 2 people that would like to go to the region and also did a survey with 8 people that would like to go, I found out that the most common motivation to go to the region it’s because of the beaches and the culture, but what is culture according to the people that I interviewed from Latin America compared to the Southeast Asia people?</p>
                <p className="mb-4">The survey results shows the reasons why people would be interested to go to the region</p>
                <img src="https://cdn-images-1.medium.com/max/5684/1*GGWvRrVJyrN_PAHVc4lZ3g.png" alt="The survey results"/>
                <p className="my-4">For Latin American people, southeast Asian culture is all the old architecture places, meeting people from the region, and try to have an experience with the local religions.</p>
                <p className="mb-4">But for the people in southeast Asia, their food is part of their culture and has influences from other Asian countries like China or India, that’s why their food is a must-try</p>
                <p className="mb-4">The people that already did backpacking through the region, say that they didn’t have any issues in the tourist places with the language unless they go to places where there are old people or not too much tourism.</p>
            </section>

            <section id="stats">
                <h3 className="mt-16 text-3xl font-bold text-black">English Proficiency Stats of the region</h3>
                <p className="my-4">The most touristic places in the region are Thailand, Malaysia, Singapore, and Indonesia, as it is shown in this graphic from 2018.</p>
                <img src="https://cdn-images-1.medium.com/max/2876/1*g8DrcJ8qGbleQt-yt_qRQQ.png" alt="International arrivals in 2018 in the region. Graphic took from the [SEA web page.](https://www.aseanstats.org/)"/>
                <p className="text-gray-500 text-s">International arrivals in 2018 in the region. Graphic took from the <a href="https://www.aseanstats.org/">SEA web page.</a></p>
                <p className="mb-4">Most of the native population in Malaysia, Indonesia, and Singapore can speak a language called Bahasa. Malaysia and Singapore have the biggest percentage of people who speak English as a second language, but in Thailand, people have a Basic English level, especially in the south on the border with Malaysia which can be a zone where people can understand Bahasa. In the case of Indonesia, its tourist places have a low level of English which makes a little bit difficult for Latin American people to communicate.</p>
                <img src="https://cdn-images-1.medium.com/max/5752/1*N05ob5sJRKtZ3IVM_l_xoA.png" alt="International arrivals in 2018 in the region. Graphic took from the [SEA web page.](https://www.aseanstats.org/)"/>
                <p className="text-gray-500 text-s">Statistic and graphic were taken from <a href="https://www.ef.com/wwen/epi/regions/asia/indonesia/">EF stats.</a></p>
            </section>

            <section id="insights">
            <h3 className="mt-16 text-3xl font-bold text-black">Important Insights</h3>
                <ol className="pb-4 pl-6 mt-2 list-decimal">
                    <li>Backpackers enjoy their experience more when they can communicate easier with the natives and communication problems can be an issue in their experience.</li>
                    <li>Even though Singapore and Malaysia have high levels of English and a big percentage of people that speak English in some places like Indonesia it’s harder for the tourist to communicate in some places, as it was shown in the stats before.</li>
                    <li>Food is an important part of Southeast Asia because it gathers the influence of their predecessors and other Asian cultures that influenced the region.</li>
                    <li>In Latin America exists some stereotypes to the region, in some of the interviews more of the 40% of the people said that their main issue would be the food because: “I couldn’t eat it because I don’t ever to try insects” <span className="italic font-bold">which with this project we plan to change that perception.</span></li>
                </ol>
            </section>

            <section id="problem">
            <h3 className="mt-16 text-3xl font-bold text-black">Problem</h3>
                <p className="my-4">After all the interviews we found that the main issue is that the Latin American Backpackers want to travel to the region because they think is a paradise but at the same time, they wouldn’t try the food because of the stereotypes created towards it, so the main objective of this problem is to motivate these users to visit the region and they can order the dishes they want using the local language so they can experience better the local culture.</p>
                <p className="mb-4">I believe that through this mobile app Latin American backpackers we will achieve to break stereotypes of the food of the zone. I know that I did it right when the NPS of the experience rises and more people use the mobile app.</p>
            </section>

            <section id="solution">
                <h3 className="mt-16 text-3xl font-bold text-black ">Solution</h3>
                <p className="mb-4">After some brainstorming, I used the Moscow diagram and the Value vs effort quadrant, and based on that, the MVP chosen was a mobile app that would help the backpackers to recommend and translate the dishes to the native language in that way the user would have a better street food experience. With this project, I would like to prove that when the user orders in the local language we can help him/her to motivate the immersion into the local culture through street food markets.</p>
                <p className="mb-4">I know the project is successful if more people start to travel to Southeast Asia using the mobile app as a source to experience the local food markets.</p>
                <img src="https://cdn-images-1.medium.com/max/3712/1*CHoJqkSyp_zjHdZWQbRtPw.png" alt="Benchmark of some the possible competitors in the region"/>
            </section>

            <section id="persona">
                <h3 className="mt-16 text-3xl font-bold text-black">Our User Persona</h3>
                <img src="https://cdn-images-1.medium.com/max/6400/1*UhCzcIbpVxMndErI2z9KuQ.png"
                alt="Based on the research this is my user persona, her name is Natalia."/>
            </section>

            <section id="journey">
                <h3 className="mt-16 text-3xl font-bold text-black">Her Journey</h3>
                <p className="my-4">As you can see in these images, this is Natalia’s journey in a street food market without the app.</p>
                <img src="https://cdn-images-1.medium.com/max/2048/1*q1HV3PxMwRky4nItt9yHEQ.png"
                alt="This is our user journey when she does the backpacking without the app"/>
                <p className="my-4">And this image you can see that in the end, Natalia enjoys her food which will motivate her to enjoy her cultural experience in the region.</p>
                <img src="https://cdn-images-1.medium.com/max/2048/1*C536PgYmwh533GFgD62FPA.png"
                alt="This is the expected user journey when she does the backpacking using the app"/>
            </section>

            <section id="wireframes">
                <h3 className="mt-8 text-3xl font-bold text-black">Prototype</h3>
                <h3 className="mt-2 text-xl font-bold text-black">Low</h3>
                <p className="mb-4">Let me introduce you the prototype of this mobile app, to start the design I did this Low-Fi prototype with the expected user Flow:</p>
                <img src="https://cdn-images-1.medium.com/max/5296/1*fL3KkcMe0eKcEYLvlDTioQ.png"
                alt="Low Fi Prototype"/>
                <p className="mb-4">After testing with some possible users, that have been backpackers or people with the demographics that would use it, these were the main changes done in the prototype:</p>
                <img src="https://cdn-images-1.medium.com/max/4280/1*_Nxs2KQEmjqgNfm1YsTnsg.png"
                alt="Main changes in the menu view"/>
                <p className="my-4">Other changes from Low to Mid:</p>
                <ul className="pb-4 pl-6 list-disc">
                    <li>Changed the button “See more” to “Create the order in Bahasa” in the main view.</li>
                    <li>Changed the button “I like it” to “Translate my order” in the view where the user can personalize the order.</li>
                </ul>
                <h3 className="mt-8 text-xl font-bold text-black">Mid</h3>
                <p className="mb-2 ">This is the Mid — Fi prototyped for this project, I really hope you enjoy it as much as I did:</p>
                <img src="https://cdn-images-1.medium.com/max/2000/1*pKRadVxH66FxJ2Pq5d7NQA.gif"
                alt="You can also check the prototype in [Invision]https://bit.ly/36BvXqa"/>
            </section>

            <section id="nextsteps">
            <h3 className="mt-8 text-3xl font-bold text-black">Next Steps</h3>
                <ol className="pb-4 pl-6 list-decimal">
                    <li><span className="italic font-bold">Add the itinerary:</span> The main objective is that the backpacker can add later his itinerary and based on that can select in which place can it.</li>
                    <li><span className="italic font-bold">Add an option for allergies: </span>This option consists of adding the allergies and ingredients that the user doesn’t like, in that way the app would recommend food without those ingredients and the experience can be better.</li>
                    <li><span className="italic font-bold">“Surprise me” option: </span> Which the user can select when simply was a randomized dish.</li>
                    <li><span className="italic font-bold">Add other region languages: </span>Add other languages like Thai, Cantonese, and other common languages in the region.</li>
                    <li><span className="italic font-bold">Add a “Traditional Market” filter: </span>so the user can go to the oldest street food markets near him.</li>
                </ol>
            </section>

            <section id="conclusion">
            <h3 className="mt-8 text-3xl font-bold text-black">Learnings through the process</h3>
            <ul className="pb-4 pl-6 list-disc">
                    <li><span className="italic font-bold">Culture and food: </span> Street Food markets can be a good way to show the roots of each country and helps the cultural experience to be more complete.</li>
                    <li><span className="italic font-bold">Language: </span> The backpacker experience can be improved when it has all the tools to communicate with natives in an easier way than just with English which with the Latin American accent can be harder for the natives.</li>
                    <li><span className="italic font-bold">Follow up: </span> This app can help any backpacker agency to get more confidence from their clients because it gives tools for better independent experiences.</li>
            </ul>
            <p className="italic">If you want to create awesome things with tech and know about my projects contact me through <a className="font-bold" href="https://www.linkedin.com/in/paola-latino/">LinkedIn</a></p>
            </section>
        </section>           
    </Layout>       
    )
}      






