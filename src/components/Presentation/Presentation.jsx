import { PresentationMainStyles, PresentationStyles } from "./Styles.js"
import "../../Styles/animations.css"
import imgInformation from "../../imgs/myPhotos/personagemInformation.png"
import imgPersonagemNeutral from "../../imgs/animations/personagemNeutral.gif"
import projects from "../../datas/projects.js"
import { useState } from "react"



const Presentation = ( { eventChangePage, classTransition } )=>{

    const [transition, setTransition] = useState(false)

    const changeTrasition = ()=>{
        eventChangePage()
        setTransition(true)
          setTimeout(() =>{
            setTransition(false)
            clearTimeout(changeTrasition)
          }, 1000);
     }

    return(
        <>
            <PresentationStyles/>
            <PresentationMainStyles className={!transition?(classTransition):("pageTransitionDown")}>
                <div className="container-presentation-informations">
                    <div className="container-presentation-imgs">
                        <img alt="img" src={imgInformation} className="img-personagem-information"/>
                        <img alt="img" src={imgPersonagemNeutral} className="img-personagem-animation"/>
                    </div>
                    <div className="container-presentation-skills">
                        <h2>Hard Skills</h2>
                        <ul>
                            <li>&#128526; HTML</li>
                            <li>&#128525; CSS</li>
                            <li>&#129327; JavaScript</li>
                            <li>&#129299; Git</li>
                            <li>&#129313; Metodologias Ágeis</li>
                            <li>&#x1F643; Noções de UX</li>
                            <li>&#128527; APIs</li>
                            <li>&#128548; React</li>
                            <li>&#x1F644; Redux</li>
                        </ul>
                    </div>
                </div>
                <div className="container-presentation-projects">
                    <h2>Projetos</h2>
                    <div className="container-projects-cards">
                       {
                        projects.map((element, index)=>{
                            return(
                                <div className="card" key={index}>
                                    <a href={element.link} target="_blank" rel="noopener noreferrer" title={element.name}>
                                    <img alt={element.name} src={element.img} className="img-projects"/></a>
                                    <h3>{element.name}</h3>
                                    <p>{element.description}</p>
                                </div>
                            )
                        })
                       }
                    </div>
                </div>
                <span className="comeBack" onClick={changeTrasition}>Voltar</span>
            </PresentationMainStyles>
        </>
    )
}

export default Presentation