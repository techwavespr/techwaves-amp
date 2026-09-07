import styled from 'styled-components';

export const ServicesComponent = styled('div')`
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

  .page-services {
    margin-top: 2rem;
  }

  .services_title__wrap {
    align-items: start;
    margin-top: 1.25rem;
  }

  .services_title__wrap .cases-gallery__title {
    font-size: 1.87rem;
    margin-bottom: 0;
  }

  .page-services__line {
    border-top: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
  }

  .page-services__container {
    padding-right: 0;
    padding-left: 0;
    margin-right: 0;
    margin-left: 0;
    max-width: 100%;
  }

  .page-services__row {
    margin-right: 0;
    margin-left: 0;
  }

  .gallery-services__slide {
    border-top: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
  }

  .gallery-services__slide:nth-child(1) {
    border-top: 0;
  }

  .page-services .gallery-services__slide::after {
    display: none;
  }
  .gallery-services {
    height: 100%;
    border-top: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
    border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
  }

  .services-gallery {
    margin-top: 3.9rem;
  }

  .gallery-services__wrapper {
    flex-direction: row;
  }

  .gallery-services__slide {
    position: relative;
    padding: 1.15rem 0.75rem;
  }

  .services-gallery__wrap {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .services-gallery__image_wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 12rem;
    border-radius: 0.75rem;
    overflow: hidden;
  }

  .services-gallery__image {
    width: 100%;
    height: auto;
  }

  .services-gallery__description {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .services-gallery__title {
    line-height: 120%;
    margin-top: 1rem;
    margin-bottom: 0.75rem;
  }

  .services-gallery__text_wrap {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .services-gallery__text {
    color: var(--secondary-transparent-bold, #4e535b);
  }

  .services-gallery__actions {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1.25rem;
    margin-top: auto;
  }

  .services-gallery__btn {
    width: 100%;
    padding: 1rem 2rem;
  }

  .page-content__cases_wrap {
    margin-top: 2rem;
  }

  .page-case__title {
    text-align: center;
  }

  /* 576px */
  @media only screen and (min-width: 36rem) {
    .gallery-services__slide {
      padding: 1.15rem 1.85rem;
    }
    .services-gallery__wrap {
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

    /* services page start */
    .page-services__container {
      max-width: 720px;
      margin-right: auto;
      margin-left: auto;
    }
    .gallery-services__slide:nth-child(2) {
      border-top: 0;
    }
    .page-services__line:last-child {
      border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
    .page-services__item {
      border-right: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
    .page-services__item:first-child {
      border-left: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
    .gallery-services__slide {
      padding: 1.15rem 1.85rem;
    }
    .services-gallery__wrap {
      max-width: 720px;
      padding: 0 1rem;
    }
    /* services page start */
  }

  /* 992px */
  @media only screen and (min-width: 62rem) {
    padding-top: 4.35rem;
    padding-bottom: 9.5rem;

    .page-title__wrap {
      margin-top: 4.5rem;
    }

    /* services start */
    .page-services {
      margin-top: 4.5rem;
    }
    .page-services__container {
      max-width: 960px;
    }
    .services-gallery {
      margin-top: 8.85rem;
    }
    .gallery-services__slide {
      padding: 1.25rem 0;
      border-top: 0;
    }
    .gallery-services__slide::after {
      right: -21px;
    }
    .services-gallery__image_wrap {
      height: 14rem;
      border-radius: 1.25rem;
    }
    .services-gallery__title {
      margin-top: 1.4rem;
      margin-bottom: 0.75rem;
    }
    .services-gallery__text_wrap {
      margin-top: 0.25rem;
    }
    .services-gallery__text {
    }
    .services-gallery__actions {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-top: 1.25rem;
    }
    .services-gallery__btn {
      width: auto;
      padding: 0.75rem 1.25rem;
    }
    /* services end */
    .page-content__cases_wrap {
      margin-top: 6rem;
    }
  }

  /* 1200px real */
  @media only screen and (min-width: 74.9375rem) {
    padding-top: 4.25rem;

    /* services start */
    .services_title__wrap {
      margin-top: 0.75rem;
    }
    .page-content__actions_wrap {
      padding-top: 0.25rem;
    }
    .page-services__container {
      max-width: 1140px;
    }
    .services-gallery {
      margin-top: 5.25rem;
    }
    .services-gallery__image_wrap {
      height: 17rem;
    }
    .page-content__clients_wrap {
      margin-top: 3.25rem;
      padding: 0 1rem 3rem;
    }
    .page-content__clients_wrap .page-content__title_wrap {
      margin-bottom: 3rem;
    }
    /* services end */
    .page-content__cases_wrap {
      margin-top: 9.5rem;
    }
  }

  /* 1400px real */
  @media only screen and (min-width: 87.5rem) {
    padding-top: 4.15rem;
    padding-bottom: 11.15rem;

    .page-title__wrap {
      margin-top: 5.4rem;
    }

    /* services start */
    .services_title__wrap {
      margin-top: 1.4rem;
    }
    .services_title__wrap .cases-gallery__title {
      font-size: 2.5rem;
    }
    .services_description_wrap {
      margin-top: 1.5rem;
    }
    .page-content__actions_wrap {
      margin-top: 2rem;
    }
    .page-content__btn {
      padding: 0.9rem 1.75rem;
    }
    .page-services {
      margin-top: 5.25rem;
    }
    .page-services__container {
      max-width: 1320px;
    }
    .services-gallery__wrap {
      padding: 0 1.5rem;
    }
    .services-gallery {
      margin-top: 8.75rem;
    }
    .gallery-services__wrapper {
      margin-left: -21%;
    }
    /* services end */
    .page-content__cases_wrap {
      margin-top: 11rem;
    }
  }

  /* 1441px */
  @media only screen and (min-width: 90.063rem) {
    padding-top: 4.724rem;

    /* 1450px services start */
    .page-content__thumbnail_wrap {
      height: 37rem;
    }
    .page-services__container {
      max-width: 87.5rem;
    }
    .services-gallery {
      margin-top: 10.7rem;
    }
    .gallery-services__wrapper {
      margin-left: -21%;
    }
    .gallery-services__slide {
      padding: 1.5rem 0;
    }
    .services-gallery__image_wrap {
      height: 19rem;
      border-radius: 1.5rem;
    }
    .services-gallery__title {
      margin-top: 1.5rem;
      margin-bottom: 1rem;
    }
    .services-gallery__text_wrap {}
    .services-gallery__text {}
    .services-gallery__actions {
      padding-top: 1.6rem;
    }
    .services-gallery__btn {
      width: auto;
      padding: 0.9rem 1.5rem;
    }
    .page-content__clients_wrap {
      padding: 0 1rem 4.5rem;
    }
    /* 1450px services end */
  }
`;
