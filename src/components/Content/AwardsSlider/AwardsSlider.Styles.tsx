import styled from 'styled-components';

export const AwardsSliderComponent = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-bottom: 2.25rem;
  
  .ag {
    &-c {
      position: relative;
      height: 9.941rem;
      width: 100%;
    }
    
    &-car {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 100%;
    }
    
    &-w {
      display: flex;
      align-items: start;
      flex-wrap: wrap;
      gap: 0.25rem;
      padding: 1.25rem 0;
    }
    
    &-h {
      display: flex;
      align-items: flex-start;
      gap: 0.4rem;
    }
    
    &-image {
      width: 100%;
      height: auto;
      
      &__w {
        width: 2.25rem;
        margin-right: 1rem;
      }
    }
    
    &-div {
      &__w {
        display: none;
        width: 4.25rem;
        
        & svg {
          width: 100%;
          height: auto;
        }
      }
    }

    &-t {
      color: var(--secondary, #020915);
      line-height: 120%;
      margin-bottom: 0;
    }
    
    &-con {
      display: flex;
      flex-direction: column;
      justify-content: start;
      width: 100%;
      
      & .ag-t {
        display: none;
      }
    }
    
    &-desc {
      color: var(--secondary-transparent-bold, #4e535b);
      margin-top: 0.5rem;
      
      &__link {
        color: var(--secondary-transparent-bold, #4e535b);
      }
    }
    
    &-nav {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      width: 100%;
      margin-top: 0;
      
      &__c {
        position: relative;
        width: 100%;
      }
    }

    &-arrows {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 0.5rem;
    }
    
    &-arrow {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      border-radius: 0.5rem;
      border: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
      width: 2rem;
      height: 2rem;
      margin-top: 0;
      top: 0;
      left: 0;
      
      &::after {
        width: 44px;
        height: 44px;
        content: '';
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9ImFycm93LXVwIDEiPgo8cGF0aCBpZD0iVmVjdG9yIiBkPSJNMi4wNDUzNCAxMC4yOTQ1TDguNTI2ODYgMTYuNzc2QzguNjg5NTUgMTYuOTM4NyA4Ljk1MzQyIDE2LjkzODcgOS4xMTYxMiAxNi43NzZDOS4yNzg4MSAxNi42MTMzIDkuMjc4ODEgMTYuMzQ5NSA5LjExNjEyIDE2LjE4NjhMMy4zNDU2IDEwLjQxNjJMMTcuNjYwNCAxMC40MTYzQzE3Ljg5MDQgMTAuNDE2MiAxOC4wNzcgMTAuMjI5NyAxOC4wNzcgOS45OTk2MUMxOC4wNzcgOS43Njk0NiAxNy44OTA0IDkuNTgyOTEgMTcuNjYwMyA5LjU4Mjg5TDMuMzQ1NTkgOS41ODI5Mkw5LjExNjEyIDMuODEyNEM5LjI3ODgzIDMuNjQ5NjggOS4yNzg4MyAzLjM4NTg2IDkuMTE2MTIgMy4yMjMxNEM4Ljk1MzQgMy4wNjA0MiA4LjY4OTU4IDMuMDYwNDIgOC41MjY4NiAzLjIyMzE0TDIuMDQ1MDUgOS43MDQ5NUMxLjk2NzUgOS43ODI1IDEuOTIzNyA5Ljg4NzQyIDEuOTIyOTkgOS45OTcwMkwxLjkyMjk4IDkuOTk5NjFDMS45MjI5OCAxMC4xMDMyIDEuOTYxNTcgMTAuMjAyOCAyLjAzMDc5IDEwLjI3OTJDMi4wMzU0MSAxMC4yODQzIDIuMDQwNDUgMTAuMjg5NiAyLjA0NTM0IDEwLjI5NDVaIiBmaWxsPSIjMDIwOTE1Ii8+CjwvZz4KPC9zdmc+Cg==);
        background-repeat: no-repeat;
        background-position: center;
      }

      &.-next {
        &::after {
          background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9ImFycm93LXVwIDEiPgo8cGF0aCBpZD0iVmVjdG9yIiBkPSJNMTcuOTU0NyAxMC4yOTQ1TDExLjQ3MzEgMTYuNzc2QzExLjMxMDQgMTYuOTM4NyAxMS4wNDY2IDE2LjkzODcgMTAuODgzOSAxNi43NzZDMTAuNzIxMiAxNi42MTMzIDEwLjcyMTIgMTYuMzQ5NSAxMC44ODM5IDE2LjE4NjhMMTYuNjU0NCAxMC40MTYyTDIuMzM5NjUgMTAuNDE2M0MyLjEwOTU3IDEwLjQxNjIgMS45MjMwMiAxMC4yMjk3IDEuOTIyOTkgOS45OTk2MUMxLjkyMyA5Ljc2OTQ2IDIuMTA5NTYgOS41ODI5MSAyLjMzOTcxIDkuNTgyODlMMTYuNjU0NCA5LjU4MjkyTDEwLjg4MzkgMy44MTI0QzEwLjcyMTIgMy42NDk2OCAxMC43MjEyIDMuMzg1ODYgMTAuODgzOSAzLjIyMzE0QzExLjA0NjYgMy4wNjA0MiAxMS4zMTA0IDMuMDYwNDIgMTEuNDczMSAzLjIyMzE0TDE3Ljk1NSA5LjcwNDk1QzE4LjAzMjUgOS43ODI1IDE4LjA3NjMgOS44ODc0MiAxOC4wNzcgOS45OTcwMkwxOC4wNzcgOS45OTk2MUMxOC4wNzcgMTAuMTAzMiAxOC4wMzg0IDEwLjIwMjggMTcuOTY5MiAxMC4yNzkyQzE3Ljk2NDYgMTAuMjg0MyAxNy45NTk1IDEwLjI4OTYgMTcuOTU0NyAxMC4yOTQ1WiIgZmlsbD0iIzAyMDkxNSIvPgo8L2c+Cjwvc3ZnPgo=);
        }
      }

      &.-disabled {
        opacity: .35;
        cursor: auto;
        pointer-events: none;
      }
    }
    
    &-pag {
      display: flex;
      position: relative;
      align-items: center;
      width: auto;
      gap: 2px;
      color: var(--secondary-transparent);
      font-size: 15px;
      line-height: 130%;
    }
  }

  /* 576px */
  @media only screen and (min-width: 36rem) {
    .ag {
      &-c {
        height: 8.535rem;
      }
    }
  }
  
  /* 992px */
  @media only screen and (min-width: 62rem) {
    padding: 8rem 0;

    .ag {
      &-c {
        width: 39.1rem;
        height: 6.125rem;
      }
      
      &-car {
        width: 39.1rem;
      }
      
      &-w {
        gap: 0.3rem;
        padding: 0;
      }
      
      &-image {
        &__w {
          width: 5.25rem;
          margin-right: 0;
        }
      }
      
      &-div {
        &__w {
          display: block;
          width: 3.75rem;
        }
      }
      
      &-h {
        & .ag-t {
          display: none;
        }
      }
      
      &-con {
        width: 29rem;

        & .ag-t {
          display: block;
        }
      }
      
      &-desc {
        margin-top: 1rem ;
      }
      
      &-nav {
        width: 29rem;
        margin-top: 2.1rem;
        
        &__c {
          display: flex;
          justify-content: flex-end;
          width: 39.1rem;
        }
      }
      
      &-arrows {
        gap: 0.4rem;
      }
      
      &-arrow {
        width: 38px;
        height: 38px;
      }
    }
  }

  /* 1400px real */
  @media only screen and (min-width: 87.5rem) {
    padding: 7rem 0;

    .ag {
      &-c {
        width: 41rem;
      }
      &-car {
        width: 41rem;
      }

      &-nav {
        width: 31rem;

        &__c {
          width: 41rem;
        }
      }
    }
  }
  
  /* 1441px */
  @media only screen and (min-width: 90.063rem) {
    .ag {
      &-w {
        gap: 0.6rem;
      }
      
      &-image {
        &__w {
          width: 6.25rem;
          margin-right: 0;
        }
      }
      
      &-div {
        &__w {
          display: block;
          width: 4.25rem;
        }
      }
      
      &-con {
        width: 35rem;
      }
      
      &-nav {
        width: 35rem;
        margin-top: 2.5rem;
      }
      
      &-arrow {
        width: 44px;
        height: 44px;
        border-radius: 0.75rem;
      }
      
      &-pag {
        font-size: 17px;
      }

      &-c {
        width: 47rem;
        height: 7.036rem;
      }
      &-car {
        width: 47rem;
      }

      &-nav {
        width: 35rem;

        &__c {
          width: 47rem;
        }
      }
    }
  }
`;
