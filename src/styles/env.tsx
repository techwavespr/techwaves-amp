import { createGlobalStyle } from 'styled-components'

export const EnvStyle = createGlobalStyle`
  :root {
    --primary: #3771DD;
    --secondary: #020915;
    --secondary-transparent: #70747A;
    --secondary-light: #70747A;
    --secondary-transparent-bold: #4e535b;
    --stroke: #e7e9ef;
    --stroke-transparent: rgba(8, 38, 93, 0.10);
    --accent: linear-gradient(180deg, #1E60DB 0%, #BDD7F9 100%);
    --h1: 36px;
    --h2: 30px;
    --h3: 22px;
    --h4: 22px;
    --h5: 19px;
    --size-button: 17px;
    --size-body: 15px;
    --size-caption: 14px;
    --size-link: 17px;
  }
  
  @-webkit-keyframes rotate {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  
  @keyframes rotate {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  
  @-webkit-keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124;
    }
  }
  
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124;
    }
  }
  
  @-webkit-keyframes color {
    100%, 0% {
      stroke: #d62d20;
    }
    40% {
      stroke: #0057e7;
    }
    66% {
      stroke: #008744;
    }
    80%, 90% {
      stroke: #ffa700;
    }
  }
  
  @keyframes color {
    100%, 0% {
      stroke: #d62d20;
    }
    40% {
      stroke: #0057e7;
    }
    66% {
      stroke: #008744;
    }
    80%, 90% {
      stroke: #ffa700;
    }
  }
  
  @-webkit-keyframes filter_btn {
    100% {
      background-size: 2.375em 2.375em, 0.1em 0.1em;
    }
  }
  
  @keyframes filter_btn {
    100% {
      background-size: 2.375em 2.375em, 0.1em 0.1em;
    }
  }
`;
