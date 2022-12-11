//Mantine components
import { Center, Stack } from '@mantine/core'
import { Grid } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import { Title } from '@mantine/core'

export default ({title, backgroundUrl}) => {

    return <Carousel.Slide sx={{backgroundColor: 'black'}}>
        <Stack sx={{ height: '100vh', backgroundImage: `url("${backgroundUrl}")`, backgroundSize: 'cover', backgroundPosition: 'bottom'}}>
            <Center sx={{backdropFilter: 'brightness(100%)'}}>
                <Grid sx={{height: '110vh'}} align='center'>
                    <Grid.Col span={6}>
                        <Title size={'4rem'} color='white' style={{textShadow: '3px 4px 7px rgba(81,67,21,0.8)'}}>{title}</Title> 
                    </Grid.Col>
                    <Grid.Col span={6}>

                    </Grid.Col>
                </Grid>
            </Center>
        </Stack>
    </Carousel.Slide>

}