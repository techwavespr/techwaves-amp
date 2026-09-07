import {ReviewsSliderComponent} from './ReviewsSlider.Styles';
import React from 'react';
import {AmpImg, AmpState, AmpCarousel} from '@/types';
import {ImageType} from '@/const/types.constants';

export type ReviewsSlide = {
  nazvanie_izdaniya?: string;
  imya?: string;
  tekst: string;
  ikonka: ImageType;
};

export type Props = {
  slides: ReviewsSlide[];
};

export default function ReviewsSlider(props: Props) {
  const { slides } = props;
  return (
    <>
      <AmpState id="rs">
        <script type="application/json">
          {JSON.stringify({i: 0, total: slides.length})}
        </script>
      </AmpState>

      <ReviewsSliderComponent className="rg">
        <div className="rg-c">
          <AmpCarousel
            id="rsSlider"
            className="rg-car"
            layout="fill"
            controls="never"
            on="slideChange:AMP.setState({ rs: { i: event.index, total: event.total } })"
            data-amp-bind-slide="rs.i"
          >
            {
              slides.map((slide: ReviewsSlide, index: number) => (
                <div
                  key={`reviews-slide-${index}`}
                  className="rs-slide"
                >
                  <div className="rg-w">
                    <div className="rg-image__w">
                      <div className="rg-image">
                        <AmpImg
                          src={slide.ikonka.url}
                          alt={slide.ikonka.alt}
                          title={slide.ikonka.title}
                          width={slide.ikonka.width}
                          height={slide.ikonka.height}
                          layout="responsive"
                        />
                      </div>
                    </div>
                    <div className="rg-div__w">
                      <svg xmlns="http://www.w3.org/2000/svg" width="71" height="28" viewBox="0 0 71 28" fill="none"
                           className="rg-div">
                        <path d="M0.534646 27.0197C21.1973 -8.31275 56.5881 -4.53309 70.4414 23.2905" stroke="#08265D"
                              strokeOpacity="0.1"></path>
                      </svg>
                    </div>
                    <div className="rg-con">
                      <p className="h5 rg-desc">{slide.tekst}</p>
                      <span className="text-thin">{slide.nazvanie_izdaniya || slide.imya}</span>
                    </div>
                  </div>
                </div>
              ))
            }
          </AmpCarousel>
        </div>

        <div className="rg-nav__c">
          <div className="rg-nav">
            <div className="rg-arrs">
              <div
                role="button"
                tabIndex={0}
                aria-label="Previous slide"
                className="rg-arr -prev -disabled"
                on="tap:rsSlider.prev"
                data-amp-bind-class="'rg-arr -prev' + (rs.i == 0 ? ' -disabled' : '')"
              />
              <div
                role="button"
                tabIndex={0}
                aria-label="Next slide"
                className="rg-arr -next"
                on="tap:rsSlider.next"
                data-amp-bind-class={`'rg-arr -next' + (rs.i == ${slides.length} - 1 ? ' -disabled' : '')`}
              />
            </div>
            <div className="rg-pag">
              <span data-amp-bind-text="rs.i + 1">1</span>
              <span> / </span>
              <span>{slides.length}</span>
            </div>
          </div>
        </div>
      </ReviewsSliderComponent>
    </>
  );
};
