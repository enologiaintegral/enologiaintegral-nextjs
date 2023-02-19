import { useState } from 'react'
import { useMediaQuery } from '@mantine/hooks'
import { useRouter } from 'next/router'
import { Stack } from '@mantine/core'
import { Group } from '@mantine/core'
import { Image } from '@mantine/core'
import { Button } from '@mantine/core'
import { Burger } from '@mantine/core'
import { NavbarButton } from './NavbarButton'

import { buttonsData } from 'consts'

export default () => {

    const {push} = useRouter()
    const [opened, setOpened] = useState<boolean>(false)
    const matches = useMediaQuery('(min-width: 992px)')

    return <Stack sx={{zIndex: 1, position: 'fixed', top: 0, left: 0, right: 0, height: matches ? 120 : opened ? '60vh' : 120, background: 'rgba(255, 255, 255, 0.75)', transition: '0.5s'}}>
        <Group position='apart' pr='xl' sx={{height: 120}}>
            <Button variant='subtle' color='gray' size='xl' onClick={() => push('/')} leftIcon={<Image src='/img/logo/logo_dark.png' height={100} width={200}/>} sx={{'&:hover': {backgroundColor: 'transparent'}}}/>
            {
                matches ?
                <Group sx={{height: '100%'}}>
                    {buttonsData.map(data => <NavbarButton label={data.label} url={data.url} imageUrl={data.imageUrl}/>)}
                </Group>
                :
                <Burger opened={opened} onClick={() => setOpened(!opened)}/>
            }
        </Group>
        {
            !matches && opened &&
            <Stack align='center' justify='center'>
                {buttonsData.map(data => <NavbarButton label={data.label} url={data.url} imageUrl={data.imageUrl}/>)}
            </Stack>
        }
    </Stack>
}