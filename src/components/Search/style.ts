import styled from "styled-components";

export const SearchStyle = styled.div`

    background-color: #0462C0;
    box-shadow: 10px 10px #ABD2FA;
    padding: 50px;
    margin: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    text-align: center;
    width: 100%;


    div{
        display: flex;

    }

    input{
        padding: 10px;
        border-radius: 10px;
        border: 2px solid #091540;
        background-color: #ABD2FA;
    }

    button{
        outline: 2px solid #ABD2FA;
        width: 50px;
        padding: 5px;
        border-radius: 10px;
        border: white;
        cursor: pointer;
        margin-left: 15px;
        background-color: var(--color-background);
    
        /* :hover{
            background-color: var(--color-secondary);
            
        } */
 
        /* :focus-within{}
         */ 
    }

    .searchIcon{
        color: var(--color-secondary);

        /* :hover{
            color: var(--color-background);
        } */
    }

`