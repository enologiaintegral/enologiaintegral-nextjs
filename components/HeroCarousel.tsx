import { useRef } from 'react'
import { Stack } from '@mantine/core'
import { Image } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import Autoplay from 'embla-carousel-autoplay'
import HeroSlide from './HeroSlide'

import type { HeroSlideSchema } from 'consts'

export default function HeroCarousel({slidesData}:{slidesData:HeroSlideSchema[]}): JSX.Element {

    const autoplay = useRef(Autoplay({delay: 8000}))

    return <Stack>
        <Carousel plugins={[autoplay.current]} loop speed={3} withControls={false} withIndicators>
            {
                slidesData.map(sliceData => <HeroSlide data={sliceData}/>)
            }
        </Carousel>
        <Image src='/img/logo/logo_white.png' height={100} fit='contain' sx={{position: 'absolute', bottom: 30, right: 10}}/>
    </Stack> 
}