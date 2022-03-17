import {Typography} from '@mui/material'
import InsightIcon from './InsightIcon'

import '../styles/style.css'

function Insights(props){
    return (
        <div className='insight'>
            <div className='insightText'>
                <Typography variant = 'body2' fontFamily='Poppins'>{props.title}</Typography>
                <Typography variant='subtitle2' fontFamily='Poppins' fontWeight={600}>{props.subtitle}</Typography>
            </div>
            <InsightIcon icon={props.icon}/>
        </div>
    )
}

export default Insights