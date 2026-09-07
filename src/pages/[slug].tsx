import React, { Component } from 'react';
import Head from 'next/head';
import type { GetServerSideProps } from 'next';
import { GridStyle } from '@/styles/grid'
import { GlobalStyle } from '@/styles/global'
import MainLayout from '@/components/Layouts/MainLayout/MainLayout';
import {ApiOk} from '@/pages/api/wp/page/[slug]';
import {BlogPostType, ImageType, SEOType} from '@/const/types.constants';
import {AMP_URL, API_URL, WP_URL} from '@/const/general.constants';
import {getHeadData} from '@/lib/getHeadData';
import {AmpImg} from '@/types';
import {BlogComponent} from '@/styles/blogComponent.Styles';

export const config = {
  amp: true,
};

type ContentType = {
  acf_fc_layout: string;
  title: string;
  text: string;
  quote_title: string;
  quote_text: string;
  list: {
    list_item: string;
  }[]
};

type Props = Omit<ApiOk, 'acf'> & {
  title?: string;
  content?: string;
  thumbnail?: ImageType | null;
  tagNames?: string[];
  date?: string;
  acf?: {
    title?: string;
    content?: ContentType[];
    resources_on_this_topic?: string;
  };
  seo: SEOType;
  blog?: BlogPostType[];
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
      blog,
      title,
      content,
      thumbnail,
      tagNames,
      date
    } = this.props;

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

        <BlogComponent>
          <div className="page-case">
            <div className="blog-content">
              <div className="container blog-content__container">
                <div className="row blog-content__row">
                  <div className="blog-content__left col-lg-4">
                    <div className="blog-content__cont">
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
                            href={`/blog`}
                          >
                            <span>Blog</span>
                          </a>
                        </span>
                        <span className="breadcrumbs__separator text-thin">/</span>
                        <span className="breadcrumbs__current text-thin">{title}</span>
                      </div>

                      <div className="page-title__wrap blog_title__wrap">
                        <h1 className="h2 cases-gallery__title ">{acf?.title}</h1>
                      </div>

                      <div className="page-content__tags">
                        {
                          tagNames?.map((tag: string, index: number) => (
                            <span
                              key={`blog-post-tag-${index}`}
                              className="text-thin page-content__tag"
                            >{tag}</span>
                          ))
                        }
                      </div>

                      <div className="page-content__goal_wrap" dangerouslySetInnerHTML={{__html: content || ''}} />
                      <div className="page-content__date_wrap">
                        <span className="text-thin page-content__date">{date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="blog-content__right col-lg-8">
                    <div className="blog-content__wrap">
                      <div className="blog-content__thumbnail_container">
                        <div className="blog-content__thumbnail_wrap">
                          <AmpImg
                            className="blog-content__thumbnail"
                            src={thumbnail?.url || ''}
                            alt={thumbnail?.alt}
                            title={thumbnail?.title}
                            width={thumbnail?.width}
                            height={thumbnail?.height}
                            layout="responsive"
                          />
                        </div>
                      </div>
                      <div className="blog-content__text_wrap">
                        {
                          acf?.content?.map((contentItem: ContentType, index: number) => {
                            if (contentItem.acf_fc_layout === 'title') {
                              return (<h2
                                key={`blog-post-content-${index}`}
                                className="h4 blog-content__title">{contentItem.title}
                              </h2>);
                            }

                            if (contentItem.acf_fc_layout === 'text') {
                              return (<div
                                key={`blog-post-content-${index}`}
                                dangerouslySetInnerHTML={{__html: contentItem.text || ''}}
                              />);
                            }

                            if (contentItem.acf_fc_layout === 'quote') {
                              return (
                                <div
                                  key={`blog-post-quote-${index}`}
                                  className="blog-content__quote_wrap"
                                >
                                  <div className="blog-content__quote">
                                    <span className="link blog-content__quote_title">{contentItem.quote_title}</span>
                                    <p className="h5 blog-content__quote_text">{contentItem.quote_text}</p>
                                  </div>
                                </div>
                              );
                            }

                            if (contentItem.acf_fc_layout === 'numerous_list') {
                              return (
                                <ol
                                  key={`blog-post-numerous_list-${index}`}
                                  className="blog-content__list"
                                >
                                  {
                                    contentItem.list.map((li: { list_item: string }, liIndex: number) => (
                                    <li
                                      key={`blog-post-numerous_list-${index}-item-${liIndex}`}
                                      className="text-thin blog-content__list_item"
                                    >
                                      {li?.list_item || ''}
                                    </li>
                                  ))}
                                </ol>
                              );
                            }

                            if (contentItem.acf_fc_layout === 'list') {
                              return (
                                <ul
                                  key={`blog-post-list-${index}`}
                                  className="blog-content__list"
                                >
                                  {
                                    contentItem.list.map((li: { list_item: string }, liIndex: number) => (
                                      <li
                                        key={`blog-post-list-${index}-item-${liIndex}`}
                                        className="text-thin blog-content__list_item"
                                      >
                                        {li?.list_item || ''}
                                      </li>
                                    ))}
                                </ul>
                              );
                            }

                            if (contentItem.acf_fc_layout === 'sub_title') {
                              return (<h3
                                key={`blog-post-sub_title-${index}`}
                                className="blog-content__subtitle">{contentItem.title}
                              </h3>);
                            }

                            return null;
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
                <h2 className="h2 page-case__title">More articles</h2>
              </div>
              <div className="page-blog-container__wrap">
                <div className="page-blog__line">

                  <div className="container page-blog__container">
                    <div className="row page-blog__row">
                      {blog?.map((blogPost: BlogPostType, index: number) => (
                        <div
                          key={`blog-item-${index}`}
                          className="col-md-6 col-lg-3 blog-card__wrap page-blog__item"
                        >
                          <a
                            href={blogPost.url.replace(WP_URL, AMP_URL)}
                            className="blog-card"
                          >
                            <div className="blog-image__wrap">
                              <AmpImg
                                className="blog-image"
                                src={blogPost.thumbnail.url}
                                alt={blogPost.thumbnail.alt}
                                title={blogPost.thumbnail.title}
                                width={blogPost.thumbnail.width}
                                height={blogPost.thumbnail.height}
                                layout="responsive"
                              />
                            </div>
                            <div className="blog-name__wrap">
                              <h4 className="h5 blog-name">{blogPost.title}</h4>
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
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BlogComponent>

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
    'tag_names',
    'date_gmt',
    'acf_pick.title',
    'acf_pick.content',
    'acf_pick.resources_on_this_topic',
    'custom_blog'
  ].join(',');

  const pageData: Response = await fetch(`${API_URL}/api/wp/page/${slug}?cpt=posts&embed=1&fields=${FIELDS}`);
  if (!pageData.ok) return {notFound: true};
  const data: ApiOk = await pageData.json();

  res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=604800');

  return {
    props: {
      title: data.title,
      content: data.content,
      thumbnail: data.thumbnail,
      tagNames: data.tagNames || [],
      date: data.date || '',
      acf: data.acf ?? {},
      seo: data.seo ?? {},
      blog: data.blog ?? [],
      geo: headData.geo
    }
  };
};
