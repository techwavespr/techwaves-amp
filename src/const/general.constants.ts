export const WP_URL: string = process.env.WP_URL || 'https://techwavespr.com';
export const AMP_URL: string = process.env.AMP_URL || 'https://amp.techwavespr.com';
export const API_URL: string = process.env.API_URL || 'https://techwaves-api.vercel.app';
export const TW_CF_BYPASS_SECRET: string = process.env.TW_CF_BYPASS_SECRET || '';
export const AUTH_USER: string = process.env.AUTH_USER || '';
export const AUTH_PASS: string = process.env.AUTH_PASS || '';
export const MAILGUN_API: string = process.env.MAILGUN_API || '';


export const ADDRESS_BY_COUNTRY = {
  US: "667 Madison Avenue 5th Floor New York, NY 10065",
  AU: "120 Collins St, Melbourne VIC 3000, Australia",
  CA: "480 University Avenue #1407 Toronto, ON M5G 1V2 Canada",
  GB: "110 Bishopsgate, Floor G, Salesforce Tower, London EC2M 3TL",
  SG: "2 International Business Park, Tower One, #08 The Strategy, Singapore 609930",
  AE: "Grosvenor Business Tower - Office 1511 - Al Barsha - Barsha Heights - Dubai - United Arab Emirates",
  EU: "R. Campos Júnior 9, 1070-306 Lisbon, Portugal",
} as const;

export const Offices = [
  {
    title: 'New York',
    address: "667 Madison Avenue 5th Floor, New York, NY 10065",
    country: 'USA',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.890191573973!2d-73.97277432376774!3d40.76443983440331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259925b9e9437%3A0xefd52ca041aab80a!2sTechWaves!5e0!3m2!1sen!2sus!4v1765486529199!5m2!1sen!2sus',
    lat: 40.764468,
    lng: -73.970274,
    phone: {
      tel: 'https://wa.me/13323300933',
      text: '+1 (332) 330-0933'
    }
  },
  {
    title: 'San Francisco',
    address: "50 California St #1574, San Francisco, CA 94111, USA",
    country: 'USA',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.817710051335!2d-122.39743929999999!3d37.7943116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085817ea9e3d6d3%3A0xbc72dfbba1ac219c!2zVGVjaFdhdmVzIHwgRGlnaXTQsGwgbWFya2V00ZZuZyBhZ2VuY9GD!5e0!3m2!1sen!2srs!4v1755187566624!5m2!1sen!2srs',
    lat: '',
    lng: '',
    phone: {
      tel: 'https://wa.me/14158741532',
      text: '+1 (415) 874-1532'
    }
  },
  {
    title: 'Lisbon',
    address: "R. Campos Júnior 9, 1070-306 Lisbon, Portugal",
    country: 'Portugal',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.542228081961!2d-9.166986623849926!3d38.728317756662776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19338113d2a9e9%3A0x5bdd78028b47e040!2sTechWaves%20%7C%20Digital%20Marketing%20Agency!5e0!3m2!1sen!2spt!4v1757175434127!5m2!1sen!2spt',
    lat: '',
    lng: '',
    phone: {
      tel: 'https://wa.me/351916701881',
      text: '+351 916 701 881'
    }
  },
  {
    title: 'Melbourne',
    address: "120 Collins St, Melbourne VIC 3000, Australia",
    country: 'Australia',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d787.9897636641235!2d144.9689628696529!3d-37.814428038774686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6433d00e210f7%3A0x32e4d7829f8c397a!2sTechWaves%20%7C%20Digital%20marketing%20agency!5e0!3m2!1sen!2spt!4v1756649859998!5m2!1sen!2spt',
    lat: '',
    lng: '',
    phone: {
      tel: 'tel:+61485988144',
      text: '+61 485 988 144'
    }
  },
  {
    title: 'Toronto',
    address: "480 University Avenue #1407 Toronto, ON M5G 1V2 Canada",
    country: 'Canada',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d180.41651714969245!2d-79.3891827836612!3d43.65515281391389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3585f07e3c59%3A0xd37b67d99c2aa2e5!2sTechWaves%20%7C%20Digital%20marketing%20agency!5e0!3m2!1sen!2spt!4v1756649941387!5m2!1sen!2spt',
    lat: '',
    lng: '',
    phone: {
      tel: 'tel:+16727010072',
      text: '+1 (672) 701-0072'
    }
  },
  {
    title: 'London',
    address: "110 Bishopsgate, Floor G, Salesforce Tower, London EC2M 3TL",
    country: 'UK',
    map: 'https://www.google.com/maps?q=110%20Bishopsgate%2C%20Floor%20G%2C%20Salesforce%20Tower%2C%20London%20EC2M%203TL%2C%20UK&amp;output=embed',
    lat: '',
    lng: '',
    phone: {
      tel: 'tel:+447362046407',
      text: '+44 73 6204 6407'
    }
  },
  {
    title: 'Singapore',
    address: "2 International Business Park, Tower One, #08 The Strategy, Singapore 609930",
    country: 'Singapore',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.742920318023!2d103.74480607543714!3d1.330319161637349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11a4404cb175%3A0x5541f81039deec96!2sTechWaves%20%7C%20Digital%20marketing%20agency!5e0!3m2!1sen!2spt!4v1756650030725!5m2!1sen!2spt',
    lat: '',
    lng: '',
    phone: {
      tel: 'tel:+6581471826',
      text: '+65 8147 1826'
    }
  },
  {
    title: 'Dubai',
    address: "Grosvenor Business Tower - Office 1511 - Al Barsha - Barsha Heights - Dubai - United Arab Emirates",
    country: 'UAE',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d903.2985137485963!2d55.172211869609136!3d25.095291613120636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6083203a94fa2993%3A0x5c6801e78c5f461b!2sTechWaves!5e0!3m2!1sen!2spt!4v1758709909897!5m2!1sen!2spt',
    lat: '',
    lng: '',
    phone: {
      tel: 'tel:+971565617905',
      text: '+971 58 204 6944'
    }
  },
];

export type AddressKey = keyof typeof ADDRESS_BY_COUNTRY;

export const PHONES_BY_COUNTRY = {
  US: "13323300933",
  AU: "13323300933",
  CA: "13323300933",
  GB: "13323300933",
  SG: "13323300933",
  AE: "13323300933",
  EU: "351916701881",
} as const;

export type PhonesKey = keyof typeof PHONES_BY_COUNTRY;

export const EU_CODES = new Set([
  'AT','BE','CY','EE','FI','FR','DE','GR','IE','IT','LV','LT','LU','MT','NL','PT','SK','SI','ES',
  'AD','MC','SM','VA','ME','XK'
]);
