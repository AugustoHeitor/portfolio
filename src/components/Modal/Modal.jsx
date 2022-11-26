import { ButtonPrimary, ButtonSecondary, ButtonCloser } from "../Buttons/Buttons";
import { ModalExitStyles, ModalConfigStyles } from "./Styles.js"
import perfil1 from "../../imgs/myPhotos/neutral.png"
import perfil2 from "../../imgs/myPhotos/unhappy.png"
import perfil3 from "../../imgs/myPhotos/angry.png"
import Modal from 'react-modal';
import { useState } from "react";

export const ModalConfig = ( { eventDarkMode, statusDarkMode, eventModeSong, statusSong } )=>{

    let statusMode = statusDarkMode === "on" ?(
        {text: "On", color: "--color-on"}) :(
            {text: "Off", color: "--color-off"} 
        )
    
    let song = statusSong === "on" ?(
        {text: "On", color: "--color-on"}) :(
            {text: "Off", color: "--color-off"} 
        )
    

    const [modalIsOpen, setIsOpen] = useState(false)

    const openModal = ()=>{ 
        setIsOpen(true)
    }

    const CloseModal = ()=>{
        setIsOpen(false)
    }

    const ModalConfigCSS = {
       
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "10px",
            display: "flex",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: "300px",
            height: "200px",
            backgroundColor: "var(--color-primary-4)",
            border: "2px solid var(--color-black)",
        }
    };   

    return(
        <>
            <ButtonSecondary event={openModal}>Opções</ButtonSecondary>
            <Modal isOpen={modalIsOpen} style={ModalConfigCSS} ariaHideApp={false}>
                <ButtonCloser event={CloseModal}/>
                <ModalConfigStyles>
                    <div className="container-modal-config">
                        <span>Modo Escuro:</span>
                        <ButtonPrimary event={eventDarkMode} color={statusMode.color}>{statusMode.text}</ButtonPrimary>
                    </div>
                    <div className="container-modal-config">
                        <span>Música:</span>
                        <ButtonPrimary event={eventModeSong} color={song.color}>{song.text}</ButtonPrimary>
                    </div>
                </ModalConfigStyles>
            </Modal>
        </>
    )
}

export const ModalExit = ( )=>{

    const [modalIsOpen, setIsOpen] = useState(false)

    const [img, setImg] = useState(perfil1)
    const [cont, setCont] = useState(0)
    const [text, setText] = useState("Tem certeza que deseja sair?")

    const TryingToLog0ut = ()=>{

        if(cont === 0){
            setImg(perfil2)
            setCont(1)
            setText("Tem realmente certeza que deseja sair?")
        }else if(cont === 1){
            setImg(perfil3)
            setCont(2)
            setText("Nãooooooo, você não quer sair!!!")
        }else if(cont === 2){
            setIsOpen(false)
            setImg(perfil1)
            setCont(0)
            setText("Tem certeza que deseja sair?")
        }
    }    

    const openModal = ()=>{ 
        setIsOpen(true)
    }

    const CloseModal = ()=>{
        setIsOpen(false)
        setImg(perfil1)
        setCont(0)
         setText("Tem certeza que deseja sair?")
    }

    const ModalExitCSS = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "10px",
            display: "flex",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: "300px",
            height: "420px",
            backgroundColor: "var(--color-primary-4)",
            border: "2px solid var(--color-black)",
            img:{
                width:"10px",
                height:"100px"
            }
        }
    }
        
    return(
        <>
            <ButtonSecondary event={openModal}>Exit</ButtonSecondary>
            <Modal isOpen={modalIsOpen} style={ModalExitCSS} ariaHideApp={false}>
                <ButtonCloser event={CloseModal}/>
                <ModalExitStyles>
                    <div className="container-moda-exit-information">
                        <img alt="personagem" src={img}/>
                        <p>{text}</p>
                    </div>
                    <div className="container-moda-exit-buttons">
                        <ButtonPrimary event={CloseModal}>Cancelar</ButtonPrimary>
                        <ButtonPrimary event={TryingToLog0ut}>Sim</ButtonPrimary>
                    </div>
                </ModalExitStyles>
            </Modal>
        </>
    )
}

