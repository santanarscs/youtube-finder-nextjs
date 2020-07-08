import Document, { Head, Html } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <Html>
            <Head>
              <title>Youtube statics | Home</title>
              <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
            </Head>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Html>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}