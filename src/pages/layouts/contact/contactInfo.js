import React, { memo } from 'react';
import { Grid, Box } from "@mui/material";
import { contact } from "../../../config/static";
import Flexcontainer from '../../../components/UI/flexContainer';
import ContactForm from './contactForm';
import ContactCard from '../../../components/UI/contactCard';
import { Description, Tv, Web } from '@mui/icons-material';

const ContactInfo = () => {
    return (
        <Flexcontainer maxWidth={false} padding="60px 40px" >
            <Grid container>
                <Grid item xs={12} md={6} lg={5} display="flex" alignItems="center" flexDirection="column">
                    <Box>
                    {contact.contacts.map(contact => (
                        <Box key={contact.heading} paddingY="20px" display="flex" alignItems="flex-start" >
                            <ContactCard heading={contact.heading} name={contact.name} contact={contact.contact} icon={contact.icon} />
                        </Box>
                    ))}
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={7} >
                    <ContactForm />
                </Grid>
            </Grid>
        </Flexcontainer>
    );
}

export default memo(ContactInfo);
