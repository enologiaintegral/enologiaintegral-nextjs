import { useRef } from 'react'
import { useMediaQuery } from '@mantine/hooks'
import { Carousel } from '@mantine/carousel'
import { Stack } from '@mantine/core'
import { Title } from '@mantine/core'
import Autoplay from 'embla-carousel-autoplay'
import CustomerSlide from './CustomerSlide'

import type { CustomerSlideSchema } from 'consts'

export default function CustomersCarousel({slidesData}: {slidesData: CustomerSlideSchema[]}): JSX.Element {

    const autoplay = useRef(Autoplay({delay: 5000}))
    const matches = useMediaQuery('(min-width: 768px)')

    return <Stack pt={100} pb={125} spacing={50}>
        <Title align='center' weight={100}>Nuestros clientes</Title>
        <Carousel withControls={false} slideGap={50} draggable={false} plugins={[autoplay.current]} loop slideSize='50%' speed={5}>
            {
                slidesData.map(slideData => <CustomerSlide data={slideData}/>)
            }
        </Carousel>
    </Stack>
}