import type { NextApiRequest, NextApiResponse } from 'next';
import {ADDRESS_BY_COUNTRY, AMP_URL, EU_CODES} from '@/const/general.constants';

const DEFAULT_COUNTRY = 'US';
const DEFAULT_EU_COUNTRY = 'EU';

export default function handler(req: NextApiRequest, res: NextApiResponse): void {
  const reqOrigin = (req.headers.origin as string) || AMP_URL;

  const sourceOriginParam = req.query.__amp_source_origin as string | undefined;
  const sourceOrigin = sourceOriginParam
    ? decodeURIComponent(sourceOriginParam)
    : AMP_URL;

  res.setHeader('Access-Control-Allow-Origin', reqOrigin);
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader(
    'Access-Control-Expose-Headers',
    'AMP-Access-Control-Allow-Source-Origin'
  );
  res.setHeader('AMP-Access-Control-Allow-Source-Origin', sourceOrigin);
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, X-Requested-With, Accept, Origin'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  const q: string | string[] | undefined = req.query.country;
  const isoRaw = Array.isArray(q) ? q[0] : q || '';
  const iso = isoRaw.toUpperCase() || DEFAULT_COUNTRY;

  let countryKey: string;

  if (EU_CODES.has(iso)) {
    countryKey = DEFAULT_EU_COUNTRY;
  } else if (iso in ADDRESS_BY_COUNTRY) {
    countryKey = iso;
  } else {
    countryKey = DEFAULT_COUNTRY;
  }

  const address: string = ADDRESS_BY_COUNTRY[countryKey as keyof typeof ADDRESS_BY_COUNTRY];

  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.status(200).json({ address });
}
