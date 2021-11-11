import React from 'react';
import { TextField, Typography } from "@mui/material";

const InputText = (props) => {
    return (
        <>
            <TextField {...props} />
            {props.errors.length !== 0 && (
                props.errors.map(error => (
                    <Typography key={error} variant="body2" color="red" marginTop="5px" >{error}</Typography>
                ))
            )}
        </>
    );
}

export default InputText;
