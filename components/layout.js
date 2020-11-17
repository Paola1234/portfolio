
import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Paola Latino'
export const siteTitle = 'Proyect 1'

const HeadElements = () =>
  <Head>
    <link rel="icon" href="/favicon.ico" />
    <meta
      name="description"
      content="Paola Latino | Digital creator, UX Designer and Frontend Developer"
    />
    <meta
      property="og:image"
      content={`https://og-image.now.sh/${encodeURI(
        siteTitle
      )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
    />
    <meta name="og:title" content={siteTitle} />
    <meta name="twitter:card" content="summary_large_image" />
    <link
      rel="preload"
      href="/fonts/OpenSans-Bold.ttf"
      as="font"
      crossOrigin=""
    />
    <link
      rel="preload"
      href="/fonts/OpenSans-Light.ttf"
      as="font"
      crossOrigin=""
    />
  </Head>

const Header = (home) =>
  <header className={styles.header}>
    <div id="navbar">
      <a href="/"><img 
         src="/images/name.png" className="img-small center-img"/></a> 
          <div className="flex justify-around">
            <a href="/projects">Projects</a>
            <a href="/aboutme">About me</a>
            <a href="https://drive.google.com/file/d/1vJCyx5cDYJLL6oD4y7Antt3Sx1H76f2E/view?usp=sharing">Resume</a>
          </div>
     </div> 
     {home ? (
          <>
          </>
        ) : (
          <>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
  </header> 

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <HeadElements />
      <Header home={home} />
      <main>{children}</main>
           
      {!home && (
        <div className={styles.backToHome }>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
