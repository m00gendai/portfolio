import s from "../styles/Footer.module.css"
import { icons } from "../lib/social_info"

function Footer(){

    const date = new Date()
    const foundingYear = "2022"
    const currentYear = date.getFullYear()

    return(
        <footer className={s.footer}>
            <div className={s.social}>
                {icons.map((icon, index) =>{
                    return <div key={`socialIcon${index}`} className={s.socialIcon} title={icon.name} style={{
                        backgroundImage: `url("${icon.image}")`,
                    }}></div>
                })}
            </div>
        <div className={s.copy}>© mrweber.ch {foundingYear == currentYear ? "2022" : `2022 - ${currentYear}`}</div>
      </footer>
    )
}

export default Footer