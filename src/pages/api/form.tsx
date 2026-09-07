import type { NextApiRequest, NextApiResponse } from 'next';
import Mailgun from 'mailgun.js';
import FormData from "form-data";
import {MessagesSendResult} from 'mailgun.js/definitions';
import {AMP_URL, MAILGUN_API} from '@/const/general.constants';

export const config = { api: { bodyParser: false } };

const USERNAME = 'api';
const DOMAIN = 'mg.techwavespr.com';
const API_KEY = MAILGUN_API;

const mailgun = new Mailgun(FormData);

const mg = mailgun.client({username: USERNAME, key: API_KEY});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'OPTIONS') {
    addAmpCorsHeaders(req, res);
    res.status(200).end();
    return;
  }
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  addAmpCorsHeaders(req, res);

  const raw: string = await readRawBody(req);
  const data = Object.fromEntries(new URLSearchParams(raw)) as Record<string,string>;

  const formData = {
    name: data.name || '',
    phone: data.email || ''
  };

  const messData = {
    from: 'TechWavespr <postmaster@mg.techwavespr.com>',
    to: ['ceo@techwavespr.com'],
    subject: 'Заявка с сайта techwavespr.com',
    html: `<h1>Мы получили заявку!</h1><br><h3>Имя: ${formData.name}</h3><br><h3>Телефон: ${formData.phone}</h3>`,
  };

  mg.messages.create(DOMAIN, messData)
    .then((msg: MessagesSendResult) => {
      res.status(200).json({ message: msg.message || 'OK' });
    })
    .catch((err) => {
      res.status(err?.status || 500).json({ message: err?.message || 'Mail error' });
    });

}

async function readRawBody(req: NextApiRequest): Promise<string> {
  const chunks: Buffer[] = [];
  for await (const chunk of req) chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  return Buffer.concat(chunks).toString('utf8');
}

function addAmpCorsHeaders(req: NextApiRequest, res: NextApiResponse) {
  const srcOrigin = (req.query['__amp_source_origin'] as string) || AMP_URL;

  res.setHeader('Access-Control-Allow-Origin', srcOrigin);
  res.setHeader('AMP-Access-Control-Allow-Source-Origin', srcOrigin);
  res.setHeader('Access-Control-Expose-Headers', 'AMP-Access-Control-Allow-Source-Origin');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}
