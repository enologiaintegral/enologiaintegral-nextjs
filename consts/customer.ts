interface Customer {
    name: string,
    logoUrl: string,
}

const customers: Customer[] = [
    {
        name: 'Vinícola Amelia',
        logoUrl: '/img//logo/logo_amelia.png'
    },
    {
        name: 'Vinícola de Becerra',
        logoUrl: '/img/logo/logo_becerra.png'
    },
    {
        name: 'Viñedos La Bonita',
        logoUrl: '/img/logo/logo_bonita.png'
    },
    {
        name: 'Viñas Casa Ferro',
        logoUrl: '/img/logo/logo_casaferro.png'
    },
    {
        name: 'Entrevez',
        logoUrl: '/img/logo/logo_entrevez.png'
    },
    {
        name: 'Finita Vinícola',
        logoUrl: '/img/logo/logo_finita.png'
    },
    {
        name: 'Viña de Liceaga',
        logoUrl: '/img/logo/logo_liceaga.png'
    },
    {
        name: 'Vinos LT',
        logoUrl: '/img/logo/logo_lt.png'
    },
    {
        name: 'Caba Maciel',
        logoUrl: '/img/logo/logo_maciel.png'
    },
    {
        name: 'Hacienda Minas del Sol',
        logoUrl: '/img/logo/logo_minasdelsol.png'
    },
    {
        name: 'Finca El Mirador del Valle',
        logoUrl: '/img/logo/logo_mirador.png'
    },
    {
        name: 'Hotel Misión',
        logoUrl: '/img/logo/logo_mision.png'
    },
    {
        name: 'Hacienda Los Moreno',
        logoUrl: '/img/logo/logo_moreno.png'
    },
    {
        name: 'Vinícola Rosa de Arena',
        logoUrl: '/img/logo/logo_rosadearena.png'
    },
]

export type {
    Customer
}

export {
    customers
}