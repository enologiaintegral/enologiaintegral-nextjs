//React
import { useRef } from 'react'

//Next
import { useRouter } from 'next/router'

//Mantine components
import { ActionIcon, Group, Stack } from '@mantine/core'
import { Center } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import { Title } from '@mantine/core'
import { Text } from '@mantine/core'
import { Image } from '@mantine/core'

//Embla carousel
import Autoplay from 'embla-carousel-autoplay';

//Custom components
import { HeroSlide } from 'components'
import { HeroSlideVideo } from 'components'
import { CustomerSlide } from 'components'

//Constants
import { customers } from 'consts/customer'

export default () => {

    const {push} = useRouter()

    const autoplayHero = useRef(Autoplay({delay: 8000}))
    const autoplayCustomers = useRef(Autoplay({delay: 5000}))

    return <Stack spacing={0}>
        <Stack>
            <Carousel plugins={[autoplayHero.current]} loop speed={3}>
                <HeroSlide title='Profesionales haciendo vino' backgroundUrl='/img/background_1.jpeg'/>
                <HeroSlide title='Asesoría enológica y vitícola' backgroundUrl='/img/background_4.jpeg'/>
                <HeroSlide title='Laboratorio especializado' backgroundUrl='/img/background_5.jpeg'/>
                <HeroSlide title='Venta de productos enológicos' backgroundUrl='/img/background_3.jpeg'/>
            </Carousel>
            <Image src='/img/logo/logo_white.png' height={100} fit='contain' sx={{position: 'absolute', bottom: 30, right: 10}}/>
        </Stack>
        <Stack p={100} spacing={50} sx={{backgroundColor: '#1c1c1c'}}>
            <Group position='center' spacing={100}>
                <Stack align='center'>
                    <ActionIcon variant='subtle' radius={200} size={100} onClick={() => push('/about')} sx={{transition: '0.2s', '&:hover': {backgroundColor: 'rgba(255,255,255,0.1)', transform: 'scale(1.1)'}}}>
                        <Image src='/img/quienes-somos.png' sx={{filter: 'invert(100%)'}}/>
                    </ActionIcon>
                    <Text color='white' align='center'>QUIENES SOMOS</Text>
                </Stack>
                <Stack align='center'>
                    <ActionIcon variant='subtle' radius={200} size={100} onClick={() => push('/services')} sx={{transition: '0.2s', '&:hover': {backgroundColor: 'rgba(255,255,255,0.1)', transform: 'scale(1.1)'}}}>
                        <Image src='/img/servicios.png' sx={{filter: 'invert(100%)'}}/>
                    </ActionIcon>
                    <Text color='white' align='center'>SERVICIOS</Text>
                </Stack>
                <Stack align='center'>
                    <ActionIcon variant='subtle' radius={200} size={100} onClick={() => push('/team')} sx={{transition: '0.2s', '&:hover': {backgroundColor: 'rgba(255,255,255,0.1)', transform: 'scale(1.1)'}}}>
                        <Image src='/img/equipo.png' sx={{filter: 'invert(100%)'}}/>
                    </ActionIcon>
                    <Text color='white' align='center'>EQUIPO</Text>
                </Stack>
                <Stack align='center'>
                    <ActionIcon variant='subtle' radius={200} size={100} onClick={() => push('/contact')} sx={{transition: '0.2s', '&:hover': {backgroundColor: 'rgba(255,255,255,0.1)', transform: 'scale(1.1)'}}}>
                        <Image src='/img/contacto.png' sx={{filter: 'invert(100%)'}}/>
                    </ActionIcon>
                    <Text color='white' align='center'>CONTACTO</Text>
                </Stack>
            </Group>
            <Text size='xl' color='white' align='center'>Nos especializamos en asesorías personalizadas con especial atención a procesos de producción y control de calidad en la elaboración de vinos</Text>
        </Stack>
        <Stack pt={100} pb={125} spacing={50}>
            <Title align='center' weight={100}>Nuestros clientes</Title>
            <Carousel withControls={false} slideGap='xs' draggable={false} plugins={[autoplayCustomers.current]} loop slideSize='50%' speed={5}>
                {
                    customers.map(customer => <CustomerSlide customer={customer}/>)
                }
            </Carousel>
        </Stack>
    </Stack>
}