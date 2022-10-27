import s from "../styles/Footer.module.css"

function Footer(){

    const date = new Date()
    const foundingYear = "2022"
    const currentYear = date.getFullYear()

    return(
        <footer className={s.footer}>
        © mrweber.ch {foundingYear == currentYear ? "2022" : `2022 - ${currentYear}`}
      </footer>
    )
}

export default Footer