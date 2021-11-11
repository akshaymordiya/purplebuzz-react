import { createTheme } from "@mui/material";

let theme = createTheme({
    palette: {
        secondary: {
            main: '#64748B',
            contrastText: '#fff',
        },
    },
    components: {
        MuiIconButton: {
            variants: [
                {
                    props: { variant: 'buttons', iconcolor: 'primary' },
                    style: {
                        color: '#4232c2',
                        ':nth-of-type(2)' : {
                            margin: '0 10px'
                        },
                    }
                }
            ]
        }
    }
})

export default theme;