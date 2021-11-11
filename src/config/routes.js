import { lazy } from "react";
const Home = lazy(() => import('../pages/home'));
const About = lazy(() => import('../pages/about'));
const Work = lazy(() => import('../pages/work'));
const Pricing = lazy(() => import('../pages/pricing'));
const Contact = lazy(() => import('../pages/contact'));
const WorkPost = lazy(() => import('../pages/workPost'));

export const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/about',
        component: About,
        exact: true
    },
    {
        path: '/work',
        component: Work,
        exact: true
    },
    {
        path: '/work/post-details/:id',
        component: WorkPost,
        exact: true
    },
    {
        path: '/pricing',
        component: Pricing,
        exact: true
    },
    {
        path: '/contact',
        component: Contact,
        exact: true
    }
]

export const pageNavigationLinks = [
    {
        to:"/",
        name: 'Home',
        key: 'home-page',
        exact: true
    },
    {
        to:"/about",
        name: 'About',
        key: 'about-page',
        exact: true
    },
    {
        to:"/work",
        name: 'Work',
        key: 'work-page',
        exact: true
    },
    {
        to:"/pricing",
        name: 'Pricing',
        key: 'pricing-page',
        exact: true
    },
    {
        to:"/contact",
        name: 'Contact',
        key: 'contact-page',
        exact: true
    },
]