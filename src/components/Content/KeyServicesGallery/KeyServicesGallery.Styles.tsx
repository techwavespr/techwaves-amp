import styled from 'styled-components';

export const KeyServicesGalleryComponent = styled('section')`
  margin-top: 2.1rem;
  padding-bottom: 2.25rem;
  
  .ks {
    &-t {
      text-align: center;
      margin-bottom: 1.15rem;
    }

    &-c {
      padding-right: 0;
      padding-left: 0;
      margin-right: 0;
      margin-left: 0;
      max-width: 100%;
      
      &__w {
        border-top: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
        border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
      }
    }
    
    &-row {
      margin-right: 0;
      margin-left: 0;
    }
    
    &-item {
      height: 100%;
      padding: 1.25rem 0;
      
      &__w {
        border-bottom: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.1));
        
        &:last-child {
          border-bottom: 0;
        }
      }
    }
    
    &-gal {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;

      &__w {
        display: flex;
        height: 100%;
        align-items: start;
        flex-wrap: wrap;
        gap: 0.7rem;
      }
      
      &__cont {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-grow: 1;
        width: 100%;
        height: 100%;
        gap: 1rem;
        
        &_w {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
      }
      
      &__t {
        margin-bottom: 0;
      }
      
      &__num {
        color: #FFFFFF;

        &_c {
          display: flex;
        }
        
        &_w {
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--primary);
          border-radius: 0.75rem;
          padding: 0.9rem;
        }
      }
      
      &__desc {
        margin-bottom: 0;
      }
      
      &__nav {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        width: 100%;
        margin-top: 2.75rem;
      }
      
      &__arrows {
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 0.4rem;
      }
      
      &__arrow {
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

        &.-disabled {
          opacity: .35;
          cursor: auto;
          pointer-events: none;
        }
        
        &.-next {
          &::after {
            background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9ImFycm93LXVwIDEiPgo8cGF0aCBpZD0iVmVjdG9yIiBkPSJNMTcuOTU0NyAxMC4yOTQ1TDExLjQ3MzEgMTYuNzc2QzExLjMxMDQgMTYuOTM4NyAxMS4wNDY2IDE2LjkzODcgMTAuODgzOSAxNi43NzZDMTAuNzIxMiAxNi42MTMzIDEwLjcyMTIgMTYuMzQ5NSAxMC44ODM5IDE2LjE4NjhMMTYuNjU0NCAxMC40MTYyTDIuMzM5NjUgMTAuNDE2M0MyLjEwOTU3IDEwLjQxNjIgMS45MjMwMiAxMC4yMjk3IDEuOTIyOTkgOS45OTk2MUMxLjkyMyA5Ljc2OTQ2IDIuMTA5NTYgOS41ODI5MSAyLjMzOTcxIDkuNTgyODlMMTYuNjU0NCA5LjU4MjkyTDEwLjg4MzkgMy44MTI0QzEwLjcyMTIgMy42NDk2OCAxMC43MjEyIDMuMzg1ODYgMTAuODgzOSAzLjIyMzE0QzExLjA0NjYgMy4wNjA0MiAxMS4zMTA0IDMuMDYwNDIgMTEuNDczMSAzLjIyMzE0TDE3Ljk1NSA5LjcwNDk1QzE4LjAzMjUgOS43ODI1IDE4LjA3NjMgOS44ODc0MiAxOC4wNzcgOS45OTcwMkwxOC4wNzcgOS45OTk2MUMxOC4wNzcgMTAuMTAzMiAxOC4wMzg0IDEwLjIwMjggMTcuOTY5MiAxMC4yNzkyQzE3Ljk2NDYgMTAuMjg0MyAxNy45NTk1IDEwLjI4OTYgMTcuOTU0NyAxMC4yOTQ1WiIgZmlsbD0iIzAyMDkxNSIvPgo8L2c+Cjwvc3ZnPgo=);
          }
        }
      }
      
      &__pag {
        display: flex;
        position: relative;
        align-items: center;
        width: auto;
        gap: 2px;
        color: var(--secondary-transparent);
        font-size: 15px;
        line-height: 130%;
      }
      
      &__image {
        &_w {
          display: block;
          position: relative;
          width: 100%;
          border-radius: 0.75rem;
          overflow: hidden;
          height: 15.4rem;
          
          & img {
            width: 100%;
            height: auto;
          }
        }
      }
    }
    
    &-car {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 100%;
      height: 100%;

      &__c {
        position: relative;
        width: 100%;
        height: 13.688rem;
      }
    }
    
    &-ts {
      &__c {
        position: relative;
        height: 15.4rem;
      }
    }
  }

  /* 576px */
  @media only screen and (min-width: 36rem) {
    .ks {
      &-item {
        max-width: 540px;
        padding-right: calc(var(--bs-gutter-x)* .5);
        padding-left: calc(var(--bs-gutter-x)* .5);
        margin-right: auto;
        margin-left: auto;
      }
      
      &-gal {
        max-width: 540px;
        padding-right: calc(var(--bs-gutter-x)* .5);
        padding-left: calc(var(--bs-gutter-x)* .5);
        margin-right: auto;
        margin-left: auto;
      }

      &-car {
        &__c {
          height: 10.863rem;
        }
      }
    }
  }

  /* 768px */
  @media only screen and (min-width: 48rem) {
    .ks {
      &-item {
        max-width: 720px;
      }
      
      &-gal {
        max-width: 720px;
      }
    }
  }

  /* 992px */
  @media only screen and (min-width: 62rem) {
    padding-bottom: 0;
    margin-top: 5.6rem;
    
    .ks {
      &-t {
        margin-bottom: 1.8rem;
      }
      
      &-c {
        max-width: 960px;
        padding-right: calc(var(--bs-gutter-x)* .5);
        padding-left: calc(var(--bs-gutter-x)* .5);
        margin-right: auto;
        margin-left: auto;
      }
      
      &-row {
        flex-direction: row;
        margin-right: calc(-.5* var(--bs-gutter-x));
        margin-left: calc(-.5* var(--bs-gutter-x));
      }
      
      &-item {
        max-width: 100%;
        padding: 1.25rem 0.45rem;
        
        &__gal {
          padding: 2.15rem 1.65rem;
        }
        
        &__w {
          border-left: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
          border-bottom: 0;
          
          &:last-child {
            border-right: 1px solid var(--stroke-transparent, rgba(8, 38, 93, 0.10));
          }
        }
      }
      
      &-gal {
        max-width: 100%;
        padding-top: 0;
        
        &__cont {
          width: 25rem;
          margin-top: 0;
        }
        
        &__nav {
          margin-top: 0;
        }
        
        &__arrow {
          width: 38px;
          height: 38px;
        }
        
        &__image {
          &_w {
            height: 20rem;
          }
        }
      }
      
      &-car {
        &__c {
          height: 15.825rem;
        }
      }

      &-ts {
        &__c {
          height: 20rem;
        }
      }
    }
  }

  /* 1200px real */
  @media only screen and (min-width: 74.9375rem) {
    .ks {
      &-c {
        max-width: 1140px;
      }
      
      &-item {
        &__gal {
          padding: 2.6rem 2.25rem;
        }
      }
      
      &-gal {
        &__cont {
          width: 29rem;
        }
        
        &__w {
          gap: 0.6rem;
        }
        
        &__image {
          &_w {
            height: 24rem;
          }
        }
        
        &__nav {
          margin-top: 0.75rem;
        }
      }

      &-car {
        &__c {
          height: 18.176rem;
        }
      }

      &-ts {
        &__c {
          height: 24rem;
        }
      }
    }
  }

  /* 1400px real */
  @media only screen and (min-width: 87.5rem) {
    margin-top: 7.6rem;
    
    .ks {
      &-c {
        max-width: 1320px;
      }
      
      &-item {
        &__gal {
          padding: 3rem;
        }
      }
      
      &-gal {
        &__image {
          &_w {
            height: 28rem;
          }
        }
        
        &__num {
          &_w {
            padding: 1rem;
          }
        }
        
        &__nav {
          margin-top: 2.25rem;
        }
      }

      &-car {
        &__c {
          height: 19.875rem;
        }
      }

      &-ts {
        &__c {
          height: 28rem;
        }
      }
    }
  }

  /* 1441px */
  @media only screen and (min-width: 90.063rem) {
    margin-top: 8rem;

    .ks {
      &-title {
        margin-bottom: 2.25rem;
      }
      
      &-c {
        max-width: 87.5rem;
      }
      
      &-item {
        padding: 1.5rem 0.65rem;
        
        &__gal {
          padding: 3.2rem;
        }
      }
      
      &-gal {
        padding-top: 0;
        
        &__w {
          gap: 0.7rem;
        }
        
        &__cont {
          width: 35rem;
          margin-top: 0;
          
          &_w {
            gap: 1rem;
          }
        }
        
        &__num {
          &_w {
            padding: 1.2rem;
            min-width: 3.75rem;
          }
        }
        
        &__nav {
          margin-top: 2.5rem;
        }
        
        &__arrow {
          width: 44px;
          height: 44px;
          border-radius: 0.75rem;
        }
        
        &__pag {
          font-size: 17px;
        }
        
        &__image {
          &_w {
            height: 29.3rem;
          }
        }
      }

      &-car {
        &__c {
          height: 20.651rem;
        }
      }

      &-ts {
        &__c {
          height: 29.3rem;
        }
      }
    }
  }
`;
