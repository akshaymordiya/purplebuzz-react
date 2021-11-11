import postOne from "../../assets/images/our-work-01.jpg";
import postTwo from "../../assets/images/our-work-02.jpg";
import postThree from "../../assets/images/our-work-03.jpg";
import postFour from "../../assets/images/our-work-04.jpg";
import postFive from "../../assets/images/our-work-05.jpg";
import postSix from "../../assets/images/our-work-06.jpg";

const initialState = {
    workTabs: [
        {
            label: 'All',
            value: 0
        },
        {
            label: 'Business',
            value: 1
        },
        {
            label: 'Marketing',
            value: 2
        },
        {
            label: 'Social Media',
            value: 3
        },
        {
            label: 'Graphic',
            value: 4
        },
    ],
    workPosts: [
        {
            id: 51243213,
            title: 'Digital Marketing',
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor.',
            category: ['Business', 'Marketing', 'Social Media'],
            numberOfLikes: 0,
            numberOfComments: 0,
            thumbnail: postOne
        },
        {
            id: 51243214,
            title: 'Corporate Branding',
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor.',
            category: ['Social Media', 'Graphic'],
            numberOfLikes: 0,
            numberOfComments: 0,
            thumbnail: postTwo
        },
        {
            id: 51243215,
            title: 'Leading Digital Solution',
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor.',
            category: ['Business', 'Marketing', 'Graphic'],
            numberOfLikes: 0,
            numberOfComments: 0,
            thumbnail: postThree  
        },
        {
            id: 51243216,
            title: 'Smart Applications',
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor.',
            category: ['Business', 'Social Media'],
            numberOfLikes: 0,
            numberOfComments: 0,
            thumbnail: postFour  
        },
        {
            id: 51243217,
            title: 'Corporate Stationary',
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor.',
            category: ['Marketing'],
            numberOfLikes: 0,
            numberOfComments: 0,
            thumbnail: postFive
        },
        {
            id: 51243218,
            title: '8 Financial Tips',
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor.',
            category: ['Marketing', 'Graphic'],
            numberOfLikes: 0,
            numberOfComments: 0,
            thumbnail: postSix
        },
    ]
}

export default initialState;