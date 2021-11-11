import React from 'react';
import { Tab, Tabs} from "@material-ui/core";
import { Box, styled } from '@mui/material';

const StyledTabs = styled((props) => (
    <Tabs 
        {...props}
        TabIndicatorProps={{children : <span className="MuiTabs-indicatorSpan"/>}}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'none',
    },
    '&.MuiTabs-root': {
        display: 'flex',
    },
    '& .MuiTabs-flexContainer': {
        flexWrap: 'wrap'
    }
})

const StyledTab =styled((props) => (
    <Tab 
        {...props}
        disableRipple
    />
))(({theme, fontColor}) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    [theme.breakpoints.down('sm')]: {
        minWidth: 0,
    },
    transition: '.3s',
    '&.MuiTab-root': {
        flexWrap: 'wrap',
        marginLeft: '15px',
        marginRight: '15px',
    },
    '&.MuiTab-textColorInherit' : {
        color: fontColor,
        opacity: '1'
    },
    '&.Mui-selected': {
      color: '#fff',
      borderRadius: '30px',
      backgroundColor: '#4232c2',
    },
    '&:hover': {
        color: '#fff',
        borderRadius: '30px',
        backgroundColor: '#4232c2',
        opacity: '1'
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
}))

const TabsSection = ({tabs, currentValue, tabChangeHandler, textcolor}) => {
    return (
        <Box sx={{ width: '100%' }}>
            <StyledTabs 
                centered 
                value={currentValue} 
                onChange={tabChangeHandler}
                aria-label="styled tabs example"
                >
                    {tabs.map(tab => (
                        <StyledTab key={tab.label} label={tab.label} fontColor={textcolor ? textcolor : '#fff'} value={tab.value}  />
                    ))}
                {/* <StyledTab label="Item Two" value={1}/>
                <StyledTab label="Item Three" value={2}/>
                <StyledTab label="Item Four" value={3}/> */}
            </StyledTabs>
        </Box>
    );
}

export default TabsSection;
