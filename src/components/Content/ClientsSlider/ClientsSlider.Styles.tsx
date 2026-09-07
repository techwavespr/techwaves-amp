import styled from 'styled-components';

export const ClientsSliderComponent = styled('div')`
  height: calc(3.15rem + 20px);
  position: relative;

  .clients-gallery__wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .clients-gallery__wrap svg {
    height: auto;
    width: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .clients-gallery__wrap img {
    height: auto;
    width: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;
