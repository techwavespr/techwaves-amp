import React from 'react';
import Head from 'next/head';
import type { GetServerSideProps } from 'next';
import { GridStyle } from '@/styles/grid'
import { GlobalStyle } from '@/styles/global'
import MainLayout from '@/components/Layouts/MainLayout/MainLayout';
import {ApiOk} from '@/pages/api/wp/page/[slug]';
import {SEOType} from '@/const/types.constants';
import {API_URL} from '@/const/general.constants';
import {getHeadData} from '@/lib/getHeadData';
import {SecondaryComponent} from '@/styles/secondaryComponent.Styles';

export const config = {
  amp: true,
};

type Props = Omit<ApiOk, 'acf'> & {
  seo: SEOType;
  geo: {
    country: string;
  },
  content?: string;
};

export default function PrivacyPolicy(props: Props) {
  const { seo, geo, content } = props;

  return (
    <MainLayout geo={geo}>
      <Head>
        <title>{seo?.title}</title>
        <meta name="description" content={seo?.description}/>
        <link rel="canonical" href={seo?.canonical}/>
        <meta name="robots" content="noindex, nofollow"/>
      </Head>
      <GridStyle/>
      <GlobalStyle/>

      <SecondaryComponent>
        <div className="container">
          <div className="page__default-content" dangerouslySetInnerHTML={{__html: content || ''}} />
        </div>
      </SecondaryComponent>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({req, res}) => {

  const headData = getHeadData(req.headers);

  const FIELDS: string = [
    'content.rendered',
  ].join(',');

  const pageData: Response = await fetch(`${API_URL}/api/wp/page/privacy-policy?embed=1&fields=${FIELDS}`);
  if (!pageData.ok) return {notFound: true};
  const data: ApiOk = await pageData.json();

  res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=604800');

  return {
    props: {
      seo: data.seo ?? {},
      geo: headData.geo,
      content: data.content
    }
  };
};
