import { useState } from 'react'

import styles from './Header.module.scss'
import menuItems from './menu-items'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrFormClose } from 'react-icons/gr'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className={styles.site_header}>
        <div className={styles.site_logo}>
            ./fas
        </div>
        <nav className={styles.site_nav}>
            <button
                className={`${styles.menu_btn} ${styles.open_menu}`}
                onClick={() => setMenuOpen(true)}
            >
                <span>
                    <GiHamburgerMenu />
                </span>
            </button>
            <div className={`${styles.main_menu} ${!menuOpen && styles.main_menu_hide}`}>
                <button
                    className={`${styles.menu_btn} ${styles.close_menu}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <span>
                        <GrFormClose />
                    </span>
                </button>
                {
                    menuItems.map( menuItem => {
                        return (
                            <a href={menuItem.itemUrl} key={menuItem.itemTitle}>
                                {menuItem.itemTitle}
                            </a>
                        )
                    })
                }
            </div>
        </nav>
    </header>
  )
}

export default Header
