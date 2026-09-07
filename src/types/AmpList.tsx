import * as React from 'react';
import { AmpLayout } from './AmpIframe';

export type AmpListAttrs = React.HTMLAttributes<HTMLElement> & {
  layout?: AmpLayout;
  width?: number | string;
  height?: number | string;

  class?: string;
  className?: string;

  src?: string;
  'data-amp-bind-src'?: string;

  items?: string;
  'data-amp-bind-items'?: string;

  credentials?: 'include' | 'omit' | 'same-origin';
  'xssi-prefix'?: string;

  'poll-interval'?: number | string;
  'max-items'?: number | string;
  'load-more'?: 'auto' | 'manual';
  'load-more-bookmark'?: string;
  'reset-on-refresh'?: 'always' | 'none';

  'single-item'?: '' | boolean;
  binding?: string;
};

export interface AmpListProps
  extends Omit<
    AmpListAttrs,
    'single-item' | 'data-amp-bind-src' | 'data-amp-bind-items'
  > {
  singleItem?: boolean;
  bindSrc?: string;
  bindItems?: string;
  placeholder?: React.ReactNode;
  fallback?: React.ReactNode;
  loading?: React.ReactNode;
  template?: string;
  children?: React.ReactNode;
}

const AmpList: React.FC<AmpListProps> = ({
                                           className,
                                           class: classAttr,
                                           singleItem = false,
                                           bindSrc,
                                           bindItems,
                                           placeholder,
                                           fallback,
                                           loading,
                                           children,
                                           ...rest
                                         }: AmpListProps) => {
  const attrs: AmpListAttrs = {
    ...rest,
    className,
    class: classAttr,
  };

  if (singleItem) {
    attrs['single-item'] = '';
  }

  if (bindSrc) {
    attrs['data-amp-bind-src'] = bindSrc;
  }

  if (bindItems) {
    attrs['data-amp-bind-items'] = bindItems;
  }

  const nodes: React.ReactNode[] = [];

  if (placeholder) {
    nodes.push(
      React.createElement(
        'div',
        { key: 'amp-placeholder', placeholder: '' },
        placeholder
      )
    );
  }

  if (fallback) {
    nodes.push(
      React.createElement(
        'div',
        { key: 'amp-fallback', fallback: '' },
        fallback
      )
    );
  }

  if (loading) {
    nodes.push(
      React.createElement(
        'div',
        { key: 'amp-loading', loading: '' },
        loading
      )
    );
  }

  if (children) {
    nodes.push(children);
  }

  return React.createElement('amp-list', attrs, nodes);
};

export default AmpList;
