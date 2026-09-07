import styled from 'styled-components';

export const BlogsComponent = styled('div')`
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
  
  /* blog start */
  .page-blog {
    margin-top: 2rem;
  }

  .page-blog__container {
    padding-right: 0;
    padding-left: 0;
    margin-right: 0;
    margin-left: 0;
    max-width: 100%;
  }

  .page-blog__row {
    margin-right: 0;
    margin-left: 0;
  }

  .page-blog__line:first-child {
    border-top: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
  }

  .page-blog__item:last-child {
    border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
  }

  .page-blog__tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.25rem;
    margin-top: 1.75rem;
    margin-bottom: 3rem;
  }

  .page-blog__tag {
    border-radius: 0.5rem;
    border: 1px solid var(--stroke, #e7e9ef);
    padding: 0.3rem 0.85rem;
    animation-name: none;
    color: var(--primary);
  }

  .page-blog__tag:focus {
    animation-name: clickBlogTagsAnimation;
    animation-duration: 250ms;
    animation-timing-function: ease-in-out;
  }

  .page-blog__tag.-active,
  .page-blog__tag:active {
    background-color: var(--primary);
    color: #fff;
  }

  .page-blog__tag span {
    color: inherit;
  }

  .page-blog__actions {
    display: flex;
    justify-content: center;
    margin-top: 2.1rem
  }

  .page-blog__btn {
    padding: 0.85rem 1.75rem;
  }

  .page-blog__btn .value {
    display: inline-block;
  }

  .page-blog__btn .loader {
    display: none;
  }

  .page-blog__actions.-loading .page-blog__btn {
    padding: 0.25rem 1.75rem;
  }

  .page-blog__actions.-loading .page-blog__btn .value {
    display: none;
  }

  .page-blog__actions.-loading .page-blog__btn .loader {
    display: block;
    width: 2.58rem;
  }
  /* blog end */

  /* blog start */
  .blog-card__wrap {
    border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
  }

  .blog-card__wrap:last-child {
    border-bottom: 0;
  }

  .blog-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: calc(var(--bs-gutter-x)* .5) 0;
  }

  .blog-image__wrap {
    overflow: hidden;
    border-radius: 1.25rem;
  }

  .blog-image {
    width: 100%;
    height: auto;
  }
  .blog-name__wrap {
    margin-top: 1rem;
  }
  .blog-name {
    font-weight: 500;
    line-height: 1.2;
  }

  .blog-details {
    margin-top: auto;
  }

  .blog-details__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin-top: 0.25rem;
    margin-bottom: 1rem;
  }

  .blog-details__tag {
    border-radius: 0.5rem;
    border: 1px solid var(--stroke, #e7e9ef);
    color: var(--primary);
    padding: 0.35rem 1rem;
  }

  .blog-details__date {
    font-size: 14px;
  }
  /* blog end */

  /* 576px */
  @media only screen and (min-width: 36rem) {
    .blog-card {
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

    /* blog page start */
    .page-blog__line {
      border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
    .page-blog__container {
      max-width: 720px;
      margin-right: auto;
      margin-left: auto;
    }
    .page-blog__item {
      border-right: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
      border-top: 0;
    }

    .page-blog__item:first-child {
      border-left: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }

    .page-blog__item:nth-child(3) {
      border-left: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
      border-bottom: 0;
    }
    .page-blog__item:last-child {
      border-bottom: 0;
    }
    .blog-content__left {
      max-width: 720px;
    }
    .blog-content__thumbnail_container {
      max-width: 720px;
    }
    .blog-content__thumbnail_wrap {
      height: 28.5rem;
    }
    .blog-content__title_wrap {
      max-width: 720px;
    }
    .blog-content__text_wrap {
      max-width: 720px;
    }
    .blog-content__quote {
      max-width: 720px;
    }
    .blog-content__list_wrap {
      max-width: 720px;
    }
    .blog-content__subtitle {
      max-width: 720px;
    }
    .page-content__resource {
      max-width: 720px;
    }
    /* blog page start */
    .blog-card {
      max-width: 720px;
    }
    .blog-card__wrap {
      border-right: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
    .blog-card__wrap:first-child {
      border-left: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
  }

  /* 992px */
  @media only screen and (min-width: 62rem) {
    padding-top: 4.35rem;
    padding-bottom: 9.5rem;

    .page-title__wrap {
      margin-top: 4.5rem;
    }
    
    /* blog start */
    .page-blog {
      margin-top: 3.75rem;
    }
    .page-blog__container {
      max-width: 960px;
    }
    .page-blog__item {
      border-top: 0;
      border-bottom: 0;
    }
    .page-blog__tags {
      margin-top: 1.75rem;
      margin-bottom: 1rem;
    }
    /* blog end */
    /* 992px blog start */
    .blog-card {
      max-width: 100%;
    }
    .blog-image__wrap {
      border-radius: 1rem;
    }
    .blog-name__wrap {
      margin-top: 1.35rem;
    }
    .blog-details__tags {
      margin-top: 0.5rem;
      margin-bottom: 1rem;
    }
    .blog-details__tag {
      padding: 0.3rem 0.85rem;
    }
    .blog-details__date {
      font-size: 12px;
    }
    /* 992px blog end */
  }

  /* 1200px real */
  @media only screen and (min-width: 74.9375rem) {
    padding-top: 4.25rem;

    /* blog page */
    .page-blog__container {
      max-width: 1140px;
    }
    .page-blog__actions {
      margin-top: 2.5rem;
    }
    .page-blog__btn {
      padding: 0.9rem 2rem;
    }
    /* blog page */
    .blog-card {
      padding: 1.3rem 0.5rem 1rem;
    }
    .blog-card__wrap {
      border-bottom: 0;
    }
    .blog-card__wrap:nth-child(3) {
      border-left: 0;
    }
  }

  /* 1400px real */
  @media only screen and (min-width: 87.5rem) {
    padding-top: 4.15rem;
    padding-bottom: 11.15rem;

    .page-title__wrap {
      margin-top: 5.4rem;
    }

    /* blog pare start */
    .page-blog {
      margin-top: 4.4rem;
    }
    .page-blog__container {
      max-width: 1320px;
    }
    .page-blog__tags {
      margin-top: 2.1rem;
      margin-bottom: 1rem;
    }
    .page-blog__tag {
      padding: 0.25rem 0.8rem;
    }
    /* blog page end */
    .blog-details__tags {
      margin-bottom: 1rem;
    }
    .blog-details__tag {
      padding: 0.25rem 0.8rem;
    }
  }

  /* 1441px */
  @media only screen and (min-width: 90.063rem) {
    padding-top: 4.724rem;

    /* page blog */
    .page-blog__container {
      max-width: 87.5rem;
    }
    .page-blog__tags {
      margin-bottom: 1.25rem;
    }
    .page-blog__tag {
      padding: 0.35rem 1rem;
    }
    /* page blog */
    /* 1441px blog start */
    .blog-container__wrap {
      margin-top: 1.6rem;
    }
    .blog-card {
      padding: 1.5rem 0.65rem;
    }
    .blog-name__wrap {
      margin-top: 1.55rem;
    }
    .blog-details__tags {
      margin-bottom: 1.25rem;
    }
    .blog-details__tag {
      padding: 0.35rem 1rem;
    }
    /* 1450px blog end */
  }
`;
