import { useMediaQuery } from '@mantine/hooks'
import { Stack } from '@mantine/core'
import { Grid } from '@mantine/core'
import { Title } from '@mantine/core'
import { Text } from '@mantine/core'
import { TextInput } from '@mantine/core'
import { Textarea } from '@mantine/core'
import { Button } from '@mantine/core'

export default (): JSX.Element => {

    const matches = useMediaQuery('(min-width: 768px)')

    return <Stack spacing={100} p={50} pt={150} align='center'>
        <Title color='dark.3' align='center' weight={100} size={50}>Contacto</Title>
        <Title color='dark.3' align='center' weight={100}>¿Alguna duda o comentario? Mándanos un correo</Title>
        <form>
            <Stack>
                <Stack align='stretch' sx={{width: matches ? '60vw' : '80vw'}}>
                    <TextInput label='Nombre' variant='filled'/>
                    <TextInput label='Teléfono' variant='filled'/>
                    <TextInput label='Correo electrónico' variant='filled'/>
                    <Textarea label='Mensaje' variant='filled'/>
                </Stack>
                <Button color='gray' variant='outline' type='submit'>Enviar</Button>
            </Stack>
        </form>
        <Grid>
            <Grid.Col span={matches ? 6 : 12}>
                <Stack>
                    <Text size='xl' color='dark.3'>C. Primera 301-local 5, El Sauzal, 22760</Text>
                    <Text size='xl' color='dark.3'>(646) 127 8342</Text>
                    <Text size='xl' color='dark.3'>d.venegas@enologiaintegral.com.mx</Text>
                    <Text size='xl' color='dark.3'>info@enologiaintegral.com.mx</Text>
                </Stack>
            </Grid.Col>
            <Grid.Col span={matches ? 6 : 12}>
                <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=C.%20Primera%20301-local%205,%20El%20Sauzal,%2022760&t=&z=17&ie=UTF8&iwloc=&output=embed"></iframe>
            </Grid.Col>
        </Grid>
                
    </Stack>
}