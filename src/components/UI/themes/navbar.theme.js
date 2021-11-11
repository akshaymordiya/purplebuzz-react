import { createTheme } from "@mui/material";

let theme = createTheme({
    palette: {
        natural: {
            main: '#215421',
            contrastText: '#fff',
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    height: '80px',
                    zIndex: '2',
                    boxShadow: 'rgb(0 0 0 / 15%) 0px 0.5rem 1rem !important;',
                },
            }
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'nowrap',
                    height: '100%'
                },
            }
        },
        MuiIconButton: {
            variants: [
                {
                    props: { animation: 'ring' },
                    style: {
                        ':hover': {
                            animation: 'ring 1.5s ease ',
                            animationIterationCount: 'infinite',
                        },
                        '@keyframes ring' : {
                            '0%': {
                                transform: 'rotate(30deg)'
                            },
                            '12.5%': {
                                transform: 'rotate(-30deg)'
                            },
                            '25%' :{
                                transform: 'rotate(25deg)'
                            },
                            '37.5%': {
                                transform: 'rotate(-20deg)'
                            },
                            '50%' : {
                                transform: 'rotate(15deg)'
                            },
                            '62.5%': {
                                transform: 'rotate(-10deg)'
                            },
                            '75%': {
                                transform: 'rotate(5deg)'
                            },
                            '100%': {
                                transform: 'rotate(0deg)'
                            }
                            
                        }
                    },
                },
                
            ]
        },
        MuiMenu: {
            styleOverrides: {
                root: {
                    margin: '0px'
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    width: '100%',
                    maxWidth: '100%',
                    justifyContent: 'center'
                }
            }
        }
    }
});

export default theme;