import styled from 'styled-components';
import React, { Component } from 'react'
import Link from 'next/link';

const WhoAreWeCardStyle = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column-reverse;
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.08);

    @media screen and (min-width: 992px) {
        height: 68.6vh;
        width: 100%;
        margin-top: 6.8vh;
        display: flex;
        flex-direction: row;
        box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.08);
    }
`
const CardStyle = styled.div`
    background-color: #FFF;
    width: 100vw;
    height: 340px;

    padding:16px;


    display:flex;
    flex-direction:column;
    justify-content:center;

    h1 {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 23px;
        letter-spacing: 0.03em;
        color: #046DA9;
    }

    p {
        width: 90vw;
        margin-top: 1.9vh;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 23px;
        letter-spacing: 0.03em;
        color: #747474;
    }

    button {
        margin-top: 4vh;
        width: 40vw;
        height: 6vh;
        background: #046DA9;
        border-radius: 4px;
        color: #FFF;
        border: none;
        /* padding: 15px 20px; */
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: normal;
        text-align: center;
        letter-spacing: 0.05em;

        color: #FFFFFF;
    }
    @media screen and (min-width: 992px) {
        background-color: #FFF;
        width: 50%;
        height: 68.6vh;

        padding: 70px;

        h1 {
            font-family: Libre Franklin;
            font-style: normal;
            font-weight: 600;
            font-size: 32px;
            line-height: 50px;
            letter-spacing: 0.02em;
            color: #046DA9;
        }

        p {
            width: 30vw;
            margin-top: 1.9vh;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 23px;
            letter-spacing: 0.03em;

            color: #747474;
        }

        button {
            margin-top: 4vh;
            width: 9.5vw;
            height: 6vh;
            background: #046DA9;
            border-radius: 4px;
            color: #FFF;
            border: none;
            /* padding: 15px 20px; */
            font-size: 14px;
        }
    }
`

const ImgStyle = styled.img`
    width: 100vw;
    height: 40vh;
    background-color: #EEE;
    object-fit:cover;

    @media screen and (min-width: 992px) {
        width: 50%;
        height: 68.6vh;
        background-color: #EEE;
    }
`

const WhoAreWeCard = (props) => {
    return (
        <WhoAreWeCardStyle>
            <CardStyle>
                <h1>Who are we?</h1>
                <p>Support Group Network is a NGO initiated by refugees and locals to improve integration for immigrats whom SGN provides psychosocial support by arranging activities and projects aiming to enhance their future in Europe or home countries if they go back.</p>
                <Link href="/about"><button>Read more</button></Link>
            </CardStyle>
            <ImgStyle src={props.image}></ImgStyle>

        </WhoAreWeCardStyle>
    )
}

export default WhoAreWeCard;
