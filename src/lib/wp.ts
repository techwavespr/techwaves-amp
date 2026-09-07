import {AUTH_PASS, AUTH_USER, TW_CF_BYPASS_SECRET, WP_URL} from '@/const/general.constants';
import {
  BlogPostType,
  CaseType,
  ImageType,
  TopicType,
  PublicationType,
  SEOType,
  ServiceType
} from '@/const/types.constants';

const FIELDS: string = [
  'yoast_head_json.title',
  'yoast_head_json.description',
  'yoast_head_json.canonical',
  'yoast_head_json.og_locale',
  'yoast_head_json.og_type',
  'yoast_head_json.og_title',
  'yoast_head_json.og_description',
  'yoast_head_json.og_url',
  'yoast_head_json.og_site_name',
  'yoast_head_json.article_modified_time',
  'yoast_head_json.og_image',
  'yoast_custom_schema'
].join(',');

export type WPPage = {
  title?: {
    rendered?: string
  };
  content?: {
    rendered?: string
  };
  thumbnail?: ImageType
  acf_pick?: Record<string, string>;
  yoast_head_json?: SEOType;
  yoast_custom_schema?: { '@context': string; '@graph': string; };
  custom_cases?: CaseType[];
  custom_blog?: BlogPostType[];
  custom_services?: ServiceType[];
  custom_wires_topics?: TopicType[];
  custom_publications_topics?: TopicType[];
  custom_wires?: PublicationType[];
  custom_publications?: PublicationType[];
  custom_blog_topics?: TopicType[];
  tag_names?: string[];
  date_gmt?: string;
};

export async function fetchWpPageBySlug(
  slug: string,
  opts?: {
    embed?: boolean;
    base?: string;
    fields?: string;
    cpt?: string;
    country?: string;
    tags?: string;
    per_page?: string;
    offset?: string;
  },
): Promise<WPPage | null> {
  const base: string = opts?.base ?? WP_URL;
  const auth: string = Buffer.from(`${AUTH_USER}:${AUTH_PASS}`).toString('base64');

  const url: string =
    `${base}/wp-json/wp/v2/${opts?.cpt ? opts?.cpt : 'pages'}` +
    `?_fields=${[FIELDS, opts?.fields].join(',')}` +
    (slug && slug !== 'ww.js.map' ? `&slug=${encodeURIComponent(slug)}` : '') +
    (opts?.embed ? `&_embed=1` : '') +
    (opts?.country ? `&country=${opts?.country}` : '') +
    (opts?.tags ? `&tags=${opts?.tags}` : '') +
    (opts?.per_page ? `&per_page=${opts?.per_page}` : '') +
    (opts?.offset ? `&offset=${opts?.offset}` : '');
  console.log('url', url);

  const res: Response = await fetch(url, {
    headers: {
      Authorization: `Basic ${auth}`,
      'x-tw-secret': TW_CF_BYPASS_SECRET,
      Accept: 'application/json'
    },
    next: { revalidate: 604800 },
    // cache: 'no-store',
  });
  console.log('res', res);
  if (!res.ok) throw new Error(`WP ${res.status}`);
  const arr = (await res.json()) as WPPage[];
  return arr?.[0] || null;
}
