import React from 'react'
import { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import NextDocument from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await NextDocument.getInitialProps(ctx)

      // const styles = (
      //   <>
      //     {initialProps.styles}
      //     {sheet.getStyleElement()}
      //   </>
      // )

      return { ...initialProps, /*styles*/ }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          {/* pegar uma foto aleatoria de um link e colocar no favicon */}
          <link rel="icon" href="https://vercel.com/api/www/avatar/fe684775105e79e408aed9cb5aa498d8133f0b3d?s=60" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
