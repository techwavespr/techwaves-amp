import React, { Component } from 'react';
import Head from 'next/head';
import type { GetServerSideProps } from 'next';
import { GridStyle } from '@/styles/grid'
import { GlobalStyle } from '@/styles/global'
import MainLayout from '@/components/Layouts/MainLayout/MainLayout';
import {ApiOk} from '@/pages/api/wp/page/[slug]';
import {CaseType, SEOType, ServiceType} from '@/const/types.constants';
import {AMP_URL, API_URL, WP_URL} from '@/const/general.constants';
import {getHeadData} from '@/lib/getHeadData';
import {ServicesComponent} from '@/styles/servicesComponent.Styles';
import {chunk} from '@/lib/chunk';
import {AmpImg} from '@/types';
import CasesSlider from '@/components/Content/CasesSlider/CasesSlider';

export const config = {
  amp: true,
};

type Props = Omit<ApiOk, 'acf'> & {
  acf?: {
    zagolovok?: string;
  };
  seo: SEOType;
  services?: ServiceType[];
  cases?: CaseType[];
  viewportWidth: number;
  geo: {
    country: string;
  }
};

export default class Services extends Component<Props> {
  render() {
    const { seo, acf, services, cases, geo, viewportWidth } = this.props;

    const servicesRows: ServiceType[][] = chunk<ServiceType>(services ?? [], 3);

    return (
      <MainLayout geo={geo}>
        <Head>
          <title>{seo?.title}</title>
          <meta name="description" content={seo?.description}/>
          <link rel="canonical" href={seo?.canonical}/>
          <meta property="og:locale" content={seo?.og_locale}/>
          <meta property="og:type" content={seo?.og_type}/>
          <meta property="og:title" content={seo?.og_title}/>
          <meta property="og:description" content={seo?.og_description}/>
          <meta property="og:url" content={seo?.og_url}/>
          <meta property="og:site_name" content={seo?.og_site_name}/>
          <meta property="article:modified_time" content={seo?.article_modified_time}/>
          <meta property="og:image" content={seo?.ogImage?.url}/>
          <meta property="og:image:width" content={`${seo?.ogImage?.width}`}/>
          <meta property="og:image:height" content={`${seo?.ogImage?.height}`}/>
          <meta property="og:image:type" content="image/png"/>
          <meta name="twitter:card" content="summary_large_image"/>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(seo?.schema)}}
          />
          <script
            async
            custom-element="amp-base-carousel"
            src="https://cdn.ampproject.org/v0/amp-base-carousel-0.1.js"
          />
        </Head>
        <GridStyle/>
        <GlobalStyle/>

        <ServicesComponent>
          <div className="page-title__wrap">
            <h1 className="h2 page-title" dangerouslySetInnerHTML={{__html: acf?.zagolovok || ''}} />
          </div>

          <div className="page-services">
            {
              servicesRows?.map((servicesChunk: ServiceType[], index: number) => (
                <div
                  key={`page-services-line-${index}`}
                  className="page-services__line"
                >
                  <div className="container page-services__container">
                    <div className="row page-services__row">
                      {servicesChunk.map((service:ServiceType, serviceIndex: number) => (
                        <div
                          key={`service-item-${index}-${serviceIndex}`}
                          className="col-md-4 gallery-services__slide page-services__item"
                        >
                          <a
                            href={service.url.replace(WP_URL, AMP_URL)}
                            className="services-gallery__wrap"
                          >
                            <div className="services-gallery__image_wrap">
                              <AmpImg
                                className="services-gallery__image"
                                src={service.thumbnail}
                                alt={service.thumbnail_alt}
                                title={service.thumbnail_title}
                                width={service.thumbnail_width}
                                height={service.thumbnail_height}
                                layout="responsive"
                              />
                            </div>
                            <div className="services-gallery__description">
                              <h2 className="h4 services-gallery__title">{service.title}</h2>
                              <div className="services-gallery__text_wrap">
                                <p className="text services-gallery__text">
                                  {service.excerpt}
                                </p>
                              </div>
                              <div className="services-gallery__actions">
                                <span className="btn -secondary services-gallery__btn">
                                  More details
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            }
          </div>

          <div className="page-content__cases_wrap">
            <div className="cases-container">
              <h2 className="h2 page-case__title">More cases</h2>
            </div>
            <div className="page-case__gallery">
              <CasesSlider slides={cases || []} viewportWidth={viewportWidth} />
            </div>
          </div>
        </ServicesComponent>

      </MainLayout>
    );
  }
};

export const getServerSideProps: GetServerSideProps<Props> = async ({req, res}) => {

  const headData = getHeadData(req.headers);

  const FIELDS: string = [
    'acf_pick.zagolovok',
    'custom_services',
    'custom_cases'
  ].join(',');

  const pageData: Response = await fetch(`${API_URL}/api/wp/page/services?embed=1&fields=${FIELDS}`);
  if (!pageData.ok) return {notFound: true};
  const data: ApiOk = await pageData.json();

  res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=604800');

  return {
    props: {
      acf: data.acf ?? {},
      seo: data.seo ?? {},
      services: data.services ?? [],
      cases: data.cases ?? [],
      viewportWidth: headData.viewportWidth,
      geo: headData.geo
    }
  };
};
