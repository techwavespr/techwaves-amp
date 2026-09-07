import React from 'react';
import Head from 'next/head';
import type { GetServerSideProps } from 'next';
import { GridStyle } from '@/styles/grid'
import { GlobalStyle } from '@/styles/global'
import MainLayout from '@/components/Layouts/MainLayout/MainLayout';
import {ApiOk} from '@/pages/api/wp/page/[slug]';
import {SEOType} from '@/const/types.constants';
import {Offices, API_URL} from '@/const/general.constants';
import {getHeadData} from '@/lib/getHeadData';
import {ContactsComponent} from '@/styles/contactsComponent.Styles';
import {AmpIframe, AmpState} from '@/types';

export const config = {
  amp: true,
};

type Props = Omit<ApiOk, 'acf'> & {
  seo: SEOType;
  geo: {
    country: string;
  }
};

export default function Contacts(props: Props) {
  const { seo, geo } = props;

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
          custom-element="amp-iframe"
          src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"
        />
      </Head>
      <GridStyle/>
      <GlobalStyle/>

      <ContactsComponent>
        <AmpState id="office">
          <script
            type="application/json"
            dangerouslySetInnerHTML={{__html: JSON.stringify({
                title: "New York",
                map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.890191573973!2d-73.97277432376774!3d40.76443983440331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259925b9e9437%3A0xefd52ca041aab80a!2sTechWaves!5e0!3m2!1sen!2sus!4v1765486529199!5m2!1sen!2sus",
                country: "USA",
                lat: 40.765231,
                lng: -73.972987
            })}}
          />
        </AmpState>

        <div className="page-title__wrap">
          <h1 className="h2 page-title">Contacts</h1>
        </div>

        <div className="page-case">
          <div className="page-content">
            <section className="page-content__offices">
              <div className="container">
                <div className="offices-grid">
                  <div className="offices-list__container">
                    <div className="offices-list__header">
                      <h2 className="h5 offices-list__title">Our Offices</h2>
                    </div>

                    <ul className="offices-list">
                      {
                        Offices.map((item, index: number) => (
                          <li
                            key={`office-${index}`}
                            className={`offices-item ${index === 0 ? '-active' : ''}`}
                            on={`tap:AMP.setState({office:{title:'${item.title}',map:'${item.map}',country:'${item.country}',lat:'${item.lat}',lng:'${item.lng}'}})`}
                            data-amp-bind-class={`office.title == '${item.title}' ? 'offices-item -active' : 'offices-item'`}
                            role="button"
                            tabIndex={0}
                          >
                            <span className="offices-item__title">{item.title}</span>
                            <span className="offices-item__address">{item.address}</span>
                            <a className="link offices-item__phone" href={item.phone.tel}>{item.phone.text}</a>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                  <div className="offices-map">
                    <div className="offices-map__header">
                      <span className="text-thin offices-map__header_title">
                        Map — <span data-amp-bind-text="office.title">New York</span>
                      </span>
                    </div>
                    <div className="offices-map__iframe_container">
                      {/*<AmpGoogleMaps*/}
                      {/*  layout="fill"*/}
                      {/*  latitude={40.764468}*/}
                      {/*  longitude={-73.970274}*/}
                      {/*  zoom={15}*/}
                      {/*  maptype="roadmap"*/}
                      {/*  language="en"*/}
                      {/*  region="US"*/}
                      {/*  data-amp-bind-latitude="office.lat"*/}
                      {/*  data-amp-bind-longitude="office.lng"*/}
                      {/*  api-key="AIzaSyDicXPplr-nwwhdWDY5og3Jw89dbYnFdMs"*/}
                      {/*/>*/}
                      <AmpIframe
                        class="offices-map__iframe"
                        title="Office map"
                        width="16"
                        height="9"
                        layout="responsive"
                        sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.890191573973!2d-73.97277432376774!3d40.76443983440331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259925b9e9437%3A0xefd52ca041aab80a!2sTechWaves!5e0!3m2!1sen!2sus!4v1765486529199!5m2!1sen!2sus"
                        data-amp-bind-src="office.map"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </ContactsComponent>

    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({req, res}) => {

  const headData = getHeadData(req.headers);

  const pageData: Response = await fetch(`${API_URL}/api/wp/page/contacts`);
  if (!pageData.ok) return {notFound: true};
  const data: ApiOk = await pageData.json();

  res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=604800');

  return {
    props: {
      seo: data.seo ?? {},
      geo: headData.geo
    }
  };
};
