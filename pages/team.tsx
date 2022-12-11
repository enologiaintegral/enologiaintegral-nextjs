//Mantine components
import { Stack } from '@mantine/core'
import { SimpleGrid } from '@mantine/core'
import { Center } from '@mantine/core'
import { Text } from '@mantine/core'
import { Title } from '@mantine/core'
import { Image } from '@mantine/core'

//Custom components
import { CvModal } from 'components'

//Constants
import { members } from 'consts'

export default () => {
    return <Stack pt={100}>
        <Stack spacing={100} p={50} align='center'>
            <Title color='dark.3' align='center' weight={100} size={50}>Nuestro equipo</Title>
            <SimpleGrid cols={3} spacing='xl'>
                {
                    members.map(member => <CvModal member={member}/>)
                }
            </SimpleGrid>
        </Stack>
    </Stack>
}