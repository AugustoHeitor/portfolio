import perfil1 from "../../imgs/myPhotos/neutral.png";
import perfil2 from "../../imgs/myPhotos/happy.png";
import { useState } from "react";
import { ImgPerfilStyles } from "./Styles";


const ImgPerfil = ()=>{

    const [imgPerfil, setImgPerfil] = useState(perfil1);

    const changeImgMove = ()=>{
        setImgPerfil(perfil2)
    };

    const changeImgOver = ()=>{
        setImgPerfil(perfil1)
    };

    return(
        <ImgPerfilStyles alt="perfil" src={imgPerfil} onMouseMove={changeImgMove} 
        onMouseLeave={changeImgOver}/>
    );
};

export default ImgPerfil;