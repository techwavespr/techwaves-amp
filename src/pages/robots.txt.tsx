import React from 'react';
import type { NextPageContext } from 'next';
import type { ServerResponse } from 'http';

const getRobots = () => `User-agent: *
Disallow: /blog/?tags=*

Sitemap: https://amp.techwavespr.com/sitemap.xml

User-agent: OAI-SearchBot
Allow: /
`;

class Sitemap extends React.Component {
  public static async getInitialProps(ctx: NextPageContext) {
    const res = ctx.res as ServerResponse | undefined;
    if (!res) return {};
    res.setHeader('Content-Type', 'text/plain');
    res.write(getRobots());
    res.end();
  }
}


export default Sitemap;
