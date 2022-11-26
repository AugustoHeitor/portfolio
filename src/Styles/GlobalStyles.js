import { createGlobalStyle } from 'styled-components'; 
import FontPixelArt from '../fonts/pixel_art/RetroGaming.ttf';

export const GlobalStyles = createGlobalStyle` 

    @font-face {
        font-family: 'pixel-art';
        src: url(${FontPixelArt}) format('truetype');
    }
  
    :root{
      --color-primary-1: #CAF0F8;
      --color-primary-2: #90E0EF;
      --color-primary-3: #00B4D8;
      --color-primary-4:  #0077B6;
      --color-primary-5:  #03045E;
      --color-on:#008000;
      --color-off:#ff0000;
      --font-size-1: 28px;
      --font-size-2: 24px;
      --font-size-3: 20px;
      --font-size-4: 16px;
      --font-size-5: 12px;
      --font-weight-1: 700;
      --font-weight-2: 400;
      --line-height: 150%;
    }
  
    button, body{
        font-family: 'pixel-art';
    }
  
    body{
        background-color: var(--color-primary-4);
    }
  
` 

export const DarkGlobalStyles = createGlobalStyle` 

    @font-face {
        font-family: 'pixel-art';
        src: url(${FontPixelArt}) format('truetype');
    }
 
    :root{ 
        --color-primary-1: #CAF0F8;
        --color-primary-2: #90E0EF;
        --color-primary-3: #0077B6;
        --color-primary-4:  #03045E;
        --color-primary-5:  #00B4D8;
        --color-on:#90EE90;
        --color-off:#FF5500;
        --font-size-1: 28px;
        --font-size-2: 24px;
        --font-size-3: 20px;
        --font-size-4: 16px;
        --font-size-5: 12px;
        --font-weight-1: 700;
        --font-weight-2: 400;
        --line-height: 150%;
    }
  
    button, body{
        font-family: 'pixel-art';
    }
  
    body{
        background-color: var(--color-primary-4);
    }
  
` 









