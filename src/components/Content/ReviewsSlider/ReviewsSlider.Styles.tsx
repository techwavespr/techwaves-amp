import styled from 'styled-components';

export const ReviewsSliderComponent = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding-top: 1.25rem;
  
  .rg {
    &-c {
      position: relative;
      height: 26rem;
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
      gap: 0.7rem;
    }
    
    &-image {
      &__w {
        width: 3.75rem;
        border-radius: 0.75rem;
        overflow: hidden;
        
        & img {
          width: 100%;
          height: auto;
        }
      }
    }
    
    &-div {
      &__w {
        display: none;
        width: 3.75rem;
        
        & svg {
          width: 100%;
          height: auto;
        }
      }
    }
    
    &-con {
      display: flex;
      flex-direction: column;
      justify-content: start;
      width: 100%;
      margin-top: 0.6rem;
    }
    
    &-desc {
      line-height: 120%;
      margin-bottom: 1rem;
    }
    
    &-nav {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      width: 100%;
      margin-top: 2rem;

      &__c {
        position: relative;
        width: 100%;
      }
    }
    
    &-arrs {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 0.4rem;
    }
    
    &-arr {
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
    max-width: 540px;
    padding-right: calc(var(--bs-gutter-x)* .5);
    padding-left: calc(var(--bs-gutter-x)* .5);
    margin-right: auto;
    margin-left: auto;

    .rg {
      &-c {
        height: 18.854rem;
      }
    }
  }

  /* 768px */
  @media only screen and (min-width: 48rem) {
    max-width: 720px;

    .rg {
      &-c {
        height: 16rem;
      }
    }
  }

  /* 992px */
  @media only screen and (min-width: 62rem) {
    max-width: 100%;
    padding-top: 0;

    .rg {
      &-c {
        height: 18.75rem;
      }
      
      &-car {
        width: 35.25rem;
      }
      
      &-image {
        &__w {
          width: 5.25rem;
          border-radius: 0.5rem;
        }
      }
      
      &-con {
        width: 25rem;
        margin-top: 0;
      }
      
      &-desc {
        margin-bottom: 0.9rem;
      }
      
      &-nav {
        width: 26rem;
        margin-top: 1.6rem;

        &__c {
          display: flex;
          justify-content: flex-end;
        }
      }
      
      &-arr {
        width: 38px;
        height: 38px;
      }
    }
  }

  /* 1200px real */
  @media only screen and (min-width: 74.9375rem) {
    .rg {
      &-c {
        height: 17.25rem;
      }
      
      &-div {
        &__w {
          display: block;
        }
      }
      
      &-car {
        width: 39.31rem;
      }
      
      &-con {
        width: 29rem;
      }
      
      &-w {
        gap: 0.6rem;
      }
      
      &-nav {
        width: 29rem;
        
        &__c {
          width: 39.31rem;
          align-self: flex-start;
        }
      }
    }
  }

  /* 1441px */
  @media only screen and (min-width: 90.063rem) {
    padding-top: 0;

    .rg {
      &-c {
        height: 20.591rem;
      }
      
      &-car {
        width: 47rem;
      }
      
      &-w {
        gap: 0.7rem;
      }
      
      &-image {
        &__w {
          width: 6.25rem;
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
        margin-top: 0;
      }
      
      &-desc {
        margin-bottom: 1rem;
      }
      
      &-nav {
        width: 35rem;
        margin-top: 2rem;

        &__c {
          width: 47rem;
        }
      }
      
      &-arr {
        width: 44px;
        height: 44px;
        border-radius: 0.75rem;
      }
      
      &-pag {
        font-size: 17px;
      }
    }
  }
`;
