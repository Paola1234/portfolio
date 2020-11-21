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
                    <ul className="pb-4 pl-6 list-disc list-inside">
                        <li>UX Researcher/UI Designer</li>
                        <li>A short alliance between Stori and Ironhack</li>
                        <li><span className="font-bold">Duration: </span>2 weeks</li>
                    </ul>
            </section>

            <section id="process_stori">
                <h3 className="mt-8 text-3xl font-bold text-black">Tools</h3>
                    <ul className="pb-4 pl-6 list-disc list-inside">
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
                <ul className="pb-4 pl-6 list-disc list-inside">
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
                <p className="mb-4 ">Based on these results, I asked how might we help the user to…</p>
                <ul className="pb-4 pl-6 list-disc list-inside">
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
                <p className="">Based on these three main HMW questions, I did a brainstorming with all the possible solutions that can help to achieve the main goal 
                and also would help the user to have a better experience, after doing the brainstorm I used the Moscow diagram and the Value vs. Effort diagram which helped me 
                to select the MVP, which at the end was a rewards program divided into three main stages, that I’m gonna show you in this article:</p>
                <img
                    src="https://cdn-images-1.medium.com/max/4048/1*feCvCTLTUjJKv7Cwo2k64A.png"
                    alt="These are the main three stages of how the program would be divided"/>

                <p className="mt-4 mb-4 font-italic">These rewards system was designed <span className="font-bold">based on the gamification principles of Yu-Kai Chou called Development and Accomplishment</span>, which helps the user to motivate their 
                    internal drive to gain new skills, overcome challenges and a sense to make progress through things like challenges to get badges, progress bar, fixed action rewards, and status points.</p>
                <p>Also based on some of the interviews, I realized that some of the people that had big debts before didn’t have good financial habits such as make a constant follow up of the expenses and that’s why they used to be surprised by the debt at the end of the month. That’s the reason why in the first stage, there are more missions in which the user can create consciousness of 
                    their expenses, make constant follow up and can learn that they don’t need to use more than the 10% of their incomes with the credit card.
                    To design these healthy routines I was based on the mobile app, <a href="https://www.thefabulous.co/about-the-fabulous.html">designed by Duke University, called “Fabulous”</a>, which incentivizes the users to repeat 3 times straight healthy actions and also based on the level the user receives articles for motivation (which can be a future option for Stori too).</p>  
                <img className="mt-6" src="https://cdn-images-1.medium.com/max/4864/0*YiOGVWq2x7vKHUuU.jpg"
                alt="The image got from Google Design"/>
            </section>

            <section>
                <h3 className="mt-6 text-2xl font-bold text-black">1. Stage 1 — Bronce:</h3>
                <ol className="pl-6">
                    <li>1. <span className="pb-4 font-bold">The main objective</span> of this stage is to help the user to create consciousness and good financial habits. </li>
                    <li>2. <span className="pb-4 font-bold">Minimum expected duration:</span> 2 months.</li>
                    <li>3. <span className="font-bold">Benefits:</span></li>
                    <ul className="pb-4 pl-6 list-disc list-inside" >
                        <li>Cashback with some selected brands</li>
                        <li>Personalize the limits of the monthly expenses with the credit card: The main objective is to teach the user to limit the expenses until their 
                            10% of their monthly incomes, they can use more but the app will notify them when they do it.</li>
                    </ul>
                    <li>4. <span className="pb-4 font-bold">How to get points:</span> Get 1 point per Mexican peso. </li>
                    <li>5. <span className="font-bold">Missions:</span></li>
                    <ul className="pb-4 pl-6 list-disc list-inside" >
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
                    <ul className="pb-4 pl-6 list-disc list-inside" >
                        <li>Achieves X points. The x points will be 10% of the user’s salary in 2 months.</li>
                        <li>Achieves all the missions.</li>
                    </ul>
                </ol>
            </section>

            <section>
                <h3 className="mt-4 text-2xl font-bold text-black">2. Stage 2 — Silver:</h3>
                <img className="flex-wrap items-center mx-auto mt-4 mb-4" src="/images/cards/TarjetaDeCreditoPlata.svg"></img>
                <ol className="pl-6">
                    <li>1. <span className="pb-4 font-bold">The main objective</span> to motivate the user to use the card
                    for regular shopping (especially for small payments such as for coffee or food) and to create a financial history through this.</li>
                    <li>2. <span className="pb-4 font-bold">Minimum expected duration:</span> 3 months.</li>
                    <li>3. <span className="font-bold">Benefits:</span></li>
                    <ul className="pb-4 pl-6 list-disc list-inside" >
                        <li>Stori Silver digital card.</li>
                        <li>Fast pass for customer support.</li>
                    </ul>
                    <li>4. <span className="pb-4 font-bold">How to get points:</span> 
                        <ul className="pb-4 pl-6 list-disc list-inside" >
                            <li>Get 1 point per Mexican peso.</li>
                            <li>Get 5 points per each buy done in selected allies. (Starbuck, Dominos pizza).</li>
                            <li>Get 10 points for each buy on a supermarket, coffee, or pharmacies.</li>
                            <li>Get 20 points for each payment in digital platforms such as Netflix, Spotify, Amazon Prime, etc.</li>
                        </ul>
                    </li>
                    <li>5. <span className="font-bold">Missions:</span></li>
                    <ul className="pb-4 pl-6 list-disc list-inside" >
                        <li>Buy coffee/food with the Stori credit card — 3 days in a row.</li>
                        <li>Buy coffee/food with the Stori credit card — 3 weeks in a row.</li>
                        <li>Buy in any supermarket with the Stori credit card — 3 weeks during a month.</li>
                        <li>Buy with any of the sponsor brands that have cashback (this kind of strategy can work 
                            for Stori to get more sponsors because it can show that the card is promoting their. brand 
                            and their user to buy there and can work as a B2B strategy)</li>
                        <li>Pay the total of the debt for 3 months straight.</li>
                    </ul>
                    <li>6. <span className="font-bold">How to get to the next stage:</span></li>
                    <ul className="pb-4 pl-6 list-disc list-inside" >
                        <li>Achieves X points. The x points will be 10% of the user’s salary in 3 months.</li>
                        <li>Achieves all the missions.</li>
                    </ul>
                </ol>
            </section>

            <section>
                <h3 className="mt-4 text-2xl font-bold text-black">3. Stage 3 — Gold:</h3>
                <img className="flex-wrap items-center mx-auto mt-4 mb-4" src="/images/cards/TarjetaDeCreditoOro.svg"></img>
                <ol className="pl-6">
                    <li>1. <span className="pb-4 font-bold">The main objective:</span> help the user to have long-term thinking with the credit card.</li>
                    <li>2. <span className="pb-4 font-bold">Minimum expected duration:</span> 3 months.</li>
                    <li>3. <span className="font-bold">Benefits:</span></li>
                    <ul className="pb-4 pl-6 list-disc list-inside" >
                        <li>Stori Gold digital card.</li>
                        <li>Tool for a project the financial goals in the long term: Using a linear regression with the user’s past data, and with the 
                            new model to reduce the interest rate that Stori is designing, also it’s important because this will help the user to design a long term plan with the. credit card.</li>
                    </ul>
                    <p className="ml-6"> The user must accomplish all the minimum points and the missions in 3 months, by doing all these the user will receive: </p>
                    <ul className="pb-4 pl-6 list-disc list-inside" >
                        <li>Less interest rate.</li>
                        <li>Bigger amount limit for the credit card.</li>
                    </ul>
                    <li>4. <span className="pb-4 font-bold">How to get points:</span> 
                        <ul className="pb-4 pl-6 list-disc list-inside" >
                            <li>Same way as in the silver stage.</li>
                        </ul>
                    </li>
                    <li>5. <span className="font-bold">Missions:</span></li>
                    <ul className="pb-4 pl-6 list-disc list-inside" >
                        <li>Uses the tool for a project the financial goals in the long term.</li>
                        <li>Stablishes a maximum goal of expenses to achieve the long term goal (buying a computer or a bigger credit limit of their current card).</li>
                        <li>Pays 3 months straight the full amount without taxes of the monthly debt.</li>
                        <li>Accomplishes all the goals and becomes the Stori Leader.</li>
                    </ul>
                    <li>6. <span className="font-bold">How to get to the next stage:</span></li>
                    <ul className="pb-4 pl-6 list-disc list-inside" >
                        <li>Achieves X points. The x points will be 10% of the user’s salary in 3 months.</li>
                        <li>Achieves all the missions.</li>
                    </ul>
                    <li>7. <span className="font-bold">Restrictions:</span></li>
                    <ul className="pb-4 pl-6 list-disc list-inside" >
                        <li>If the person doesn’t pay the debt for 2 months, he/she will go back to the first level.</li>
                    </ul>
                </ol>
            </section>

            <section id="wireframes-stori">
                <h3 className="mt-4 text-2xl font-bold text-black">Wireframes:</h3>
                <p>To begin with the wireframe process, I did these sketches that also helped me to do the user flow that my user would have to do only for watching the points and the current status in the level.</p>
                <img src="https://cdn-images-1.medium.com/max/3840/1*7335Yh-Sft8y7Y97Hd5KzA.png"></img>
            
                <p className="mb-3">After testing the low-fi prototype, the most important of the changes with the flow and were:</p>
                <ul className="pb-4 pl-6 mb-8 list-disc list-inside" >
                        <li><span className="italic font-bold">Adding an introduction to the user:</span> A pop-up that shows the first time that opens the app and the card is confirmed.</li>
                        <li><span className="italic font-bold">Changing the structure </span> that shows the advance in points and there’s also an indicator that shows the missions accomplished.</li>
                        <li> <span className="italic font-bold">Deleted the benefits</span> in the score view because the user can see it in the level information tab.</li>
                        <li>Changed the level information pop-up to a whole view, so it will be easier to read for the user.</li>
                        <li><span className="italic font-bold">Changed the layout for missions:</span> It doesn’t show information, only the badge that the user gained and the instruction of the missions is in another view.</li>
                    </ul>
                <p>This is the Mid-Fi prototype with all the changes and improvements that were found in the stage before.</p>
                <img src="https://cdn-images-1.medium.com/max/3356/1*Eh9MSyS5g3TLOLn6dKmU8Q.png"></img>
                <p className="mb-4">Because of time restrictions, couldn’t have much time for tests, with the few tests done, these are some of the changes:</p>
                    <ul className="pb-4 pl-6 mb-8 list-disc list-inside" >
                        <li>Add how the cards would look when the user gets the silver or the gold level.</li>
                        <li>A notification which shows that the user is on a new level.</li>
                    </ul>
                <p>For the high definition prototype, I used the same color palette in the current mobile app, the only new things were the gradients used for the credit cards:</p>
                <img className="mx-auto" src="https://cdn-images-1.medium.com/max/2000/1*Zv37oH3hr8depFuXTsVmgg.png"></img>
                <p className="mb-4">This is the flow summarized of all the rewards system, which will show only the flow to check the points and notify the new level:</p>
                <img src="https://cdn-images-1.medium.com/max/2000/1*4UVGS8JVpSI59C7awyOv6w.gif"></img>    
                <p className="text-center">Check the <a href="Check the [interactive prototype here](https://paolalatino902732.invisionapp.com/public/share/QH1DF2IO82#screens/479841653)">interactive prototype here.</a></p>
            </section>
            
            <section>
                <h3 className="mt-4 text-3xl font-bold text-black">Next Steps</h3>
                <p className="mb-4">These are some features that I recommend the app should have so this whole experience of the rewards can be the best:</p>
                <ol className="pb-4 pl-6 list-decimal">
                     <li>Create a calendar so the user can check how much spent per day.</li>
                     <li>Lead nurturing of messages with motivating messages such as, “remember you are close to becoming a silver client and you are just one mission away to achieve it” or “Remember that you only need 2 months straight of payment of your credit card so you can achieve the On-Fire batch”. In that way, the user can remember to check the app for those routines.</li>
                     <li>Functionality so the user can personalize the dates that want a reminder of his/her payments, in that way the person can choose the best time that suits better.</li>
                     <li>Tool for a project the financial goals in the long term: Using a linear regression with the past data of the user, and with the new model to reduce the interest rate that Stori is designing.</li>
                     <li>A thermometer to show people how much their score in the bureau is improving or not with the user's financial behavior.</li>
                </ol>
             </section>
             <h3 className="mt-4 text-3xl font-bold text-black">Conclusion</h3>
                <p className="mb-4">In the end, because of the time, I couldn’t test all the missions created with real users, but I know that it would have been good to understand if those missions really create a good financial 
                habit and if these missions would help to motivate users to stay longer with the card.</p>
                    <p className="mb-2 italic">This project won as the best project of the 35th generation of UX/UI Bootcamp in Ironhack Mexico City.</p>
                    <p className="italic">If you want to create awesome things with tech and know about my projects contact me through <a className="font-bold" href="https://www.linkedin.com/in/paola-latino/">LinkedIn</a></p>
                
             <section>

             </section>
                
    </Layout>       
    )
}      






