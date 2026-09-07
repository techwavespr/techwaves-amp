import * as React from 'react';

export type AmpLayout =
  | 'fill'
  | 'responsive'
  | 'fixed'
  | 'fixed-height'
  | 'intrinsic'
  | 'container'
  | 'flex-item';

export type AmpIframeAttrs = React.HTMLAttributes<HTMLElement> & {
  layout?: AmpLayout;
  width?: number | string;
  height?: number | string;
  class?: string;
  className?: string;

  src: string;
  title: string;
  sandbox?: string;
  allow?: string;
  allowfullscreen?: boolean;
  frameborder?: number | string;
  referrerpolicy?: string;

  'data-amp-bind-src'?: string;
  'data-amp-bind-height'?: string;

  resizable?: boolean;
};

export interface AmpIframeProps
  extends Omit<AmpIframeAttrs, 'resizable'> {

  resizable?: boolean;
  overflow?: React.ReactNode;
  placeholder?: React.ReactNode;
}

const AmpIframe: React.FC<AmpIframeProps> = ({
 className,
 class: classAttr,
 resizable = true,
 overflow = 'Show more',
 placeholder,
 ...rest
}: AmpIframeProps) => {
  const attrs: AmpIframeAttrs = {
    ...rest,
    className,
    class: classAttr,
  };

  if (resizable) attrs.resizable = resizable;

  if (attrs.allowfullscreen) attrs.allowfullscreen = attrs.allowfullscreen || false;

  const nodes: React.ReactNode[] = [];

  if (placeholder) {
    nodes.push(
      React.createElement(
        'div',
        { key: 'amp-placeholder', ...( { placeholder: '' } ) },
        placeholder
      )
    );
  }

  if (overflow) {
    nodes.push(
      React.createElement(
        'div',
        { key: 'amp-overflow', ...( { overflow: '' } ), tabIndex: 0, role: 'button' },
        overflow
      )
    );
  }

  return React.createElement('amp-iframe', attrs, nodes);
};

export default AmpIframe;
