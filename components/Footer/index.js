import styles from './Footer.module.scss'

function Footer() {
  return (
    <section className='section section_solid' id='contact'>
      <div className='main_wpr'>
        <h2 className='h2_section'>Contact me</h2>
      </div>

      <div className='main_wpr'>
        <p>
          <a href="mailto:franasarria@gmail.com">franasarria@gmail.com</a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/francisco-andres-sarria/" target='_blank' rel="noreferrer">
            https://www.linkedin.com/in/francisco-andres-sarria/
          </a>
        </p>
      </div>
    </section>
  )
}

export default Footer
