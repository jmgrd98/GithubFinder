import styled from "styled-components";

export const UserCardStyle = styled.div`

    width: 100%;
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

    img{
        width: 150px;
        border-radius: 50%;
        border: 5px solid white;
    }

    h2{
        color: #091540
    }

    .companyDiv{
        display: flex;
        gap: 5px;
    }

    .location{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        font-weight: bold;
    }

    .icon{
        color: #ABD2FA;
    }

    .number{
        color: #ABD2FA;
        font-weight: 500;
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

    .RepoButton{
        color: white;
        font-weight: bold;
        margin-top: 20px;
        background-color: #091540;
        color: #ABD2FA;
        padding: 20px;
        border-radius: 15px;
        box-shadow: 2px 2px #ABD2FA;
    }

`