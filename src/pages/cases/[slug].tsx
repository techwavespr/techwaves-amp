import React, { Component } from 'react';
import Head from 'next/head';
import type { GetServerSideProps } from 'next';
import { GridStyle } from '@/styles/grid'
import { GlobalStyle } from '@/styles/global'
import MainLayout from '@/components/Layouts/MainLayout/MainLayout';
import {ApiOk} from '@/pages/api/wp/page/[slug]';
import {
  CaseType,
  ImageType,
  SEOType
} from '@/const/types.constants';
import {API_URL} from '@/const/general.constants';
import {getHeadData} from '@/lib/getHeadData';
import {AmpImg} from '@/types';
import {SecondaryComponent} from '@/styles/secondaryComponent.Styles';
import CasesSlider from '@/components/Content/CasesSlider/CasesSlider';

export const config = {
  amp: true,
};

type ContentType = {
  acf_fc_layout: string;
  publikaczii: {
    izobrazhenie: ImageType;
  }[];
  opisanie: string;
  stat: {
    izobrazhenie: ImageType;
  }[];
};

type Props = Omit<ApiOk, 'acf'> & {
  title?: string;
  thumbnail?: ImageType | null;
  acf?: {
    podzagolovok?: string;
    czel?: string;
    rezultaty?: {
      rezultat: string;
    }[];
    publikaczii?: ContentType[];
  };
  seo: SEOType;
  cases?: CaseType[];
  viewportWidth: number;
  geo: {
    country: string;
  }
};

export default class CasesItem extends Component<Props> {
  render() {
    const {
      seo,
      acf,
      geo,
      viewportWidth,
      title,
      thumbnail,
      cases
    } = this.props;

    console.log('cases', cases);

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

        <SecondaryComponent>
          <div className="page-case">
            <div className="page-content">
              <div className="container page-content__container">
                <div className="row page-content__row">
                  <div className="page-content__left col-lg-4">
                    <div className="page-content__wrap">
                      <div className="breadcrumbs">
                        <span>
                          <a
                            className="breadcrumbs__link text-thin"
                            href={`/`}
                          >
                            <span>Main</span>
                          </a>
                        </span>
                        <span className="breadcrumbs__separator text-thin">/</span>
                        <span>
                          <a
                            className="breadcrumbs__link text-thin"
                            href={`/cases`}
                          >
                            <span>Cases</span>
                          </a>
                        </span>
                        <span className="breadcrumbs__separator text-thin">/</span>
                        <span className="breadcrumbs__current text-thin">{title}</span>
                      </div>

                      <div className="page-content__title_wrap">
                        <h2 className="h2 page-content__title">{title}</h2>
                      </div>

                      <div className="page-content__subtitle_wrap">
                        <h1 className="text page-content__subtitle">{acf?.podzagolovok}</h1>
                      </div>

                      <div className="page-content__goal_wrap">
                        <span className="h5 page-content__goal_title">PR goal</span>
                        <p className="text-thin page-content__goal">{acf?.czel}</p>
                      </div>

                      <div className="page-content__results_wrap">
                        <span className="h5 page-content__results_title">Results</span>
                        <ul className="text-thin page-content__results">
                          {
                            acf?.rezultaty?.map((result: { rezultat: string }, index: number) => (
                              <li key={`result-${index}`}>{result.rezultat}</li>
                            ))
                          }
                        </ul>
                      </div>

                      <div className="page-content__actions_wrap">
                        <a href={`/services/public-relations#booking_service`} className="page-content__btn btn go_to_booking"> Get same service </a>
                      </div>
                    </div>
                  </div>
                  <div className="page-content__right col-lg-8">
                    <div className="page-content__scrolled_wrap">
                      <div className="page-content__scrolled">
                        <div className="page-content__thumbnail_container">
                          <div className="page-content__thumbnail_wrap">
                            <AmpImg
                              className="page-content__thumbnail"
                              src={thumbnail?.url || ''}
                              alt={thumbnail?.alt}
                              title={thumbnail?.title}
                              width={thumbnail?.width}
                              height={thumbnail?.height}
                              layout="responsive"
                            />
                          </div>
                        </div>

                        {
                          acf?.publikaczii?.map((contentItem: ContentType, index: number) => {
                            if (contentItem.acf_fc_layout === 'publikaczii') {
                              return (
                                <div
                                  key={`content-publications-${index}`}
                                  className="page-content__publication_wrap"
                                >
                                  {
                                    contentItem.publikaczii.map((publication: {izobrazhenie: ImageType}, indexContent: number) => (
                                      <div
                                        key={`content-publications-${indexContent}-pub-${indexContent}`}
                                        className="page-content__publication"
                                      >
                                        <AmpImg
                                          className="page-content__publication_img"
                                          src={publication.izobrazhenie?.url || ''}
                                          alt={publication.izobrazhenie?.alt}
                                          title={publication.izobrazhenie?.title}
                                          width={publication.izobrazhenie?.width}
                                          height={publication.izobrazhenie?.height}
                                          layout="responsive"
                                        />
                                      </div>
                                    ))
                                  }
                                </div>
                              );
                            }
                          })
                        }


                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="page-content__cases_wrap">
              <div className="cases-container">
                <span className="h2 page-case__title">More cases</span>
              </div>
              <div className="page-case__gallery">
                <CasesSlider slides={cases || []} viewportWidth={viewportWidth} />
              </div>
            </div>
          </div>
        </SecondaryComponent>
      </MainLayout>
    );
  }
};

export const getServerSideProps: GetServerSideProps<Props> = async ({req, res, params}) => {
  const raw: string | string[] = params?.slug || '';
  const slug: string = Array.isArray(raw) ? raw.join('/') : raw;

  const headData = getHeadData(req.headers);

  const FIELDS: string = [
    'title.rendered',
    'thumbnail',
    'acf_pick.podzagolovok',
    'acf_pick.czel',
    'acf_pick.rezultaty',
    'acf_pick.publikaczii',
    'custom_cases'
  ].join(',');

  const pageData: Response = await fetch(`${API_URL}/api/wp/page/${slug}?cpt=cases&embed=1&fields=${FIELDS}`);
  if (!pageData.ok) return {notFound: true};
  const data: ApiOk = await pageData.json();

  res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=604800');

  return {
    props: {
      title: data.title,
      thumbnail: data.thumbnail,
      acf: data.acf ?? {},
      seo: data.seo ?? {},
      cases: data.cases ?? [],
      viewportWidth: headData.viewportWidth,
      geo: headData.geo
    }
  };
};
