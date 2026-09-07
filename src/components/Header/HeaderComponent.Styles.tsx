import styled from 'styled-components';

export const HeaderComponent = styled('header')`
  display: block;
  position: sticky;
  height: 0;
  top: 0;
  z-index: 15;

  .header-wrap {
    border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
    background: rgba(255, 255, 255, 0.60);
    backdrop-filter: blur(15px);
  }

  .header-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }

  .header-menu {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
  }

  .header-menu .menu-item {
    position: relative;
    padding: 1px 0 4px;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    color: var(--secondary, #020915);
    transition: all 0.4s ease;
    outline: none;
  }

  .header-menu .menu-item:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    height: 1px;
    width: 0;
    background: var(--primary);
    transform: translateX(-50%);
    transition: all 0.4s ease;
  }

  .header-menu .menu-item:hover {
    color: var(--primary);
  }

  .header-menu .menu-item:hover:before {
    width: 100%;
  }

  .header-menu .menu-item.-active a {
    color: var(--primary);
  }

  .header-menu .menu-item.-disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  .header-menu .menu-item.-active:before {
    width: 100%;
  }

  .header-menu .menu-item .sub-menu {
    display: none;
  }

  .header-logo__container {
    display: flex;
    position: relative;
    align-self: stretch;
    margin-left: -25px;
  }

  .header-logo__wrap {
    display: flex;
    flex-direction: column;
    position: absolute;
    height: 100%;
  }

  .header-logo__link {
    display: block;
    position: relative;
    height: 100%;
  }

  .header-logo {
    display: block;
    height: 100%;
    width: auto;
    fill: #262625;
  }

  .header-btn__container {
    align-items: center;
    justify-content: space-between;
    gap: .5rem;
  }

  .header-btn {
    line-height: 1;
  }

  .header-btn.-secondary {
    padding: 13px 14px;
  }

  .header-burger__container {
    align-items: center;
    justify-content: center;
    margin: 0.5rem 0;
  }

  .header-burger__btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 0;
    cursor: pointer;
    margin: 0;
    padding: 0;
    width: 2.14rem;
    height: 2.14rem;
    background: none;
  }

  .header-burger__btn span {
    display: block;
    background-color: var(--secondary, #020915);
    height: 2px;
    width: 2.14rem;
    margin-bottom: 0.45rem;
    transform: rotate(0deg);
    position: relative;
    right: 0;
    opacity: 1;
  }

  .header-burger__btn span:nth-child(1),
  .header-burger__btn span:nth-child(3) {
    transition: transform .35s ease-in-out;
  }

  .header-burger__btn span:nth-child(3) {
    margin-bottom: 0;
  }

  .header-burger__btn.-active {
    outline: 0;
    position: relative;
  }

  .header-burger__btn.-active span:nth-child(1) {
    position: absolute;
    top: 1rem;
    transform: rotate(135deg);
    opacity: 0.9;
  }

  .header-burger__btn.-active span:nth-child(2) {
    visibility: hidden;
    background-color: transparent;
    margin-bottom: 0;
  }

  .header-burger__btn.-active span:nth-child(3) {
    position: absolute;
    top: 1rem;
    transform: rotate(-135deg);
    opacity: 0.9;
  }
  /* header */

  /* 992px */
  @media only screen and (min-width: 62rem) {
    /* 992px header start */
    .header-container {
      padding: 0.8rem 0;
    }
    .header-menu {
      gap: 2.6rem;
    }
    .nav-link {
      font-size: 0.9rem;
    }
    .header-btn__container {
      gap: .4rem;
    }
    .header-btn.-secondary {
      padding: 10px;
      border-radius: 0.75rem;
    }
    /* 992px header end */
  }

  /* 1441px */
  @media only screen and (min-width: 90.063rem) {
    .header-logo__link {
      margin-left: -50%;
    }
    .header-menu {
      gap: 3.1rem;
    }
    .nav-link {
      font-size: 1.06rem;
    }
    .header-btn__container {
      gap: .5rem;
    }
    .header-btn.-secondary {
      padding: 0.8rem 0.9rem;
    }
  }
`;
