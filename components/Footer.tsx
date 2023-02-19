import { useMediaQuery } from '@mantine/hooks'
import { Stack } from '@mantine/core'
import { Group } from '@mantine/core'
import { Anchor } from '@mantine/core'
import { Text } from '@mantine/core'
import { IconBrandFacebook } from '@tabler/icons'
import { IconBrandInstagram } from '@tabler/icons'
import { IconBrandWhatsapp } from '@tabler/icons'


export default () => {

    const matches = useMediaQuery('(min-width: 768px)')

    return <Stack sx={{backgroundColor: '#BAD532'}} pt={50} pb={50} align='center' spacing={50}>
        {
            matches ?
            <Group>
                <Anchor href='https://web.facebook.com/profile.php?id=100063891700180' target='_blank'>
                    <Group spacing={0}>
                        <IconBrandFacebook color='white'/>
                        <Text color='white'>Facebook</Text>
                    </Group>
                </Anchor>
                <Anchor href='https://www.instagram.com/enologia_integral/' target='_blank'>
                    <Group spacing={0}>
                        <IconBrandInstagram color='white'/>
                        <Text color='white'>Instagram</Text>
                    </Group>
                </Anchor>
                <Group spacing={0}>
                    <IconBrandWhatsapp color='white'/>
                    <Text color='white'>(646) 127 8362</Text>
                </Group>
            </Group>
            :
            <Stack align='center'>
                <Anchor href='https://web.facebook.com/profile.php?id=100063891700180' target='_blank'>
                    <Group spacing={0}>
                        <IconBrandFacebook color='white'/>
                        <Text color='white' size='xl'>Facebook</Text>
                    </Group>
                </Anchor>
                <Anchor href='https://www.instagram.com/enologia_integral/' target='_blank'>
                    <Group spacing={0}>
                        <IconBrandInstagram color='white'/>
                        <Text color='white' size='xl'>Instagram</Text>
                    </Group>
                </Anchor>
                <Group spacing={0}>
                    <IconBrandWhatsapp color='white'/>
                    <Text color='white' size='xl'>(646) 127 8362</Text>
                </Group>
            </Stack>
        }
        
        <Text size='md' color='white' align='center'>Copyright © 2022 ENO-VIN Distribuidora y Comercializadora S. de R.L. de C.V.</Text>
    </Stack>
}