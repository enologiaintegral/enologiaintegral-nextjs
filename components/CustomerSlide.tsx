//Mantine components
import { Carousel } from '@mantine/carousel'
import { Image } from '@mantine/core'

//Constants
import type { Customer } from 'consts/customer'

export default ({customer}: {customer:Customer}): JSX.Element => {
    return <Carousel.Slide>
        <Image height={120} fit='contain' src={customer.logoUrl} alt={customer.name}/>
    </Carousel.Slide>
}