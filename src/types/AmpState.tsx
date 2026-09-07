import React from 'react';

type AmpStateProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & { id: string; children?: React.ReactNode };

const AmpState: React.FC<AmpStateProps> = ({ children, ...rest }: AmpStateProps) => {
  return React.createElement('amp-state', rest, children);
};

export default AmpState;
