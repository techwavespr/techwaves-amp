import * as React from 'react';

export type AmpLayout =
  | 'fill'
  | 'responsive'
  | 'fixed'
  | 'fixed-height'
  | 'intrinsic'
  | 'container'
  | 'flex-item';

export type AmpYouTubeParams = {
  autoplay?: 0 | 1;
  start?: number;
  end?: number;
  mute?: 0 | 1;
  rel?: 0 | 1;
  modestbranding?: 0 | 1;
  playsinline?: 0 | 1;
  controls?: 0 | 1;
  loop?: 0 | 1;
  playlist?: string;         // обязателен для loop=1
  origin?: string;
  enablejsapi?: 0 | 1;
  iv_load_policy?: 1 | 3;
  cc_load_policy?: 0 | 1;
};

export type AmpYouTubeAttrs = React.HTMLAttributes<HTMLElement> & {
  layout?: AmpLayout;
  width?: number | string;
  height?: number | string;
  class?: string;
  className?: string;
  'data-videoid': string;

  'data-param-autoplay'?: '0' | '1';
  'data-param-start'?: string;
  'data-param-end'?: string;
  'data-param-mute'?: '0' | '1';
  'data-param-rel'?: '0' | '1';
  'data-param-modestbranding'?: '0' | '1';
  'data-param-playsinline'?: '0' | '1';
  'data-param-controls'?: '0' | '1';
  'data-param-loop'?: '0' | '1';
  'data-param-playlist'?: string;
  'data-param-origin'?: string;
  'data-param-enablejsapi'?: '0' | '1';
  'data-param-iv_load_policy'?: '1' | '3';
  'data-param-cc_load_policy'?: '0' | '1';
};

export interface AmpYouTubeProps
  extends Omit<AmpYouTubeAttrs, 'data-videoid'
    | 'data-param-autoplay'
    | 'data-param-start'
    | 'data-param-end'
    | 'data-param-mute'
    | 'data-param-playsinline'
    | 'data-param-loop'
    | 'data-param-playlist'
    | 'data-param-origin'
    | 'data-param-enablejsapi'
    | 'data-param-cc_load_policy'> {

  videoId: string;
  controls?:  '0' | '1';
  branding?: '0' | '1';
  rel?: '0' | '1';
  loadPolicy?: '1' | '3';

  params?: AmpYouTubeParams;

  children?: React.ReactNode;
}

function mapParams(p?: AmpYouTubeParams): Partial<AmpYouTubeAttrs> {
  if (!p) return {};
  const s = (v: number) => String(v);

  return {
    ...(p.autoplay !== undefined ? { 'data-param-autoplay': String(p.autoplay) as '0' | '1' } : {}),
    ...(p.start !== undefined ? { 'data-param-start': s(p.start) } : {}),
    ...(p.end !== undefined ? { 'data-param-end': s(p.end) } : {}),
    ...(p.mute !== undefined ? { 'data-param-mute': String(p.mute) as '0' | '1' } : {}),
    ...(p.rel !== undefined ? { 'data-param-rel': String(p.rel) as '0' | '1' } : {}),
    ...(p.playsinline !== undefined ? { 'data-param-playsinline': String(p.playsinline) as '0' | '1' } : {}),
    ...(p.controls !== undefined ? { 'data-param-controls': String(p.controls) as '0' | '1' } : {}),
    ...(p.loop !== undefined ? { 'data-param-loop': String(p.loop) as '0' | '1' } : {}),
    ...(p.playlist ? { 'data-param-playlist': p.playlist } : {}),
    ...(p.origin ? { 'data-param-origin': p.origin } : {}),
    ...(p.enablejsapi !== undefined ? { 'data-param-enablejsapi': String(p.enablejsapi) as '0' | '1' } : {}),
    ...(p.iv_load_policy !== undefined ? { 'data-param-iv_load_policy': String(p.iv_load_policy) as '1' | '3' } : {}),
    ...(p.cc_load_policy !== undefined ? { 'data-param-cc_load_policy': String(p.cc_load_policy) as '0' | '1' } : {}),
  };
}

const AmpYouTube: React.FC<AmpYouTubeProps> = ({
 videoId,
 params,
 className,
 class: classAttr,
 children,
 controls,
 branding,
 rel,
 loadPolicy,
 ...rest
}: AmpYouTubeProps) => {
  const attrs: AmpYouTubeAttrs = {
    ...rest,
    'data-videoid': videoId,
    'data-param-controls': controls ?? '0',
    'data-param-modestbranding': branding ?? '0',
    'data-param-rel': rel ?? '0',
    'data-param-iv_load_policy': loadPolicy ?? '3',
    className,
    class: classAttr,
    ...mapParams(params),
  };

  return React.createElement('amp-youtube', attrs, children);
};

export default AmpYouTube;
