import styled from 'styled-components';

export const ContactsComponent = styled('div')`
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

  .page-content__offices {
    padding: 2rem 0;
  }

  .offices-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .offices-list__container {
    background: #fff;
    border: 0.0625rem solid var(--stroke);
    border-radius: 1rem;
    box-shadow: 0 0.75rem 2rem var(--stroke-transparent);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 41vh;
  }

  .offices-list__header {
    padding: 1.125rem 1.25rem;
    border-bottom: 0.0625rem solid var(--stroke);
    background: linear-gradient(180deg, rgba(8,38,93,0.02) 0%, rgba(8,38,93,0) 100%);
  }

  .offices-list__title { color: var(--secondary); }

  .offices-list {
    list-style: none;
    margin: 0;
    padding: 0;
    max-height: clamp(26.25rem, 62vh, 42.5rem);
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--secondary-transparent) transparent;
  }

  .offices-list::-webkit-scrollbar { width: 0.625rem; }
  .offices-list::-webkit-scrollbar-thumb {
    background: var(--stroke);
    border-radius: 0.625rem;
  }
  .offices-list::-webkit-scrollbar-track { background: transparent; }

  .offices-item {
    padding: 0.875rem 1.25rem 1rem;
    border-bottom: 0.0625rem solid var(--stroke);
    cursor: pointer;
    transition: background .2s ease, border-left-color .2s ease;
    position: relative;
  }

  .offices-item:last-child { border-bottom: 0; }
  .offices-item:hover { background: rgba(8,38,93,0.03); }

  .offices-item.-active {
    background: rgba(55,115,224,0.06);
    border-left: 0.1875rem solid var(--primary);
    padding-left: 1.0625rem; /* компенсируем бордер */
  }

  .offices-item__title {
    display: block;
    font-weight: 600;
    color: var(--secondary);
    margin-bottom: 0.25rem;
  }

  .offices-item__address {
    display: block;
    color: var(--secondary-transparent-bold);
    line-height: 1.35;
    margin-bottom: 0.5rem;
  }

  .offices-item__phone,
  .offices-item__email {
    display: inline-block;
    font-size: 0.9375rem;
    color: var(--primary);
    text-decoration: none;
    margin-right: 0.875rem;
  }

  .offices-item__phone:hover,
  .offices-item__email:hover { text-decoration: underline; }

  .offices-map {
    background: #fff;
    border: 0.0625rem solid var(--stroke);
    border-radius: 1rem;
    box-shadow: 0 0.75rem 2rem var(--stroke-transparent);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 41vh;
  }

  .offices-map__header {
    padding: 1.125rem 1.25rem;
    border-bottom: 0.0625rem solid var(--stroke);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .offices-map__header_title {
    color: var(--secondary);
  }

  .offices-map__iframe_container {
    position: relative;
    min-height: calc(41vh - 3.719rem);
  }

  .offices-map__iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 0 0 1rem 1rem;
  }
  
  
  /* 768px */
  @media only screen and (min-width: 48rem) {
    padding-bottom: 6.5rem;

    /* contacts start */
    .offices-grid {
      grid-template-columns: 21.875rem 1fr;
    }
    .offices-map {
      order: 2;
    }
    .offices-list__container {
      order: 1;
    }
    /* contacts end */
  }

  /* 992px */
  @media only screen and (min-width: 62rem) {
    padding-top: 4.35rem;
    padding-bottom: 9.5rem;

    .page-title__wrap {
      margin-top: 4.5rem;
    }

    .page-content {
      border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
    }

    /* contacts start */
    .offices-grid {
      grid-template-columns: 22.5rem 1fr;
    }

    .offices-map__iframe_container {
      min-height: 32.5rem;
    }

    .offices-map {
      height: auto;
    }

    .offices-list__container {
      height: auto;
    }
    /* contacts end */
  }

  /* 1200px real */
  @media only screen and (min-width: 74.9375rem) {
    padding-top: 4.25rem;

    /* contacts start */
    .offices-grid {
      grid-template-columns: 24rem 1fr;
    }
    /* contacts end */
  }

  /* 1400px real */
  @media only screen and (min-width: 87.5rem) {
    padding-top: 4.15rem;
    padding-bottom: 11.15rem;

    .page-title__wrap {
      margin-top: 5.4rem;
    }

    /* contacts start */
    .offices-grid {
      grid-template-columns: 26.25rem 1fr;
    }
    /* contacts end */
  }

  /* 1441px */
  @media only screen and (min-width: 90.063rem) {
    padding-top: 4.724rem;
  }
`;
