//Mantine components
import { Carousel } from '@mantine/carousel'
import { Image } from '@mantine/core'

//Constants
import type { CustomerSlideSchema } from 'consts/customer'

export default ({data}: {data:CustomerSlideSchema}): JSX.Element => {
    return <Carousel.Slide>
        <Image height={120} fit='contain' src={data.logoUrl} alt={data.name}/>
    </Carousel.Slide>
}