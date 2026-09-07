import React from 'react';

type AmpLayout =
  | 'fill'
  | 'responsive'
  | 'fixed'
  | 'fixed-height'
  | 'intrinsic'
  | 'container'
  | 'flex-item';

type BaseImgProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export type AmpImgProps = Omit<BaseImgProps, 'className'> & {
  src: string;
  alt?: string;
  layout?: AmpLayout;
  width?: number | string;
  height?: number | string;
  class?: string;
  className?: string;
};

const AmpImg: React.FC<AmpImgProps> = ({
 className,
 src,
 alt,
 layout,
 width,
 height,
 ...rest
}: AmpImgProps) => {
  const props: AmpImgProps = {
    ...rest,
    src,
    alt,
    layout,
    width,
    height,
    className,
  };

  return React.createElement('amp-img', props);
};

export default AmpImg;
