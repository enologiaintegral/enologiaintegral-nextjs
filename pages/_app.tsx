//Next
import { useRouter } from 'next/router'

//Mantine components
import { MantineProvider } from '@mantine/core'
import { AppShell } from '@mantine/core'

//Custom components
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

export default ({ Component, pageProps }) => {

    const {pathname} = useRouter()

    const theme = {
        fontFamily: 'Ibarra Real Nova',
        fontFamilyMonospace: 'Ibarra Real Nova',
        headings: { fontFamily: 'Ibarra Real Nova' }
    }

    return <MantineProvider  withGlobalStyles withNormalizeCSS theme={theme}>
        <AppShell padding={0}>
            {
                pathname !== '/' ? <Navbar/> : null
            }
            <Component {...pageProps} />
            <Footer/>
        </AppShell>
    </MantineProvider>

}
  