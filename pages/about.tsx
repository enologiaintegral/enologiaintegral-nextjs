//Mantine components
import { Stack } from '@mantine/core'
import { Center } from '@mantine/core'
import { Grid } from '@mantine/core'
import { Title } from '@mantine/core'
import { Text } from '@mantine/core'

//Custom components
import { ZoomImage } from 'components'
import { OpacityImage } from 'components'

export default () => {

    return <Stack spacing={0} pt={100}>
        <Stack spacing={100} p={50} pb={0} align='center'>
            <Title color='dark.3' align='center' weight={100} size={50}>Quiénes somos</Title>
            <Grid align='center' gutter={0} sx={{backgroundColor: '#BAD532'}}>
                <Grid.Col span={6}>
                    <Center p={50}>
                        <Text color='white' align='justify' size='xl'>
                            Enología Integral es una empresa independiente fundada en 2007, que reúne profesionales con más de 20 años de experiencia en el ramo vitivinícola.
                            En los inicios nos especializamos en asesorías personalizadas con especial atención a procesos de producción y control de calidad en la elaboración de vinos.
                            Progresivamente fuimos diversificando y ampliando nuestro menú de servicios.
                        </Text>
                    </Center>
                </Grid.Col>
                <Grid.Col span={6} sx={{overflow: 'hidden', position: 'relative', top: 30, left: 30}}>
                    <ZoomImage url='/img/background_7.jpeg'/>
                </Grid.Col>
            </Grid>
            <Grid align='center' gutter={50} >
                <Grid.Col span={6}>
                    <OpacityImage direction='left' url='/img/background_2.jpeg'/>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Text color='dark.3' align='justify' size='xl'>
                        Fuimos pioneros en crear grupos especializados de atención, dependiendo del área de trabajo donde se requiere el servicio. Reunimos ingenieros agrónomos dedicados 
                        cien por cien a la supervisión y consultoría de viñedos. Enólogos responsables de la producción de vinos, desde la recepción de la fruta, hasta el embotellado de los mismo. 
                        Arquitectos especialistas en idear, crear y realizar construcciones eficientes, prácticas y modernas. Además de diseñadores enfocados en lograr imagen corporativa, etiquetas 
                        y arte conceptual según las necesidades del cliente.
                    </Text>
                </Grid.Col>
            </Grid>
            <Stack>
                <Grid align='center' gutter={0} sx={{backgroundColor: '#1c1c1c', maxWidth: '90%'}}>
                    <Grid.Col span={7}>
                        <Center p={50}>
                            <Text color='white' align='justify' size='xl'>
                                También fuimos pioneros en la elaboración de vinos en nuevos valles productores de uva para vino en México. En el 2010 iniciamos asesorías vitivinícolas en Cerocahui Chihuahua, 
                                desde el 2014 en Hermosillo, Sonora, en 2017 realizamos la primera vinificación en el valle de San Quintín, municipio de Ensenada, Baja California y desde el 2019 acompañamos un 
                                proyecto en el desierto de Samalayuca en Cd. Juárez Chihuahua.
                            </Text>
                        </Center>
                    </Grid.Col>
                    <Grid.Col span={5} sx={{overflow: 'hidden', position: 'relative', left: 100}}>
                        <ZoomImage url='/img/background_6.jpeg'/>
                    </Grid.Col>
                </Grid>
            </Stack>
            <Grid gutter={50} sx={{maxWidth: '70%'}}>
                <Grid.Col span={6}>
                    <Text color='dark.3' align='justify' size='xl'>
                        Desde el 2010, ofrecemos talleres de capacitación a técnicos bodegueros, personal dedicado al trabajo en vinícola. Impartimos clases personalizadas sobre las practicas comunes en la 
                        elaboración de vinos, control de calidad y manejo de productos. Brindamos cursos de degustación y cata para aficionados, especialistas y amantes del vino.
                        En 2015 abrimos nuestro propio laboratorio especializado en análisis. Somos capaces de realizar pruebas analíticas para revisión y conservación de los vinos. 
                    </Text>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Text color='dark.3' align='justify' size='xl'>
                        Así como análisis previos al embotellado y liberación de los productos. Creamos nuestro propio almacén de productos enológicos en 2016, teniendo para nuestros clientes la posibilidad 
                        de compra y facturación de una gran cantidad de insumos necesarios para la elaboración de vinos. En 2020 nace nuestro primer equipo técnico de acción directa, que participa dentro de 
                        las bodegas productoras de vinos.
                    </Text>
                </Grid.Col>
                <Grid.Col span={6}>
                    
                </Grid.Col>
            </Grid>
        </Stack>
        <Center p={50} sx={{backgroundColor: '#1c1c1c', width: '100%'}}>
            <Text color='white' size='xl'>
                Hoy la actividad del grupo se centra en 5 principales unidades de negocio:
                <ul>
                    <li>Asesoría enológica y vitícola.</li>
                    <li>Venta de productos enológicos.</li>
                    <li>Laboratorio especializado en análisis de vinos.</li>
                    <li>Diseño, arte y digitalización de etiquetas.</li>
                    <li>Equipo técnico.</li>
                </ul>
            </Text>
        </Center>
    </Stack> 
}