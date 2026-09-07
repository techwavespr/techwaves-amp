import {EU_CODES} from '@/const/general.constants';

type H = Record<string, string | string[] | undefined>;
const pick: (h: H, k: string) => string = (h: H, k: string): string =>
  (Array.isArray(h[k]) ? (h[k] as string[])[0] : (h[k] as string)) || '';


export function getViewportWidth(h: H): number {
  const vw = pick(h, "viewport-width");
  if (vw) {
    const n = parseInt(vw, 10);
    if (!Number.isNaN(n) && n > 0) return n;
  }

  const chMobile: string = pick(h, 'sec-ch-ua-mobile');
  if (chMobile === '?1') {
    return 375;
  }

  const ua: string = pick(h, 'user-agent');
  if (/iPad|Tablet|SM-T|Nexus\s7|Pixel\sC|Android(?!.*Mobile)/i.test(ua)) {
    return 992;
  }

  if (/Android.*Mobile|iPhone|iPod|Windows Phone/i.test(ua)) {
    return 375;
  }

  return 1200;
}

export function getGeo(h: H): {
  country: string
} {
  let country: string = '';

  const vercel: string = pick(h, "x-vercel-ip-country");

  if (vercel) {
    country = vercel.toUpperCase();
  }

  if (!country) {
    const al: string = pick(h, "accept-language");
    const m = al.match(/[A-Za-z]{2}-([A-Za-z]{2})/);
    if (m) {
      country = m[1].toUpperCase();
    }
  }

  if (country) {
    if (EU_CODES.has(country)) {
      country = 'EU';
    }
  }

  return {
    country: country || 'US',
  };
}

export function getHeadData(h: H): {
  viewportWidth: number;
  geo: {
    country: string;
  }
} {
  const viewportWidth: number = getViewportWidth(h);
  const geo: {
    country: string
  } = getGeo(h);

  return {
    viewportWidth,
    geo,
  };
}
