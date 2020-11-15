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
  
const Header = () =>
  <header className={styles.header}>
    <div id="navbar">
      <img
        src="/images/name.png" className="nameMenu" />
      <a href="/projects">Projects</a>
      <a href="/aboutme">About me</a>
      <a href="https://drive.google.com/file/d/17eth5n0I086cch3-ZM6cdYjCRmnh0F89/view?usp=sharing">Resume</a>
    </div>
    {home
      ? null
      : <>
        <h2 className={utilStyles.headingLg}>
          <Link href="/">
            <a className={utilStyles.colorInherit}>{name}</a>
          </Link>
        </h2>
      </>
    }
  </header>

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <HeadElements />
      <Header />
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
