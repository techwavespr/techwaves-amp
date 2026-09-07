import styled from 'styled-components';

export const PartnersSliderComponent = styled('div')`
  height: calc(3.15rem + 20px);
  position: relative;
  
  .gallery-partners {
    height: 100%;
  }

  .partners-gallery__wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .partners-gallery__wrap svg {
    height: auto;
    width: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .partners-gallery__wrap img {
    height: auto;
    width: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;
