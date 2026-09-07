import {PartnersSliderComponent} from './PartnersSlider.Styles';
import React from 'react';
import {AmpImg, AmpCarousel} from '@/types';
import {ImageType} from '@/const/types.constants';

export type PartnersSlide = {
  logotip: ImageType
};

export type Props = {
  slides: PartnersSlide[];
  viewportWidth: number;
};

export default function PartnersSlider(props: Props) {
  const {
    slides,
    // viewportWidth,
  } = props;

  // const visibleCount: number =
  //   viewportWidth >= 1200 ? 5 :
  //     viewportWidth >= 992 ? 3 :
  //       viewportWidth >= 768 ? 2 : 1.5;

  const visibleCount: number = 1.5;

  return (
    <PartnersSliderComponent className="partners-gallery">
      <AmpCarousel
        id="psSlider"
        className="gallery-partners"
        layout="fill"
        visibleCount={visibleCount}
        controls="never"
        loop={true}
      >
      {
        slides.map((icon: PartnersSlide, index: number) => (
          <div key={`partners-slide-${index}`} className="ps-slide">
            <div className="partners-gallery__wrap">
              <AmpImg
                src={icon.logotip.url}
                alt={icon.logotip.alt}
                title={icon.logotip.title}
                layout="fill"
              />
            </div>
          </div>
        ))
      }
      </AmpCarousel>
    </PartnersSliderComponent>
  );
};
