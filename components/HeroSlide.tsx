import { useMediaQuery } from '@mantine/hooks'
import { Stack, BackgroundImage, Grid, Title } from '@mantine/core'
import { Carousel } from '@mantine/carousel'

import type { HeroSlideSchema } from 'consts'

export default ({data}: {data: HeroSlideSchema}) => {

    const matches = useMediaQuery('(min-width: 768px)')

    return <Carousel.Slide sx={{backgroundColor: 'black'}}>
        <BackgroundImage src={data.backgroundUrl}>
            <Grid>
                <Grid.Col span={matches ? 8 : 12}>
                    <Stack sx={{height: '100vh'}} justify='center'>
                        <Title size={matches ? '4rem' : '3rem'} align='center' color='white' style={{textShadow: '3px 4px 7px rgba(81,67,21,0.8)'}}>{data.title}</Title>
                    </Stack>
                </Grid.Col>
            </Grid>
        </BackgroundImage>
    </Carousel.Slide>

}