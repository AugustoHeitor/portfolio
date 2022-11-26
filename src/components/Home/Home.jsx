import { HomeMainStyles, LogoStyles, HomeStyles } from "./Styles.js"
import { ButtonSecondary } from "../Buttons/Buttons.jsx"
import logo from "../../imgs/logs/logo_1.png"
import ImgPerfil from "../ImgPerfil/ImgPerfil"
import { ModalConfig, ModalExit } from "../Modal/Modal.jsx"
import "../../Styles/animations.css"


const Home = ( { eventDarkMode, statusDarkMode, eventModeSong, statusSong, eventChangePage, classTransition } )=>{

    return(
        <>
            <HomeStyles/>
            <HomeMainStyles className={classTransition}>
                <div className="container-home-imgs">
                    <ImgPerfil/>
                    <LogoStyles alt="title" src={logo}/>
                </div>
                <div className="container-home-buttons">
                    <ButtonSecondary event={eventChangePage}>Começar</ButtonSecondary>
                    <ModalConfig eventDarkMode={eventDarkMode} 
                    statusDarkMode={statusDarkMode} eventModeSong={eventModeSong} statusSong={statusSong}>Opções</ModalConfig>
                    <ModalExit>Sair</ModalExit>
                </div>
            </HomeMainStyles>
        </>
    )
}

export default Home