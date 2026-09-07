import {createGlobalStyle, ExecutionProps} from 'styled-components';
import React from 'react';

export const GridStyle: React.NamedExoticComponent<ExecutionProps & object> = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  @media (prefers-reduced-motion: no-preference) {
    :root {
      scroll-behavior: smooth;
    }
  }

  body {
    font-size: 1rem;
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }

  h1, .h1 {
    font-size: calc(1.375rem + 1.5vw);
  }
  @media (min-width: 1200px) {
    h1 {
      font-size: 2.5rem;
    }
  }

  h2 {
    font-size: calc(1.325rem + 0.9vw);
  }
  @media (min-width: 1200px) {
    h2 {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: calc(1.3rem + 0.6vw);
  }
  @media (min-width: 1200px) {
    h3 {
      font-size: 1.75rem;
    }
  }

  h4 {
    font-size: calc(1.275rem + 0.3vw);
  }
  @media (min-width: 1200px) {
    h4 {
      font-size: 1.5rem;
    }
  }

  h5 {
    font-size: 1.25rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ol,
  ul {
    padding-left: 2rem;
  }

  ol,
  ul,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  b,
  strong {
    font-weight: bolder;
  }

  img,
  svg {
    vertical-align: middle;
  }

  label {
    display: inline-block;
  }

  button {
    border-radius: 0;
  }

  button:focus:not(:focus-visible) {
    outline: 0;
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button,
  select {
    text-transform: none;
  }

  [role=button] {
    cursor: pointer;
  }

  button,
  [type=button],
  [type=reset],
  [type=submit] {
    -webkit-appearance: button;
  }
  button:not(:disabled),
  [type=button]:not(:disabled),
  [type=reset]:not(:disabled),
  [type=submit]:not(:disabled) {
    cursor: pointer;
  }

  textarea {
    resize: vertical;
  }

  iframe {
    border: 0;
  }

  [hidden] {
    display: none;
  }

  .fade {
    transition: opacity 0.15s linear;
  }

  .container {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-right: auto;
    margin-left: auto;
  }

  .row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-0.5 * var(--bs-gutter-x));
    margin-left: calc(-0.5 * var(--bs-gutter-x));
  }
  .row > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-top: var(--bs-gutter-y);
  }

  .btn {
    --bs-btn-disabled-opacity: 0.65;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }


  .btn:disabled, .btn.disabled, fieldset:disabled .btn {
    pointer-events: none;
    opacity: var(--bs-btn-disabled-opacity);
  }
  
  .d-block {
    display: block;
  }

  .d-flex {
    display: flex;
  }

  .flex-column {
    flex-direction: column;
  }

  .d-none {
    display: none;
  }

  .justify-content-center {
    justify-content: center;
  }

  .border-0 {
    border: 0;
  }

  .text-center {
    text-align: center;
  }

  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }

  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
    .col-md-4 {
      flex: 0 0 auto;
      width: 33.33333333%;
    }
    .col-md-6 {
      flex: 0 0 auto;
      width: 50%;
    }
  }

  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
    .col-lg-3 {
      flex: 0 0 auto;
      width: 25%;
    }
    .col-lg-4 {
      flex: 0 0 auto;
      width: 33.33333333%;
    }
    .col-lg-5 {
      flex: 0 0 auto;
      width: 41.66666667%;
    }
    .col-lg-6 {
      flex: 0 0 auto;
      width: 50%;
    }
    .col-lg-7 {
      flex: 0 0 auto;
      width: 58.33333333%;
    }
    .col-lg-8 {
      flex: 0 0 auto;
      width: 66.66666667%;
    }
    .col-lg-11 {
      flex: 0 0 auto;
      width: 91.66666667%;
    }
    .col-lg-12 {
      flex: 0 0 auto;
      width: 100%;
    }
    .d-lg-block {
      display: block;
    }
    .d-lg-flex {
      display: flex;
    }
    .d-lg-none {
      display: none;
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
    .col-xl-3 {
      flex: 0 0 auto;
      width: 25%;
    }
    .col-xl-4 {
      flex: 0 0 auto;
      width: 33.33333333%;
    }
    .col-xl-6 {
      flex: 0 0 auto;
      width: 50%;
    }
    .col-xl-8 {
      flex: 0 0 auto;
      width: 66.66666667%;
    }
    .col-xl-9 {
      flex: 0 0 auto;
      width: 75%;
    }
    .d-xl-block {
      display: block;
    }
    .d-xl-none {
      display: none;
    }
  }

  @media (min-width: 1400px) {
    .container {
      max-width: 1320px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .btn {
      transition: none;
    }
    .navbar-toggler {
      transition: none;
    }
    .fade {
      transition: none;
    }
  }
`;
