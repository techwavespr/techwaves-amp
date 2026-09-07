import {ClientsSliderComponent} from './ClientsSlider.Styles';
import React from 'react';
import {AmpImg, AmpCarousel} from '@/types';
import {ImageType} from '@/const/types.constants';

export type ClientsSlide = {
  logotip: ImageType
};

export type Props = {
  slides: ClientsSlide[];
  viewportWidth: number;
};

export default function ClientsSlider(props: Props) {
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
    <ClientsSliderComponent className="clients-gallery">
      <AmpCarousel
        id="csSlider"
        className="gallery-clients"
        layout="fill"
        visibleCount={visibleCount}
        controls="never"
        loop={true}
        advanceCount={1}
      >
      {
        slides.map((icon: ClientsSlide, index: number) => (
          <div key={`client-slide-${index}`} className="cs-slide">
            <div className="clients-gallery__wrap">
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
    </ClientsSliderComponent>
  );
};
