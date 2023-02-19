interface HeroSlideSchema {
    title: string,
    backgroundUrl: string,
}

const heroSlides: HeroSlideSchema[] = [
    {
        title: 'Profesionales haciendo vino',
        backgroundUrl: '/img/background_1.jpeg'
    },
    {
        title: 'Asesoría enológica y vitícola',
        backgroundUrl: '/img/background_4.jpeg'
    },
    {
        title: 'Laboratorio especializado',
        backgroundUrl: '/img/background_5.jpeg'
    },
    {
        title: 'Venta de productos enológicos',
        backgroundUrl: '/img/background_3.jpeg'
    },
]

export type {
    HeroSlideSchema
}

export {
    heroSlides
}