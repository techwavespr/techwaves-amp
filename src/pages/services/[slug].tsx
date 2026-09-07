import React, { Component } from 'react';
import Head from 'next/head';
import type { GetServerSideProps } from 'next';
import { GridStyle } from '@/styles/grid'
import { GlobalStyle } from '@/styles/global'
import MainLayout from '@/components/Layouts/MainLayout/MainLayout';
import {ApiOk} from '@/pages/api/wp/page/[slug]';
import {
  ImageType,
  TopicType,
  PublicationType,
  SEOType
} from '@/const/types.constants';
import {API_URL, WP_URL} from '@/const/general.constants';
import {getHeadData} from '@/lib/getHeadData';
import {ServiceComponent} from '@/styles/serviceComponent.Styles';
import {AmpAnimation, AmpIframe, AmpImg, AmpState} from '@/types';
import ClientsSlider, {ClientsSlide} from '@/components/Content/ClientsSlider/ClientsSlider';
import ReviewsSlider, {ReviewsSlide} from '@/components/Content/ReviewsSlider/ReviewsSlider';

const REGION_MAP = {
  AU: 'price_au',
  CA: 'price_ca',
  UK: 'price_uk',
  SG: 'price_sg',
  AE: 'price_uae',
  EU: 'price_eu'
};

export type RegionMapKey = keyof typeof REGION_MAP;

export const config = {
  amp: true,
};

type PriceBucket = {
  new: string;
  old: string;
};

type Package = {
  price: string;
  old_price: string;
  price_eu: PriceBucket;
  price_au: PriceBucket;
  price_ca: PriceBucket;
  price_uk: PriceBucket;
  price_sg: PriceBucket;
  price_uae: PriceBucket;
  color: string;
  title: string;
  description: string;
  ribbon: string;
  options: {
    acf_fc_layout: string;
    option: string;
  }[];
};

type Props = Omit<ApiOk, 'acf'> & {
  title?: string;
  content?: string;
  thumbnail?: ImageType | null;
  acf?: {
    subtitle?: string;
    clients?: {
      title?: string;
      clients: ClientsSlide[]
    };
    reviews?: ReviewsSlide[];
    hide_calendar?: boolean;
    show_publications?: boolean;
    publications_title?: string;
    publications_cta?: {
      title?: string;
      btn_text?: string;
    };
    show_pr_wires?: boolean;
    features?: {
      zagolovok: string;
      tekst: string;
      ikonka: ImageType;
    };
    packages?: {
      title: string;
      packages: Package[];
    }
  };
  seo: SEOType;
  wiresTopics?: TopicType[];
  publicationsTopics?: TopicType[];
  wires?: PublicationType[];
  publications?: PublicationType[];
  viewportWidth: number;
  geo: {
    country: string;
  }
};

export default class Services extends Component<Props> {
  render() {
    const {
      seo,
      acf,
      geo,
      wires,
      wiresTopics,
      publications,
      publicationsTopics,
      viewportWidth,
      title,
      content,
      thumbnail
    } = this.props;

    const calendarHeight: number = viewportWidth < 1200 ? 1000 : 700;

    const topics: TopicType[] | undefined = acf?.show_publications ? publicationsTopics : wiresTopics;
    const items: PublicationType[] | undefined = acf?.show_publications ? publications : wires;

    const resolvePrice = (pkg: Package): {
      price: string;
      old_price: string;
    } => {
      let price: string = pkg.price;
      let old_price: string = pkg.old_price;

      const key: RegionMapKey = REGION_MAP[geo.country as keyof typeof REGION_MAP] as RegionMapKey;
      if (key) {
        const bucket: PriceBucket | undefined = (pkg as Partial<Record<RegionMapKey, PriceBucket>>)[key];
        if (bucket?.new) price = bucket.new;
        if (bucket?.old) old_price = bucket.old;
      }

      return { price, old_price };
    }

    const hasSlider = acf?.clients?.clients || acf?.reviews;
    const hasPublications = acf?.show_publications || acf?.show_pr_wires;

    return (
      <MainLayout geo={geo} isServicePage={true}>
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
          {
            hasSlider ? (
              <script
                async
                custom-element="amp-base-carousel"
                src="https://cdn.ampproject.org/v0/amp-base-carousel-0.1.js"
              />
            ) : null
          }
          {
            !acf?.hide_calendar ? (
              <script
                async
                custom-element="amp-iframe"
                src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"
              />
            ) : null
          }
          {
            hasPublications ? (
              <script
                async
                custom-element="amp-animation"
                src="https://cdn.ampproject.org/v0/amp-animation-0.1.js"
              />
            ) : null
          }
        </Head>
        <GridStyle/>
        <GlobalStyle/>

        <ServiceComponent>
          <div className="page-case">
          <div className="page-content">
              <div className="container page-content__container">
                <div className="row page-content__row">
                  <div className="page-content__left col-xl-4">
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
                            href={`/services`}
                          >
                            <span>Services</span>
                          </a>
                        </span>
                        <span className="breadcrumbs__separator text-thin">/</span>
                        <span className="breadcrumbs__current text-thin">{title}</span>
                      </div>

                      <div className="page-title__wrap services_title__wrap">
                        <h1 className="h4 cases-gallery__title">{title}</h1>
                      </div>

                      <div className="page-content__goal_wrap services_description_wrap">
                        <h3 className="text page-content__subtitle"
                            dangerouslySetInnerHTML={{__html: acf?.subtitle || ''}}/>
                      </div>

                      <div className="page-content__goal_wrap services_description_wrap"
                           dangerouslySetInnerHTML={{__html: content || ''}}/>
                      <div className="page-content__actions_wrap">
                        <button
                          on="tap:booking_service.scrollTo(duration=400)"
                          rel="nofollow"
                          className="page-content__btn btn go_to_booking"
                        >
                          <span>Order a service</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="page-content__right col-xl-8">
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
                          acf?.show_publications || acf?.show_pr_wires ? (
                            <section className="page-content__publications_wrap">
                              <div className="page-content__title_wrap">
                                <h2 className="h4 page-content__title">{acf?.publications_title}</h2>
                              </div>
                              <AmpState id="pubFilter">
                                <script
                                  type="application/json"
                                  dangerouslySetInnerHTML={{
                                    __html: JSON.stringify({ active: '*', visibleCount: 4 })
                                  }}
                                />
                              </AmpState>

                              <AmpAnimation
                                id="filterPulse"
                                config={{
                                  selector: '.publications-gallery__grid',
                                  duration: '400ms',
                                  fill: 'none',
                                  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                                  keyframes: [
                                    {opacity: 0.4, transform: 'scale(0.97)'},
                                    {opacity: 1, transform: 'scale(1)'}
                                  ]
                                }}
                              />

                              <div className="publications-gallery">
                                <div className="publications-gallery__buttons_wrap">
                                  <div className="publications-gallery__buttons filters-button-group">
                                    <button
                                      className="btn text-thin publications-gallery__button -active"
                                      data-amp-bind-class="'btn text-thin publications-gallery__button' + (pubFilter.active == '*' ? ' -active' : '')"
                                      on="tap:AMP.setState({pubFilter: {active: '*'}}),filterPulse.restart"
                                    >ALL</button>
                                    {
                                      topics?.map((topic: TopicType, index: number) => (
                                        <button
                                          key={`publications-topic-${index}`}
                                          className="btn text-thin publications-gallery__button"
                                          data-amp-bind-class={`'btn text-thin publications-gallery__button' + (pubFilter.active == '${topic.slug}' ? ' -active' : '')`}
                                          on={`tap:AMP.setState({pubFilter: {active: '${topic.slug}'}}),filterPulse.restart`}
                                        >{topic.name}</button>
                                      ))
                                    }
                                  </div>
                                </div>
                                <div className="publications-gallery__grid_wrap">
                                  <div className="publications-gallery__grid">
                                    {
                                      items?.map((pub: PublicationType, index: number) => {
                                        const hidden: string = index >= 4 ? ' -hidden' : '';
                                        const tagsJson: string = JSON.stringify(pub.publication_tags);

                                        const filterExpr = `(pubFilter.active != '*' && !${tagsJson}.includes(pubFilter.active) ? ' -filtered-out' : '')`;
                                        const visibilityExpr = `(${index} >= pubFilter.visibleCount ? ' -hidden' : '')`;

                                        return (
                                          <div
                                            key={`publication-item-${index}`}
                                            className={`publications-gallery__item${hidden}`}
                                            data-amp-bind-class={`'publications-gallery__item' + ${filterExpr} + ${visibilityExpr}`}
                                          >
                                            <div
                                              className="publications-gallery__item_link"
                                              role="link"
                                              tabIndex={0}
                                              on={`tap:AMP.navigateTo(url='${pub.publication_link}', target='_blank')`}
                                            >
                                              <div className="publications-gallery__image_wrap">
                                                <AmpImg
                                                  className="publications-gallery__image"
                                                  src={pub.thumbnail?.url}
                                                  alt={pub.thumbnail?.alt}
                                                  title={pub.thumbnail?.title}
                                                  layout="fill"
                                                />
                                              </div>
                                              <div className="publications-gallery__title_wrap">
                                                <span className="h5 publications-gallery__title">{pub.title}</span>
                                              </div>
                                            </div>
                                          </div>
                                        );
                                      })
                                    }
                                  </div>
                                </div>
                                {
                                  items && items.length > 4 ? (
                                    <div
                                      className="publications-gallery__actions"
                                      data-amp-bind-class={`'publications-gallery__actions' + (pubFilter.visibleCount >= ${items.length} ? ' -hidden' : '')`}
                                    >
                                      <button
                                        className="btn -secondary publications-gallery__load_more"
                                        on={`tap:AMP.setState({pubFilter: {visibleCount: pubFilter.visibleCount + 4}})`}
                                      >Load more</button>
                                    </div>
                                  ) : null
                                }
                              </div>
                            </section>
                          ) : null
                        }

                        {
                          acf?.publications_cta?.title ? (
                            <div className="page-content__title_wrap text-center">
                              <span className="text-thin page-content__title">{acf?.publications_cta?.title}</span>
                            </div>
                          ) : null
                        }

                        {
                          acf?.publications_cta?.btn_text ? (
                            <div className="page-content__actions">
                              <div className="container">
                                <div className="page-content__btn_wrap">
                                  <button
                                    rel="nofollow"
                                    className="page-content__btn btn go_to_booking"
                                    aria-label={acf?.publications_cta?.btn_text}
                                    on="tap:booking_service.scrollTo(duration=400)"
                                  >
                                    <span>{acf?.publications_cta?.btn_text}</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          ) : null
                        }

                        {
                          (acf?.clients && acf.clients.clients ) ? (
                            <div className="page-content__clients_wrap">
                              <div className="page-content__title_wrap">
                                <span className="text-thin page-content__title">{acf.clients.title}</span>
                              </div>
                              <ClientsSlider slides={acf.clients.clients} viewportWidth={viewportWidth} />
                              <div className="page-content__actions">
                                <a href={`/cases`} className="btn cases-btn">Success Stories</a>
                              </div>
                            </div>
                          ) : null
                        }

                        {
                          acf?.reviews ? (
                            <div className="page-content__reviews_wrap">
                              <ReviewsSlider slides={acf.reviews} />
                            </div>
                          ) : null
                        }

                        {
                          acf?.hide_calendar ? null : (
                            <div id="booking_service" className="page-content__calendar_wrap">
                              <div className="page-content__calendar_container">
                                <AmpIframe
                                  // src="https://calendly.com/techwavespr/30min?hide_gdpr_banner=0"
                                  src={`${WP_URL}/extfiles/calendly_cached.php?mode=page&u=/techwavespr/30min?hide_gdpr_banner=1`}
                                  layout="fixed-height"
                                  title="Calendly"
                                  height={calendarHeight}
                                  sandbox="allow-scripts allow-same-origin"
                                  allow="fullscreen"
                                  resizable
                                  className="calendly-inline-widget"
                                />
                              </div>
                            </div>
                          )
                        }

                        {
                          (acf?.packages && acf.packages.packages) ? (
                            <section className="page-content__packages_wrap">
                              <div className="page-content__title_wrap">
                                <h2 className="h4 page-content__title">{acf.packages.title}</h2>
                              </div>
                              <div className="page-content__packages">
                                <div className="container page-content__packages_container">
                                  <div className="row">
                                    {
                                      acf.packages.packages.map((pkg: Package, index: number) => {
                                        const { price, old_price } = resolvePrice(pkg);

                                        return (
                                          <div
                                            key={`package_${index}`}
                                            className="col-lg-6 packages-item__wrap"
                                          >
                                            <div className="packages-item">
                                              <div
                                                className="packages-item__heading"
                                                style={{ background: pkg.color }}
                                              >
                                                <div className="packages-item__title_wrap">
                                                  <span className="link packages-item__title">{pkg.title}</span>
                                                </div>
                                                <div className="packages-item__price_wrap">
                                                  <span className="h4 packages-item__price">{price}</span>
                                                  <span className="link packages-item__fakeprice">{old_price}</span>
                                                </div>
                                                <div className="packages-item__subtitle_wrap">
                                                  <span
                                                    className="text-thin packages-item__subtitle">{pkg.description}</span>
                                                </div>
                                                <div
                                                  className="text-thin ribbon"
                                                  style={{ color: pkg.color }}
                                                >{pkg.ribbon}</div>
                                              </div>
                                              <div className="packages-item__description__wrap">
                                                <ul className="text-thin packages-item__options">
                                                  {
                                                    pkg.options.map((option: {
                                                      acf_fc_layout: string;
                                                      option: string
                                                    }, indexOption: number) => {
                                                      if (option.acf_fc_layout === 'text') {
                                                        return <li key={`package-${index}-option-${indexOption}`}>{option.option}</li>;
                                                      }

                                                      return null;
                                                    })
                                                  }
                                                </ul>
                                              </div>
                                              <div className="packages-item__actions">
                                                <button
                                                  on="tap:AMP.setState({ui:{menuOpened:false, modalOpen:true}}),getInTouchModal.open"
                                                  className="btn -secondary packages-item__submit open_request_form go_to_package"
                                                >Order</button>
                                              </div>
                                            </div>
                                          </div>
                                        )
                                      })
                                    }
                                  </div>
                                </div>
                              </div>
                            </section>
                          ) : null
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ServiceComponent>

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
    'content.rendered',
    'thumbnail',
    'acf_pick.subtitle',
    'acf_pick.clients',
    'acf_pick.reviews',
    'acf_pick.hide_calendar',
    'acf_pick.show_publications',
    'acf_pick.publications_title',
    'acf_pick.publications_cta',
    'acf_pick.show_pr_wires',
    'acf_pick.features',
    'acf_pick.packages',
    'custom_wires_topics',
    'custom_publications_topics',
    'custom_wires',
    'custom_publications',
  ].join(',');

  const pageData: Response = await fetch(`${API_URL}/api/wp/page/${slug}?cpt=services&embed=1&fields=${FIELDS}&country=${headData.geo.country}`);
  if (!pageData.ok) return {notFound: true};
  const data: ApiOk = await pageData.json();

  res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=604800');

  return {
    props: {
      title: data.title,
      content: data.content,
      thumbnail: data.thumbnail,
      acf: data.acf ?? {},
      seo: data.seo ?? {},
      wires: data.wires,
      publications: data.publications,
      wiresTopics: data.wiresTopics,
      publicationsTopics: data.publicationsTopics,
      viewportWidth: headData.viewportWidth,
      geo: headData.geo
    }
  };
};
