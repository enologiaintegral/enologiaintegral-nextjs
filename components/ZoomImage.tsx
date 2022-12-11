//Hooks
import { useIntersection } from '@mantine/hooks'

//Mantine components
import { Image } from '@mantine/core'

interface Props {
    url: string
}

export default ({url}: Props) => {

    const {ref, entry} = useIntersection({threshold: 0.3})

    return <Image
        src={url}
        ref={ref} 
        sx={
            {

                transition: '30s',
                transform: entry?.isIntersecting? 'scale(1.5)' : null

            }
        }
    />

}