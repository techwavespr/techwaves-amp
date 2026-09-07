import styled from 'styled-components';

export const FooterComponent = styled('footer')`
  .footer-container {
    padding-right: 0;
    padding-left: 0;
    margin-right: 0;
    margin-left: 0;
    max-width: 100%;
  }
  .footer-row {
    margin-right: 0;
    margin-left: 0;
  }

  .footer-top {
    border-top: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
  }

  .footer-item__wrap {
    border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
  }

  .footer-item__wrap:last-child {
    border-bottom: 0;
    padding-right: 0;
    padding-left: 0;
  }

  .footer-info {
    display: flex;
    flex-direction: column;
    padding: 1.25rem 0 1.15rem;
    height: 100%;
    gap: 1.25rem 0;
  }

  .footer-logo__wrap {
    height: 3.1rem;
  }

  .footer-logo__wrap svg {
    height: 100%;
    width: auto;
  }

  .footer-address__wrap {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: auto;
  }

  .footer-address {
    color: var(--secondary-transparent);
  }

  .footer-address__wrap::before {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    content: '';
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjM5OTYgOC40NjA4NkMyMC4zOTk2IDMuNzg4MyAxNi42Mzg4IDAuMDAwMzc5NTYyIDExLjk5OTYgMC4wMDAzNzk1NjJDNy4zNjA0MiAwLjAwMDM3OTU2MiAzLjU5OTYxIDMuNzg4MyAzLjU5OTYxIDguNDYwODZDMy41OTk2MSAxMi44ODM3IDcuOTAwMzEgMTguMjE1NiAxMS40MTMxIDIzLjE2NTlDMTEuNzAxMSAyMy41NzE3IDEyLjMwNDIgMjMuNTc1NyAxMi41OTY1IDIzLjE3MzFDMTYuMjQxNyAxOC4xNTIgMjAuMzk5NiAxMi44ODk0IDIwLjM5OTYgOC40NjA4NloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xXzE0MjUpIi8+CjxjaXJjbGUgY3g9IjEyIiBjeT0iOCIgcj0iMyIgZmlsbD0id2hpdGUiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xXzE0MjUiIHgxPSI1LjMyMTYxIiB5MT0iMjEuNTk0OSIgeDI9IjE2LjY1OTMiIHkyPSIyLjgxMzMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzFFNjBEQiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNCREQ3RjkiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K);
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 0.5rem;
  }

  .footer-social {
    display: flex;
    flex-direction: column;
  }

  .footer-social__col {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .footer-social__col:first-child {
    border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
  }

  .footer-social__container {
    display: flex;
    width: 100%;
  }

  .footer-social__container:first-child {
    border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
  }

  .footer-social__item {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: 0.9rem 0.75rem;
  }

  .footer-social__name {
    color: var(--primary);
    margin-bottom: 0;
  }

  .footer-social__arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    border: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
    padding: 0.3rem;
  }

  .footer-bottom {

  }

  .footer-bottom__wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.25rem 0.75rem;
    gap: 1rem;
  }

  .footer-bottom__policies {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .footer-privacy {
    line-height: 140%;
    transition: all 0.4s ease;
  }

  .footer-privacy:hover {
    color: var(--primary);
  }

  .footer-copyright {
    line-height: 140%;
  }

  /* 576px */
  @media only screen and (min-width: 36rem) {
    .footer-info {
      max-width: 540px;
      padding-right: calc(var(--bs-gutter-x)* .5);
      padding-left: calc(var(--bs-gutter-x)* .5);
      margin-right: auto;
      margin-left: auto;
    }
    .footer-social__item {
      max-width: 540px;
      padding-right: calc(var(--bs-gutter-x)* .5);
      padding-left: calc(var(--bs-gutter-x)* .5);
      margin-right: auto;
      margin-left: auto;
    }
  }

  /* 768px */
  @media only screen and (min-width: 48rem) {
    .footer-info {
      max-width: 720px;
    }
    .footer-social__item {
      max-width: 720px;
    }
  }

  /* 992px */
  @media only screen and (min-width: 62rem) {
    .footer-container {
      max-width: 960px;
      padding-right: calc(var(--bs-gutter-x)* .5);
      padding-left: calc(var(--bs-gutter-x)* .5);
      margin-right: auto;
      margin-left: auto;
    }
    .footer-row {
      flex-direction: row;
      margin-right: calc(-.5* var(--bs-gutter-x));
      margin-left: calc(-.5* var(--bs-gutter-x));
    }
    .footer-item__wrap {
      border-bottom: 0;
      border-left: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
    .footer-info {
      width: 100%;
      padding: 1.25rem 0.5rem;
      gap: 0;
    }
    .footer-logo__wrap {
      height: 2.65rem;
    }
    .footer-social {
      border-top: 0;
    }
    .footer-social__col {
      flex-direction: row;
    }
    .footer-social__container {
      width: 50%;
    }
    .footer-social__container:first-child {
      border-bottom: 0;
    }
    .footer-social__item:first-child {
      border-bottom: 0;
      border-right: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
    .footer-social__item {
      padding: 1.25rem 1.25rem;
    }
    .footer-social__arrow {
      border-radius: 10px;
      padding: 0.5rem;
    }
    .footer-bottom__wrap {
      flex-direction: row;
      align-items: center;
      padding: 1rem 0;
      gap: 0;
    }
  }

  /* 1200px real */
  @media only screen and (min-width: 74.9375rem) {
    .footer-container {
      max-width: 1140px;
    }
  }

  /* 1400px real */
  @media only screen and (min-width: 87.5rem) {
    .footer-container {
      max-width: 1320px;
    }
  }

  /* 1441px */
  @media only screen and (min-width: 90.063rem) {
    .footer-container {
      max-width: 87.5rem;
    }
    .footer-item__wrap {
      border-bottom: 0;
      border-left: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
    .footer-info {
      padding: 1.5rem 0.75rem;
      gap: 0;
    }
    .footer-logo__wrap {
      height: 3.1rem;
    }
    .footer-social {
      border-top: 0;
    }
    .footer-social__col {
      flex-direction: row;
    }
    .footer-social__item:first-child {
      border-bottom: 0;
      border-right: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }
    .footer-social__item {
      padding: 1.5rem 1.5rem;
    }
    .footer-social__arrow {
      border-radius: 10px;
      padding: 0.7rem;
    }
    .footer-bottom__wrap {
      flex-direction: row;
      align-items: center;
      padding: 1.5rem 0;
      gap: 0;
    }
  }
`;
