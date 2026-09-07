import * as React from 'react';

export interface AmpGeoConfig {
  AmpBind?: boolean;
  ISOCountryGroups?: { [name: string]: string[] };
}

export type AmpGeoProps = React.HTMLAttributes<HTMLElement> & {
  layout?: 'nodisplay';
  config?: AmpGeoConfig;
};

const AmpGeo: React.FC<AmpGeoProps> = ({ config, children, ...rest }) => {
  const script =
    config &&
    React.createElement('script', {
      type: 'application/json',
      dangerouslySetInnerHTML: { __html: JSON.stringify(config) },
    });

  return React.createElement('amp-geo', rest, script, children);
};

export default AmpGeo;
