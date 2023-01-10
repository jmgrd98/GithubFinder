import styled from "styled-components";

export const UserCardStyle = styled.div`

    width: 100%;
    background-color: #0462C0;
    padding: 50px;
    margin: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    text-align: center;

    img{
        width: 150px;
        border-radius: 50%;
        border: 5px solid white;
    }

    .location{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        font-weight: bold;
    }

    .followContainer{
        display: flex;
        gap: 20px;
    }

    .followCard{
        display: flex;
        flex-direction: column;
        background-color: #333;
        padding: 10px;
        border-radius: 10px;
        gap: 10px;
        font-size: 1.2rem;
    }

    span{
        font-weight: bold;
    }

    .RepoLink{
        color: white;
        font-weight: bold;
        margin-top: 20px;
    }

`