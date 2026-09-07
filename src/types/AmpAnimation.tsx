import * as React from 'react';

export type AmpAnimationLayout = 'nodisplay';

export type AmpAnimationAttrs = React.HTMLAttributes<HTMLElement> & {
  id: string;
  layout?: AmpAnimationLayout;
  class?: string;
  className?: string;
  on?: string;
};

export interface AmpAnimationProps extends AmpAnimationAttrs {
  config: object | string;
  pretty?: boolean;
}

const AmpAnimation: React.FC<AmpAnimationProps> = ({
 id,
 className,
 class: classAttr,
 layout = 'nodisplay',
 config,
 pretty = false,
 on,
 ...rest
}) => {
  const attrs = {
    ...rest,
    id,
    on,
    layout,
    className,
    class: classAttr,
  };

  if (on) attrs.on = on;

  const json =
    typeof config === 'string'
      ? config
      : JSON.stringify(config, pretty ? null : undefined, pretty ? 2 : undefined);

  return React.createElement(
    'amp-animation',
    attrs,
    React.createElement('script', {
      key: 'json',
      type: 'application/json',
      dangerouslySetInnerHTML: { __html: json },
    })
  );
};

export default AmpAnimation;
