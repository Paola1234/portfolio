import Head from 'next/head'
import Layout from '../../components/layout.js'
import utilStyles from '../../styles/utils.module.css'
import Image from 'next/image'

export default function aboutme() {

    return (
        <Layout>
        <Head>
            <title>About me</title>
        </Head>
        <section className={utilStyles.headingMd}>
                <h1 className="text-4xl text-black"> Stori card — Case Study</h1>
                <h3 className="">Gamification and rewards in a credit card</h3>
                <p className=""> Mobile app</p>
                <p className="mb-4"> Gamification</p>
                <img src="https://cdn-images-1.medium.com/max/5696/1*T9vRCqnjqxH-JQP4z6cwuw.png"
                alt="Title Stori"/>
            <section>
                <h2 className="mt-8 text-3xl font-bold text-black">My role</h2>
                    <ul className="pb-4 pl-6 mt-4 list-disc">
                        <li>UX Researcher/UI Designer</li>
                        <li>A short alliance between Stori and Ironhack</li>
                        <li><span className="font-bold">Duration: </span>2 weeks</li>
                    </ul>
            </section>

            <section id="process_stori">
                <h3 className="mt-8 text-3xl font-bold text-black">Tools</h3>
                    <ul className="pb-4 pl-6 mt-4 list-disc">
                        <li><span className="font-bold">Google Forms: </span>Quantitative research</li>
                        <li><span className="font-bold">Mural: </span>MVP (Moscow diagram), Information Architecture, summarize qualitative research</li>
                        <li><span className="font-bold">Sketch: </span>Mid-Fi and Hi-Fi wireframes</li>
                    </ul>
            </section>

            <section >
                <h3 className="mt-8 text-3xl font-bold text-black">Process</h3>
                <img src="https://cdn-images-1.medium.com/max/3496/1*eiFVzHbWVno-6dDnRUmjaA.png" 
                alt="This was the process during the 2 weeks"/>
             </section>

             <section >
                <h3 className="mt-8 text-3xl font-bold text-black">What is Stori?</h3>
                <p className="mt-4 mb-4 italic "> Did you know that only 12% of the people in Mexico have a bank account? Stori is a credit card whose value proposition 
                is focused on people who need to start their credit life and want to motivate their users to have a good financial education. This fintech started in January 2020.</p>
                <p className="mb-4">To start all this process, I started with the qualitative research where I interviewed 8 people that have/had at least one credit card, 5 of 
                them had debts issues with the credit card and the other 3 people are direct people that use Stori credit card (that I met through a Facebook group). For the quantitative 
                process, I sent a survey through some Facebook groups of people that have the credit card, also these groups helped to look for some of the issues that had been happening 
                in the app such as, not updating on time the payments.</p>
                <img src="https://cdn-images-1.medium.com/max/5120/1*yGilmxRwgQH2fuBed01qqA.png" 
                    alt="Taken from [storicard.com](http://storicard.com)"/>
                <p className="mt-4 mb-4">At the beginning, it was difficult to find people to interview that had the Stori credit card because the card is very new, and the bank couldn’t give 
                me that data, so I decided to add an option in the survey were people that wanted to be interviewed gave me their email to contact them.</p>
             </section>

             <section >
                <h3 className="mt-8 text-3xl font-bold text-black">Important insights</h3>
                <p className="mt-4 mb-4 "><span className="italic">The most common pattern found in people that had debts with the credit card, is that they said that the main cause of that issue 
                was that they did impulsive shopping or unconscious shopping, also they thought that the card was an extra income and spent more than what can pay with their salary.</span> Other important insights found are:</p>
                <ul className="pb-4 pl-6 list-disc">
                     <li>66,66% of the people that were interviewed said that they do follow up on their expenses by instinct and they know an average of it</li>
                     <li>Some of the users, in the credit card groups in Facebook, expressed that they didn’t last much using the Stori credit card because it has the highest interest rate in the market 
                         and also because it doesn’t have any big benefits, only cashback and gain points with the national bureau for a future loan.</li>
                     <li>63% of the people that answered the survey said that improving their score in the national bureau of credit motivates them.</li>
                </ul>
                <img src="https://cdn-images-1.medium.com/max/6438/1*l0EBFYNCeM8b5v6QxMvNgw.jpeg"
                    alt="Photo by [Mika Baumeister](https://unsplash.com/@mbaumi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on Unsplash"/>
             </section>

             <section id="problem-stori">
                <h3 className="mt-4 text-3xl font-bold text-black">Main problem</h3>
                <p className="mt-4 mb-4 ">Based on these results, I asked how might we help the user to…</p>
                <ul className="pb-4 pl-6 list-disc">
                     <li>know if the credit card management is correct?</li>
                     <li>use the credit card in a conscious way?</li>
                     <li>have a reward because of their good credit card management?</li>
                </ul>
             </section>
                <p className="mb-4">I know that <span className="italic">the project is successful if the average time with the card 
                gets longer and the percentage of users retiring from the card gets lesser.</span></p>
            </section>

            <section>
                <h3 className="mt-4 text-3xl font-bold text-black">Our User</h3>
                <img src="https://cdn-images-1.medium.com/max/6400/1*oSUvYkeNKyEa9pQbPAWoNw.png"
                    alt="User Persona Stori"/>
            </section>

            <section id="solution-stori">
                <h3 className="mt-4 text-3xl font-bold text-black">What’s the solution for Josefina?</h3>
                <p className="mt-4 ">Based on these three main HMW questions, I did a brainstorming with all the possible solutions that can help to achieve the main goal 
                and also would help the user to have a better experience, after doing the brainstorm I used the Moscow diagram and the Value vs. Effort diagram which helped me 
                to select the MVP, which at the end was a rewards program divided into three main stages, that I’m gonna show you in this article:</p>
                <img
                    src="https://cdn-images-1.medium.com/max/4048/1*feCvCTLTUjJKv7Cwo2k64A.png"
                    alt="These are the main three stages of how the program would be divided"/>

                <p className="mt-4 mb-4 font-italic">These rewards system was designed based on the gamification principles of Yu-Kai Chou called Development and Accomplishment, which helps the user to motivate their 
                    internal drive to gain new skills, overcome challenges and a sense to make progress through things like challenges to get badges, progress bar, fixed action rewards, and status points.</p>
                <p>Also based on some of the interviews, I realized that some of the people that had big debts before didn’t have good financial habits such as make a constant follow up of the expenses and that’s why they used to be surprised by the debt at the end of the month. That’s the reason why in the first stage, there are more missions in which the user can create consciousness of 
                    their expenses, make constant follow up and can learn that they don’t need to use more than the 10% of their incomes with the credit card.
                    To design these healthy routines I was based on the mobile app, <a href="https://www.thefabulous.co/about-the-fabulous.html">designed by Duke University, called “Fabulous”</a>, which incentivizes the users to repeat 3 times straight healthy actions and also based on the level the user receives articles for motivation (which can be a future option for Stori too).</p>  
                <img src="https://cdn-images-1.medium.com/max/4864/0*YiOGVWq2x7vKHUuU.jpg"
                alt="The image got from Google Design"/>
            </section>

            <section>
                <h3 className="mt-4 text-2xl font-bold text-black">1. Stage 1 — Bronce:</h3>
                <ol className="pl-6">
                    <li>1. <span className="pb-4 font-bold">The main objective</span> of this stage is to help the user to create consciousness and good financial habits. </li>
                    <li>2. <span className="pb-4 font-bold">Minimum expected duration:</span> 2 months.</li>
                    <li>3. <span className="font-bold">Benefits:</span></li>
                    <ul className="pb-4 pl-6 list-disc" >
                        <li>Cashback with some selected brands</li>
                        <li>Personalize the limits of the monthly expenses with the credit card: The main objective is to teach the user to limit the expenses until their 
                            10% of their monthly incomes, they can use more but the app will notify them when they do it.</li>
                    </ul>
                    <li>4. <span className="pb-4 font-bold">How to get points:</span> Get 1 point per Mexican peso. </li>
                    <li>5. <span className="font-bold">Missions:</span></li>
                    <ul className="pb-4 pl-6 list-disc" >
                        <li>Confirmation of receiving the physical credit card.</li>
                        <li>Limit the monthly expenses.</li>
                        <li>Check the percentage of expenses per category and confirm.</li>
                        <li>Establish the reminders of the payments.</li>
                        <li>Answer the next questions 2 days before the payday, example: Which is the category where you spend most this month?</li>
                        <li>Buy three times with the Stori card - 3 days straight.</li>
                        <li>Check today your cutoff day — 5 days before.</li>
                        <li>I didn’t spend more than the monthly limit set at the beginning of the month.</li>
                        <li>Pay 2 months straight.</li>
                        <li>Watch daily expenses — 3 days in a row.</li>
                        <li>Watch weekly expenses — 3 weeks in a row.</li>
                    </ul>
                    <li>6. <span className="font-bold">How to get to the next stage:</span></li>
                    <ul className="pb-4 pl-6 list-disc" >
                        <li>Achieves X points. The x points will be 10% of the user’s salary in 2 months.</li>
                        <li>Achieves all the missions.</li>
                    </ul>
                </ol>
            </section>

            <section>
                <h3 className="mt-4 text-2xl font-bold text-black">2. Stage 2 — Silver:</h3>
                <ol className="pl-6">
                    <li>1. <span className="pb-4 font-bold">The main objective</span> of this stage is to help the user to create consciousness and good financial habits. </li>
                    <li>2. <span className="pb-4 font-bold">Minimum expected duration:</span> 2 months.</li>
                    <li>3. <span className="font-bold">Benefits:</span></li>
                    <ul className="pb-4 pl-6 list-disc" >
                        <li>Cashback with some selected brands</li>
                        <li>Personalize the limits of the monthly expenses with the credit card: The main objective is to teach the user to limit the expenses until their 
                            10% of their monthly incomes, they can use more but the app will notify them when they do it.</li>
                    </ul>
                    <li>4. <span className="pb-4 font-bold">How to get points:</span> Get 1 point per Mexican peso. </li>
                    <li>5. <span className="font-bold">Missions:</span></li>
                    <ul className="pb-4 pl-6 list-disc" >
                        <li>Confirmation of receiving the physical credit card.</li>
                        <li>Limit the monthly expenses.</li>
                        <li>Check the percentage of expenses per category and confirm.</li>
                        <li>Establish the reminders of the payments.</li>
                        <li>Answer the next questions 2 days before the payday, example: Which is the category where you spend most this month?</li>
                        <li>Buy three times with the Stori card - 3 days straight.</li>
                        <li>Check today your cutoff day — 5 days before.</li>
                        <li>I didn’t spend more than the monthly limit set at the beginning of the month.</li>
                        <li>Pay 2 months straight.</li>
                        <li>Watch daily expenses — 3 days in a row.</li>
                        <li>Watch weekly expenses — 3 weeks in a row.</li>
                    </ul>
                    <li>6. <span className="font-bold">How to get to the next stage:</span></li>
                    <ul className="pb-4 pl-6 list-disc" >
                        <li>Achieves X points. The x points will be 10% of the user’s salary in 2 months.</li>
                        <li>Achieves all the missions.</li>
                    </ul>
                </ol>
            </section>
    </Layout>       
    )
}      






