import styles from './WorksSection.module.scss'
import WorkCard from '../WorkCard';

import ArteagayAsociados from '../../public/arteaga-y-asociados.png'
import AndresAlvarez from '../../public/andres-alvarez.png'

function WorksSection() {
    const andresTools = ['Next.js - Pages Router', 'CSS / SASS', 'Vercel']
    const artAscTools = ['Next.js - App Router', 'TailwindCSS / CSS', 'Vercel']

    const andresLinks = [['https://andres-alvarez-panchitosarria.vercel.app/', 'https://andres-alvarez-panchitosarria.vercel.app/']]
    const artAscLinks = [['https://arteyasc2023.vercel.app/', 'https://arteyasc2023.vercel.app/']]

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
