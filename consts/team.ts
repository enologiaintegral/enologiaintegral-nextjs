interface TeamMember {
    name: string,
    role: string,
    imageUrl: string,
    cvUrl: string
}

const members: TeamMember[] = [
    {
        name: 'Juan Mendivil',
        role: 'Asesor Enológico',
        imageUrl: '',
        cvUrl: ''
    },
    {
        name: 'Jesús Segovia',
        role: 'Diseñador gráfico',
        imageUrl: '',
        cvUrl: ''
    },
    {
        name: 'Daniela Robles',
        role: 'Laboratorista químico',
        imageUrl: '',
        cvUrl: '/cv/cv_daniela.pdf'
    },
    {
        name: 'Heberto Reyna',
        role: 'Laboratorista químico',
        imageUrl: '',
        cvUrl: '/cv/cv_heberto.pdf'
    },
    {
        name: 'Deyci Venegas',
        role: 'Promotora de ventas',
        imageUrl: '',
        cvUrl: '/cv/cv_deicy.pdf'
    },
    {
        name: 'Mario Villanueva',
        role: 'Ingeniero agrónomo',
        imageUrl: '',
        cvUrl: ''
    },
    {
        name: 'Víctor Jiménez',
        role: 'Ingeniero agrónomo',
        imageUrl: '',
        cvUrl: ''
    },
    {
        name: 'Cristian Redona',
        role: 'Técnico',
        imageUrl: '',
        cvUrl: ''
    },
    {
        name: 'Oscar Figueroa',
        role: 'Desarrollador de software',
        imageUrl: '/img/profile_oscar.jpg',
        cvUrl: '/cv/cv_oscar.pdf'
    },
]

export type {
    TeamMember
}

export {
    members
}