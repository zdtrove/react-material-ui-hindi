import { createMuiTheme } from '@material-ui/core'
import teal from '@material-ui/core/colors/teal'
import deepOrange from '@material-ui/core/colors/deepOrange'

const theme = createMuiTheme({
    spacing: 8,
    typography: {
        fontFamily: ["Open Sans", "sans-serif"].join(","),
        h4: {
            fontFamily: "Roboto"
        }
    },
    palette: {
        primary: {
            main: teal[500]
        },
        secondary: {
            main: deepOrange[500]
        }
    }
})

export default theme