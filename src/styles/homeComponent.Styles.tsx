import styled from 'styled-components';

export const HomeComponent = styled('main')`
  /* hero start */
  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    width: 100vw;
    height: 100vh;
    text-align: center;
    padding-top: 4.5rem;
    padding-bottom: 0;
  }

  .hero-bg {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
  }

  .hero-video video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero-container__main {
    flex-grow: 1;
  }

  .hero-container__row {
    height: 100%;
  }

  .hero-container {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;
    padding-right: calc(var(--bs-gutter-x)* .5);
    padding-left: calc(var(--bs-gutter-x)* .5);
  }

  .hero-text {
    margin-top: auto;
    text-align: left;
    margin-bottom: 1.85rem;
  }

  .hero-text .h1 {
    display: block;
    width: 100%;
    font-weight: 500;
    line-height: 130%;
    margin-bottom: 1.3rem;
  }

  .hero-text .text {
    display: block;
    width: 100%;
    font-weight: 400;
    line-height: 150%;
    color: rgba(2, 9, 21, 0.7);
  }

  .hero-advantage__container {
    padding-right: 0;
    padding-left: 0;
    margin-right: 0;
    margin-left: 0;
    max-width: 100%;
  }

  .hero-advantages__row {
    flex-direction: column;
    margin-right: 0;
    margin-left: 0;
  }

  .hero-advantages {
    width: 100%;
    margin-top: auto;
    border-top: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
    border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
  }

  .hero-advantages__container {
    display: flex;
    flex-wrap: wrap;
  }

  .hero-advantage {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
  }

  .hero-advantage:last-child {
    border-bottom: 0;
  }

  .hero-advantage__link {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
  }

  .hero-advantage__icon {
    width: 1.75rem;
    height: 1.75rem;
    margin-right: 0.35rem;
  }

  .hero-advantage__icon img {
    height: 100%;
    width: auto;
  }

  .hero-advantage__text {
    display: flex;
    flex-direction: column;
    margin-right: auto;
    text-align: left;
    height: 100%;
  }

  .hero-advantage__title {
    line-height: 150%;
  }

  .hero-advantage__subtitle {
    margin-top: auto;
    line-height: 130%;
  }

  .hero-advantage__arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    border: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
    padding: 0.3rem;
  }
  /* hero end */
  
  /* trust start */
  .trust {
    margin-top: 2.1rem;
    padding-bottom: 3.9rem;
    border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
  }

  .trust-subtitle {
    color: var(--secondary-transparent);
    line-height: 130%;
  }

  .trust-title {
    color: var(--secondary, #020915);
    line-height: 120%;
    margin-top: 1rem;
  }

  .trust-title .-gray {
    color: var(--secondary-light);
  }
  /* trust end */
  /* features start */
  .features {
    border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
  }
  .features-container {
    padding-right: 0;
    padding-left: 0;
    margin-right: 0;
    margin-left: 0;
    max-width: 100%;
  }

  .features .row {
    flex-direction: column;
    margin-right: 0;
    margin-left: 0;
  }

  .feature-item__wrap {
    border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
  }

  .feature-item__wrap:last-child {
    border-bottom: 0;
  }

  .feature-item {
    display: block;
    padding: 1.15rem 0;
  }

  .feature-item__heading {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  .feature-icon__wrap {
    margin-right: 0.75rem;
  }

  .feature-icon__wrap img {
    width: 2.25rem;
    height: auto;
  }

  .feature-title__wrap {
    display: block;
    margin-top: 0;
  }

  .feature-title {
    color: var(--secondary, #020915);
    line-height: 120%;
    margin-bottom: 0;
  }

  .feature-description {
    color: var(--secondary-transparent-bold, #4e535b);
    margin-top: 1.1rem;
  }
  /* features end */

  /* awards start */
  .awards {
    border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
  }

  .awards .row {
    /*flex-direction: column-reverse;*/
  }

  .awards-item {
    padding: 2.5rem 0 1.15rem;
  }

  .awards-subtitle {
    color: var(--secondary-transparent);
    line-height: 130%;
  }

  .awards-description {}

  .awards-title {
    color: var(--secondary, #020915);
    line-height: 120%;
    margin-top: 1rem;
  }

  .awards-logos {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.25rem;
    margin-bottom: 2rem;
    gap: 4rem;
  }

  .awards-btn {
    display: block;
    padding: 1rem 2rem;
  }

  
  /* awards end */
  /* clients start */
  .clients {
    padding-top: 5rem;
  }
  /* clients end */

  /* team start */
  .team {
    padding-top: 7.38rem;
  }

  .team-title {
    text-align: center;
    margin-bottom: 1.15rem;
  }

  .team-container {
    border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
  }

  .team-container:first-of-type {
    border-top: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
  }

  .team-founder {
    margin: 0 0 1.15rem;
  }

  .team-video__container {
    padding: 1.25rem 0;
    margin: 0;
    height: 100%;
  }

  .team-video__wrap {
    height: 100%;
    border-radius: 0.75rem;
    overflow: hidden;
    min-height: 12rem;
  }

  .team-video {
    width: 100%;
    height: 100%;
  }

  .team-founder__role {
    color: var(--secondary-transparent);
    line-height: 130%;
  }

  .team-founder__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 0.75rem;
  }

  .team-founder__name {
    margin-bottom: 0.9rem;
  }

  .team-founder__bio {
    color: var(--secondary-transparent-bold, #4e535b);
  }

  .team-founder__link {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  }

  .team-founder__link_arrow {
    width: 0.75rem;
    margin-left: 0.5rem;
  }

  .team-founder__link svg {
    width: 100%;
    height: auto;
  }
  .team-item__wrap:first-of-type {
    border-top: 0;
  }

  .team-item__wrap {
    border-top: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
  }

  .team-member__card {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 1rem 0;
  }

  .team-member__image_wrap {
    overflow: hidden;
    border-radius: 0.75rem;
    flex: 1;
  }

  .team-member__image {
    width: 100%;
    height: auto;
  }

  .team-member__details {
    flex: 2.3;
    margin-top: 0;
  }

  .team-member__name {
    display: block;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 0;
  }

  .team-member__role {
    margin-top: 0.5rem;
  }

  .team-container__members {
    interpolate-size: allow-keywords;
    margin-top: -1px;
  }

  .team-container__members:first-child {
    margin-top: 0;
  }

  .team-container__members .row.-toggled {
    max-height: 0;
    overflow: hidden;
    transition: max-height 1s ease;
  }

  .team-container__members .row.-toggled.-visible {
    max-height: max-content;
  }

  .team-actions {
    display: flex;
    padding-top: 1.25rem;
    padding-right: 0.75rem;
    padding-left: 0.75rem;
    margin-right: auto;
    margin-left: auto;
  }

  .team-btn {
    display: block;
    width: 100%;
    padding: 1rem 2rem;
  }
  /* team end */

  /* cases start */
  .cases {
    margin-top: 4.35rem;
    padding-bottom: 2rem;
  }

  .cases-subtitle {
    color: var(--secondary-transparent);
    line-height: 130%;
  }

  .cases-title {
    color: var(--secondary, #020915);
    line-height: 120%;
    margin-top: 1rem;
  }

  .cases-title .-gray {
    color: var(--secondary-light);
  }

  .cases-gallery {
    margin-top: 3.9rem;
  }

  .cases-actions {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1.25rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    margin-right: auto;
    margin-left: auto;
  }

  .cases-btn {
    width: 100%;
    padding: 1rem 2rem;
  }
  /* cases end */
  /* feedback start */
  .feedback {
    padding-top: 2.18rem;
  }

  .feedback-title {
    text-align: center;
    margin-bottom: 1.15rem;
  }

  .feedback-container__wrap {
    border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
  }

  .feedback-container__wrap:first-of-type {
    border-top: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
  }

  .feedback-container {
    padding-right: 0;
    padding-left: 0;
    margin-right: 0;
    margin-left: 0;
    max-width: 100%;
  }

  .feedback-row {
    margin-right: 0;
    margin-left: 0;
  }

  .feedback-item__wrap {
    border-top: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
  }

  .feedback-item__wrap:first-of-type {
    border-top: 0;
  }

  .feedback-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem 0;
  }

  .feedback-icon {
    min-width: 4.25rem;
    height: auto;
  }

  .feedback-content {
    margin-left: 0.75rem;
  }

  .feedback-text {
    margin-bottom: 1rem;
  }
  /* feedback end */
  /* book start */
  .book {
    margin-top: 4.3rem;
    padding-bottom: 4.1rem;
    border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
  }

  .book-subtitle {
    color: var(--secondary-transparent);
    line-height: 130%;
  }

  .book-title {
    color: var(--secondary, #020915);
    line-height: 120%;
    margin-top: 1rem;
  }

  .book-title .-gray {
    color: var(--secondary-light);
  }
  /* book end */
  /* calendar start */
  .calendar {
    position: relative;
    border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
  }

  .calendar-bg {
    width: 100vw;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .calendar-video video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .calendar-container {
    border-left: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
    border-right: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
  }
  /* calendar end */
  /* reviews start */
  .reviews {
    padding-bottom: 2.25rem;
    border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
  }
  .reviews-container {
    padding-right: 0;
    padding-left: 0;
    margin-right: 0;
    margin-left: 0;
    max-width: 100%;
  }
  .reviews-row {
    margin-right: 0;
    margin-left: 0;
  }
  .reviews-item__wrap {
    border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
  }

  .reviews-item__wrap:last-child {
    border-bottom: 0;
  }

  .reviews-item {
    padding: 3.35rem 0 1.15rem;
  }

  .reviews-icon__wrap {
    height: 2.75rem;
  }

  .reviews-icon {
    height: 100%;
    width: auto;
  }

  .reviews-description {
    margin-bottom: 1.3rem;
  }

  .reviews-title {
    color: var(--secondary, #020915);
    line-height: 120%;
    margin-top: 1rem;
  }

  .reviews-btn {
    width: 100%;
    padding: 1rem 2rem;
  }
  /* reviews end */

  /* blog start */
  .blog {
    padding-top: 2.05rem;
  }

  .blog-title__wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 0;
    padding-left: 0;
  }

  .blog-title {
    text-align: center;
  }

  .blog-btn {
    display: none;
    padding: 1rem 2rem;
  }

  .blog-container__wrap {
    margin-top: 0.6rem;
    border-top: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
  }
  .blog-container {
    padding-right: 0;
    padding-left: 0;
    margin-right: 0;
    margin-left: 0;
    max-width: 100%;
  }
  .blog-row {
    margin-right: 0;
    margin-left: 0;
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
  
  .blog-actions {
    align-items: center;
    justify-content: center;
    padding-top: 1.25rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    margin-right: auto;
    margin-left: auto;
  }

  .blog-actions__btn {
    width: 100%;
    padding: 1rem 2rem;
  }
  /* blog end */
  /* partners start */
  .partners {
    padding-top: 5.25rem;
    padding-bottom: 3.1rem;
  }

  /* 576px */
  @media only screen and (min-width: 36rem) {
    .hero-advantage__link {
      max-width: 540px;
      padding-right: calc(var(--bs-gutter-x)* .5);
      padding-left: calc(var(--bs-gutter-x)* .5);
      margin-right: auto;
      margin-left: auto;
    }
    .feature-item {
      max-width: 540px;
      padding-right: calc(var(--bs-gutter-x)* .5);
      padding-left: calc(var(--bs-gutter-x)* .5);
      margin-right: auto;
      margin-left: auto;
    }
    .team-video__wrap {
      min-height: 20rem;
    }
    .team-actions {
      max-width: 540px;
    }
    .cases-actions {
      max-width: 540px;
    }
    .feedback-item {
      max-width: 540px;
      padding-right: calc(var(--bs-gutter-x)* .5);
      padding-left: calc(var(--bs-gutter-x)* .5);
      margin-right: auto;
      margin-left: auto;
    }
    .reviews-item {
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
    .blog-actions {
      max-width: 540px;
    }
  }

  /* 768px */
  @media only screen and (min-width: 48rem) {
    .hero-advantage__link {
      max-width: 720px;
    }
    .feature-item {
      max-width: 720px;
    }
    .team-actions {
      max-width: 720px;
    }
    .cases-actions {
      max-width: 720px;
    }
    .blog-card {
      max-width: 720px;
    }
    .blog-card__wrap {
      border-right: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
    .blog-card__wrap:first-child {
      border-left: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
    .blog-actions {
      max-width: 720px;
    }
    .feedback-item {
      max-width: 720px;
    }
    .reviews-item {
      max-width: 720px;
    }
  }

  /* 992px */
  @media only screen and (min-width: 62rem) {
    /* 992px hero start */
    .hero {
      padding-bottom: 1.85rem;
    }
    .hero-container {
      padding-left: 0;
      padding-right: 0;
    }
    .hero-text {
      margin-bottom: 4.75rem;
    }
    .hero-text .h1 {
      width: 48rem;
      margin-bottom: 2.6rem;
      line-height: 110%;
    }
    .hero-text .text {
      width: 32rem;
    }
    .hero-advantage {
      padding: 1.2rem;
    }
    .hero-advantage__container {
      max-width: 960px;
      padding-right: calc(var(--bs-gutter-x)* .5);
      padding-left: calc(var(--bs-gutter-x)* .5);
      margin-right: auto;
      margin-left: auto;
    }
    .hero-advantages__row {
      flex-direction: row;
      margin-right: calc(-.5* var(--bs-gutter-x));
      margin-left: calc(-.5* var(--bs-gutter-x));
    }
    .hero-advantage {
      flex: none;
    }
    .hero-advantage {
      border-right: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
    }
    .hero-advantage:first-child {
      border-left: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
    }
    .hero-advantage:last-child {
      border-left: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
    }
    .hero-advantage__link {
      max-width: 100%;
      padding: 0;
    }
    .hero-advantage__icon {
      width: 2.9rem;
      height: 2.9rem;
      margin-right: 0.9rem;
    }
    .hero-advantage__subtitle {
      margin-top: 0.25rem;
    }
    .hero-advantage__arrow {
      border-radius: 0.75rem;
      padding: 0.5rem;
    }
    /* 992px hero end */
    /* 992px trust start */
    .trust {
      margin-top: 7.75rem;
      padding-bottom: 8.85rem;
    }
    .trust-title {
      margin-top: 1.25rem;
    }
    /* 992px trust end */
    /* 992px features start */
    .features-container {
      max-width: 960px;
      padding-right: calc(var(--bs-gutter-x)* .5);
      padding-left: calc(var(--bs-gutter-x)* .5);
      margin-right: auto;
      margin-left: auto;
    }
    .features .row {
      flex-direction: row;
      margin-right: calc(-.5* var(--bs-gutter-x));
      margin-left: calc(-.5* var(--bs-gutter-x));
    }
    .feature-item__wrap {
      border-right: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
    }

    .feature-item__wrap:first-child {
      border-left: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
    }
    .page-content__features .feature-item__wrap:first-child {
      border-left: 0;
    }
    .feature-item__wrap:nth-child(3) {
      border-left: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
      border-bottom: 0;
    }
    .page-content__features .feature-item__wrap:nth-child(2n) {
      border-right: 0;
    }
    .page-content__features .feature-item__wrap:nth-child(3) {
      border-left: 0;
    }
    .feature-item {
      padding: 3rem 0.5rem 3rem;
    }
    .feature-item__heading {
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }
    .feature-icon__wrap img {
      width: 3.15rem;
    }
    .feature-title__wrap {
      margin-top: 2.6rem;
    }
    .feature-description {
      margin-top: 0.85rem;
    }
    /* 992px features end */
    /* 992px awards start */
    .awards-item__wrap {
      border-left: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
    }
    .awards-item__wrap:last-child {
      border-right: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
    }
    .awards .row {
      flex-direction: row;
    }
    .awards-item {
      padding: 3rem 0.5rem 1.5rem;
    }
    .awards-description {
      margin-top: 1.25rem;
    }
    .awards-logos {
      justify-content: start;
      margin-top: 2.15rem;
      margin-bottom: 4.75rem;
    }
    .awards-btn {
      display: inline-block;
      padding: 0.9rem 1.7rem;
    }
    /* 992px awards end */
    /* 992px team start */
    .team {
      padding-top: 9.8rem;
    }
    .team-title {
      margin-bottom: 1.8rem;
    }
    .team-item__wrap {
      border-right: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
    .team-item__wrap:first-child {
      border-left: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
    .team-item__wrap:nth-child(2) {
      border-top: 0;
    }
    .team-item__wrap:nth-child(3) {
      border-left: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
    }
    .team-video__container {
      padding: 1.35rem 0.5rem;
    }
    .team-video__wrap {
      border-radius: 1.25rem;
    }
    .team-founder {
      margin: 3.4rem 2.65rem 3.25rem;
    }
    .team-founder__wrap {
      border-right: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
    }
    .team-founder__wrap:first-child {
      border-left: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
    .team-founder__info {
      margin-top: 1rem;
    }
    .team-founder__name {
      margin-bottom: 0.75rem;
    }
    .team-founder__link_arrow {
      width: 0.6rem;
    }
    .team-founder__link {
      margin-top: 1.3rem;
    }
    .team-member__card {
      flex-direction: column;
      padding: 1.25rem 0.5rem;
    }
    .team-member__image_wrap {
      border-radius: 1rem;
      width: 100%;
    }
    .team-member__details {
      flex: 1;
      width: 100%;
      margin-top: 0.75rem;
    }
    .team-member__role {
      display: block;
    }
    .team-actions {
      align-items: center;
      justify-content: center;
      padding-top: 2.1rem;
    }
    .team-btn {
      display: inline-block;
      width: auto;
      padding: 0.85rem 1.75rem;
    }
    /* 992px team end */
    /* 992px cases start */
    .cases {
      margin-top: 9.7rem;
      padding-bottom: 5rem;
    }
    .cases-title {
      margin-top: 1.25rem;
    }
    .cases-gallery {
      margin-top: 8.85rem;
    }
    .cases-actions {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 2.1rem;
    }
    .cases-btn {
      width: auto;
      padding: 0.85rem 1.75rem;
    }
    /* 992px cases end */
    /* 992px feedback start */
    .feedback {
      padding-top: 4.4rem;
    }
    .feedback-title {
      text-align: center;
      margin-bottom: 1.8rem;
    }
    .feedback-container {
      max-width: 960px;
      padding-right: calc(var(--bs-gutter-x)* .5);
      padding-left: calc(var(--bs-gutter-x)* .5);
      margin-right: auto;
      margin-left: auto;
    }
    .feedback-row {
      flex-direction: row;
      margin-right: calc(-.5* var(--bs-gutter-x));
      margin-left: calc(-.5* var(--bs-gutter-x));
    }
    .feedback-item__wrap {
      border-top: 0;
      border-right: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }

    .feedback-item__wrap:first-of-type {
      border-left: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
    .feedback-item {
      max-width: 100%;
      padding: 1.1rem 0.7rem;
    }
    .feedback-content {
      margin-left: 1.1rem;
    }
    .feedback-text {
      margin-bottom: 0.75rem;
    }
    /* 992px feedback end */
    /* 992px book start */
    .book {
      margin-top: 9.6rem;
      padding-bottom: 8.85rem;
    }
    .book-title {
      margin-top: 1.25rem;
    }
    /* 992px book end */
    /* 992px reviews start */
    .reviews {
      padding-bottom: 0;
    }
    .reviews-container {
      max-width: 960px;
      padding-right: calc(var(--bs-gutter-x)* .5);
      padding-left: calc(var(--bs-gutter-x)* .5);
      margin-right: auto;
      margin-left: auto;
    }
    .reviews-row {
      flex-direction: row;
      margin-right: calc(-.5* var(--bs-gutter-x));
      margin-left: calc(-.5* var(--bs-gutter-x));
    }
    .reviews-item {
      max-width: 100%;
    }
    .reviews-item__wrap {
      border-bottom: 0;
      border-left: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
    }
    .reviews-item__wrap:last-child {
      border-right: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
    }
    .reviews-item {
      padding: 1.25rem 0.45rem;
    }
    .reviews-icon__wrap {
      height: 4.25rem;
    }
    .reviews-title {
      margin-top: 1.25rem;
    }
    .reviews-description {
      margin-bottom: 9.6rem;
    }
    .reviews-btn {
      width: auto;
      padding: 0.85rem 1.75rem;
    }
    /* 992px reviews end */
    /* 992px blog start */
    .blog {
      padding-top: 9.3rem;
    }
    .blog-title__wrap {
      justify-content: space-between;
    }
    .blog-btn {
      display: block;
      padding: 0.85rem 1.75rem;
    }
    .blog-container {
      max-width: 960px;
      padding-right: calc(var(--bs-gutter-x)* .5);
      padding-left: calc(var(--bs-gutter-x)* .5);
      margin-right: auto;
      margin-left: auto;
    }
    .blog-row {
      flex-direction: row;
      margin-right: calc(-.5* var(--bs-gutter-x));
      margin-left: calc(-.5* var(--bs-gutter-x));
    }
    .blog-card__wrap:nth-child(3) {
      border-left: 0;
    }
    .blog-container__wrap {
      margin-top: 1.3rem;
    }
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
    /* 992px partners start */
    .partners {
      padding-top: 10rem;
      padding-bottom: 10.1rem;
    }
    /* 992px partners end */
  }

  /* 1200px real */
  @media only screen and (min-width: 74.9375rem) {
    .hero-advantage__container {
      max-width: 1140px;
    }
    .hero-text {
      margin-bottom: 4.75rem;
    }
    .hero-text .h1 {
      margin-bottom: 2.5rem;
      line-height: 110%;
    }
    .hero-advantage {
      border-bottom: 0;
      padding: 0.6rem 1.2rem;
    }
    .hero-advantage:last-child {
      border-left: 0;
    }
    .hero-advantage__arrow {
      border-radius: 0.5rem;
    }
    .trust {
      margin-top: 10.4rem;
    }
    .features-container {
      max-width: 1140px;
    }
    .feature-item {
      padding: 3rem 0.5rem 2.5rem;
    }
    .feature-item__wrap {
      border-bottom: 0;
      border-left: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
      border-right: 0;
    }
    .feature-item__wrap:last-child {
      border-right: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
    }
    .feature-item__wrap:nth-child(3) {
      border-left: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
      border-bottom: 0;
    }
    .awards-item {
      padding: 3rem 0.5rem 1.2rem;
    }
    .team {
      padding-top: 9.9rem;
    }
    .team-item__wrap {
      border-top: 0;
    }
    .team-item__wrap:nth-child(3) {
      border-left: 0;
    }
    .cases {
      margin-top: 9.6rem;
    }
    .cases-gallery {
      margin-top: 5.25rem;
    }
    .feedback-container {
      max-width: 1140px;
    }
    .reviews-container {
      max-width: 1140px;
    }
    .blog-container {
      max-width: 1140px;
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
    .hero-advantage__container {
      max-width: 1320px;
    }
    .hero-advantage {
      padding: 1.25rem 1.2rem;
    }
    .trust {
      margin-top: 9.75rem;
      padding-bottom: 9.3rem;
    }
    .features-container {
      max-width: 1320px;
    }
    .feature-item {
      padding: 3rem 0.5rem 3.9rem;
    }
    .team {
      padding-top: 10.4rem;
    }
    .cases {
      margin-top: 10rem;
    }
    .cases-gallery {
      margin-top: 9.15rem;
    }
    .feedback-container {
      max-width: 1320px;
    }
    .feedback {
      padding-top: 4.4rem;
    }
    .reviews-container {
      max-width: 1320px;
    }
    .blog-container {
      max-width: 1320px;
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
    .hero {
      padding-bottom: 1rem;
    }
    .hero-advantage__container {
      max-width: 87.5rem;
    }
    .hero-text {
      margin-bottom: 5rem;
    }
    .hero-text .h1 {
      width: 55.625rem;
      line-height: 110%;
      margin-bottom: 3rem;
    }
    .hero-text .text {
      width: 38.125rem;
    }
    .hero-advantage {
      padding: 0;
    }
    .hero-advantage__link {
      padding: 1.5rem;
    }
    .hero-advantage__icon {
      width: 3.375rem;
      height: 3.375rem;
      margin-right: 1rem;
    }
    .hero-advantage__arrow {
      padding: 0.65rem;
    }
    /* 1441px hero end */
    /* 1441px trust start */
    .trust {
      margin-top: 11.2rem;
      padding-bottom: 10.7rem;
    }
    .trust-title {
      margin-top: 1.5rem;
    }
    /* 1441px trust end */
    /* 1441px features start */
    .features-container {
      max-width: 87.5rem;
    }
    .feature-item {
      padding: 3.5rem 0.65rem 2.9rem;
    }
    .feature-icon__wrap img {
      width: 3.75rem;
    }
    .feature-title__wrap {
      margin-top: 3rem;
    }
    .feature-description {
      margin-top: 1.1rem;
    }
    /* 1441px features end */
    /* 1441px awards start */
    .awards-item {
      padding: 3.5rem 0.65rem 1.5rem;
    }
    .awards-title {
      margin-top: 1.5rem;
    }
    .awards-logos {
      justify-content: start;
      margin-top: 2.5rem;
      margin-bottom: 5.5rem;
    }
    .awards-btn {
      padding: 1rem 2rem;
    }
    /* 1441px awards end */
    /* 1441px team start */
    .team {
      padding-top: 12rem;
    }
    .team-title {
      margin-bottom: 2.25rem;
    }
    .team-item__wrap {
      border-bottom: 0;
      border-left: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
    .team-item__wrap:last-child {
      border-right: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
    .team-video__container {
      padding: 1.5rem 0.65rem;
    }
    .team-video__wrap {
      border-radius: 1.5rem;
    }
    .team-founder {
      margin: 4rem 3.25rem 3.8rem;
    }
    .team-founder__info {
      margin-top: 1.2rem;
    }
    .team-founder__link {
      margin-top: 1.5rem;
    }
    .team-founder__link_arrow {
      width: 0.75rem;
    }
    .team-member__card {
      padding: 1.5rem 0.65rem;
      gap: 0;
    }
    .team-member__image_wrap {
      border-radius: 1.25rem;
    }
    .team-member__details {
      margin-top: 1.55rem;
    }
    .team-actions {
      align-items: center;
      justify-content: center;
      padding-top: 2.5rem;
    }
    .team-btn {
      display: inline-block;
      width: auto;
      padding: 1rem 2rem;
    }
    /* 1441px team end */
    /* 1441px cases start */
    .cases {
      margin-top: 11.25rem;
      padding-bottom: 5rem;
    }
    .cases-title {
      margin-top: 1.5rem;
    }
    .cases-gallery {
      margin-top: 10.7rem;
    }
    .cases-actions {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 2.5rem;
    }
    .cases-btn {
      width: auto;
      padding: 1rem 2rem;
    }
    /* 1441px cases end */
    /* 1441px feedback start */
    .feedback {
      padding-top: 6rem;
    }
    .feedback-container {
      max-width: 87.5rem;
    }
    .feedback-title {
      text-align: center;
      margin-bottom: 2.15rem;
    }
    .feedback-item__wrap {
      border-top: 0;
      border-right: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
    .feedback-item__wrap:first-of-type {
      border-left: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
    .feedback-item {
      padding: 1.2rem 0.7rem 3rem;
    }
    .feedback-content {
      margin-left: 1.5rem;
    }
    .feedback-text {
      margin-bottom: 0.5rem;
    }
    /* 1441px feedback end */
    /* 1441px book start */
    .book {
      margin-top: 11.3rem;
      padding-bottom: 10.65rem;
    }
    .book-title {
      margin-top: 1.5rem;
    }
    /* 1441px book end */
    /* 1441px reviews start */
    .reviews-container {
      max-width: 87.5rem;
    }
    .reviews-item {
      padding: 1.5rem 0.65rem 1.5rem;
    }
    .reviews-icon__wrap {
      height: 5rem;
    }
    .reviews-title {
      margin-top: 1.5rem;
    }
    .reviews-description {
      margin-bottom: 11.3rem;
    }
    .reviews-btn {
      width: auto;
      padding: 1rem 2rem;
    }
    /* 1441px reviews end */
    /* 1441px blog start */
    .blog {
      padding-top: 11rem;
    }
    .blog-container {
      max-width: 87.5rem;
    }
    .blog-title__wrap {
      justify-content: space-between;
    }
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
    .blog-btn {
      display: block;
    }
    /* 1450px blog end */
    /* 1450px partners start */
    .partners {
      padding-top: 12rem;
      padding-bottom: 12.3rem;
    }
    /* 1450px partners end */
  }
`;
