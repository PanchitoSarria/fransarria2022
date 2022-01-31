import styles from './WorksSection.module.scss'
import WorkCard from '../WorkCard';

import ArteagayAsociados from '../../public/arteaga-y-asociados.png'
import AndresAlvarez from '../../public/andres-alvarez.png'

function WorksSection() {
    const andresTools = ['Next.js', 'React.js', 'CSS / SASS', 'Vercel']
    const artAscTools = ['Next.js', 'React.js', 'CSS / SASS', 'nodemailer', 'next-translate', 'react hook form', 'Vercel']

    const andresLinks = [['https://andresalvarez.com.ar/', 'https://andresalvarez.com.ar/']]
    const artAscLinks = [['https://xd.adobe.com/view/af68c84b-329c-4177-ab42-c27e067874bd-fa3b/?fullscreen&hints=off', 'Adobe XD UI design presentation'], ['https://artyasc-panchitosarria.vercel.app/', 'Development testing location']]

    const andresText = `A simple and static one only page web for an accountant. Scroll navigation and mobile first. Design and development.`
    const artAscText = `A multi-languange web site for a brand and patent buffet. Mobile first and custom menu system. Design and development.`

  return (
    <div className={styles.container}>
        <WorkCard
            workImage={ArteagayAsociados}
            date='Currently under development'
            text={artAscText}
            tools={artAscTools}
            links={artAscLinks}
        />
        <WorkCard
            workImage={AndresAlvarez}
            date='Oct 2021'
            text={andresText}
            tools={andresTools}
            links={andresLinks}
        />
    </div>
  )
}

export default WorksSection;
