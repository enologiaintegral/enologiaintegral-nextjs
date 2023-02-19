import { useMediaQuery } from '@mantine/hooks'
import { Stack } from '@mantine/core'
import { SimpleGrid } from '@mantine/core'
import { Title } from '@mantine/core'
import { CvModal } from 'components'
import { members } from 'consts'

export default () => {

    const matches = useMediaQuery('(min-width: 768px)')

    return <Stack pt={100}>
        <Stack spacing={100} p={50} align='center'>
            <Title color='dark.3' align='center' weight={100} size={50}>Nuestro equipo</Title>
            <SimpleGrid cols={matches ? 3 : 1} spacing='xl'>
                {
                    members.map(member => <CvModal member={member}/>)
                }
            </SimpleGrid>
        </Stack>
    </Stack>
}