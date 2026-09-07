import * as React from 'react';

export type AmpLightboxLayout = 'nodisplay';

export type AmpLightboxAttrs = React.HTMLAttributes<HTMLElement> & {
  id: string;
  layout?: AmpLightboxLayout;

  class?: string;
  className?: string;
  scrollable?: boolean;
  'animate-in'?: string;
  'animate-in-duration'?: number | string;
  'animate-in-delay'?: number | string;
  on?: string;

  role?: string;
  'aria-modal'?: boolean | 'true' | 'false';
  'aria-labelledby'?: string;

  'data-amp-bind-open'?: string;
};

export interface AmpLightboxProps extends AmpLightboxAttrs {
  children?: React.ReactNode;

  closeButton?: boolean | React.ReactNode;

  closeButtonAriaLabel?: string;

  closeOnOutsideTap?: boolean;
}

const AmpLightbox: React.FC<AmpLightboxProps> = ({
 id,
 className,
 class: classAttr,
 layout = 'nodisplay',
 scrollable = false,
 closeButton = false,
 closeButtonAriaLabel = 'Close',
 closeOnOutsideTap = true,
 children,
 ...rest
}: AmpLightboxProps) => {
  const attrs: AmpLightboxAttrs = {
    ...rest,
    id,
    layout,
    className,
    class: classAttr,
  };

  if (scrollable) attrs.scrollable = true;

  const nodes: React.ReactNode[] = [];

  if (closeOnOutsideTap) {
    nodes.push(
      React.createElement('div', {
        key: 'backdrop',
        on: `tap:AMP.setState({ui:{modalOpen:false}}),${id}.close`,
        role: 'button',
        tabIndex: -1,
        'aria-label': closeButtonAriaLabel,
        className: 'amp-lightbox-backdrop backdrop',
        'data-amp-bind-class': "'amp-lightbox-backdrop backdrop ' + (ui.modalOpen ? '-show' : '')"
      })
    );
  }

  nodes.push(
    React.createElement('div', { key: 'body', className: 'amp-lightbox-body modal-body' }, children)
  );

  if (closeButton) {
    nodes.push(
      React.createElement(
        'button',
        {
          key: 'close',
          on: `${id}.close`,
          type: 'button',
          tabIndex: -1,
          'aria-label': closeButtonAriaLabel,
          className: 'amp-lightbox-close',
        },
        closeButton === true ? '×' : closeButton
      )
    );
  }

  return React.createElement('amp-lightbox', attrs, nodes);
};

export default AmpLightbox;
