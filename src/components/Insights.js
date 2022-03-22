import {Typography} from '@mui/material'
import InsightIcon from './InsightIcon'

import { useStyles } from '../styles'

function Insights(props){
    
    const classes = useStyles()

    return (
        <div className={classes.insight}>
            <div className='insightText'>
                <Typography variant = 'body2' fontFamily='Poppins'>{props.title}</Typography>
                <Typography variant='subtitle2' fontFamily='Poppins' fontWeight={600}>{props.subtitle}</Typography>
            </div>
            <InsightIcon icon={props.icon}/>
        </div>
    )
}

export default Insights