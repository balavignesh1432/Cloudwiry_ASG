import MonetizationOnSharpIcon from '@mui/icons-material/MonetizationOnSharp'
import StarsRoundedIcon from '@mui/icons-material/StarsRounded'
import PendingIcon from '@mui/icons-material/Pending'

import '../styles/style.css'

function InsightIcon(props){
    switch(props.icon){
        case "Dollar": return <MonetizationOnSharpIcon className='insightIcon' fontSize='large'/> 
        case "Star": return <StarsRoundedIcon className='insightIcon' fontSize='large'/> 
        default: return <PendingIcon color='success' fontSize='large' />
    }
}

export default InsightIcon