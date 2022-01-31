import styles from './ScrollCTA.module.scss'

function ScrollCTA({inlineStyles}) {
    return (
        <div className={styles.container} style={inlineStyles}>
            <div className={styles.wrapper}></div>
            <div className={styles.bullet}></div>
        </div>
    )
}

export default ScrollCTA
