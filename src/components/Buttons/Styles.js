import styled from 'styled-components';


export const ButtonPrimaryStyles = styled.button`
    box-shadow: 3px 4px 0px 0px var(--color-primary-5);
	border-radius:5px;
	border:1px solid var(--color-primary-2);
    padding: 5px 8px;
	text-shadow:0px 1px 0px var(--color-primary-5);
    font-size: var(--font-size-4);
    background-color: var(--color-primary-3);
    color: var(${(props)=> props.color?(props.color):("--color-primary-1")});

    :hover{
        animation: roll 0.6s infinite;
    }

    @keyframes roll {
      0% {
        transform: rotate(0);
      }
      50% {
        transform: rotate(-20deg);
      }
      100% {
        transform: rotate(20deg);
      }
    }

`;

export const ButtonSecondaryStyles = styled.button`
    border: 2px solid var(--color-primary-2);
    background-color: var(--color-primary-3);
    font-size: var(--font-size-4);
    border-radius: 2px;
    padding: 10px 30px;
    text-align: center;
    color: var(--color-primary-1);

    :hover{
        transform: scale(1.4);
        transition: 0.3s;
    }

`;


export const ButtonCloserStyles = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: var(--color-primary-4);
    font-size: var(--font-size-3);
    color: var(--color-primary-1);

    :hover{
        color: var(--color-off);
    }
    
`;


