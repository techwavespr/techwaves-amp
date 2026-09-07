import * as React from 'react';

export type AmpScriptLayout =
  | 'container'
  | 'fixed'
  | 'fixed-height'
  | 'fill'
  | 'responsive'
  | 'intrinsic';

export type AmpScriptAttrs = React.HTMLAttributes<HTMLElement> & {
  id?: string;
  layout?: AmpScriptLayout;

  width?: number | string;
  height?: number | string;
  script?: string;
  src?: string;
  sandbox?: string;

  class?: string;
  className?: string;
  on?: string;

  'data-amp-bind-class'?: string;
  'data-amp-bind-style'?: string;
  'data-amp-bind-text'?: string;
  'data-amp-bind-aria-hidden'?: string;
};

export interface AmpScriptProps extends AmpScriptAttrs {
  children?: React.ReactNode;

  inlineWorkerCode?: string;
  inlineWorkerId?: string; // по умолчанию 'amp-script-worker'
}

const AmpScript: React.FC<AmpScriptProps> = ({
 className,
 class: classAttr,
 layout = 'container',
 inlineWorkerCode,
 inlineWorkerId = 'amp-script-worker',
 children,
 ...rest
}: AmpScriptProps) => {
  const attrs: AmpScriptAttrs = {
    ...rest,
    layout,
    className,
    class: classAttr,
  };

  if (!attrs.script && inlineWorkerCode) {
    attrs.script = inlineWorkerId;
  }

  const scriptNode =
    inlineWorkerCode
      ? React.createElement('script', {
        key: 'amp-script-inline-worker',
        id: inlineWorkerId,
        type: 'text/plain',
        target: 'amp-script',
        dangerouslySetInnerHTML: { __html: inlineWorkerCode },
      })
      : null;

  const ampScriptEl = React.createElement('amp-script', attrs, children);

  return scriptNode
    ? React.createElement(React.Fragment, null, scriptNode, ampScriptEl)
    : ampScriptEl;
};

export default AmpScript;
