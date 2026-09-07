import React, { Component } from 'react';
import Head from 'next/head';
import type { GetServerSideProps } from 'next';
import { GridStyle } from '@/styles/grid'
import { GlobalStyle } from '@/styles/global'
import MainLayout from '@/components/Layouts/MainLayout/MainLayout';
import {ApiOk} from '@/pages/api/wp/page/[slug]';
import {CaseType, SEOType} from '@/const/types.constants';
import {AMP_URL, API_URL, WP_URL} from '@/const/general.constants';
import {getHeadData} from '@/lib/getHeadData';
import {chunk} from '@/lib/chunk';
import {AmpImg} from '@/types';
import {CasesComponent} from '@/styles/casesComponent.Styles';

export const config = {
  amp: true,
};

type Props = Omit<ApiOk, 'acf'> & {
  title?: string;
  acf?: {
    zagolovok?: string;
  };
  seo: SEOType;
  cases?: CaseType[];
  geo: {
    country: string;
  }
};

export default class Cases extends Component<Props> {
  render() {
    const { seo, acf, cases, geo, title } = this.props;

    const casesRows: CaseType[][] = chunk<CaseType>(cases ?? [], 2);

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
        </Head>
        <GridStyle/>
        <GlobalStyle/>

        <CasesComponent>
          <div className="page-title__wrap">
            <h1 className="h2 page-title">{title}</h1>
            <span className="h2 page-title">{acf?.zagolovok}</span>
          </div>
          <div className="page-cases">
            {
              casesRows?.map((casesChunk: CaseType[], index: number) => (
                <div
                  key={`page-cases-line-${index}`}
                  className="page-cases__line"
                >
                  <div className="container page-cases__container">
                    <div className="row page-cases__row">
                      {casesChunk.map((cases: CaseType, casesIndex: number) => (
                        <div
                          key={`case-item-${index}-${casesIndex}`}
                          className="col-md-6 gallery-cases__slide page-cases__item"
                        >
                          <a
                            href={cases.url.replace(WP_URL, AMP_URL)}
                            className="cases-gallery__wrap"
                          >
                            <div className="cases-gallery__image_wrap">
                              <AmpImg
                                className="cases-gallery__image"
                                src={cases.thumbnail.url}
                                alt={cases.thumbnail.alt}
                                title={cases.thumbnail.title}
                                width={cases.thumbnail.width}
                                height={cases.thumbnail.height}
                                layout="responsive"
                              />
                            </div>
                            <div className="cases-gallery__description">
                              <h3 className="h4 cases-gallery__title">{cases.title}</h3>
                              <div className="cases-gallery__subtitle_wrap">
                                <span className="text cases-gallery__subtitle">{cases.sub_title}</span>
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
        </CasesComponent>

      </MainLayout>
    );
  }
};

export const getServerSideProps: GetServerSideProps<Props> = async ({req, res}) => {

  const headData = getHeadData(req.headers);

  const FIELDS: string = [
    'title.rendered',
    'acf_pick.zagolovok',
    'custom_cases'
  ].join(',');

  const pageData: Response = await fetch(`${API_URL}/api/wp/page/cases?embed=1&fields=${FIELDS}`);
  if (!pageData.ok) return {notFound: true};
  const data: ApiOk = await pageData.json();

  res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=604800');

  return {
    props: {
      title: data.title,
      acf: data.acf ?? {},
      seo: data.seo ?? {},
      cases: data.cases ?? [],
      geo: headData.geo
    }
  };
};
