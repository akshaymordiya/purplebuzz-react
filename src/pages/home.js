import { Container, styled, Typography } from '@mui/material';
import React, { memo, useEffect, useState, useMemo } from 'react';
// mui
import { Fade } from "@mui/material";
//components
import FlexBox from '../components/UI/flexBox';
import DisplayCard from '../components/UI/displayCard';
import BrandButton from '../components/elements/brandButton';
import Flexcontainer from '../components/UI/flexContainer';
// from library
import { Flipper, Flipped } from "react-flip-toolkit";
// sections
import HeroSectionWithCarousel from '../pages/layouts/home/heroSectionWithCarousel';
import Services from './layouts/home/services';
import TabsSection from '../components/UI/tabsSection';
import ViewWork from './layouts/home/viewWork';
// hooks
import useWindowDimensions from '../helpers/hooks/useWindowDimensions';
// static data
import { home } from "../config/static";

const Home = () => {
    const [tabValue, setTabValue] = useState(0);
    const [hover, setHover] = useState({
        effectValue: '',
        index: ''
    });

    const tabChangeHandler = (event, value) => {
        setTabValue(value)
    }

    const [workDimension, setWorkDimension] = useState({
        width: '400px',
        height: '300px'
    });
    const { width } = useWindowDimensions();
    useEffect(() => {
        if(width < 600){
            setWorkDimension({
                width: '300px',
                height: '250px'
            })
        }else {
            setWorkDimension({
                width: '400px',
                height: '300px'
            })
        }
    }, [width]);
    
    const handleHoverEffect = (effect, index) => {
        setHover({
            effectValue: effect,
            index: index
        });
    };

    const displayServices = useMemo(() => {
        const activeCatagory = home.tabs[tabValue].label;
        if(activeCatagory === 'All'){
            return home.services;
        }

        const filteredData = home.services.filter(service => 
            service.category.includes(activeCatagory)
        )
        return filteredData;
    }, [tabValue]);

    const displayServicesDataId = useMemo(() => {
        return displayServices.map(data => data.id);
    }, [displayServices]);


    return (
        <>
            <HeroSectionWithCarousel />
            <Typography variant="h3" fontWeight="bold" padding="65px"  textAlign="center">Services</Typography>
            <Flexcontainer maxWidth={false}><Services /></Flexcontainer>
            <Flexcontainer maxWidth={false} padding="40px" bgColor>
                <TabsSection tabs={home.tabs} currentValue={tabValue} tabChangeHandler={tabChangeHandler} ></TabsSection>
            </Flexcontainer>
            <Container maxWidth={false}>
                <Flipper flipKey={displayServicesDataId.join("")}>
                    <FlexBox padding="50px 20px">
                        {displayServices.map(service => (
                            <DisplayCard
                            key={service.id}
                            width="300px" 
                            height='250px'
                            flipId={service.id}
                            onMouseHoverCallback={(hover) => handleHoverEffect(hover, service.label)}
                            bgImage={service.image}
                            gradient={{ direction: 'to top', colors: [ 'rgba( 0, 0, 0, 0.82)10%,', 'rgba( 0, 0, 0, 0)'] }}
                            hoverGradient={{ direction: 'to top', colors: ['rgba(255, 255, 255, 0.6)10%,' , 'white 51%,', 'rgba(255, 255, 255, 0)']}}
                            >
                                <BrandButton outlined color="#fff" textColor={(hover.effectValue && hover.index === service.label) ? '#000' : '#fff' } borderColor={(hover.effectValue && hover.index === service.label) ? '#000' : '#fff' }  textOnHover="#000" width="70%" fontsize="13px">{service.label}</BrandButton>
                                <Typography variant="p" color={(hover.effectValue && hover.index === service.label) ? '#000' : '#fff'} marginTop="10px">{service.text}</Typography>
                            </DisplayCard>
                        ))}
                    </FlexBox>
                </Flipper>
            </Container>
            <Flexcontainer padding="40px" maxWidth={false} bgColor responsive><ViewWork /></Flexcontainer>
            <Typography variant="h3" fontWeight="bold" padding="85px" textAlign="center">Recent Works</Typography>
            <Container maxWidth={false} >
                <FlexBox padding="0px 0px 80px 0px">
                    {home.work.map(work => (
                        <DisplayCard
                            key={work.label}
                            width={workDimension.width}
                            height={workDimension.height}
                            changeAlignmentOnHover
                            bgImage={work.image}
                            onMouseHoverCallback={(hover) => handleHoverEffect(hover, work.label)}
                            gradient={{ direction: 'to top', colors: ['rgba(255, 255, 255, 1)10%,' , 'white 20%,', 'rgba(255, 255, 255, 0.4)'] }}
                            hoverGradient={{ direction: 'to top', colors: ['rgba(33, 150, 243, 1)10%,' , 'white 100%,' ,'rgba(33, 150, 243, 0)']}}
                            >
                            <Typography variant="h5" color={(hover.effectValue && hover.index === work.label) ? '#fff' : '#37474f' } marginTop="10px">{work.label}</Typography>
                            <Typography variant="p" color={(hover.effectValue && hover.index === work.label) ? '#fff' : '#37474f' } marginTop="10px">{work.text}</Typography>
                        </DisplayCard>
                    ))}
                </FlexBox>
            </Container>
        </>
    );
}
export default memo(Home);