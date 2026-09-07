import { KeyServicesGalleryComponent } from './KeyServicesGallery.Styles';
import React from 'react';
import {AmpImg, AmpState, AmpCarousel} from '@/types';
import {ServiceType} from '@/const/types.constants';
import {AMP_URL, WP_URL} from '@/const/general.constants';

export type KeyService = {
  service: ServiceType;
  dofollow: boolean;
  rewrite_title: string;
  rewrite_description: string;
};

export type Props = {
  key_services: KeyService[];
};

export default function KeyServicesGallery(props: Props) {
  const { key_services } = props;

  return (
    <KeyServicesGalleryComponent className="ks">
      <h2 className="h2 ks-t">Key services</h2>

      <AmpState id="ks">
        <script type="application/json">
          {JSON.stringify({i: 0, total: key_services.length})}
        </script>
      </AmpState>

      <div className="ks-c__w">
        <div className="container ks-c">
          <div className="row ks-row">
            <div className="col-lg-6 col-xl-6 ks-item__w">
              <div className="ks-item ks-item__gal">
                <div className="ks-gal">
                  <div className="ks-car__c">
                    <AmpCarousel
                      id="ksCarousel"
                      className="ks-car"
                      layout="fill"
                      controls="never"
                      on="slideChange:AMP.setState({ ks: { i: event.index, total: event.total } })"
                      data-amp-bind-slide="ks.i"
                    >
                      {key_services.map((key_service: KeyService, index: number) => (
                        <div key={`key_service-${index}`} className="ks-slide">
                          <div className="ks-gal__w">
                            <div className="ks-gal__cont">
                              <div className="ks-gal__num_c">
                                <div className="ks-gal__num_w">
                                <span
                                  className="text ks-gal__num">{(index + 1).toString().padStart(2, '0')}</span>
                                </div>
                              </div>

                              <a
                                href={key_service.service.url.replace(WP_URL, AMP_URL)}
                                rel={key_service.dofollow ? undefined : 'nofollow'}
                                className="ks-gal__cont_w"
                              >
                                <h2 className="h4 ks-gal__t">
                                  {key_service.rewrite_title || key_service.service.title}
                                </h2>
                                <p className="text-thin ks-gal__desc">
                                  {key_service.rewrite_description || key_service.service.excerpt}
                                </p>
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </AmpCarousel>
                  </div>

                  <div className="ks-gal__nav">
                    <div className="ks-gal__arrows">
                      <div
                        role="button"
                        tabIndex={0}
                        aria-label="Previous slide"
                        className="ks-gal__arrow -prev -disabled"
                        on="tap:ksCarousel.prev, ksThumbs.prev"
                        data-amp-bind-class="'ks-gal__arrow -prev' + (ks.i == 0 ? ' -disabled' : '')"
                      />
                      <div
                        role="button"
                        tabIndex={0}
                        aria-label="Next slide"
                        className="ks-gal__arrow -next"
                        on="tap:ksCarousel.next, ksThumbs.next"
                        data-amp-bind-class={`'ks-gal__arrow -next' + (ks.i == ${key_services.length} - 1 ? ' -disabled' : '')`}
                      />
                    </div>

                    <div className="ks-gal__pag">
                      <span data-amp-bind-text="ks.i + 1">1</span>
                      <span> / </span>
                      <span>{key_services.length}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-lg-6 col-xl-6 ks-item__w">
              <div className="ks-item">
                <div className="ks-ts__c">
                  <AmpCarousel
                    id="ksThumbs"
                    layout="fill"
                    controls="never"
                    on="slideChange:AMP.setState({ ks: { i: event.index, total: event.total } })"
                    data-amp-bind-slide="ks.i"
                  >
                    {key_services.map((key_service: KeyService, index: number) => (
                      <div
                        key={`key_service-thumb-${index}`}
                        className="thumb-slide"
                      >
                        <a
                          href={key_service.service.url.replace(WP_URL, AMP_URL)}
                          rel={key_service.dofollow ? '' : 'nofollow'}
                          className="ks-gal__image_w"
                        >
                          <AmpImg
                            className="ks-gal__image"
                            src={key_service.service.thumbnail}
                            alt={key_service.service.thumbnail_alt}
                            title={key_service.service.thumbnail_title}
                            width="461"
                            height="362"
                            layout="responsive"
                          />
                        </a>
                      </div>
                    ))}
                  </AmpCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </KeyServicesGalleryComponent>
  );
};
