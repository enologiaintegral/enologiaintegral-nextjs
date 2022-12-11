//React
import { useState } from 'react'

//Mantine components
import { Stack } from '@mantine/core'
import { Modal } from '@mantine/core'
import { Center } from '@mantine/core'
import { Image } from '@mantine/core'
import { Title } from '@mantine/core'
import { Text } from '@mantine/core'

import type { TeamMember } from 'consts'

export default ({member}: {member: TeamMember}): JSX.Element => {

    const [opened, setOpened] = useState(false)

    return <Stack>
        <Modal padding={0} centered withCloseButton={false} size='90%' opened={opened} onClose={() => setOpened(false)}>
            <Center sx={{height: '80vh'}}>
                <embed src={member.cvUrl} type='application/pdf' width='100%' height='100%'/>
            </Center>
        </Modal>
        <Image src={member.imageUrl} styles={{root: {overflow: 'hidden', cursor: 'pointer'}, image: {transition: '1s', '&:hover': {transform: 'scale(1.05)'}}}} onClick={() => setOpened(true)}/>
        <Title color='dark.3'>{member.name}</Title>
        <Text color='dark.3'>{member.role}</Text>
    </Stack>
}