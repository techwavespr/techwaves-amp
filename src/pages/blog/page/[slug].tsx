import React from 'react';
import Head from 'next/head';
import type { GetServerSideProps } from 'next';
import { GridStyle } from '@/styles/grid'
import { GlobalStyle } from '@/styles/global'
import MainLayout from '@/components/Layouts/MainLayout/MainLayout';
import {ApiOk} from '@/pages/api/wp/page/[slug]';
import {BlogPostType, SEOType, TopicType} from '@/const/types.constants';
import {AMP_URL, API_URL, WP_URL} from '@/const/general.constants';
import {getHeadData} from '@/lib/getHeadData';
import {chunk} from '@/lib/chunk';
import {AmpImg} from '@/types';
import {BlogsComponent} from '@/styles/blogsComponent.Styles';
import {useSearchParams} from 'next/navigation';

export const config = {
  amp: true,
};

type Props = Omit<ApiOk, 'acf'> & {
  acf?: {
    zagolovok?: string;
  };
  seo: SEOType;
  blogTopics?: TopicType[];
  blog?: BlogPostType[];
  geo: {
    country: string;
  }
};

export default function Blog(props: Props) {
  const { seo, acf, blogTopics, blog, geo } = props;
  const sp = useSearchParams();
  const tags_str: string = sp.get('tags') ?? '';
  const tags: string[] = tags_str.split(',');

  const blogRows: BlogPostType[][] = chunk<BlogPostType>(blog ?? [], 4);

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

      <BlogsComponent>
        <div className="container page-blog__container">
          <div className="row justify-content-center page-blog__row">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <div className="page-title__wrap">
                <h1 className="h2 page-title">{acf?.zagolovok}</h1>
              </div>
              <div className="page-blog__tags">
                {
                  blogTopics?.map((blogTopic: TopicType, index: number) => (
                    <a
                      key={`blog-topic-${index}`}
                      href={`/blog?tags=${blogTopic.slug}`}
                      className={`page-blog__tag ${tags.includes(blogTopic.slug) ? '-active' : ''}`}
                    >
                      <span className="text-thin">{blogTopic.name}</span>
                    </a>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
        <div id="blogContent" className="page-blog">
          {
            blogRows?.map((blogChunk: BlogPostType[], index: number) => (
              <div
                key={`page-blog-line-${index}`}
                className="page-blog__line"
              >
                <div className="container page-blog__container">
                  <div className="row page-blog__row">
                    {blogChunk.map((blogPost: BlogPostType, blogIndex: number) => (
                      <div
                        key={`blog-item-${index}-${blogIndex}`}
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
            ))
          }
        </div>
      </BlogsComponent>

    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({req, res}) => {

  const headData = getHeadData(req.headers);

  const FIELDS: string = [
    'acf_pick.zagolovok',
    'custom_blog_topics',
    'custom_blog'
  ].join(',');

  const TAGS: string = [].join(',');

  const pageData: Response = await fetch(`${API_URL}/api/wp/page/blog?embed=1&fields=${FIELDS}&tags=${TAGS}&per_page=16&offset=0`);
  if (!pageData.ok) return {notFound: true};
  const data: ApiOk = await pageData.json();

  res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=604800');

  return {
    props: {
      acf: data.acf ?? {},
      seo: data.seo ?? {},
      blogTopics: data.blogTopics ?? [],
      blog: data.blog ?? [],
      geo: headData.geo
    }
  };
};
