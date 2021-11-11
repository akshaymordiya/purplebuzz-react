import React, { memo, useState, useMemo } from 'react';
import { Box, Container, Pagination } from "@mui/material";
import HeroSection from "../pages/layouts/work/heroSection";
import Flexcontainer from "../components/UI/flexContainer";
import FlexBox from '../components/UI/flexBox';
import TabsSection from '../components/UI/tabsSection';
import { useSelector } from 'react-redux';
import { Flipper, Flipped } from "react-flip-toolkit";
import PostCard from '../components/UI/postCard';
import FeatureWork from './layouts/work/featureWork';
import BrandButton from "../components/elements/brandButton";

const Work = () => {
    const [tabValue, setTabValue] = useState(0);
    const tabs = useSelector(state => state.work.workTabs);
    const posts = useSelector(state => state.work.workPosts);
    const tabChangeHandler = (event, value) => {
        setTabValue(value)
    }

    const displayWorks = useMemo(() => {
        const activeCatagory = tabs[tabValue].label;
        if(activeCatagory === 'All'){
            return posts;
        }

        const filteredData = posts.filter(post => 
            post.category.includes(activeCatagory)
        )
        return filteredData;
    }, [tabValue, posts ]);

    const displayWorksDataId = useMemo(() => {
        return displayWorks.map(data => data.id);
    }, [displayWorks]);

    return (
        <>
            <HeroSection 
                title="Our Work"
                excerpt="Elit, sed do eiusmod tempor incididunt"
                description={(
                    <>
                        Vector illustration <a href="http://freepik.com/" target="_blank" style={{ color: '#fff'}}>FreePik</a>. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.
                    </>
                )}
            >
                <FlexBox direction="row">
                    <Box padding="15px">
                        <BrandButton outlined color="#fff"  spacing="10px 15px" textOnHover="#000" fontsize="13px">Learn More</BrandButton>
                    </Box>
                    <Box padding="15px">
                        <BrandButton filled color="#03a9f4" textColor="#fff" spacing="10px 15px" fontsize="13px">Contact Us</BrandButton>
                    </Box>
                </FlexBox>
            </HeroSection>
            <Flexcontainer maxWidth={false}>
                <Box paddingTop="100px" >
                    <TabsSection tabs={tabs} textcolor="#4232c2" currentValue={tabValue} tabChangeHandler={tabChangeHandler} ></TabsSection>
                </Box>
            </Flexcontainer>
            <Container maxWidth={false}>
                <Flipper 
                    flipKey={displayWorksDataId.join('')}
                >
                    <FlexBox padding="50px 20px">
                        {displayWorks.map(work => (
                            <Flipped key={work.id} flipId={work.id}>
                                <PostCard post={work} url={`/work/post-details/${work.id}`} />
                            </Flipped>
                        ))}
                    </FlexBox>
                </Flipper>
            </Container>
            <Flexcontainer maxWidth={false}>
                <Box marginBottom="60px">
                    <Pagination
                        count={2}
                        size="large"
                        variant="outlined" 
                        shape="circular"
                        color="primary"
                        />
                </Box>
            </Flexcontainer>
            <FeatureWork />
        </>
    );
}

export default memo(Work);
