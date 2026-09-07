import {CasesSliderComponent} from './CasesSlider.Styles';
import React from 'react';
import {AmpImg, AmpState, AmpCarousel} from '@/types';
import {CaseType} from '@/const/types.constants';
import {AMP_URL, WP_URL} from '@/const/general.constants';

export type Props = {
  slides: CaseType[];
  viewportWidth: number;
};

export default function CasesSlider(props: Props) {
  const {
    slides,
    // viewportWidth,
  } = props;

  // const visibleCount: number =
  //   viewportWidth >= 1200 ? 2.5 :
  //     viewportWidth >= 992 ? 2 :
  //       viewportWidth >= 768 ? 1 : 1;

  const visibleCount: number = 1;

  return (
    <>
      <AmpState id="casesslider">
        <script type="application/json">
          {JSON.stringify({i: 0, total: slides.length})}
        </script>
      </AmpState>

      <CasesSliderComponent className="cases-gallery">
        <AmpCarousel
          id="casesSlider"
          className="gc"
          layout="fill"
          visibleCount={visibleCount}
          advanceCount={1}
          loop
          controls="never"
          on="slideChange:AMP.setState({ casesslider: { i: event.index, total: event.total } })"
          data-amp-bind-slide="casesslider.i"
        >
          {slides.map((slide: CaseType, index: number) => (
            <div
              key={`cases-slide-${index}`}
              className="gc-s casesslider-slide"
            >
              <div className="gc-sr" aria-hidden="true" role="presentation"/>
              <a
                href={slide.url.replace(WP_URL, AMP_URL)}
                rel="nofollow"
                className="gc-w"
              >
                <div className="gc-i__wrap">
                  <AmpImg
                    src={slide.thumbnail.url}
                    alt={slide.thumbnail.alt}
                    title={slide.thumbnail.title}
                    width={slide.thumbnail.width || 716}
                    height={slide.thumbnail.height || 478}
                    layout="responsive"
                    className="gc-i"
                  />
                </div>
                <div className="gc-d">
                  <span className="h4 gc-t">{slide.title}</span>
                  <div className="gc-st__wrap">
                    <span className="text gc-st">{slide.sub_title}</span>
                  </div>
                </div>
              </a>
              <div className="gc-sr" aria-hidden="true" role="presentation"/>
            </div>
          ))}
        </AmpCarousel>
      </CasesSliderComponent>
    </>
  );
};
