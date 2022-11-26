import styled from "styled-components"
import { createGlobalStyle } from 'styled-components'; 

export const HomeStyles = createGlobalStyle` 
    body, #root, html{
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow-y: hidden;
    }

    .body, #root, html{
      width: 100%;
    }
    
`

export const HomeMainStyles = styled.main`
    background-color: var(--color-primary-4);
    border-radius: 10px;
    width: 90%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 64px;

    > .container-home-imgs{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap:16px;
        width: 100%;
    }

    > .container-home-buttons{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap:34px;
    }
    
`;


export const LogoStyles = styled.img`
    width: 300px;
    height: 50px;
    image-rendering: optimizeQuality;
`;



