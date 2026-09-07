export type SEOType = {
  title?: string;
  description?: string;
  canonical?: string;
  og_locale?: string;
  og_type?: string;
  og_title?: string;
  og_description?: string;
  og_url?: string;
  og_site_name?: string;
  article_modified_time?: string;
  og_image?: ImageType[];
  ogImage?: ImageType;
  schema?: string;
};

export type ImageType = {
  url: string;
  alt: string;
  title: string;
  width?: number;
  height?: number;
};

export type CaseType = {
  title: string;
  sub_title: string;
  url: string;
  thumbnail: ImageType;
};

export type BlogPostType = {
  title: string;
  url: string;
  thumbnail: ImageType;
  tags: string[];
  date: string;
};

export type ServiceType = {
  url: string;
  slug: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  thumbnail_alt: string;
  thumbnail_title: string;
  thumbnail_width: number;
  thumbnail_height: number;
};

export type TopicType = {
  slug: string;
  name: string[]
};

export type PublicationType = {
  title: string;
  publication_link: string;
  is_link: boolean;
  publication_tags: string[];
  thumbnail: ImageType;
};


