// AmpGoogleMaps.tsx
import * as React from 'react';

export type AmpLayout =
  | 'fill'
  | 'responsive'
  | 'fixed'
  | 'fixed-height'
  | 'intrinsic'
  | 'container'
  | 'flex-item';

/**
 * Нативные атрибуты amp-google-maps.
 * В JSX нельзя писать [latitude], поэтому используем data-amp-bind-latitude и т.п.
 */
export type AmpGoogleMapsAttrs = React.HTMLAttributes<HTMLElement> & {
  layout?: AmpLayout;
  width?: number | string;
  height?: number | string;
  class?: string;
  className?: string;

  /** Ключ API обязателен для amp-google-maps */
  'api-key'?: string;

  /** Центр карты */
  latitude?: number;
  longitude?: number;
  zoom?: number;

  /** Доп.параметры */
  maptype?: 'roadmap' | 'satellite' | 'terrain' | 'hybrid';
  language?: string; // hl
  region?: string;   // region

  /** AMP-bind биндинги */
  'data-amp-bind-latitude'?: string;
  'data-amp-bind-longitude'?: string;
  'data-amp-bind-zoom'?: string;
  'data-amp-bind-maptype'?: string;
};

export interface AmpGoogleMapsProps extends AmpGoogleMapsAttrs {
  /**
   * Не влияет на сам рендер карты (amp-google-maps Place ID не принимает),
   * но удобно хранить GMB для кнопок "Open in Maps/Directions".
   */
  placeId?: string;

  /** Кастомный placeholder для контейнера (оверлей до инициализации карты) */
  placeholder?: React.ReactNode;

  /** Дочерние маркеры (см. AmpGoogleMapsMarker ниже) */
  children?: React.ReactNode;
}

/** Встроенные маркеры для amp-google-maps */
export type AmpGoogleMapsMarkerAttrs = React.HTMLAttributes<HTMLElement> & {
  latitude?: number;
  longitude?: number;
  label?: string;

  'data-amp-bind-latitude'?: string;
  'data-amp-bind-longitude'?: string;
  'data-amp-bind-label'?: string;
};

export const AmpGoogleMapsMarker: React.FC<AmpGoogleMapsMarkerAttrs> = ({
                                                                          ...rest
                                                                        }) => {
  return React.createElement('amp-google-maps-marker', rest);
};

const AmpGoogleMaps: React.FC<AmpGoogleMapsProps> = ({
                                                       className,
                                                       class: classAttr,
                                                       placeholder,
                                                       children,
                                                       placeId, // просто прокидываем наружу при необходимости
                                                       ...rest
                                                     }) => {
  const attrs: AmpGoogleMapsAttrs = {
    ...rest,
    className,
    class: classAttr,
  };

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

  if (children) nodes.push(children);

  return React.createElement('amp-google-maps', attrs, nodes);
};

export default AmpGoogleMaps;
