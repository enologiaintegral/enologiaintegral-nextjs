
//Next
import { useRouter } from 'next/router'
import Link from 'next/link'

//Mantine components
import { Center, Header } from '@mantine/core'
import { NavLink } from '@mantine/core'
import { Group } from '@mantine/core'
import { Title } from '@mantine/core'
import { Text } from '@mantine/core'
import { Image } from '@mantine/core'
import { ActionIcon } from '@mantine/core'
import { Button } from '@mantine/core'

export default () => {

    const {push} = useRouter()

    return <Group pl={25} pr={25} position='apart' sx={{zIndex: 1, position: 'fixed', top: 0, left: 0, right: 0, height: 120, background: 'rgba(255, 255, 255, 0.75)'}}>
        <Button variant='subtle' color='gray' size='xl' onClick={() => push('/')} leftIcon={<Image src='/img/logo/logo_dark.png' height={100} width={200}/>}/>
        <Group sx={{height: '100%'}}>
            <Button variant='subtle' color='gray.9' size='lg' onClick={() => push('/about')} leftIcon={<Image src='/img/quienes-somos.png' height={50} width={50}/>}>Quiénes somos</Button>
            <Button variant='subtle' color='gray.9' size='lg' onClick={() => push('/services')} leftIcon={<Image src='/img/servicios.png' height={50} width={50}/>}>Servicios</Button>
            <Button variant='subtle' color='gray.9' size='lg' onClick={() => push('/team')} leftIcon={<Image src='/img/equipo.png' height={50} width={50}/>}>Equipo</Button>
            <Button variant='subtle' color='gray.9' size='lg' onClick={() => push('/contact')} leftIcon={<Image src='/img/contacto.png' height={50} width={50}/>}>Contacto</Button>
        </Group>
    </Group>
}