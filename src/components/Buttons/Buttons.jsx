import { ButtonPrimaryStyles, ButtonCloserStyles, ButtonSecondaryStyles } from "./Styles.js";

export const ButtonPrimary = ( { children, event, color } )=>{
    return(
        <>
            <ButtonPrimaryStyles onClick={event} color={color}> { children } </ButtonPrimaryStyles>
        </>
       
    );
};

export const ButtonSecondary = ( { children, event} )=>{
    return(
        <ButtonSecondaryStyles onClick={event}> { children } </ButtonSecondaryStyles>
    );
};

export const ButtonCloser = ( { event } ) =>{
    return(
        <ButtonCloserStyles onClick={event}>X</ButtonCloserStyles>
    )
}