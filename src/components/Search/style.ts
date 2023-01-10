import styled from "styled-components";

export const SearchStyle = styled.div`

    background-color: #0462C0;
    height: 50vh;
    padding: 50px;
    margin: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 50px;
    text-align: center;

    p{
        font-weight: bold;
    }

    div{
        display: flex;

    }

    input{
        padding: 10px;
        border-radius: 10px;
    }

    button{
        width: 50px;
        padding: 5px;
        border-radius: 10px;
        border: white;
        cursor: pointer;
        margin-left: 5px;
        background-color: #333;
    }

    .searchIcon{
        color: white;
    }

`