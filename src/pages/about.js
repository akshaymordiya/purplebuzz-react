import React, { memo } from 'react';
//sections
import HeroSection from './layouts/aboute/heroSection';
import Partner from './layouts/aboute/partner';
import Team from './layouts/aboute/team';
import WorkProgress from "./layouts/aboute/workProgress"
import Goals from './layouts/aboute/goals';
import Subscribe from './layouts/aboute/subscribe';
import Choice from './layouts/aboute/choice';
    
const About = () => {
    return (
        <>
            <HeroSection />
            <Team />
            <Partner />
            <WorkProgress />
            <Choice />
            <Goals />
            <Subscribe />
        </>
    );
}

export default memo(About);
