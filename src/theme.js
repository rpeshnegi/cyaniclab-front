import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                body: {
                    color: 'white',
                    '&.disbaled-scroll': {
                        overflow: 'hidden !important',
                    },
                },
                a: {
                    textDecoration: 'none',
                    backgroundColor: 'transparent',
                },
                ul: {
                    margin: 0,
                    padding: 0,
                }
            },
        },
    },

});

export default theme;