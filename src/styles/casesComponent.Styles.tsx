import styled from 'styled-components';

export const CasesComponent = styled('div')`
  display: flex;
  flex-direction: column;
  padding-top: 4.5rem;
  padding-bottom: 2.2rem;

  .page-title__wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2.25rem;
  }

  .page-title {
    text-align: center;
    margin-bottom: 0;
  }

  .page-cases {
    margin-top: 2rem;
  }

  .page-cases__line {
    border-top: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
  }

  .page-cases__container {
    padding-right: 0;
    padding-left: 0;
    margin-right: 0;
    margin-left: 0;
    max-width: 100%;
  }

  .page-cases__row {
    margin-right: 0;
    margin-left: 0;
  }

  .gallery-cases__slide:nth-child(2) {
    border-top: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
  }

  .page-cases .gallery-cases__slide::after {
    display: none;
  }

  .gallery-cases__slide {
    position: relative;
    padding: 1.15rem 0.75rem;
  }

  .cases-gallery__wrap {
    display: flex;
    flex-direction: column;
  }

  .cases-gallery__image_wrap {
    border-radius: 0.75rem;
    overflow: hidden;
  }

  .cases-gallery__image {
    width: 100%;
    height: auto;
  }

  .cases-gallery__description {
    margin-top: 1rem;
  }

  .cases-gallery__title {
    line-height: 120%;
  }

  .cases-gallery__subtitle_wrap {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 0.75rem;
  }

  .cases-gallery__subtitle_wrap:before {
    content: '';
    display: block;
    width: 0.45rem;
    height: 0.45rem;
    min-width: 0.45rem;
    min-height: 0.45rem;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSI3IiB2aWV3Qm94PSIwIDAgNiA3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8Y2lyY2xlIGN4PSIzIiBjeT0iMy41IiByPSIzIiBmaWxsPSIjMzc3M0UwIi8+Cjwvc3ZnPgo=);
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: 0.5rem;
    margin-top: 0.5rem;
  }

  .cases-gallery__subtitle {
    color: var(--secondary-transparent-bold, #4e535b);
  }

  /* 576px */
  @media only screen and (min-width: 36rem) {
    .gallery-cases__slide {
      padding: 1.15rem 1.85rem;
    }
    .cases-gallery__wrap {
      max-width: 540px;
      padding-right: calc(var(--bs-gutter-x)* .5);
      padding-left: calc(var(--bs-gutter-x)* .5);
      margin-right: auto;
      margin-left: auto;
    }
  }
  
  /* 768px */
  @media only screen and (min-width: 48rem) {
    padding-bottom: 6.5rem;

    .page-cases__container {
      max-width: 720px;
      margin-right: auto;
      margin-left: auto;
    }
    .page-cases__line:last-child {
      border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
    .gallery-cases__slide:nth-child(2) {
      border-top: 0;
    }
    .page-cases__item {
      border-right: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
    .page-cases__item:first-child {
      border-left: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
    .gallery-cases__slide {
      padding: 1.15rem 1.85rem;
    }
    .cases-gallery__wrap {
      max-width: 720px;
    }
  }

  /* 992px */
  @media only screen and (min-width: 62rem) {
    padding-top: 4.35rem;
    padding-bottom: 9.5rem;
    
    .page-title__wrap {
      margin-top: 4.5rem;
    }

    .page-cases {
      margin-top: 4.5rem;
    }
    .page-cases__container {
      max-width: 960px;
    }
    .gallery-cases__slide {
      padding: 1.25rem 0;
    }
    .gallery-cases__slide::after {
      content: '';
      position: absolute;
      top: 0;
      width: 1px;
      height: 100%;
      right: -21px;
      background: var(--stroke-transparent, rgba(8, 38, 93, 0.10));
    }
    .cases-gallery__image_wrap {
      border-radius: 1.25rem;
    }
    .cases-gallery__title {
      margin-top: 1.4rem;
      margin-bottom: 0.75rem;
    }
    .cases-gallery__subtitle_wrap:before {
      margin-right: 0.35rem;
    }
    .cases-gallery__subtitle {
      height: 2.5rem;
    }
  }

  /* 1200px real */
  @media only screen and (min-width: 74.9375rem) {
    padding-top: 4.25rem;

    .page-cases__container {
      max-width: 1140px;
    }
    .gallery-cases__slide::after {
      right: -26px;
    }
  }

  /* 1400px real */
  @media only screen and (min-width: 87.5rem) {
    padding-top: 4.15rem;
    padding-bottom: 11.15rem;
    
    .page-title__wrap {
      margin-top: 5.4rem;
    }
    .page-cases {
      margin-top: 5.25rem;
    }
    .page-cases__container {
      max-width: 1320px;
    }
    .gallery-cases__wrapper {
      margin-left: -21%;
    }
    .cases-gallery__description {
      margin-top: 1.5rem;
    }
  }

  /* 1441px */
  @media only screen and (min-width: 90.063rem) {
    padding-top: 4.724rem;
    
    .page-cases__container {
      max-width: 87.5rem;
    }
    .gallery-cases__wrapper {
      margin-left: -21%;
    }
    .gallery-cases__slide {
      padding: 1.5rem 0;
    }
    .cases-gallery__image_wrap {
      border-radius: 1.5rem;
    }
    .cases-gallery__title {
      margin-top: 1.5rem;
      margin-bottom: 1rem;
    }
    .cases-gallery__subtitle_wrap:before {
      margin-right: 0.35rem;
    }
  }
`;
