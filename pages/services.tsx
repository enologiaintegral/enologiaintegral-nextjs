import { useMediaQuery } from '@mantine/hooks'
import { Stack } from '@mantine/core'
import { Grid } from '@mantine/core'
import { Title } from '@mantine/core'
import { Image } from '@mantine/core'
import { Text } from '@mantine/core'
import { Carousel } from '@mantine/carousel'

import { labels } from 'consts'

export default () => {

    const matches = useMediaQuery('(min-width: 768px)')

    return <Stack pt={100}>
        <Stack spacing={100} p={50} align='center'>
            <Title color='dark.3' align='center' weight={100} size={50}>Servicios</Title>
            <Grid align='center' gutter={100}>
                <Grid.Col span={matches ? 6 : 12}>
                <Image src='/img/asesoria.jpeg' height={250} fit='cover' sx={{image: {bottom: 50, position: 'relative'}}}/>
                </Grid.Col>
                <Grid.Col span={matches ? 6 : 12}>
                    <Stack>
                        <Title color='dark.3' weight={100}>Asesoría enológica</Title>
                        <Text>
                            Siempre comprometidos con la excelencia, innovación y privacidad de nuestros clientes, visitamos su vinícola para brindarle orientación y guía, 
                            durante todos los procesos que transcurren en la elaboración de los vinos. Ajustamos nuestro servicio a sus necesidades, personalizando de esta 
                            manera cada vinificación. Nuestro conocimiento y experiencia están a su servicio, siempre con la intención de lograr vinos de calidad.
                        </Text>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={matches ? 6 : 12}>
                    <Stack>
                        <Title color='dark.3' weight={100}>Productos enológicos</Title>
                        <Text>
                            Ofrecemos productos enológicos de la marca SCOTT laboratories, nuestra gama incluye levaduras, nutrientes, bacterias, etc. Todos los insumos 
                            necesarios para sus vinificaciones. Además, somos proveedores en México de la marca Filtrox, quien produce filtros y materiales filtrantes de 
                            muy buena calidad.
                        </Text>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={matches ? 6 : 12}>
                    IMAGEN
                </Grid.Col>
                <Grid.Col span={12}>
                    <Stack>
                        <Title color='dark.3' weight={100} align='center'>Diseño, arte y digitalización de etiquetas</Title>
                        <Text align='center'>
                            “De la vista nace el amor”, es por esto que digitalizamos sus ideas para lograr el arte que viste sus vinos. Brindamos el servicio de diseño de 
                            etiquetas personalizadas.
                        </Text>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={12}>
                    <Carousel loop slideSize={'33%'}>
                        {labels.map(label => <Carousel.Slide key={label}>
                            <Image height={250} fit='contain' src={label}/>
                        </Carousel.Slide>)}
                    </Carousel>
                </Grid.Col>
                <Grid.Col span={matches ? 6 : 12}>
                    <Stack>
                        <Title color='dark.3' weight={100}>Laboratorio espacializado en análisis de vinos</Title>
                        <Text>
                            La salud e higiene de los vinos depende en gran medida de las buenas prácticas que se realizan en la bodega, los análisis son esenciales para lograrlo. 
                            Nuestro laboratorio se encarga de monitorear sus mostos y vinos, mediante la medición de los principales parámetros. Seremos de ayuda para vigilar la 
                            vinificación, guarda y embotellado de su producto.
                        </Text>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={matches ? 6 : 12}>
                    <Image src='/img/laboratorio.jpeg' height={250} fit='cover' sx={{image: {bottom: 50, position: 'relative'}}}/>
                </Grid.Col>
                <Grid.Col span={matches ? 6 : 12}>
                    <Image src='/img/equipo_tecnico.jpeg' height={250} fit='cover' styles={{image:{ objectPosition: matches ? '0px -350px' : null}}}/>
                </Grid.Col>
                <Grid.Col span={matches ? 6 : 12}>
                    <Stack>
                        <Title color='dark.3' weight={100}>Equipo técnico</Title>
                        <Text>
                        Contamos con personal capacitado que ofrece servicio a bodegas vinícolas, este equipo de personas planea, asiste o dirige procesos como vendimia, trasiegos, 
                        filtraciones, embotellado etc. Además, contamos con el servicio de lavado de barricas con productos especiales para no dañar la madera o mediante el uso de 
                        caldera y ozonificador.
                        </Text>
                    </Stack>
                </Grid.Col>
            </Grid>
        </Stack>
    </Stack> 
}