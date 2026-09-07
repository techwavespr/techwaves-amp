import React, { Component, Fragment } from 'react';
import Head from 'next/head';
import type { GetServerSideProps } from 'next';
import { GridStyle } from '@/styles/grid'
import { GlobalStyle } from '@/styles/global'
import { HomeComponent } from '@/styles/homeComponent.Styles';
import {AmpVideo, AmpImg, AmpYouTube, AmpState, AmpIframe} from '@/types';
import MainLayout from '@/components/Layouts/MainLayout/MainLayout';
import {ApiOk} from '@/pages/api/wp/page/[slug]';
import {BlogPostType, CaseType, ImageType, SEOType} from '@/const/types.constants';
import {WP_URL, API_URL, AMP_URL} from '@/const/general.constants';
import KeyServicesGallery, {KeyService} from '@/components/Content/KeyServicesGallery/KeyServicesGallery';
import AwardsSlider, {AwardsSlide} from '@/components/Content/AwardsSlider/AwardsSlider';
import ClientsSlider, {ClientsSlide} from '@/components/Content/ClientsSlider/ClientsSlider';
import CasesSlider from '@/components/Content/CasesSlider/CasesSlider';
import ReviewsSlider, {ReviewsSlide} from '@/components/Content/ReviewsSlider/ReviewsSlider';
import PartnersSlider, {PartnersSlide} from '@/components/Content/PartnersSlider/PartnersSlider';
import {getHeadData} from '@/lib/getHeadData';

export const config = {
  amp: true,
};

type LinkType = {
  zagolovok: string;
  podzagolovok: string;
  ssylka: string;
  nofollow: string;
  ikonka: ImageType;
};

type HeroSlide = {
  zagolovok?: string;
  opisanie?: string;
  ssylki?: Array<LinkType>;
};

type Advantage = {
  zagolovok: string;
  tekst: string;
  ikonka: ImageType;
};

type Employer = {
  foto: ImageType;
  imya: string;
  dolzhnost: string;
};

type Review = {
  tekst: string;
  nazvanie_izdaniya: string;
  ikonka: ImageType;
};

type Props = Omit<ApiOk, 'acf'> & {
  acf?: {
    pervyj_slajd?: HeroSlide;
    key_services?: KeyService[];
    trust?: {
      zagolovok: string;
      tekst: string;
    };
    preimushhestva?: {
      preimushhestva: Advantage[]
    };
    nagrady?: {
      zagolovok: string;
      opisanie: string;
      ikonki: {
        ikonka: ImageType
      }[];
    };
    slajder_preimushhestv?: AwardsSlide[];
    klienty?: ClientsSlide[];
    komanda?: {
      zagolovok: string;
      faunder: {
        imya: string;
        opisanie: string;
        ssylka_na_linkedin: string
      };
      sotrudniki: Employer[]
    };
    cases?: {
      zagolovok: string;
      tekst: string;
    };
    otzyvy?: {
      zagolovok: string;
      otzyvy: Review[];
    };
    book?: {
      zagolovok: string;
      tekst: string;
    };
    reviews?: {
      zagolovok: string;
      otzyvy: ReviewsSlide[];
    };
    partners?: PartnersSlide[];
  };
  seo: SEOType;
  cases?: CaseType[];
  blog: BlogPostType[];
  viewportWidth: number;
  geo: {
    country: string;
  }
};

export default class Home extends Component<Props> {
  render() {
    const { acf, seo, cases, blog, viewportWidth, geo } = this.props;

    const mainEmployers: Employer[] = acf?.komanda?.sotrudniki.slice(0, 4) || [];
    const restEmployers: Employer[] = acf?.komanda?.sotrudniki.slice(4) || [];

    const feedbackFirstItems: Review[] = acf?.otzyvy?.otzyvy.slice(0, 2) || [];
    const feedbackSecondItems: Review[] = acf?.otzyvy?.otzyvy.slice(2) || [];

    const calendarHeight: number = viewportWidth < 1200 ? 1000 : 700;

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
            custom-element="amp-video"
            src="https://cdn.ampproject.org/v0/amp-video-0.1.js"
          />
          <script
            async
            custom-element="amp-base-carousel"
            src="https://cdn.ampproject.org/v0/amp-base-carousel-0.1.js"
          />
          <script
            async
            custom-element="amp-youtube"
            src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js"
          />
          <script
            async
            custom-element="amp-iframe"
            src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"
          />
        </Head>
        <GridStyle/>
        <GlobalStyle/>

        <HomeComponent>
          <AmpState id="home-ui">
            <script
              type="application/json"
              dangerouslySetInnerHTML={{__html: JSON.stringify({teamExpanded: false})}}
            />
          </AmpState>

          <div className="hero-bg">
            <AmpVideo
              className="hero-video"
              autoplay
              loop
              muted
              poster="/static/images/hero_bg.webp"
              layout="fill"
              width="1920"
              height="1080"
            >
              <source src="/static/video/hero_bg.webm" type="video/webm"/>
              <source src="/static/video/hero_bg.mp4" type="video/mp4"/>
            </AmpVideo>
          </div>

          <div className="hero">
            <div className="container hero-container__main">
              <div className="row hero-container__row">
                <div className="hero-container">
                  <div className="hero-text">
                    <h1 className="h1">{acf?.pervyj_slajd?.zagolovok}</h1>
                    <div className="text">
                      <p>{acf?.pervyj_slajd?.opisanie}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-advantages">
              <div className="container hero-advantage__container">
                <div className="row hero-advantages__row">
                  {
                    acf?.pervyj_slajd?.ssylki?.map((link: LinkType, index: number) => {
                      const col: string = (acf?.pervyj_slajd?.ssylki?.length === index + 1) ? '12' : '6';

                      return(
                        <div
                          key={link.ikonka.url}
                          className={`col-lg-${col} col-xl-4 hero-advantage`}
                        >
                          <a
                            href={`${link.ssylka.slice(0, -1)}`}
                            rel={link.nofollow ? 'nofollow' : ''}
                            className="hero-advantage__link"
                          >
                            <div className="hero-advantage__icon">
                              <AmpImg
                                src={link.ikonka.url}
                                alt={link.ikonka.alt}
                                title={link.ikonka.title}
                                width="54"
                                height="54"
                                layout="responsive"
                              />
                            </div>
                            <div className="hero-advantage__text">
                              <span className="hero-advantage__title text">{link.zagolovok}</span>
                              <span className="hero-advantage__subtitle text-thin">{link.podzagolovok}</span>
                            </div>
                            <div className="hero-advantage__arrow">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                   fill="none">
                                <path
                                  d="M15.8337 4.58407V13.7503C15.8337 13.9804 15.6471 14.167 15.417 14.167C15.1869 14.167 15.0003 13.9804 15.0003 13.7503V5.58958L4.87829 15.7117C4.71557 15.8743 4.45175 15.8743 4.28904 15.7117C4.12631 15.5489 4.12631 15.2851 4.28904 15.1223L14.4111 5.00033H6.25033C6.02021 5.00033 5.83366 4.81378 5.83366 4.58366C5.83366 4.35354 6.02021 4.16699 6.25033 4.16699H15.417C15.5267 4.16699 15.6318 4.21021 15.7098 4.28721L15.7117 4.28903C15.7849 4.36228 15.8281 4.46002 15.8332 4.563C15.8335 4.56987 15.8337 4.57716 15.8337 4.58407Z"
                                  fill="#020915"></path>
                              </svg>
                            </div>
                          </a>
                        </div>
                      );
                    })
                  }
                </div>
              </div>
            </div>
          </div>

          <KeyServicesGallery key_services={acf?.key_services || []}/>

          <section className="trust">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-11 col-xl-9">
                  <div className="trust-container">
                    <h2 className="text trust-subtitle">{acf?.trust?.zagolovok}</h2>
                    <p className="h2 trust-title" dangerouslySetInnerHTML={{__html: acf?.trust?.tekst || ''}}/>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="features">
            <div className="container features-container">
              <div className="row">
                {
                  acf?.preimushhestva?.preimushhestva.map((advantage: Advantage, index: number) => (
                    <Fragment key={`feature-awards-${index}`}>
                      {
                        acf?.preimushhestva?.preimushhestva.length === index + 1 ? (
                          <div className="col-lg-6 col-xl-4 feature-item__wrap d-none d-lg-block d-xl-none">
                            <div className="awards-item">
                              <h2 className="text awards-subtitle">{acf?.nagrady?.zagolovok}</h2>
                              <div className="awards-description">
                                <h3 className="h3 awards-title">{acf?.nagrady?.opisanie}</h3>
                                <div className="awards-logos">
                                  {
                                    acf?.nagrady?.ikonki.map((icon: { ikonka: ImageType }, icon_index: number) => (
                                      <AmpImg
                                        key={`award-first-icon-${icon_index}`}
                                        className="award-logo"
                                        src={icon.ikonka.url}
                                        alt={icon.ikonka.alt}
                                        title={icon.ikonka.title}
                                        width={icon.ikonka.width}
                                        height={icon.ikonka.height}
                                        layout="intrinsic"
                                      />
                                    ))
                                  }
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : null
                      }

                      <div className="col-lg-6 col-xl-4 feature-item__wrap">
                        <div className="feature-item">
                          <div className="feature-item__heading">
                            <div className="feature-icon__wrap">
                              <AmpImg
                                src={advantage.ikonka.url}
                                alt={advantage.ikonka.alt}
                                title={advantage.ikonka.title}
                                width={60}
                                height={60}
                                layout="intrinsic"
                              />
                            </div>
                            <div className="feature-title__wrap">
                              <h3 className="h4 feature-title">{advantage.zagolovok}</h3>
                            </div>
                          </div>
                          <div className="feature-description__wrap">
                            <p className="text-thin feature-description"
                               dangerouslySetInnerHTML={{__html: advantage.tekst || ''}}/>
                          </div>
                        </div>
                      </div>
                    </Fragment>
                  ))
                }
              </div>
            </div>
          </section>

          <section className="awards">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 col-xl-4 awards-item__wrap d-block d-lg-none d-xl-block">
                  <div className="awards-item">
                    <h2 className="text awards-subtitle">{acf?.nagrady?.zagolovok}</h2>
                    <div className="awards-description">
                      <h3 className="h3 awards-title">{acf?.nagrady?.opisanie}</h3>
                      <div className="awards-logos">
                        {
                          acf?.nagrady?.ikonki.map((icon: { ikonka: ImageType }, icon_index: number) => (
                            <AmpImg
                              key={`award-first-icon-${icon_index}`}
                              className="award-logo"
                              src={icon.ikonka.url}
                              alt={icon.ikonka.alt}
                              title={icon.ikonka.title}
                              width={icon.ikonka.width}
                              height={icon.ikonka.height}
                              layout="intrinsic"
                            />
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-8 awards-item__wrap">
                  <AwardsSlider slides={acf?.slajder_preimushhestv || []}/>
                </div>
              </div>
            </div>
          </section>

          <section className="clients">
            <ClientsSlider slides={acf?.klienty || []} viewportWidth={viewportWidth} />
          </section>

          <section className="team">
            <h2 className="h2 team-title">{acf?.komanda?.zagolovok}</h2>
            <div className="team-container team-container__founder">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 team-founder__wrap">
                    <div className="team-video__container">
                      <div className="team-video__wrap">
                        <AmpYouTube
                          className="team-video"
                          videoId="2Ymyy6i4nWc"
                          layout="responsive"
                          width={16}
                          height={9}
                          controls="0"
                          branding="1"
                          rel="0"
                          loadPolicy="3"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 team-founder__wrap">
                    <div className="team-founder">
                      <p className="text team-founder__role">Founder</p>
                      <div className="team-founder__info">
                        <span className="h3 team-founder__name">{acf?.komanda?.faunder.imya}</span>
                        <p className="text-thin team-founder__bio">{acf?.komanda?.faunder.opisanie}</p>
                        <a
                          href={acf?.komanda?.faunder.ssylka_na_linkedin}
                          rel="nofollow"
                          target="_blank"
                          className="link team-founder__link"
                        > Linkedin
                          <div className="team-founder__link_arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"
                                 fill="none">
                              <path
                                d="M11.2505 1.12537V9.375C11.2505 9.58208 11.0826 9.75 10.8755 9.75C10.6684 9.75 10.5005 9.58208 10.5005 9.375V2.03033L1.39065 11.1402C1.24421 11.2866 1.00677 11.2866 0.860328 11.1402C0.713875 10.9937 0.713875 10.7563 0.860328 10.6098L9.97017 1.5H2.62549C2.41839 1.5 2.25049 1.3321 2.25049 1.125C2.25049 0.917895 2.41839 0.75 2.62549 0.75H10.8755C10.9742 0.75 11.0688 0.788895 11.139 0.858195L11.1407 0.859838C11.2066 0.925763 11.2455 1.01372 11.25 1.10641C11.2503 1.11259 11.2505 1.11915 11.2505 1.12537Z"
                                fill="#3771DD" stroke="#3771DD" strokeWidth="0.4"></path>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-container team-container__members">
              <div className="container">
                <div className="row justify-content-center">
                  {
                    mainEmployers.map((employer: Employer, index: number) => (
                      <div
                        key={`employer-${index}`}
                        className="col-lg-6 col-xl-3 team-item__wrap"
                      >
                        <div className="team-member__card">
                          <div className="team-member__image_wrap">
                            <AmpImg
                              className="team-member__image"
                              src={employer.foto.url}
                              alt={employer.foto.alt}
                              title={employer.foto.title}
                              width={employer.foto.width}
                              height={employer.foto.height}
                              layout="responsive"
                            />
                          </div>
                          <div className="team-member__details">
                            <span className="h5 team-member__name">{employer.imya}</span>
                            <span className="text-thin team-member__role">{employer.dolzhnost}</span>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className="team-container team-container__members">
              <div className="container">
                <div
                  className="row justify-content-center -toggled"
                  data-amp-bind-class={'"row justify-content-center -toggled " + (home-ui.teamExpanded ? "-visible" : "")'}

                >
                  {
                    restEmployers.map((employer: Employer, index: number) => (
                      <div
                        key={`employer-rest-${index}`}
                        className="col-lg-6 col-xl-3 team-item__wrap"
                      >
                        <div className="team-member__card">
                          <div className="team-member__image_wrap">
                            <AmpImg
                              className="team-member__image"
                              src={employer.foto.url}
                              alt={employer.foto.alt}
                              title={employer.foto.title}
                              width={employer.foto.width}
                              height={employer.foto.height}
                              layout="responsive"
                            />
                          </div>
                          <div className="team-member__details">
                            <span className="h5 team-member__name">{employer.imya}</span>
                            <span className="text-thin team-member__role">{employer.dolzhnost}</span>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className="team-actions">
              <button
                className="btn -secondary team-btn"
                on="tap:AMP.setState({ ui: { teamExpanded: !ui.teamExpanded } })"
                data-amp-bind-class={'"btn -secondary team-btn " + (home-ui.teamExpanded ? " -active " : "")'}
                data-amp-bind-text="ui.teamExpanded ? 'Hide' : 'Show all'"
              >Show all
              </button>
            </div>
          </section>

          <section className="cases">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-11 col-xl-9">
                  <div className="cases-container">
                    <h2 className="text cases-subtitle">{acf?.cases?.zagolovok}</h2>
                    <p className="h2 cases-title" dangerouslySetInnerHTML={{__html: acf?.cases?.tekst || ''}}/>
                  </div>
                </div>
              </div>
            </div>
            <CasesSlider slides={cases || []} viewportWidth={viewportWidth} />
          </section>

          <section className="feedback">
            <h2 className="h2 feedback-title">{acf?.otzyvy?.zagolovok}</h2>
            <div className="feedback-container__wrap">
              <div className="container feedback-container">
                <div className="row feedback-row">
                  {
                    feedbackFirstItems.map((item: Review, index: number) => (
                      <div
                        key={`feedback-first-${index}`}
                        className="col-lg-6 feedback-item__wrap"
                      >
                        <div className="feedback-item">
                          <div className="feedback-icon">
                            <AmpImg
                              src={item.ikonka.url}
                              alt={item.ikonka.alt}
                              title={item.ikonka.title}
                              width={item.ikonka.width || 80}
                              height={item.ikonka.height || 80}
                              layout="responsive"
                            />
                          </div>

                          <div className="feedback-content">
                            <p className="h5 feedback-text">{item.tekst}</p>
                            <p className="text-thin feedback-source">{item.nazvanie_izdaniya}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className="feedback-container__wrap">
              <div className="container feedback-container">
                <div className="row feedback-row">
                  {
                    feedbackSecondItems.map((item: Review, index: number) => (
                      <div
                        key={`feedback-second-${index}`}
                        className="col-lg-6 feedback-item__wrap"
                      >
                        <div className="feedback-item">
                          <div className="feedback-icon">
                            <AmpImg
                              src={item.ikonka.url}
                              alt={item.ikonka.alt}
                              title={item.ikonka.title}
                              width={item.ikonka.width || 80}
                              height={item.ikonka.height || 80}
                              layout="responsive"
                            />
                          </div>

                          <div className="feedback-content">
                            <p className="h5 feedback-text">{item.tekst}</p>
                            <p className="text-thin feedback-source">{item.nazvanie_izdaniya}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </section>

          <section className="book">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-11 col-xl-9">
                  <div className="book-container">
                    <h2 className="text book-subtitle">{acf?.book?.zagolovok}</h2>
                    <p className="h2 book-title" dangerouslySetInnerHTML={{__html: acf?.book?.tekst || ''}}/>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="booking" className="calendar">
            <div className="calendar-bg">
              <AmpVideo
                className="calendar-video"
                autoplay
                loop
                muted
                poster="/static/images/calendar_bg.webp"
                layout="fill"
                width="1920"
                height="1080"
              >
                <source src="/static/video/calendar_bg.webm" type="video/webm"/>
                <source src="/static/video/calendar_bg.mp4" type="video/mp4"/>
              </AmpVideo>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="calendar-container">
                    <AmpIframe
                      // src={`https://calendly.com/techwavespr/30min?hide_gdpr_banner=1`}
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
              </div>
            </div>
          </section>

          <section className="reviews">
            <div className="container reviews-container">
              <div className="row reviews-row">
                <div className="col-lg-5 col-xl-4 reviews-item__wrap">
                  <div className="reviews-item">
                    <div className="reviews-icon__wrap">
                      <svg className="reviews-icon" xmlns="http://www.w3.org/2000/svg" width="80" height="80"
                           viewBox="0 0 80 80" fill="none">
                        <g clipPath="url(#clip0_1_1592)">
                          <path fillRule="evenodd" clipRule="evenodd"
                                d="M79.624 56.0056C79.842 58.204 78.03 60 75.8208 60H61.3208C59.1116 60 57.368 58.1852 56.8692 56.0332C55.0724 48.2792 48.1216 42.5 39.8209 42.5C31.5203 42.5 24.5695 48.2792 22.7724 56.0332C22.2736 58.1852 20.53 60 18.3209 60H3.82087C1.61173 60 -0.200142 58.204 0.0178137 56.0056C2.02212 35.7896 19.0776 20 39.8209 20C60.564 20 77.6196 35.7896 79.624 56.0056Z"
                                fill="url(#paint0_linear_1_1592)"></path>
                        </g>
                        <defs>
                          <linearGradient id="paint0_linear_1_1592" x1="62.718" y1="26.4" x2="44.6968" y2="62.9128"
                                          gradientUnits="userSpaceOnUse">
                            <stop offset="0.0509862" stopColor="#1E60DB"></stop>
                            <stop offset="1" stopColor="#BDD7F9"></stop>
                          </linearGradient>
                          <clipPath id="clip0_1_1592">
                            <rect width="80" height="80" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="reviews-description">
                      <h3 className="h3 reviews-title">{acf?.reviews?.zagolovok}</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-xl-8 reviews-item__wrap">
                  <ReviewsSlider slides={acf?.reviews?.otzyvy || []}/>
                </div>
              </div>
            </div>
          </section>

          <section className="blog">
            <div className="container">
              <div className="row">
                <div className="blog-title__wrap">
                  <h2 className="h2 blog-title">Blog</h2>
                  <a href={`/blog`} className="btn -secondary blog-btn">View all</a>
                </div>
              </div>
            </div>
            <div className="blog-container__wrap">
              <div className="container blog-container">
                <div className="row blog-row">
                  {
                    blog.map((blogPost: BlogPostType, index: number) => (
                      <div
                        key={`blog-post-${index}`}
                        className="col-md-6 col-xl-3 blog-card__wrap"
                      >
                        <a
                          href={blogPost.url.replace(WP_URL, AMP_URL)}
                          rel="nofollow"
                          className="blog-card"
                        >
                          <div className="blog-image__wrap">
                            <div className="blog-image">
                              <AmpImg
                                src={blogPost.thumbnail.url}
                                alt={blogPost.thumbnail.alt}
                                title={blogPost.thumbnail.title}
                                width={blogPost.thumbnail.width}
                                height={blogPost.thumbnail.height}
                                layout="responsive"
                              />
                            </div>
                          </div>
                          <div className="blog-name__wrap">
                            <h3 className="h5 blog-name">{blogPost.title}</h3>
                          </div>
                          <div className="blog-details">
                            <div className="blog-details__tags">
                              {
                                blogPost.tags.map((tag: string) => (
                                  <span
                                    key={`blog-post-${index}-tag_${tag}`}
                                    className="text-thin blog-details__tag"
                                  >{tag}</span>
                                ))
                              }
                            </div>
                            <span className="text-thin blog-details__date">{blogPost.date}</span>
                          </div>
                        </a>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className="blog-actions d-flex d-lg-none">
              <a href={`/blog`} className="btn -secondary blog-actions__btn">View all</a>
            </div>
          </section>

          <section className="partners">
            <PartnersSlider slides={acf?.partners || []} viewportWidth={viewportWidth} />
          </section>

        </HomeComponent>

      </MainLayout>
    );
  }
};

export const getServerSideProps: GetServerSideProps<Props> = async ({ req, res }) => {

  const headData = getHeadData(req.headers);

  const FIELDS: string = [
    'acf_pick.pervyj_slajd',
    'acf_pick.key_services',
    'acf_pick.trust',
    'acf_pick.preimushhestva',
    'acf_pick.nagrady',
    'acf_pick.slajder_preimushhestv',
    'acf_pick.klienty',
    'acf_pick.komanda',
    'acf_pick.cases',
    'acf_pick.otzyvy',
    'acf_pick.book',
    'acf_pick.reviews',
    'acf_pick.partners',
    'custom_cases',
    'custom_blog'
  ].join(',');

  const pageData: Response = await fetch(`${API_URL}/api/wp/page/home?embed=1&fields=${FIELDS}`);
  if (!pageData.ok) return {notFound: true};
  const data: ApiOk = await pageData.json();

  res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=604800');

  return {
    props: {
      acf: data.acf ?? {},
      seo: data.seo ?? {},
      cases: data.cases ?? [],
      blog: data.blog ?? [],
      viewportWidth: headData.viewportWidth,
      geo: headData.geo
    }
  };
};
