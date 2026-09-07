import styled from 'styled-components';

export const SecondaryComponent = styled('div')`
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
  /* cases */
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

  .page-cases .cases-gallery, .page-cases .cases-gallery__wrap {
    cursor: pointer;
  }

  .page-content__left {
    padding: 0;
  }

  .page-content__wrap {
    padding: 2rem 0.75rem 0.75rem;
  }

  .breadcrumbs {
    display: flex;
    gap: 0.25rem;
    align-items: center;
  }

  .page-content__title_wrap {
    margin-top: 0.5rem;
  }

  .page-content__subtitle_wrap {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .page-content__subtitle_wrap:before {
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
  }

  .page-content__subtitle {
    color: var(--secondary-transparent);
  }

  .page-content__goal_wrap {
    margin-top: 1rem;
  }

  .page-content__goal_wrap p {
    margin-top: 0.75rem;
    font-size: var(--size-body, 17px);
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    color: var(--secondary-transparent-bold, #4e535b);
  }

  .page-content__goal {
    margin-top: 1rem;
    color: var(--secondary-transparent-bold, #4e535b);
  }

  .page-content__results_wrap {
    margin-top: 1.25rem;
  }

  .page-content__results {
    padding: 0;
    margin: 1rem 0 0 0;
    color: var(--secondary-transparent-bold, #4e535b);
    list-style: none;
  }

  .page-content__results li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 0.7rem;
  }

  .page-content__results li:before {
    content: '';
    display: block;
    width: 0.45rem;
    height: 0.45rem;
    min-width: 0.45rem;
    min-height: 0.45rem;
    margin-top: 0.5rem;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSI3IiB2aWV3Qm94PSIwIDAgNiA3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8Y2lyY2xlIGN4PSIzIiBjeT0iMy41IiByPSIzIiBmaWxsPSIjMzc3M0UwIi8+Cjwvc3ZnPgo=);
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: 0.5rem;
  }

  .page-content__actions_wrap {
    margin-top: 1.5rem;
  }

  .page-content__btn {
    width: 100%;
  }

  .page-content__right {
    min-height: calc(100vh - 5.35rem);
    padding: 0;
  }

  .page-content__scrolled_wrap {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
  }

  .page-content__scrolled {
    width: 100%;
    height: 100%;
    overflow: hidden;
    /*overflow-y: scroll;*/
  }

  .page-content__thumbnail_container {
    display: block;
    position: relative;
    padding: 0 0.75rem 0.75rem;
    margin-top: 3.5rem;
    width: 100%;
    height: auto;
  }

  .page-content__thumbnail_wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 0.75rem;
    height: 14.35rem;
    width: 100%;
  }

  .page-content__thumbnail {
    display: block;
    width: 100%;
    height: auto;
  }

  .page-content__publication_wrap {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content:space-between;
    padding: 0 0.5rem 1.6rem;
  }

  .page-content__publication {
    width: 100%;
    padding: 0 0.5rem 0.5rem;
    position: relative;
  }

  .page-content__publication_img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 0.75rem;
  }

  .page-content__text_wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.25rem 0;
    border-top: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
  }

  .page-content__text {
    text-align: center;
    color: var(--secondary, #020915);
    width: 78%;
  }

  .page-content__reels_wrap {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: center;
    padding: 0.5rem;
  }

  .page-content__reels {
    width: calc(100% / 2);
    padding: 0 0.5rem 1rem;
    position: relative;
  }

  .page-content__reels_img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 1.5rem;
  }

  .page-content__clients_wrap {
    display: block;
    position: relative;
    width: 100%;
    height: auto;
    padding: 0 1rem 3.5rem;
    margin-top: 2.15rem;
    border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
  }

  .page-content__clients_wrap .page-content__title_wrap {
    text-align: center;
    margin-bottom: 2rem
  }

  .page-content__actions {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2.25rem;
    margin-right: auto;
    margin-left: auto;
  }

  .page-content__reviews_wrap {
    display: block;
    position: relative;
    width: 100%;
    height: auto;
    padding: 0 1rem 2rem;
    border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
  }

  .page-case__title {
    display: block;
    width: 100%;
    text-align: center;
  }

  .page-content__cases_wrap {
    margin-top: 2rem;
  }

  .page-case__gallery {
    margin-top: 1rem;
  }
  
  /* 404 page start */
  .page-layout__404 {
    padding-bottom: 0;
  }

  .page-404 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
  }

  .page-404__content {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .page-title__404 {
    color: var(--primary);
    font-size: 5.6rem;
  }

  .page-404__container {
    position: relative;
  }

  .page-404__shapes {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    top: 0;
    left: 0;
  }

  .page-404__shape {
    display: none;
    position: absolute;
    height: auto;
  }

  .page-404__shape_1 {
    display: block;
    top: 0;
    left: 51vw;
    width: 3.125rem;
  }

  .page-404__shape_2 {
    display: block;
    top: 12vh;
    left: 8.5vw;
    width: 4.25rem;
  }

  .page-404__shape_3 {
    display: block;
    top: 15.5vh;
    left: 74vw;
    width: 1.25rem;
  }

  .page-404__shape_4 {
    display: block;
    bottom: 21.5vh;
    left: 13.5vw;
    width: 1.875rem;
  }

  .page-404__shape_5 {
    display: block;
    bottom: 9vh;
    right: 22vw;
    width: 5.0629rem;
  }

  .page-404__shape_6 {
    display: block;
    bottom: 0;
    left: 21.5vw;
    width: 3.75rem;
  }

  .page-404__shape_7 {
    display: block;
    bottom: 0;
    right: 0;
    width: 1.5629rem;
  }
  /* 404 page end */

  /* default page start */
  .page__default-content {
    display: block;
    position: relative;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .page__default-content h1 {
    font-size: var(--h2, 30px);
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    margin-top: 1rem;
    margin-bottom: 0.75rem;
    text-align: center;
  }

  .page__default-content h2 {
    font-size: var(--h2, 30px);
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    margin-top: 1rem;
    margin-bottom: 1.75rem;
    text-align: center;
  }

  .page__default-content h3 {
    font-size: var(--h4, 22px);
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 1rem;
    margin-bottom: 0.75rem;
  }

  .page__default-content p {
    color: var(--secondary-transparent);
    font-size: var(--size-body, 17px);
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }

  .page__default-content p.has-text-align-right {
    text-align: right;
  }

  .page__default-content p br {
    content: '';
    display: block;
    margin-top: 0.75rem;
  }

  .page__default-content p + p {
    margin-top: 0.75rem;
  }

  .page__default-content ul {
    margin: 0.5rem 0 1rem 0;
    padding: 0 0 0 1rem;
  }

  .page__default-content ul li {
    color: var(--secondary-transparent);
    font-size: var(--size-body, 17px);
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin-top: 0.75rem;
  }

  .page__default-content ul li::marker {
    color: var(--primary);
  }

  .page__default-content a {
    color: var(--secondary-transparent);
    font-size: var(--size-body, 17px);
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  /* default page end */

  /* 576px */
  @media only screen and (min-width: 36rem) {
    .page-content__resource {
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

    /* cases page start */
    .page-cases__container {
      max-width: 720px;
      margin-right: auto;
      margin-left: auto;
    }
    .page-cases .cases-gallery__wrap {
      padding: 0 1rem;
    }
    .gallery-cases__slide:nth-child(2) {
      border-top: 0;
    }
    .page-cases__line:last-child {
      border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
    .page-cases__item {
      border-right: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
    .page-cases__item:first-child {
      border-left: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
    /* cases page end */
  }

  /* 992px */
  @media only screen and (min-width: 62rem) {

    padding-top: 4.35rem;
    padding-bottom: 9.5rem;

    .page-title__wrap {
      margin-top: 4.5rem;
    }
    /* cases page start */
    .page-cases {
      margin-top: 4.5rem;
    }
    .page-cases__container {
      max-width: 960px;
    }
    .page-content__wrap {
      padding: 1.25rem;
    }
    .page-content {
      border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
    .page-content__title_wrap {
      margin-top: 1.5rem;
    }
    .page-content__goal_wrap {
      margin-top: 1.5rem;
    }
    .page-content__goal_wrap p {
      font-size: 0.9rem;
    }
    .page-content__results {
      margin: 0.75rem 0 0 0;
    }
    .page-content__results li {
      margin-bottom: 0.5rem;
    }
    .page-content__subtitle_wrap:before {
      margin-right: 0.35rem;
    }
    .page-content__scrolled {
      /*position: absolute;*/
    }
    .page-content__thumbnail_container {
      padding: 0 1.25rem 1.25rem;
      margin-top: 1.25rem;
    }
    .page-content__thumbnail_wrap {
      border-radius: 1.25rem;
      height: 30rem;
    }
    .page-content__publication_wrap {
      padding: 0 0.625rem 1.6rem;
    }
    .page-content__publication {
      width: 50%;
      padding: 0 0.625rem 0.625rem;
    }
    .page-content__publication_img {
      border-radius: 1.25rem;
    }
    .page-content__text {
      width: 78%;
    }
    .page-content__reels {
      width: calc(100% / 3);
    }
    .page-case__gallery {
      margin-top: 2rem;
    }
    .page-content__cases_wrap {
      margin-top: 6rem;
    }
    /* cases page end */
    
    /* services page start */
    .page-content__actions_wrap {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
    .page-content__btn_wrap {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .page-content__btn {
      width: auto;
      padding: 0.75rem 1.25rem;
    }
    .page-content__clients_wrap {
      border-bottom: 0;
    }
    /* services page end */
    
    /* 404 page start */
    .page-404__shape_1 {
      top: 5.5vh;
      left: 0;
      width: 2.4rem;
    }

    .page-404__shape_2 {
      top: 12vh;
      left: 14.5vw;
      width: 3.7rem;
    }

    .page-404__shape_3 {
      top: 5vh;
      left: 31vw;
      width: 1rem;
    }

    .page-404__shape_7 {
      top: 32.5vh;
      right: 0;
      width: 1.2rem;
    }

    .page-404__shape_8 {
      display: block;
      top: 14.5vh;
      left: 35vw;
      width: 2rem;
    }

    .page-404__shape_9 {
      display: block;
      top: 3.5vh;
      left: 48vw;
      width: 2.8rem;
    }

    .page-404__shape_10 {
      display: block;
      top: 26.5vh;
      right: 34vw;
      width: 1rem;
    }

    .page-404__shape_11 {
      display: block;
      top: 8vh;
      right: 24vw;
      width: 1.8rem;
    }

    .page-404__shape_12 {
      display: block;
      top: 22vh;
      right: 17vw;
      width: 3.2rem;
    }

    .page-404__shape_13 {
      display: block;
      top: 4vh;
      right: 0;
      width: 9.4rem;
    }

    .page-404__shape_14 {
      display: block;
      top: 32.5vh;
      left: 0.5vw;
      width: 5.25rem;
    }

    .page-404__shape_15 {
      display: block;
      top: 32.5vh;
      left: 17vw;
      width: 1.4rem;
    }

    .page-404__shape_16 {
      display: block;
      top: 37vh;
      right: 2vw;
      width: 1rem;
    }

    .page-404__shape_17 {
      display: block;
      bottom: 31.5vh;
      right: 12vw;
      width: 5.5rem;
    }

    .page-404__shape_18 {
      display: block;
      bottom: 23vh;
      left: 2vw;
      width: 2.8rem;
    }

    .page-404__shape_19 {
      display: block;
      bottom: 15.5vh;
      left: 13vw;
      width: 9rem;
    }

    .page-404__shape_20 {
      display: block;
      bottom: 15vh;
      left: 42.5vw;
      width: 2.8rem;
    }

    .page-404__shape_4 {
      bottom: 21.5vh;
      left: auto;
      right: 32vw;
      width: 2.4rem;
    }

    .page-404__shape_5 {
      bottom: 19vh;
      right: 0;
      width: 3.8rem;
    }

    .page-404__shape_6 {
      bottom: 20vh;
      left: auto;
      right: 30vw;
      width: 1rem;
    }
    /* 404 page end */
  }

  /* 1200px real */
  @media only screen and (min-width: 74.9375rem) {
    padding-top: 4.25rem;
    
    /* cases page start */
    .page-content__left {
      border-left: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
    .page-content__right {
      border-left: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
      border-right: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
    .page-cases__container {
      max-width: 1140px;
    }
    .page-content__cases_wrap {
      margin-top: 9.5rem;
    }
    .page-content__thumbnail_wrap {
      height: 30rem;
    }
    /* cases end */
  }

  /* 1400px real */
  @media only screen and (min-width: 87.5rem) {
    padding-top: 4.15rem;
    padding-bottom: 11.15rem;
    
    .page-title__wrap {
      margin-top: 5.4rem;
    }
    /* cases page start */
    .page-cases {
      margin-top: 5.25rem;
    }
    .page-cases__container {
      max-width: 1320px;
    }
    .page-cases .cases-gallery__wrap {
      padding: 0 1.5rem;
    }
    .page-content__wrap {
      padding: 1.5rem;
    }
    .page-content__title_wrap {
      margin-top: 2rem;
    }
    .page-content__goal_wrap {
      margin-top: 2rem;
    }
    .page-content__results {
      margin: 1rem 0 0 0;
    }
    .page-content__results li {
      margin-bottom: 0.75rem;
    }
    
    .page-content__text_wrap {
      padding: 3.5rem 0;
    }
    .page-content__reels_wrap {
      padding: 1.5rem 0.75rem;
    }
    .page-content__reels {
      padding: 0 0.75rem 1rem;
    }
    .page-content__cases_wrap {
      margin-top: 11rem;
    }
    /* cases end */
  }

  /* 1441px */
  @media only screen and (min-width: 90.063rem) {
    padding-top: 4.724rem;
    
    /* page cases start */
    .page-cases__container {
      max-width: 87.5rem;
    }
    /* page cases end */

    .page-content__goal_wrap p {
      font-size: 1.06rem;
    }
  }
`;
