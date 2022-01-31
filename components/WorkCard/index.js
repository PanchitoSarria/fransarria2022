import Image from 'next/image';
import styles from './WorkCard.module.scss'

function WorkCard({workImage, date, text, tools, links}) {
    
  return <div className={styles.container}>
      <div className={styles.card_image}>
            <Image              
                src={workImage}
                alt='Web site screen print'
                width={1280}
                height={698}
                layout="responsive"    
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 35vw"
            />
      </div>
      <div className={styles.card_info}>
          <p className={styles.card_date}>
              {date}
          </p>
          <p className={styles.card_text}>
              {text}
          </p>
          <div>
            <ul className={styles.tools_container}>
              {
                tools.map( tool => {
                    return (
                        <li className={styles.tool_item} key={tool}>
                            {tool}
                        </li>
                    )
                })
              }
            </ul>
          </div>
          <div className={styles.links_container}>
              {
                links.map( link => {
                    return (
                        <div key={link[0]}>
                            <a href={link[0]}>
                                {link[1]}
                            </a>
                        </div>
                    )
                })
              }
          </div>
      </div>
  </div>
}

export default WorkCard
