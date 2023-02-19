import { Stack } from '@mantine/core'
import { Group } from '@mantine/core'
import { Text } from '@mantine/core'
import IndexLink from './IndexLink'

import type { LinkSchema } from 'consts'

export default function IndexNavbar({linksData}: {linksData: LinkSchema[]}) {
    return <Stack p={100} spacing={50} sx={{backgroundColor: '#1c1c1c'}}>
        <Text size='xl' color='white' align='center'>Nos especializamos en asesorías personalizadas con especial atención a procesos de producción y control de calidad en la elaboración de vinos</Text>
        <Group position='center' spacing={100} sx={{backgroundColor: '#1c1c1c'}}>
            {
                linksData.map(link => <IndexLink data={link}/>)
            }
        </Group>
    </Stack>
}