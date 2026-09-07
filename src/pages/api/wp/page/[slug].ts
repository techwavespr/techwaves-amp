import type { NextApiRequest, NextApiResponse } from 'next';
import {fetchWpPageBySlug, WPPage} from '@/lib/wp';
import {
  BlogPostType,
  CaseType,
  ImageType,
  TopicType,
  PublicationType,
  SEOType,
  ServiceType
} from '@/const/types.constants';

export const config = {
  api: {
    bodyParser: false,
  },
};

export type ApiOk = {
  title?: string;
  content?: string;
  thumbnail?: ImageType;
  acf?: Record<string, string>;
  seo?: SEOType;
  cases?: CaseType[];
  blog?: BlogPostType[];
  services?: ServiceType[];
  wiresTopics?: TopicType[];
  publicationsTopics?: TopicType[];
  wires?: PublicationType[];
  publications?: PublicationType[];
  blogTopics?: TopicType[];
  tagNames?: string[];
  date?: string;
};

type ApiErr = { error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiOk | ApiErr>
): Promise<void> {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const slug: string = String(req.query.slug || '').trim();
  if (!slug) return res.status(400).json({ error: 'Missing slug' });

  const cpt: string = String(req.query.cpt || '').trim();
  const country: string = String(req.query.country || '').trim();
  const tags: string = String(req.query.tags || '').trim();
  const per_page: string = String(req.query.per_page || '').trim();
  const offset: string = String(req.query.offset || '').trim();

  try {
    const embed: boolean = req.query.embed === '1';
    const fields: string = String(req.query.fields || '');
    const page: WPPage | null = await fetchWpPageBySlug(slug, { embed, cpt, fields, country, tags, per_page, offset });

    if (!page) return res.status(404).json({ error: 'Not found' });

    const yoast: SEOType = page.yoast_head_json || {};
    const og: ImageType | undefined = yoast?.og_image?.[0] || undefined;

    const date = new Date(`${page.date_gmt}Z`);
    const pretty: string = date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

    res.setHeader('Cache-Control', 'public, s-maxage=604800, stale-while-revalidate=604800');

    return res.status(200).json({
      title: page.title?.rendered,
      content: page.content?.rendered,
      thumbnail: page.thumbnail,
      acf: page.acf_pick || undefined,
      seo: {
        title: yoast?.title,
        description: yoast?.description,
        canonical: yoast?.canonical,
        og_locale: yoast?.og_locale,
        og_type: yoast?.og_type,
        og_title: yoast?.og_title,
        og_description: yoast?.og_description,
        og_url: yoast?.og_url,
        og_site_name: yoast?.og_site_name,
        article_modified_time: yoast?.article_modified_time,
        schema: page?.yoast_custom_schema?.['@graph'],
        ogImage: og,
      },
      cases: page.custom_cases || [],
      blog: page.custom_blog || [],
      services: page.custom_services || [],
      wiresTopics: page.custom_wires_topics || [],
      publicationsTopics: page.custom_publications_topics || [],
      wires: page.custom_wires || [],
      publications: page.custom_publications || [],
      blogTopics: page.custom_blog_topics || [],
      tagNames: page.tag_names || [],
      date: pretty || ''
    });
  } catch (e: unknown) {
    if (e instanceof Error) {
      return res.status(500).json({ error: e.message });
    }
    return res.status(500).json({ error: 'WP fetch failed' });
  }
}
