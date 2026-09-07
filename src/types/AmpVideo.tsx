import React from 'react';

type AmpLayout =
  | 'fill'
  | 'responsive'
  | 'fixed'
  | 'fixed-height'
  | 'intrinsic'
  | 'container'
  | 'flex-item';

type BaseVideoProps = React.DetailedHTMLProps<
  React.VideoHTMLAttributes<HTMLVideoElement>,
  HTMLVideoElement
>;

export type AmpVideoProps = Omit<BaseVideoProps, 'autoPlay' | 'playsInline' | 'className'> & {
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  layout?: AmpLayout;
  width?: number | string;
  height?: number | string;
  poster?: string;
  class?: string;
  className?: string;
};

const AmpVideo: React.FC<AmpVideoProps> = ({
 className,
 autoplay,
 loop,
 muted,
 layout,
 width,
 height,
 poster,
 children,
 ...rest
}: AmpVideoProps) => {
  const props: AmpVideoProps = {
    ...rest,
    className,
    autoplay,
    loop,
    muted,
    layout,
    width,
    height,
    poster,
  };

  return React.createElement('amp-video', props, children);
};

export default AmpVideo;
