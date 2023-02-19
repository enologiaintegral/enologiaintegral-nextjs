interface TeamMember {
    name: string,
    role: string,
    imageUrl: string,
    cvUrl: string
}

const members: TeamMember[] = [
    {
        name: 'Pedro Mendivil',
        role: 'Asesor Enológico',
        imageUrl: '/img/profile_pedro.jpeg',
        cvUrl: '/cv/cv_pedro.pdf'
    },
    {
        name: 'Jesús Segovia',
        role: 'Diseñador gráfico',
        imageUrl: '',
        cvUrl: '/cv/cv_jesus.pdf'
    },
    {
        name: 'Daniela Robles',
        role: 'Laboratorista químico',
        imageUrl: '/img/profile_daniela.jpeg',
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
        imageUrl: '/img/profile_deicy.jpeg',
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
        cvUrl: '/cv/cv_victor.pdf'
    },
    {
        name: 'Christian Redona',
        role: 'Técnico',
        imageUrl: '/img/profile_christian.jpeg',
        cvUrl: '/cv/cv_christian.pdf'
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