//Mantine components
import { Center, Stack } from '@mantine/core'
import { Grid } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import { Title } from '@mantine/core'

export default ({videoUrl}) => {

    return <Carousel.Slide sx={{backgroundColor: 'white'}}>
        <Center sx={{ height: '100vh', overflow: 'hidden'}}>
            <video style={{position: 'absolute'}} height='100%' width='auto' autoPlay loop>
                <source src={videoUrl}/>
            </video>
        </Center>
    </Carousel.Slide>

}