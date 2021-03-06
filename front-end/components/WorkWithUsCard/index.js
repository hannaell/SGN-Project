import styled from "styled-components";
import React, { Component } from "react";
import Link from "next/link";

const WorkWithUsCardStyle = styled.div`
  height: 45vh;
  width: 100vw;
  display: flex;
  background: #046da9;
  margin-top: 10vh;
  align-items:center;
  padding:0 16px;

  @media screen and (min-width: 992px) {
    height: 55vh;
    display: flex;
    background: #046da9;
    padding:0 150px;
  }
`;
const TextStyle = styled.div`
  width: 92vw;

  h1 {
    font-family: Libre Franklin;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: normal;
    letter-spacing: 0.02em;
    color: #ffffff;
  }

  p {
    width: 92vw;
    margin-top: 1.9vh;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0.03em;
    color: #ffffff;
  }

  .white {
    margin-top: 4vh;
    width: 40vw;
    height: 6vh;
    background: white;
    border-radius: 4px;
    border: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: normal;
    text-align: center;
    letter-spacing: 0.05em;
    color: #046da9;
  }

  @media screen and (min-width: 992px) {
    height: 30vh;
    width: 35vw;
    min-width:450px;

    h1 {
      font-family: Libre Franklin;
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      line-height: 50px;
      letter-spacing: 0.02em;
      color: #ffffff;
    }

    p {
      width: 100%;
      margin-top: 1.9vh;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 23px;
      color: #ffffff;
    }

    .white {
      margin-top: 4vh;
      width: 9.5vw;
      height: 6vh;
      background: white;
      border-radius: 4px;
      border: none;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: normal;
      text-align: center;
      letter-spacing: 0.05em;
      color: #046da9;
    }
  }
`;

const WorkWithUsCard = (props) => {
  return (
    <WorkWithUsCardStyle>
      <TextStyle>
        <h1>{props.title}</h1>
        <p>
          {props.text}
        </p>
        <Link href="/contact">
          <button className="white">Contact us</button>
        </Link>
      </TextStyle>
    </WorkWithUsCardStyle>
  );
};

export default WorkWithUsCard;
