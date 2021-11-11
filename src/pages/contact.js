import React, { memo } from 'react';
import HeroSection from "../pages/layouts/contact/heroSection";
import BannerHero from './layouts/contact/bannerHero';
import ContactInfo from './layouts/contact/contactInfo';

const Contact = () => {
    return (
        <>
            <HeroSection />
            <BannerHero />
            <ContactInfo />
        </>
    );
}

export default memo(Contact);
