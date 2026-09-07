import {AwardsSliderComponent} from './AwardsSlider.Styles';
import React from 'react';
import {AmpImg, AmpState, AmpCarousel} from '@/types';
import {ImageType} from '@/const/types.constants';

export type AwardsSlide = {
  zagolovok: string;
  opisanie: string;
  ikonka: ImageType;
};

export type Props = {
  slides: AwardsSlide[];
};

export default function AwardsSlider(props: Props) {
  const { slides } = props;
  return (
    <>
      <AmpState id="as">
        <script type="application/json">
          {JSON.stringify({i: 0, total: slides.length})}
        </script>
      </AmpState>

      <AwardsSliderComponent className="ag">
        <div className="ag-c">
          <AmpCarousel
            id="asSlider"
            className="ag-car"
            layout="fill"
            controls="never"
            on="slideChange:AMP.setState({ as: { i: event.index, total: event.total } })"
            data-amp-bind-slide="as.i"
          >
            {
              slides.map((slide: AwardsSlide, index: number) => (
                <div
                  key={`awards-slide-${index}`}
                  className="as-slide"
                >
                  <div className="ag-w">
                    <div className="ag-h">
                      <div className="ag-image__w">
                        <AmpImg
                          src={slide.ikonka.url}
                          alt={slide.ikonka.alt}
                          title={slide.ikonka.title}
                          width="100"
                          height="100"
                          layout="responsive"
                        />
                      </div>
                      <div className="ag-div__w">
                        <svg xmlns="http://www.w3.org/2000/svg" width="71" height="28" viewBox="0 0 71 28" fill="none"
                             className="ag-div">
                          <path d="M0.534646 27.0197C21.1973 -8.31275 56.5881 -4.53309 70.4414 23.2905" stroke="#08265D"
                                strokeOpacity="0.1"></path>
                        </svg>
                      </div>
                      <div className="ag-t__w">
                        <span className="h4 ag-t">{slide.zagolovok}</span>
                      </div>
                    </div>
                    <div className="ag-con">
                      <span className="h4 ag-t">{slide.zagolovok}</span>
                      <p className="text-thin ag-desc">{slide.opisanie}</p></div>
                  </div>
                </div>
              ))
            }
          </AmpCarousel>
        </div>

        <div className="ag-nav__c">
          <div className="ag-nav">
            <div className="ag-arrows">
              <div
                role="button"
                tabIndex={0}
                aria-label="Previous slide"
                className="ag-arrow -prev -disabled"
                on="tap:asSlider.prev"
                data-amp-bind-class="'ag-arrow -prev' + (as.i == 0 ? ' -disabled' : '')"
              />
              <div
                role="button"
                tabIndex={0}
                aria-label="Next slide"
                className="ag-arrow -next"
                on="tap:asSlider.next"
                data-amp-bind-class={`'ag-arrow -next' + (as.i == ${slides.length} - 1 ? ' -disabled' : '')`}
              />
            </div>
            <div className="ag-pag">
              <span data-amp-bind-text="as.i + 1">1</span>
              <span> / </span>
              <span>{slides.length}</span>
            </div>
          </div>
        </div>
      </AwardsSliderComponent>
    </>
);
};
