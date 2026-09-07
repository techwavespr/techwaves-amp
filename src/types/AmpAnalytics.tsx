import React, {CSSProperties} from 'react';

type AmpAnalyticsVendor = 'gtag' | 'googleanalytics' | 'gtm' | (string & {});

export interface AmpAnalyticsProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'className'> {
  type?: AmpAnalyticsVendor;
  configUrl?: string;
  dataCredentials?: 'include' | 'omit' | 'same-origin';
  dataBlockOnConsent?: boolean | string;
  json?: unknown;
  class?: string;
  className?: string;
  id?: string;
}

/** Обёртка для <amp-analytics> с поддержкой inline JSON и remote config */
const AmpAnalytics: React.FC<AmpAnalyticsProps> = ({
 type = 'gtag',
 configUrl,
 dataCredentials,
 dataBlockOnConsent,
 json,
 className,
 class: classAttr,
 id,
 children,
 ...rest
}) => {
  const props: Record<string, string | boolean | number | string[] | readonly string[] | undefined | CSSProperties | TrustedHTML> = {
    ...rest,
    type,
    id,
  };

  if (configUrl) props.config = configUrl;
  if (dataCredentials) props['data-credentials'] = dataCredentials;
  if (typeof dataBlockOnConsent === 'string') {
    props['data-block-on-consent'] = dataBlockOnConsent;
  } else if (dataBlockOnConsent) {
    props['data-block-on-consent'] = ''; // просто присутствие атрибута
  }

  if (className) props.className = className;
  else if (classAttr) props.class = classAttr;

  const scriptChild =
    json !== undefined
      ? React.createElement(
        'script',
        { type: 'application/json' },
        JSON.stringify(json)
      )
      : null;

  return React.createElement('amp-analytics', props, scriptChild, children);
};

export default AmpAnalytics;
