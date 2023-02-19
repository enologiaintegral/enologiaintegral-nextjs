import type { Navbar } from 'types/navbar'

import { useRouter } from 'next/router'
import { useMediaQuery } from '@mantine/hooks'

import { Tooltip, Button, Image } from '@mantine/core'


export function NavbarButton({label, url, imageUrl}: Navbar.Button): JSX.Element {

    const {push} = useRouter()
    const matchesLarge = useMediaQuery('(min-width: 1200px)')
    const matchesMedium = useMediaQuery('(min-width: 992px)')

    const sx = {
        '&:hover': {
            backgroundColor: 'transparent'
        }
    }

    return <Tooltip label={label} color='dark' position={matchesMedium ? 'bottom' : 'right'} events={{hover: !matchesLarge, focus: false, touch: false}}>
        <Button variant='subtle' color='gray.9' size='lg' onClick={() => push(url)} leftIcon={<Image src={imageUrl} height={50} width={50}/>} sx={sx}>{matchesLarge && label}</Button>
    </Tooltip> 

}