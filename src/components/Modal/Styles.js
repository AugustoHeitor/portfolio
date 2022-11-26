import styled from "styled-components"



export const ModalExitStyles = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    > .container-moda-exit-information{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
        > img{
            object-fit: contain;
            width: 150px;
            height: 130px;
            image-rendering: optimizeQuality;
        }
        > p{
            font-size: var(--font-size-2);
            line-height: 40px;
            color: var(--color-primary-1);
            text-align: center;
            height: 120px;
        }
    }

    > .container-moda-exit-buttons{
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const ModalConfigStyles = styled.div` 
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    gap: 20px;
    
   > .container-modal-config{
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: space-between;
        > span{
            color: var(--color-primary-1);
        }
   }
`;

