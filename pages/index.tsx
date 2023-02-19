import { Stack } from '@mantine/core'

import { HeroCarousel, CustomersCarousel, IndexNavbar } from 'components'
import { customersSlides, heroSlides, buttonsData } from 'consts'

export default () => {

    return <Stack spacing={0}>
        <HeroCarousel slidesData={heroSlides}/>
        <IndexNavbar linksData={buttonsData}/>
        <CustomersCarousel slidesData={customersSlides}/>
    </Stack>
}