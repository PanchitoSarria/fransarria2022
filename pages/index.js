import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import WorksSection from '../components/WorksSection'
import portrait from '../public/self-portrait.png'
import ScrollCTA from '../components/ScrollCTA'

export default function Home() {
  return (
    <div className={styles.container} id='home'>
      <Head>
        <title>Francisco Andres Sarría | Front-end Dev</title>
        <meta name="description" content="React.js and Next.js front-end developer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <section className={styles.hero}>
          <div className={`main_wpr ${styles.hero_main_content}`}>
            <p className={styles.hero_p}>Hi! My name is</p>
            <h1 className='h1_main--title'>
              Francisco A. Sarría.<br />
              I`m Front-end Developer<br />
              pasionated for react.js/next.js.
            </h1>
            <p className={styles.hero_p}>
              Currently pleased developing with React.js and Next.js and fascinated with all the JAMStack ecosystem.
            </p>
          </div>
          <div className={`main_wpr ${styles.hero_btn_wpr}`}>
            <a href="resume-francisco-sarria.pdf" className='btn_link' download>Download my C.V.</a>
            <a href="#work" className='btn_link'>Check out my recent work!</a>
          </div>
          <div className='main_wpr'>
            <ScrollCTA />
          </div>
        </section>

        <section className={`section section_solid ${styles.about_section}`} id='about'>
          <div className='main_wpr'>
            <h2 className='h2_section'>About me</h2>
          </div>
          <div className='main_wpr'>
            <p className={styles.about_text}>
              I am from Argentina and started building webs with html, css and php (just a little bit) back in 2011.<br />
              In 2012 start working with Drupal 7 and keep doing it for several years but never happy with it.<br />
              In 2018 I quit the web world and come back in 2019 but this time with Wordpress.<br />
              In late 2019 I discovered the big javascript world: React.js, Vue.js, Angular, etc. and start studying development in Platzi (and in another webs and youtube) focus to get into the React.js world.
            </p>
          </div>
          <div className={styles.portrait_wpr}>
            <Image              
                  src={portrait}
                  alt='Self Portrait'
                  width={1000}
                  height={1000}
                  layout="responsive"    
                  sizes="(max-width: 768px) 90vw, (min-width: 769px) 55vw"
            />
          </div>
        </section>

        <section className='section' id='work'>
          <div className='main_wpr'>
            <h2 className='h2_section'>Recent work</h2>
          </div>
          <div className='main_wpr'>
            <WorksSection />
          </div>
        </section>
      </main>

      {/* <footer className={styles.footer}>
        
      </footer> */}
    </div>
  )
}
