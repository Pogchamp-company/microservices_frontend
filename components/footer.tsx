import {faDocker, faNodeJs, faPython, faReact, faUbuntu} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import footerStyles from "./footer.module.css"

export default function Footer() {
    return (
        <footer className={footerStyles.mainFooter}>
            <div className={footerStyles.mainFooterLine}>
                <div className={footerStyles.mainTechStack}>
                    <span>Применённые технологии</span>
                    <div className={footerStyles.mainTechIcons}>
                        <a href={"https://www.python.org/"}><FontAwesomeIcon icon={faPython}/></a>
                        <a href={"https://nodejs.org/en/"}><FontAwesomeIcon icon={faNodeJs}/></a>
                        <a href={"https://reactjs.org/"}><FontAwesomeIcon icon={faReact}/></a>
                        <a href={"https://ubuntu.com/"}><FontAwesomeIcon icon={faUbuntu}/></a>
                        <a href={"https://www.docker.com/"}><FontAwesomeIcon icon={faDocker}/></a>
                    </div>
                </div>
                <div className={footerStyles.mainCreators}>
                    <span>Создатели</span>
                    <ul>
                        <li><a href={"https://github.com/AlexandrovRoman"}>Александров Роман</a></li>
                        <li><a href={"https://github.com/RustyGuard"}>Головин Артём</a></li>
                    </ul>
                </div>
            </div>

            <a className={footerStyles.mainCopyright} href={"https://github.com/Pogchamp-company"}>©Pogchamp company</a>
        </footer>
    )
}