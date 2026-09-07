import React from 'react';

type AmpLayout =
  | 'fill'
  | 'responsive'
  | 'fixed'
  | 'fixed-height'
  | 'intrinsic'
  | 'container'
  | 'flex-item';

type BaseDivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type AmpBaseCarouselAttrs = Omit<
  React.HTMLAttributes<HTMLElement>,
  'autoplay'
> & {
  layout?: AmpLayout;
  width?: number | string;
  height?: number | string;
  controls?: 'auto' | 'always' | 'never';
  on?: string;
  advance?: number;
  slide?: number;
  delay?: string;
  autoplay?: string;
  'mixed-length'?: string;
  'visible-count'?: number;
  'advance-count'?: number;
  'snap-by'?: number;
  loop?: boolean;
};

export type AmpCarouselProps = Omit<BaseDivProps, 'className'> & {
  layout?: AmpLayout;
  width?: number | string;
  height?: number | string;
  loop?: boolean;
  autoplay?: boolean;
  delay?: string;
  advance?: number;
  mixedLength?: boolean;
  visibleCount?: number;
  advanceCount?: number;
  snapBy?: number;
  snap?: boolean | string;
  controls?: 'auto' | 'always' | 'never';
  on?: string;
  slide?: number;
  ['[slide]']?: string;
  ['[class]']?: string;
  class?: string;
  className?: string;
};

const AmpCarousel: React.FC<React.PropsWithChildren<AmpCarouselProps>> = ({
  children,
  mixedLength,
  visibleCount,
  advanceCount,
  autoplay,
  snapBy,
  snap,
  ...rest
}: AmpCarouselProps) => {
  const attrs: AmpBaseCarouselAttrs = {
    ...rest,
    ...(mixedLength ? { 'mixed-length': '' } : {}),
    ...(autoplay ? { 'autoplay': '' } : {}),
    ...(snap ? { 'snap': '' } : {}),
    'visible-count': visibleCount,
    ...(advanceCount != null ? { 'advance-count': advanceCount } : {}),
    ...(snapBy != null ? { 'snap-by': snapBy } : {}),
  };

  return React.createElement('amp-base-carousel', attrs, children);
};

export default AmpCarousel;
