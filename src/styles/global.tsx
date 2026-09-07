import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Satoshi';
    src: url('/static/fonts/satoshi/Satoshi-Medium.woff2') format('woff2'),
    url('/static/fonts/satoshi/Satoshi-Medium.woff') format('woff'),
    url('/static/fonts/satoshi/Satoshi-Medium.ttf') format('truetype');
    font-weight: 500;
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'Satoshi';
    src: url('/static/fonts/satoshi/Satoshi-Regular.woff2') format('woff2'),
    url('/static/fonts/satoshi/Satoshi-Regular.woff') format('woff'),
    url('/static/fonts/satoshi/Satoshi-Regular.ttf') format('truetype');
    font-weight: 400;
    font-display: swap;
    font-style: normal;
  }


  html {
    min-width: 23.438rem;
  }

  body {
    display: block;
    background-color: #FFFFFF;
    font-family: Satoshi, sans-serif;
    margin: 0;
    font-weight: 500;
    color: var(--secondary, #020915);
    min-width: 23.438rem;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0;
  }

  a {
    outline: none;
    text-decoration: none;
    color: var(--secondary, #020915);
  }

  p {
    margin: 0;
  }

  .btn {
    display: inline-block;
    position: relative;
    outline: none;
    padding: 1rem 1rem;
    border-radius: 1rem;
    background: var(--primary);
    font-size: var(--size-button, 17px);
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    color: #FFFFFF;
    text-align: center;
    border: 0;
  }

  .btn:hover {
    color: #FFFFFF;
    background: var(--primary);
  }

  .btn.-secondary {
    background: var(--secondary, #020915);
  }

  .btn.-secondary:hover {
    background: var(--secondary, #020915);
  }

  .btn.-stroke {
    background: var(--stroke-transparent, rgba(8, 38, 93, 0.10));
  }

  .btn.-stroke:hover {
    background: var(--stroke-transparent, rgba(8, 38, 93, 0.10));
  }

  .h1 {
    font-size: var(--h1, 36px);
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .h2 {
    font-size: var(--h2, 30px);
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .h3 {
    font-size: var(--h3, 22px);
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .h4 {
    font-size: var(--h4, 22px);
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .h5 {
    font-size: var(--h5, 19px);
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .text {
    font-size: var(--size-body, 15px);
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .caption {
    font-size: var(--size-caption, 14px);
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .text-thin {
    color: var(--secondary-transparent);
    font-size: var(--size-body, 17px);
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 25.5px */
  }

  .link {
    color: var(--primary);
    font-size: var(--size-link, 17px);
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
  }
  /* layout start */

  /* overlay start */
  .off-canvas {
    position: fixed;
    z-index: 12;
    transition: transform .5s ease, -webkit-transform .5s ease;
    backface-visibility: hidden;
    background: #fff;
    top: 0;
    right: 0;
    height: 100%;
    overflow-y: auto;
    width: 80vw;
    transform: translateX(80vw);
    padding: 0 1em;
    visibility: hidden;
    border-left: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
  }

  .off-canvas-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 11;
    width: 100%;
    height: 100%;
    -webkit-transition: opacity .5s ease, visibility .5s ease;
    transition: opacity .5s ease, visibility .5s ease;
    background: 0 0;
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
    outline: 0;
    cursor: pointer;
  }

  .off-canvas-content {
    width: 100vw;
    min-width: 23.438rem;
    transition: transform .5s ease;
    backface-visibility: hidden;
    transform: translate(0, 0);
  }

  .off-canvas.-active {
    transform: translate(0, 0);
    visibility: visible;
  }

  .off-canvas-overlay.-active {
    display: block;
    opacity: 1;
    visibility: visible;
  }

  .off-canvas-content.-active {
    position: fixed;
    overflow: hidden;
    transform: translateX(-80vw);
  }
  /* overlay end */

  /* mobile menu start */
  .mobile-nav-menu {
    padding: 0;
    margin: 0;
    list-style: none;
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
  }
  .is-drilldown {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    height: 100%;
    padding-top: 8.3rem;
    padding-bottom: 2.5rem;
  }

  .mobile-nav-menu .menu-item {
    margin-bottom: 1.25rem;
  }

  .mobile-nav-menu .nav-link {
    display: block;
    outline: 0;
    font-size: 22px;
  }
  .mobile-nav-menu .menu-item.-active a {
    color: var(--primary);
  }

  .mobile-nav-menu .menu-item.-disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  .mobile-btn__container {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    margin-top: auto;
  }

  .mobile-btn__container_row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .5rem;
    margin-top: auto;
  }


  .mobile-btn {
    flex: 1;
    padding: 13px 0;
  }

  .mobile-btn.-secondary {
    flex: 0;
    padding: 13px 14px;
  }

  .get_in_touch_mobile {
    flex-grow: 1;
    line-height: 1;
  }
  
  .dropdown-menu {
    display: none;
  }
  /* mobile menu end */

  .gallery-clients {
    height: 100%;
  }

  /* layout end */

  /* 992px */
  @media only screen and (min-width: 62rem) {
    .btn {
      padding: 0.75rem 1.25rem;
      border-radius: 0.75rem;
      font-size: 0.9rem;
    }

    .h1 {
      font-size: 68px;
    }

    .h2 {
      font-size: 2.97rem;
    }

    .h3 {
      font-size: 2.54rem;
    }

    .h4 {
      font-size: 2.013rem;
    }

    .h5 {
      font-size: 1.25rem;
    }

    .text {
      font-size: 0.9rem;
    }

    .text-thin {
      font-size: 0.9rem;
    }

    .link {
      font-size: 0.9rem;
    }
    .clients {
      padding-top: 10rem;
    }
  }

  /* 1200px */
  @media only screen and (min-width: 74.9375rem) {
    .btn {
      padding: 0.75rem 1.75rem;
    }
    .h1 {
      font-size: 4.25rem;
    }
    .h2 {
      font-size: 2.97rem;
    }
    .h3 {
      font-size: 2.54rem;
    }
    .h4 {
      font-size: 2.013rem;
    }
    .h5 {
      font-size: 1.25rem;
    }
    .text {
      font-size: 0.9rem;
    }
    .text-thin {
      font-size: 0.9rem;
    }
    .link {
      font-size: 0.9rem;
    }
  }

  /* 1400px */
  @media only screen and (min-width: 87.5rem) {
    .h1 {
      font-size: 4.25rem;
    }
    .h2 {
      font-size: 2.97rem;
    }
    .h3 {
      font-size: 2.54rem;
    }
    .h4 {
      font-size: 2.013rem;
    }
    .h5 {
      font-size: 1.25rem;
    }
    .text {
      font-size: 0.9rem;
    }
    .text-thin {
      font-size: 0.9rem;
    }
    .link {
      font-size: 0.9rem;
    }
  }

  /* 1441px */
  @media only screen and (min-width: 90.063rem) {
    .btn {
      padding: 1rem 1.5rem;
      font-size: 1.062rem;
    }
    .h1 {
      font-size: 5rem;
    }
    .h2 {
      font-size: 56px;
    }
    .h3 {
      font-size: 48px;
    }
    .h4 {
      font-size: 38px;
    }
    .h5 {
      font-size: 24px;
    }
    .text {
      font-size: 1.062rem;
    }
    .text-thin {
      font-size: 1.062rem;
    }
    .link {
      font-size: 1.062rem;
    }
    .container {
      max-width: 87.5rem;
    }
    .clients {
      padding-top: 12rem;
    }
  }
  
`;
