import 'react';

declare namespace JSX {
  interface AmpImg {
    alt?: string;
    src?: string;
    width?: string | number;
    height?: string | number;
    layout?: string;
    fallback?: string;
    children?: React.ReactNode;
  }
  interface AmpVideo {
    autoplay?: boolean;
    loop?: boolean;
    muted?: boolean;
    playsinline?: boolean;
    poster?: string;
    layout?: string;
    width?: string | number;
    height?: string | number;
    children?: React.ReactNode;
  }
  interface AmpState {
    id: string;
  }
  interface IntrinsicElements {
    "amp-img": AmpImg;
    "amp-video": AmpVideo;
    "amp-state": AmpState;
    template: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLTemplateElement> & {
      type?: string; // даём AMP-овский атрибут
    },
      HTMLTemplateElement
    >;
  }
}

declare module 'react' {
  interface HTMLAttributes<T> {
    on?: string;
    ['data-amp-bind-class']?: string;
    ['data-amp-bind-aria-expanded']?: string;
  }
}
