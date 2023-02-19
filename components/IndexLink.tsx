import { useRouter } from 'next/router'
import { Stack } from '@mantine/core'
import { ActionIcon } from '@mantine/core'
import { Image } from '@mantine/core'
import { Text } from '@mantine/core'

import type { LinkSchema } from 'consts'

export default function IndexLink({data}: {data: LinkSchema}) {

    const {push} = useRouter()

    return <Stack align='center'>
        <ActionIcon variant='subtle' radius={200} size={100} onClick={() => push(data.url)} sx={{transition: '0.2s', '&:hover': {backgroundColor: 'rgba(255,255,255,0.1)', transform: 'scale(1.1)'}}}>
            <Image src={data.imageUrl} sx={{filter: 'invert(100%)'}}/>
        </ActionIcon>
        <Text color='white' align='center'>{data.label.toUpperCase()}</Text>
    </Stack>
}