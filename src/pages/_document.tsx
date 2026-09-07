import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import AmpAnalytics from '../types/AmpAnalytics';
// import AmpGeo from '@/types/AmpGeo';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            custom-element="amp-bind"
            src="https://cdn.ampproject.org/v0/amp-bind-0.1.js"
          />
          <script
            async
            custom-element="amp-lightbox"
            src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"
          />
          <script
            async
            custom-element="amp-form"
            src="https://cdn.ampproject.org/v0/amp-form-0.1.js"
          />
          <script
            async
            custom-element="amp-analytics"
            src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
          />
          {/*<script*/}
          {/*  async*/}
          {/*  custom-element="amp-list"*/}
          {/*  src="https://cdn.ampproject.org/v0/amp-list-0.1.js"*/}
          {/*/>*/}
          {/*<script*/}
          {/*  async*/}
          {/*  custom-template="amp-mustache"*/}
          {/*  src="https://cdn.ampproject.org/v0/amp-mustache-0.2.js"*/}
          {/*/>*/}
          {/*<script*/}
          {/*  async*/}
          {/*  custom-element="amp-geo"*/}
          {/*  src="https://cdn.ampproject.org/v0/amp-geo-0.1.js"*/}
          {/*/>*/}
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" sizes="any"/>
          <link rel="icon" href="/favicon-32x32.png" sizes="32x32"/>
          <link rel="icon" href="/android-icon-192x192.png" sizes="192x192"/>
          <link rel="apple-touch-icon" href="/apple-icon.png"/>
          <meta name="msapplication-TileImage" content="/ms-icon-310x310.png"/>

        </Head>
        <body>
        {/*<body className="amp-geo-pending">*/}
        {/*  <AmpGeo*/}
        {/*    layout="nodisplay"*/}
        {/*    config={{*/}
        {/*      AmpBind: true,*/}
        {/*      ISOCountryGroups: {*/}
        {/*        eea: ['preset-eea'],*/}
        {/*      },*/}
        {/*    }}*/}
        {/*  />*/}
          <Main/>
          <NextScript/>
        </body>
        <AmpAnalytics
          type="gtag"
          dataCredentials="include"
          json={{
            vars: {
              gtag_id: 'G-N1XRBHGVEE',
              config: { 'G-N1XRBHGVEE': { groups: 'default' } }
            },
            triggers: {
              pageview: { on: 'visible', request: 'pageview' },
              scroll: {
                on: "scroll",
                scrollSpec: { verticalBoundaries: [90] },
                request: "event",
                vars: {
                  event_name: "scroll"
                },
                extraUrlParams: {
                  "ep.percent_scrolled": "90"
                }
              },

              // Get In Touch Form opened
              get_in_touch_click: {
                on: 'click',
                selector: '#get_in_touch, #get_in_touch_mobile',
                request: 'event',
                vars: { event_name: 'conversion_event_outbound_click' }
              },

              form_submit_success: {
                on: 'amp-form-submit-success',
                selector: '#getInToucForm',
                request: 'event',
                vars: { event_name: 'conversion_event_outbound_click_1'}
              },

              // Go To Calendly
              go_to_booking_click: {
                on: 'click',
                selector: '#go_to_booking, #mobileBooking',
                request: 'event',
                vars: { event_name: 'conversion_event_outbound_click_2' }
              },

              // Go to CTA header mobile
              go_to_cta_header_mobile_click: {
                on: 'click',
                selector: '#go_to_cta_header_mobile',
                request: 'event',
                vars: { event_name: 'conversion_event_outbound_click_3' }
              },

              // Go to Telegram
              go_to_telegram_click: {
                on: 'click',
                selector: '#go_to_telegram, #go_to_telegram_mobile',
                request: 'event',
                vars: { event_name: 'conversion_event_outbound_click_4' }
              },

              // Go to WhatsApp
              go_to_whatsapp_click: {
                on: 'click',
                selector: '#go_to_whatsapp, #go_to_whatsapp_mobile',
                request: 'event',
                vars: { event_name: 'conversion_event_outbound_click_5' }
              },

              // Go to Package
              go_to_package_click: {
                on: 'click',
                selector: '.go_to_package',
                request: 'event',
                vars: { event_name: 'conversion_event_outbound_click_6' }
              }
            },
            linkers: {
              enabled: true,
              proxyOnly: true,
              destinationDomains: [
                "techwavespr.com"
              ]
            }
          }}
        />
      </Html>
    );
  }
}
