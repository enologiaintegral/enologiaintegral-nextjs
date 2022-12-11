//Hooks
import { useIntersection } from '@mantine/hooks'

//Mantine components
import { Image } from '@mantine/core'

interface Props {
    url: string,
    direction: 'left' | 'right'
}

export default ({url, direction}: Props) => {

    const {ref, entry} = useIntersection({threshold: 0.3})

    return <Image
        src={url}
        ref={ref} 
        sx={
            {

                transition: '5s',
                opacity: entry?.isIntersecting ? 1.0 : 0.0,

            }
        }
    />

}