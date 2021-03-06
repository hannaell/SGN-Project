import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Link from 'next/link';

const LoadingContainer = styled.div`
  height:100vh;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;

  @keyframes loading {
  	to {
      transform: rotate(360deg);
    }
  }

  div {
   animation: loading 1s infinite linear;
   width: 50px;
   height: 50px;
   border-top: solid 6px #046DA9;
   border-bottom: solid 6px rgb(200, 200, 200);
   border-left: solid 6px rgb(200, 200, 200);
   border-right: solid 6px #046DA9;
   border-radius: 50%;
  }
`

const LoadingScreen = (props) =>  {
  return (
    <LoadingContainer>
      <div></div>
    </LoadingContainer>
  )
}

export default LoadingScreen
