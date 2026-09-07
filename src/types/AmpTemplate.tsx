import * as React from 'react';

export type AmpTemplateAttrs =
  React.HTMLAttributes<HTMLTemplateElement> & {
  type?: string;
};

const AmpTemplate: React.FC<AmpTemplateAttrs> = ({
 children,
 ...rest
}: AmpTemplateAttrs) => {
  return React.createElement('template', rest, children);
};

export default AmpTemplate;
