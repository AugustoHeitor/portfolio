import styled from "styled-components"
import { createGlobalStyle } from 'styled-components'; 

export const PresentationStyles = createGlobalStyle` 
    body, #root, html{
      display: flex;
      justify-content: center;
    }

    .body, #root, html{
      width: 100%;
    }
    
`

export const PresentationMainStyles = styled.main`
    margin-top: 75px;
    background-color: var(--color-primary-4);
    width: 90%;
    height: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 64px;
    > .container-presentation-informations{
      background-color: var(--color-primary-4);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 64px;
      > .container-presentation-imgs{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
          > .img-personagem-information{
              width: 300px;
              height: 115px;
              image-rendering: optimizeQuality;
              object-fit: contain;
          }
          > .img-personagem-animation{
              width: 300px;
              height: 300px;
              image-rendering: optimizeQuality;
              object-fit: contain;
          }
        
      }
      > .container-presentation-skills{
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 40px;
        height: 360px;
        width: 300px;
        border: 2px solid var(--color-primary-2);
        background-color: var(--color-primary-3);
        border-radius: 2px;
        padding: 30px 20px;
        color: var(--color-primary-1);
        > h2{
          text-align: center;
          font-size: var(--font-size-2);
        }
        ul{
          width: 100%;
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          justify-content: flex-start;
          gap: 10px;
          li>{
            font-size: var(--font-size-4);
          }
        }
      }
    }
    > .container-presentation-projects{
      border: 2px solid var(--color-primary-2);
      color: var(--color-primary-1);
      gap: 20px;
      padding: 30px;
      overflow: hidden;
      width: 300px;
      height: 600px;
      background-color: var(--color-primary-4);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      > .container-projects-cards{
        padding: 40px 10px;
        width: 100%;
        height: 400px;
        overflow-y: hidden;
        overflow-x:auto; 
        display: flex;
        align-items:center;
        justify-content: flex-start;
        gap: 40px;
        width: 100%;
        height: 100%;
        > .card{
          border: 2px solid var(--color-primary-2);
          background-color: var(--color-primary-3);
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 20px;
          flex-direction: column;
          padding: 10px;
          min-width:220px;
          min-height: 300px;
          
          > a{
            width: 100%;
            > .img-projects{
              image-rendering: optimizeQuality;
              width: 100%;
              height: 100px;
              
            }
          }
          > h3{
            font-size: var(--font-size-3);
            color: var(--color-primary-1);
          }
          > p{
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3; 
            -webkit-box-orient: vertical; 
            font-size: var(--font-size-3);
            color: var(--color-primary-1);
          }
        }
      }
    }
    > .comeBack{
      font-size: var(--font-size-3);
      color: var(--color-primary-1);
      cursor: pointer;
    }
`;




