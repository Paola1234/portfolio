import Head from 'next/head'
import Layout from '../../components/layout.js'
import utilStyles from '../../styles/utils.module.css'
import Image from 'next/image'

export default function comingsoon() {
    return (
        <Layout>
        <Head>
            <title>Coming Soon</title>
        </Head>
        <section className={utilStyles.headingMd}>
                <h1 className="text-4xl text-center text-black"> I'm guessing that you want to know more about this project...</h1>
                <Image className="center center-img" 
                     src="/images/undraw_Forms_re_pkrt.svg"
                     alt="Title Coming Soon"
                     width={600}
                     height={600}/>
                <p className="text-center">For now i'm finishing to document it.  Today at 6 pm EST, you will see this amazing UI project. </p>
                
        </section>           
    </Layout>       
    )
}   