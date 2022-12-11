import { Html } from 'next/document'
import { Head } from 'next/document'
import { Main } from 'next/document'
import { NextScript } from 'next/document'

export default () => {

  return <Html>
        <Head>
            <link href="https://fonts.cdnfonts.com/css/ibarra-real-nova-2" rel="stylesheet"/>
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>

}