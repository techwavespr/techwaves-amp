import styled from 'styled-components';

export const ServiceComponent = styled('div')`
  display: flex;
  flex-direction: column;
  padding-top: 4.5rem;
  padding-bottom: 2.2rem;

  .page-content__left {
    padding: 0;
  }

  .page-content__right {
    min-height: calc(100vh - 5.35rem);
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

  .page-title__wrap {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    margin-top: 1.25rem;
  }

  .cases-gallery__title {
    text-align: center;
    font-size: 1.87rem;
    margin-bottom: 0;
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

  .page-content__subtitle {
    color: var(--secondary-transparent);
  }

  .page-content__actions_wrap {
    margin-top: 1.5rem;
  }

  .page-content__btn {
    width: 100%;
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

  .page-content__title_wrap {
    margin-top: 0.5rem;
  }

  .page-content__clients_wrap .page-content__title_wrap {
    text-align: center;
    margin-bottom: 2rem
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

  /* pr wire page start */
  .page-content__publications_wrap {
    display: block;
    position: relative;
    width: 100%;
    height: auto;
    padding: 0 0 3.5rem;
    margin-top: 0.35rem;
  }

  .page-content__publications_wrap .page-content__title_wrap {
    margin-bottom: 1.25rem;
    padding: 0 1rem;
    margin-top: 0.35rem;
  }

  .publications-gallery__buttons_wrap {
    padding: 0 1rem;
  }

  .publications-gallery__buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin-top: 0.25rem;
    margin-bottom: 1rem;
  }

  .publications-gallery__button {
    border-radius: 0.5rem;
    border: 1px solid var(--stroke, #e7e9ef);
    color: var(--primary);
    padding: 0.35rem 1rem;
    background-color: #FFFFFF;
    transition: all 0.35s;
    font-size: var(--size-button, 17px);
  }

  .publications-gallery__button.-active {
    background: var(--primary);
    color: #FFFFFF;
    border-color: var(--primary);

    transition-delay: 0.2s;
    animation: filter_btn 0.6s forwards;
    background: radial-gradient(circle, var(--primary) 0.2rem, transparent 0.3rem) 6rem 6rem/1rem 1rem, radial-gradient(circle, var(--primary) 0.2rem, transparent 0.3rem) 0 0/1rem 1rem;
  }

  .publications-gallery__grid {
    display: flex;
    flex-wrap: wrap;
  }

  .publications-gallery__item {
    width: 50%;
    height: 14.15rem;
    border: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    padding: 1.25rem 1rem;
    background: #fff;
    overflow: hidden;
    transition: opacity 0.45s cubic-bezier(0.4, 0, 0.2, 1) 0.1s,
                transform 0.45s cubic-bezier(0.4, 0, 0.2, 1) 0.1s,
                width 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                padding 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                border-width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .publications-gallery__item.-filtered-out {
    width: 0;
    height: 0;
    padding: 0;
    border-width: 0;
    opacity: 0;
    transform: scale(0.01);
    overflow: hidden;
    pointer-events: none;
    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                width 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0.15s,
                height 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0.15s,
                padding 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0.15s,
                border-width 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0.15s;
  }

  .publications-gallery__item.-hidden-mobile {
    display: none;
  }

  .publications-gallery__item_link {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 1rem
  }

  .publications-gallery__image_wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-grow: 1;
    width: 100%
  }

  .publications-gallery__image {
    height: auto;
    width: auto;
    max-width: 100%;
    max-height: 100%;
  }

  .publications-gallery__image img {
    object-fit: contain;
  }

  .publications-gallery__item.-hidden {
    display: none;
  }

  .publications-gallery__title_wrap {
    width: 100%
  }

  .publications-gallery__actions {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.25rem 1rem 0;
    margin-right: auto;
    margin-left: auto;
  }

  .publications-gallery__load_more {
    width: 100%;
  }

  .publications-gallery__actions.-hidden {
    display: none;
  }

  .publications-gallery__load_more.-hidden {
    display: none;
  }

  .page-content__features_wrap .page-content__title_wrap {
    margin: 1rem;
  }

  .page-content__features {
    border-top: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
  }

  .page-content__packages_wrap {
    margin-top: 2.15rem;
    border-top: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
    padding-top: 2rem;
  }

  .page-content__packages_container {
    padding-right: 0;
    padding-left: 0;
    margin-right: 0;
    margin-left: 0;
    max-width: 100%;
  }

  .page-content__packages_container .row {
    flex-direction: column;
    margin-right: 0;
    margin-left: 0;
  }

  .page-content__packages_wrap .page-content__title_wrap {
    margin: 0 1rem 1rem;
  }

  .packages-item__wrap {
    border-top: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
  }

  .packages-item {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 1.25rem 0;
  }

  .packages-item__heading {
    position: relative;
    border-radius: 0.75rem;
    padding: 1rem;
  }

  .packages-item__heading .ribbon {
    font-size: 0.87rem;

    position: absolute;
    top: 0;
    right: 0;
    line-height: 1.8;
    padding-inline: 2rem;
    clip-path: polygon(
      100% calc(100%),100% 100%,calc(100%) calc(100%),var(--f) calc(100%), 0 100%,0 calc(100%),999px calc(100% - 999px),calc(100% - 999px) calc(100% - 999px));
    transform: translate(calc((1 - cos(45deg))*100%), -100%) rotate(45deg);
    transform-origin: 0% 100%;
    background-color: #FFFFFF;
  }

  .packages-item__price_wrap {
    margin-top: 0.5rem;
  }

  .packages-item__title {
    color: rgba(255, 255, 255, 0.5);
  }

  .packages-item__subtitle_wrap {
    margin-top: 0.25rem;
  }

  .packages-item__subtitle {
    color: rgba(255, 255, 255, 0.5);
  }

  .packages-item__fakeprice {
    color: rgba(255, 255, 255, 0.5);
    text-decoration-line: line-through;
    margin-left: 5px;
  }

  .packages-item__price {
    color: #FFFFFF;
  }

  .packages-item__description__wrap {
    margin-top: 0.25rem;
  }

  .packages-item__options {
    padding: 0;
    margin: 1rem 0 0 0;
    color: var(--secondary-transparent-bold, #4e535b);
    list-style: none;
  }

  .packages-item__options li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 0.85rem;
  }

  .packages-item__options li:before {
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

  .packages-item__actions {
    margin-top: auto;
    padding-top: 0.5rem;
  }

  .packages-item__submit {
    width: 100%;
  }
  /* pr wire page end */

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

  .rg-car {
    margin: 0 auto;
  }
  
  .rg-nav {
    margin: 0 auto;
  }

  .calendly-inline-widget {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 320px;
    height: 1100px;
  }

  /* 576px */
  @media only screen and (min-width: 36rem) {
  }
  
  /* 768px */
  @media only screen and (min-width: 48rem) {
    padding-bottom: 6.5rem;
  }

  /* 992px */
  @media only screen and (min-width: 62rem) {
    padding-top: 4.35rem;
    padding-bottom: 9.5rem;

    .page-content {
      border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }

    .page-content__wrap {
      padding: 1.25rem;
    }

    .page-title__wrap {
      margin-top: 4.5rem;
    }

    .page-content__goal_wrap {
      margin-top: 1.5rem;
    }
    
    .page-content__goal_wrap p {
      font-size: 0.9rem;
    }

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

    .page-content__title_wrap {
      margin-top: 1.5rem;
    }

    .page-content__clients_wrap {
      border-bottom: 0;
    }
    /* pr wire page start */
    .page-content__publications_wrap {
      padding: 0 0 4.25rem;
    }
    .page-content__publications_wrap .page-content__title_wrap {
      margin-bottom: 2.25rem;
      margin-top: 4rem;
    }
    .publications-gallery__button {
      padding: 0.3rem 0.85rem;
      font-size: 1rem;
    }
    .publications-gallery__grid_wrap {
      margin-top: 2.35rem;
    }
    .publications-gallery__item {
      width: 25%;
      height: 14.5rem;
      padding: 1.25rem;
    }
    .publications-gallery__item.-hidden-mobile {
      display: block;
    }
    .publications-gallery__actions {
      justify-content: flex-start;
      padding: 2.75rem 1rem 0;
    }
    .publications-gallery__load_more {
      width: auto;
      padding: 0.9rem 1.9rem;
      font-size: 1rem;
    }
    .page-content__features {
      margin-top: 2rem;
    }
    .page-content__packages_wrap {
      margin-top: 3.25rem;
    }
    .page-content__packages {
      margin-top: 2rem;
    }
    .page-content__packages_container {
      max-width: 960px;
      padding-right: calc(var(--bs-gutter-x) * .5);
      padding-left: calc(var(--bs-gutter-x) * .5);
      margin-right: auto;
      margin-left: auto;
    }
    .page-content__packages_container .row {
      flex-direction: row;
      margin-right: calc(-.5 * var(--bs-gutter-x));
      margin-left: calc(-.5 * var(--bs-gutter-x));
    }
    .page-content__packages .packages-item__wrap:nth-child(2n) {
      border-left: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
    .packages-item__heading {
      border-radius: 1rem;
      padding: 1.5rem;
    }
    .packages-item__subtitle_wrap {
      margin-top: 0.75rem;
    }
    .packages-item__options {
      margin: 1.3rem 0 0 0;
    }
    .packages-item__options li {
      margin-bottom: 1.1rem;
    }
    .packages-item__actions {
      padding-top: 0.2rem;
    }
    .packages-item__submit {
      padding: 1rem 1.25rem;
    }
    .packages-item__fakeprice {
      font-size: 1.4rem;
      margin-left: 0.75rem;
    }
    /* pr wire post end */
  }

  /* 1200px real */
  @media only screen and (min-width: 74.9375rem) {
    padding-top: 4.25rem;

    .page-content__left {
      border-left: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
    .page-content__right {
      border-left: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
      border-right: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }

    .services_title__wrap {
      margin-top: 0.75rem;
    }

    .page-content__thumbnail_wrap {
      height: 30rem;
    }

    /* pr wire page start */
    .page-content__publications_wrap {
      padding: 0 0 2.5rem;
    }
    .page-content__publications_wrap .page-content__title_wrap {
      margin-bottom: 1.7rem;
      margin-top: 2.5rem;
    }
    .publications-gallery__grid_wrap {
      margin-top: 2rem;
    }
    .publications-gallery__item {
      height: 11.5rem;
      padding: 1rem;
    }
    .publications-gallery__actions {
      padding: 1.75rem 1rem 0;
    }
    .publications-gallery__load_more {
      padding: 0.75rem 1.75rem;
    }
    .page-content__features_wrap .page-content__title_wrap {
      margin-top: 0.5rem;
    }
    .page-content__features_wrap .feature-item__wrap {
      border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
    }
    .page-content__packages_wrap {
      margin-top: 2.75rem;
    }
    .page-content__packages {
      margin-top: 1.5rem;
    }
    .packages-item__heading {
      padding: 0.75rem 1.15rem;
    }
    .packages-item__price_wrap {
      margin-top: 0.25rem;
    }
    .packages-item__subtitle_wrap {
      margin-top: 0.5rem;
    }
    .packages-item__options {
      margin: 0.75rem 0 0 0;
    }
    .packages-item__options li {
      margin-bottom: 0.55rem;
    }
    .packages-item__actions {
      padding-top: 0.5rem;
    }
    .packages-item__submit {
      padding: 0.65rem 1.75rem;
    }
    /* pr wire page end */
  }

  /* 1400px real */
  @media only screen and (min-width: 87.5rem) {
    padding-top: 4.15rem;
    padding-bottom: 11.15rem;

    .page-content__wrap {
      padding: 1.5rem;
    }

    .page-title__wrap {
      margin-top: 5.4rem;
    }

    .services_title__wrap {
      margin-top: 1.4rem;
    }

    .cases-gallery__title {
      font-size: 2.5rem;
    }

    .page-content__goal_wrap {
      margin-top: 2rem;
    }
    .page-content__thumbnail_container {
      padding: 0 1.5rem 1.5rem;
      margin-top: 1.5rem;
    }
    .page-content__thumbnail_wrap {
      height: 35rem;
    }
    .page-content__title_wrap {
      margin-top: 2rem;
    }
    .page-content__publication_wrap {
      padding: 0 0.75rem 1.6rem;
    }
    .page-content__publications_wrap .page-content__title_wrap {
      margin-bottom: 2rem;
      margin-top: 3rem;
      padding: 0 1.5rem;
    }
    .page-content__publication {
      padding: 0 0.75rem 0.75rem;
    }
    /* pr wire page start */
    .publications-gallery__buttons_wrap {
      padding: 0 1.5rem;
    }
    .publications-gallery__item {
      height: 13.5rem;
      padding: 1.25rem;
    }
    .publications-gallery__actions {
      padding: 2rem 1.5rem 0;
    }
    .publications-gallery__button {
      font-size: 0.9rem;
    }
    .page-content__publications_wrap {
      padding: 0 0 4.5rem;
    }
    .page-content__features_wrap .page-content__title_wrap {
      padding: 0 0.5rem;
    }
    .page-content__features .feature-item__wrap:nth-child(3) {
      border-bottom: 0;
    }
    .page-content__features .feature-item__wrap:last-child {
      border-bottom: 0;
    }
    .page-content__packages_wrap {
      margin-top: 2.75rem;
    }
    .page-content__packages_wrap .page-content__title_wrap {
      margin: 0 1.5rem;
    }
    .page-content__packages {
      margin-top: 1.75rem;
    }
    .packages-item {
      padding: 1.25rem 0.5rem;
    }
    .packages-item__heading {
      padding: 1.25rem;
    }
    .packages-item__price_wrap {
      margin-top: 0.5rem;
    }
    .packages-item__fakeprice {
      margin-left: 0.5rem;
    }
    .packages-item__subtitle_wrap {
      margin-top: 0.75rem;
    }
    .packages-item__description__wrap {
      margin-top: 1.25rem;
    }
    .packages-item__options {
      margin: 0;
    }
    .packages-item__options li {
      margin-bottom: 0.9rem;
    }
    .packages-item__options li:before {
      margin-right: 0.25rem;
    }
    .packages-item__actions {
      padding-top: 0.25rem;
    }
    .packages-item__submit {
      padding: 0.8rem 1.75rem;
    }
    /* pr wire page end */
  }

  /* 1441px */
  @media only screen and (min-width: 90.063rem) {
    padding-top: 4.724rem;

    .page-content__goal_wrap p {
      font-size: 1.06rem;
    }

    /* 1450px pr wire page start */
    .page-content__publications_wrap .page-content__title_wrap {
      margin-bottom: 2.25rem;
    }
    .publications-gallery__grid_wrap {
      margin-top: 2.15rem;
    }
    .publications-gallery__item {
      height: 14.25rem;
    }
    /* 1450px pr wire page end */
  }
`;
