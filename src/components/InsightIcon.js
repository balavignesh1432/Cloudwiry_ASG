import MonetizationOnSharpIcon from '@mui/icons-material/MonetizationOnSharp'
import StarsRoundedIcon from '@mui/icons-material/StarsRounded'

import {useStyles} from '../styles/index.js'

function InsightIcon(props){

    const classes = useStyles();

    switch(props.icon){
        case "Dollar": return <MonetizationOnSharpIcon className={classes.insightIcon} fontSize='large'/> 
        case "Star": return <StarsRoundedIcon className={classes.insightIcon} fontSize='large'/> 
        default: return null
    }
}

export default InsightIcon