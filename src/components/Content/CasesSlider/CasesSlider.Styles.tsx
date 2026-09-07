import styled from 'styled-components';

export const CasesSliderComponent = styled('div')`
  position: relative;
  height: 24.25rem;

  .gc {
    height: 100%;
    border-top: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
    border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));

    &-s {
      display: flex;
      position: relative;
    }
    
    &-w {
      cursor: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEwIiBoZWlnaHQ9IjExMCIgdmlld0JveD0iMCAwIDExMCAxMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgb3BhY2l0eT0iMC41IiBjeD0iNTUiIGN5PSI1NSIgcj0iNTUiIGZpbGw9IiMzNzczRTAiLz4KPGNpcmNsZSBjeD0iNTUiIGN5PSI1NSIgcj0iNDUiIGZpbGw9IiMzNzczRTAiLz4KPHBhdGggZD0iTTQ4LjAwNjQgNDEuMzIyTDMxLjEzMTQgNTQuNDQ3QzMxLjA1MTMgNTQuNTE1MiAzMC45ODcgNTQuNiAzMC45NDI5IDU0LjY5NTVDMzAuODk4OCA1NC43OTEgMzAuODc2IDU0Ljg5NSAzMC44NzYgNTUuMDAwMUMzMC44NzYgNTUuMTA1MyAzMC44OTg4IDU1LjIwOTMgMzAuOTQyOSA1NS4zMDQ4QzMwLjk4NyA1NS40MDAzIDMxLjA1MTMgNTUuNDg1MSAzMS4xMzE0IDU1LjU1MzNMNDguMDA2NCA2OC42NzgzQzQ4LjEwOTggNjguNzYwMSA0OC4yMzQyIDY4LjgxMSA0OC4zNjUyIDY4LjgyNTFDNDguNDk2MyA2OC44MzkyIDQ4LjYyODcgNjguODE1OSA0OC43NDcxIDY4Ljc1OEM0OC44NjUgNjguNjk5NSA0OC45NjQ0IDY4LjYwOTQgNDkuMDM0IDY4LjQ5NzZDNDkuMTAzNSA2OC4zODU4IDQ5LjE0MDUgNjguMjU2OCA0OS4xNDA4IDY4LjEyNTFMNDkuMTQwOCA0MS44NzUxQzQ5LjE0MDUgNDEuNzQzNSA0OS4xMDM1IDQxLjYxNDUgNDkuMDM0IDQxLjUwMjdDNDguOTY0NCA0MS4zOTA5IDQ4Ljg2NSA0MS4zMDA4IDQ4Ljc0NzEgNDEuMjQyM0M0OC42Mjg3IDQxLjE4NDQgNDguNDk2MyA0MS4xNjExIDQ4LjM2NTIgNDEuMTc1MkM0OC4yMzQyIDQxLjE4OTMgNDguMTA5OCA0MS4yNDAyIDQ4LjAwNjQgNDEuMzIyWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTYxLjk5MzYgNDEuMzIyTDc4Ljg2ODYgNTQuNDQ3Qzc4Ljk0ODcgNTQuNTE1MiA3OS4wMTMgNTQuNiA3OS4wNTcxIDU0LjY5NTVDNzkuMTAxMiA1NC43OTEgNzkuMTI0IDU0Ljg5NSA3OS4xMjQgNTUuMDAwMUM3OS4xMjQgNTUuMTA1MyA3OS4xMDEyIDU1LjIwOTMgNzkuMDU3MSA1NS4zMDQ4Qzc5LjAxMyA1NS40MDAzIDc4Ljk0ODcgNTUuNDg1MSA3OC44Njg2IDU1LjU1MzNMNjEuOTkzNiA2OC42NzgzQzYxLjg5MDIgNjguNzYwMSA2MS43NjU4IDY4LjgxMSA2MS42MzQ4IDY4LjgyNTFDNjEuNTAzNyA2OC44MzkyIDYxLjM3MTMgNjguODE1OSA2MS4yNTI5IDY4Ljc1OEM2MS4xMzUgNjguNjk5NSA2MS4wMzU2IDY4LjYwOTQgNjAuOTY2IDY4LjQ5NzZDNjAuODk2NSA2OC4zODU4IDYwLjg1OTUgNjguMjU2OCA2MC44NTkyIDY4LjEyNTFMNjAuODU5MiA0MS44NzUxQzYwLjg1OTUgNDEuNzQzNSA2MC44OTY1IDQxLjYxNDUgNjAuOTY2IDQxLjUwMjdDNjEuMDM1NiA0MS4zOTA5IDYxLjEzNSA0MS4zMDA4IDYxLjI1MjkgNDEuMjQyM0M2MS4zNzEzIDQxLjE4NDQgNjEuNTAzNyA0MS4xNjExIDYxLjYzNDggNDEuMTc1MkM2MS43NjU4IDQxLjE4OTMgNjEuODkwMiA0MS4yNDAyIDYxLjk5MzYgNDEuMzIyWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==), auto;
      display: flex;
      flex-direction: column;
      padding: 1.15rem 0.75rem;
      flex-grow: 1;
    }
    
    &-i {
      &__wrap {
        border-radius: 0.75rem;
        overflow: hidden;      }
    }
    
    &-d {
      margin-top: 1rem;
    }
    
    &-t {
      line-height: 120%;
    }
    
    &-st {
      color: var(--secondary-transparent-bold, #4e535b);
      
      &__wrap {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        margin-top: 0.75rem;
        
        &::before {
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
      }
    }

    &-sr {
      display: none;
      position: relative;
      width: 20px;
      height: calc(100% + 20px);

      &:last-of-type {
        &:after {
          content: '';
          position: absolute;
          top: 0;
          width: 1px;
          height: 100%;
          right: -1px;
          background: var(--stroke-transparent, rgba(8, 38, 93, 0.10));
        }
      }
    }
  }

  

  /* 576px */
  @media only screen and (min-width: 36rem) {
    height: 30rem;

    .gc {
      &-w {
        padding: 1.15rem 1.85rem;
      }
    }
  }

  /* 768px */
  @media only screen and (min-width: 48rem) {
    height: 37.938rem;
  }

  /* 992px */
  @media only screen and (min-width: 62rem) {
    height: 29rem;

    .gc {
      &-w {
        padding: 1.25rem 0 0;
        width: calc(100% - 40px);
      }
      
      &-i {
        &__wrap {
          border-radius: 1.25rem;
        }
      }
      
      &-t {
        margin-top: 1.4rem;
        margin-bottom: 0.75rem;
      }
      
      &-st {
        height: 2.5rem;
        
        &__wrap {
          &::before {
            margin-right: 0.35rem;
          }
        }
      }
      
      &-sr {
        display: block;
      }
    }
  }

  /* 1200px real */
  @media only screen and (min-width: 74.9375rem) {
    .gc {
      &-s {
        &::after {
          right: -26px;
        }
      }
    }
  }

  /* 1400px real */
  @media only screen and (min-width: 87.5rem) {
    height: 31.779rem;
  }

  /* 1441px */
  @media only screen and (min-width: 90.063rem) {
    height: 34.583rem;
    
    .gc {
      &-w {
        padding: 1.5rem 0 0;
      }
      
      &-i {
        &__wrap {
          border-radius: 1.5rem;
        }
      }
      
      &-t {
        margin-top: 1.5rem;
        margin-bottom: 1rem;
      }
      
      &-st {
        &__wrap {
          &::before {
            margin-right: 0.35rem;
          }
        }
      }
    }
  }
`;
