import { Description, Tv, Web } from "@mui/icons-material";
import service1 from "../assets/images/services-01.jpg";
import service2 from "../assets/images/services-02.jpg";
import service3 from "../assets/images/services-03.jpg";
import service4 from "../assets/images/services-04.jpg";
import service5 from "../assets/images/services-05.jpg";
import service6 from "../assets/images/services-06.jpg";
import service7 from "../assets/images/services-07.jpg";
import service8 from "../assets/images/services-08.jpg";

import feature1 from "../assets/images/feature-work-1.jpg";
import feature2 from "../assets/images/feature-work-2.jpg";
import feature3 from "../assets/images/feature-work-3.jpg";
import feature4 from "../assets/images/feature-work-4.jpg";

export const home = {
    tabs : [
        {
            label: 'All',
            value: 0
        },
        {
            label: 'Graphics',
            value: 1
        },
        {
            label: 'UI/UX',
            value: 2
        },
        {
            label: 'Branding',
            value: 3
        },
    ],
    services : [
        {
            id: 1,
            label: 'UI/UX',
            category: ['UI/UX', 'Branding'],
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            image: service1,
        },
        {
            id: 2,
            label: 'Social Media',
            category: ['UI/UX', 'Graphics'],
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            image: service2,
        },
        {
            id: 3,
            label: 'Marketing',
            category: ['Branding'],
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            image: service3,
        },
        {
            id: 4,
            label: 'Graphic',
            category: ['Graphics', 'UI/UX'],
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            image: service4,
        },
        {
            id: 5,
            label: 'Digital Marketing',
            category: ['Graphics', 'UI/UX', 'Branding'],
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            image: service5,
        },
        {
            id: 6,
            label: 'Market Research',
            category: ['Branding'],
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            image: service6,
        },
        {
            id: 7,
            label: 'Bussiness',
            category: ['Branding'],
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            image: service7,
        },
        {
            id: 8,
            label: 'Branding',
            category: ['Graphics', 'UI/UX', 'Branding'],
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            image: service8,
        },
    ],
    work : [
        {
            label: 'Social Media',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            image: service1,
        },
        {
            label: 'Web Marketing',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            image: service2,
        },
        {
            label: 'R & D',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            image: service3,
        },
        {
            label: 'Public Relation',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            image: service4,
        },
        {
            label: 'Branding',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            image: service5,
        },
        {
            label: 'Creative Design',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
            image: service6,
        },
    ]
}

export const contact = {
    contacts: [
        {
            heading: 'Media Contact',
            name: 'Mr. John Doe',
            contact: '010-020-0340',
            icon: Web
        },
        {
            heading: 'Technical Contact',
            name: 'Mr. John Stiles',
            contact: '010-020-0340',
            icon: Tv
        },
        {
            heading: 'Billing Contact',
            name: 'Mr. Richard Miles',
            contact: '010-020-0340',
            icon: Description
        },

    ]
}

export const Pricing = {
    plans: [
        {
            type: 'Free Plan',
            description: 'Deserunt mollit laborum.',
            price: 0,
            limit: 0,
            keyBenifits: [
                '5 Users',
                '2 TB Space',
                'Community Forums',
                'Email Support'
            ],
            customize: false
        },
        {
            type: 'Standard Plan',
            description: 'Adipiscing elit, sed do',
            price: 120,
            limit: 'Year',
            keyBenifits: [
                '25 to 99 Users',
                '10 TB Space',
                'Source Files',
                'Live Chat'
            ],
            customize: true
        },
        {
            type: 'Enterprise',
            description: 'Sed do eiusmod tempor',
            price: 840,
            limit: 'Year',
            keyBenifits: [
                '100 Users or more',
                '80 TB Space',
                'Full Access Sources',
                'Live Chat',
                'Customizations'
            ],
            customize: false
        },
    ]
}

export const work = {
    gallary: [
        feature1, feature2, feature3, feature4
    ]
}