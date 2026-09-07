import styled from 'styled-components';

export const BlogComponent = styled('div')`
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

  .breadcrumbs {
    display: flex;
    gap: 0.25rem;
    align-items: center;
  }

  .cases-gallery__title {
    line-height: 120%;
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

  /* blog post start */
  .blog-content__container {
    padding-right: 0;
    padding-left: 0;
    margin-right: 0;
    margin-left: 0;
    max-width: 100%;
  }
  .blog-content__row {
    flex-direction: column;
    margin-right: 0;
    margin-left: 0;
  }
  .blog-content__right {
    padding: 0;
  }
  .blog-content__cont {
    padding: 2rem 0 1rem;
  }
  .blog_title__wrap {
    align-items: start;
    margin-top: 0.75rem;
  }
  .page-content__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin-top: 0.4rem;
    margin-bottom: 1.25rem;
  }
  .page-content__tag {
    border-radius: 0.5rem;
    border: 1px solid var(--stroke, #e7e9ef);
    color: var(--primary);
    padding: 0.35rem 1rem;
  }
  .page-content__date {
    font-size: 14px;
  }
  .page-content__date_wrap {
    margin-top: 1.25rem;
  }
  .blog-content {
  }
  .blog-content__thumbnail_container {
    display: block;
    position: relative;
    padding: 0 0.75rem 0 0.75rem;
    margin-top: 1rem;
    margin-bottom: 1.75rem;
    width: 100%;
    height: auto;
  }
  .blog-content__thumbnail_wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 0.75rem;
    height: 14.35rem;
    width: 100%;
  }

  .blog-content__thumbnail {
    display: block;
    width: 100%;
    height: auto;
  }
  .blog-content__text_wrap {
    padding: 0 0.75rem;
  }
  .blog-content__title {
    margin-top: 1.25rem;
  }
  .blog-content__text_wrap p {
    margin-top: 0.75rem;
    color: var(--secondary-transparent);
    font-size: var(--size-body, 17px);
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  .blog-content__quote_wrap {
    padding: 1.25rem 0.75rem 0.5rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
    border-top: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
  }
  .blog-content__quote_title {
    display: block;
    margin-bottom: 1rem;
    font-size: 0.94rem;
    color: var(--secondary-transparent);
  }
  .blog-content__quote_text {
    color: var(--primary);
  }
  .blog-content__subtitle {
    padding: 0 0.75rem;
    margin-top: 1rem;
  }
  .blog-content__list {
    margin: 0;
    padding: 0 0.75rem 0 0.9rem;
  }
  .blog-content__list_item {
    margin-top: 0.75rem;
  }
  .blog-content__list_item::marker {
    color: var(--primary);
  }
  .page-content__resources_wrap {
    margin-top: 1rem;
  }
  .page-content__resources {
    display: flex;
    flex-direction: column;
    border-top: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    margin-top: 1rem;
  }
  .page-content__resources_col {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .page-content__resources_col:first-child {
    border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
  }

  .page-content__resource_container {
    display: flex;
    width: 100%;
  }

  .page-content__resource_container:first-child {
    border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
  }

  .page-content__resource {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: 0.9rem 0.75rem;
  }

  .page-content__resource_name {
    color: var(--primary);
    margin-bottom: 0;
  }

  .page-content__resource_arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    border: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
    padding: 0.3rem;
  }
  .page-blog-container__wrap {
  }
  /* blog post end */

  .page-content__cases_wrap {
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

  .page-case__title {
    text-align: center;
  }
  
  /* 576px */
  @media only screen and (min-width: 36rem) {
    .blog-content__left {
      max-width: 540px;
      padding-right: calc(var(--bs-gutter-x)* .5);
      padding-left: calc(var(--bs-gutter-x)* .5);
      margin-right: auto;
      margin-left: auto;
    }

    .blog-content__thumbnail_container {
      max-width: 540px;
      padding-right: calc(var(--bs-gutter-x)* .5);
      padding-left: calc(var(--bs-gutter-x)* .5);
      margin-right: auto;
      margin-left: auto;
    }
    .blog-content__thumbnail_wrap {
      height: 21.35rem;
    }

    .blog-content__title_wrap {
      max-width: 540px;
      padding-right: calc(var(--bs-gutter-x)* .5);
      padding-left: calc(var(--bs-gutter-x)* .5);
      margin-right: auto;
      margin-left: auto;
    }

    .blog-content__text_wrap {
      max-width: 540px;
      padding-right: calc(var(--bs-gutter-x)* .5);
      padding-left: calc(var(--bs-gutter-x)* .5);
      margin-right: auto;
      margin-left: auto;
    }
    .blog-content__quote {
      max-width: 540px;
      padding-right: calc(var(--bs-gutter-x)* .5);
      padding-left: calc(var(--bs-gutter-x)* .5);
      margin-right: auto;
      margin-left: auto;
    }
    .blog-content__list_wrap {
      max-width: 540px;
      padding-right: calc(var(--bs-gutter-x)* .5);
      padding-left: calc(var(--bs-gutter-x)* .5);
      margin-right: auto;
      margin-left: auto;
    }
    .blog-content__list {
      padding: 0 0 0 1.15rem;
    }
    .blog-content__subtitle {
      max-width: 540px;
      padding-right: calc(var(--bs-gutter-x)* .5);
      padding-left: calc(var(--bs-gutter-x)* .5);
      margin-right: auto;
      margin-left: auto;
    }
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

    .blog-card {
      max-width: 720px;
    }
    .blog-card__wrap {
      border-right: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
    .blog-card__wrap:first-child {
      border-left: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }

    .page-blog__line {
      border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
  }

  /* 992px */
  @media only screen and (min-width: 62rem) {
    padding-top: 4.35rem;
    padding-bottom: 9.5rem;

    .page-title__wrap {
      margin-top: 4.5rem;
    }

    .cases-gallery__title {
      margin-top: 1.4rem;
      margin-bottom: 0.75rem;
    }

    .page-content__goal_wrap {
      margin-top: 1.5rem;
    }
    .page-content__goal_wrap p {
      font-size: 0.9rem;
    }

    /* blog post start */
    .blog-content__cont {
      padding: 1.25rem;
    }
    .blog_title__wrap {
      margin-top: 0;
    }
    .blog_title__wrap .cases-gallery__title {
      font-size: 2rem;
    }
    .page-content__tags {
      margin-top: 0;
      margin-bottom: 1.75rem;
    }
    .page-content__tag {
      padding: 0.3rem 0.85rem;
    }
    .page-content__date {
      font-size: 12px;
    }
    .blog-content__thumbnail_wrap {
      border-radius: 1.25rem;
      height: 25.5rem;
    }
    .blog-content__text_wrap {
      max-width: 100%;
      padding: 0 1.25rem 2rem;
      margin-top: 1rem;
    }
    .blog-content__title {
      font-size: 1.5rem;
    }
    .blog-content__quote_wrap {
      max-width: 100%;
      padding: 3rem 1.25rem 2rem;
      margin-top: 3rem;
      margin-bottom: 4.5rem;
    }
    .blog-content__quote_title {
      margin-bottom: 0.75rem;
      font-size: 0.9rem;
    }
    .blog-content__subtitle {
      max-width: 100%;
      padding: 0 1.25rem;
    }
    .blog-content__list {
      padding: 0 0 0 0.8rem;
    }
    .blog-content__list_item {
      margin-top: 0.7rem;
    }
    .page-content__resources {
      border-bottom: 0;
    }
    .page-content__resources_col {
      flex-direction: row;
    }
    .page-content__resource_container {
      flex: 1;
    }
    .page-content__resource_container:last-child {
      border-left: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
    .page-content__resource_container:first-child {
      border-left: 0;
      border-bottom: 0;
    }
    .page-content__resource {
      padding: 1.25rem 1.25rem;
    }
    .page-content__resource_arrow {
      border-radius: 10px;
      padding: 0.5rem;
    }
    .blog-content__container {
      max-width: 960px;
      padding-right: calc(var(--bs-gutter-x)* .5);
      padding-left: calc(var(--bs-gutter-x)* .5);
      margin-right: auto;
      margin-left: auto;
    }
    .blog-content__row {
      flex-direction: row;
      margin-right: calc(-.5* var(--bs-gutter-x));
      margin-left: calc(-.5* var(--bs-gutter-x));
    }
    .blog-content__left {
      max-width: 100%;
      padding: 0;
      border-left: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
    .blog-content__right {
      border-left: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
      border-right: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
    .blog-content__thumbnail_container {
      padding: 0 1.25rem 2.25rem 1.25rem;
      margin-top: 0.5rem;
      max-width: 100%;
      margin-bottom: 0;
    }

    .blog-content__quote {
      max-width: 100%;
      padding: 0;
    }
    .blog-content {
      border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
    .page-content__resource {
      max-width: 100%;
    }
    /* blog post end */

    .page-content__cases_wrap {
      margin-top: 6rem;
    }

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

    /* blog post start */
    .blog-content__container {
      max-width: 1140px;
    }
    .blog_title__wrap {
      margin-top: 0.25rem;
    }
    .blog_title__wrap .cases-gallery__title {
      font-size: 2.25rem;
    }
    .page-content__tags {
      margin-top: 0.5rem;
    }
    .page-content__date_wrap {
      margin-top: 1.5rem;
    }
    .blog-content__thumbnail_container {
      padding: 0 1.25rem 2.5rem 1.25rem;
      margin-top: 1.5rem;
    }
    .blog-content__thumbnail_wrap {
      height: 30.5rem;
    }
    .blog-content__text_wrap {
      margin-top: 1.5rem;
    }
    .blog-content__title {
      font-size: 1.77rem;
    }
    .blog-content__quote_title {
      font-size: 0.96rem;
    }
    .blog-content__quote_wrap {
      padding: 3.25rem 1.25rem 2.5rem;
      margin-bottom: 5rem;
    }
    .blog-content__list_wrap {
      margin-top: 1rem;
    }
    /* blog post end */

    .page-content__cases_wrap {
      margin-top: 9.5rem;
    }

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

    .page-content__goal_wrap {
      margin-top: 2rem;
    }

    /* blog post start */
    .blog-content__container {
      max-width: 1320px
    }
    .blog-content__cont {
      padding: 1.5rem;
    }
    .blog_title__wrap {
      margin-top: 1rem;
    }
    .blog_title__wrap .cases-gallery__title {
      font-size: 2.56rem;
    }
    .page-content__tags {
      margin-top: 0.7rem;
    }
    .page-content__tag {
      padding: 0.25rem 0.8rem;
    }
    .blog-content__thumbnail_container {
      padding: 0 1.5rem 1.5rem;
      margin-top: 1.5rem;
    }
    .blog-content__thumbnail_wrap {
      height: 35rem;
    }
    .blog-content__text_wrap {
      margin-top: 3.25rem;
    }
    .blog-content__title {
      font-size: 2.05rem;
      margin-bottom: 1rem;
    }
    .blog-content__text_wrap p {
      margin-top: 0.75rem;
    }
    /* blog post end */

    .page-content__cases_wrap {
      margin-top: 11rem;
    }

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

    .cases-gallery__title {
      margin-top: 1.5rem;
      margin-bottom: 1rem;
    }
    /* blog post start */
    .blog-content__container {
      max-width: 87.5rem;
    }
    .page-content__tags {
      margin-bottom: 1.25rem;
    }
    .page-content__tag {
      padding: 0.35rem 1rem;
    }
    .page-content__resources_col {
      flex-direction: row;
    }
    .page-content__resource{
      padding: 1.5rem 1.5rem;
    }
    .page-content__resource_arrow {
      border-radius: 10px;
      padding: 0.7rem;
    }
    /* blog post end */
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
