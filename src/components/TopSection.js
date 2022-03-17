import {useSelector, useDispatch} from 'react-redux'

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import '../styles/style.css'

function TopSection(){

    const expand = useSelector((state)=>state.expand)
    const dispatch = useDispatch()

    function handleExpand(){
        dispatch({type:'Toggle'})
    }

    return (
        <div className='top'>
            <IconButton onClick={handleExpand}>
            {expand ? <RemoveCircleOutlineIcon style={{color:'black'}} />:<AddCircleOutlineIcon style={{color:'black'}} /> }
            </IconButton>
            <div className='topTextSection'>
                <Typography className='topText' variant='h6' fontFamily='Poppins' fontWeight='bold' >Auto Scaling Group</Typography>    
                {expand && <Typography className='topSubText' fontFamily='Poppins' variant='body1' >AutoScalingGroup</Typography>}
            </div>
        </div>
    )
}   

export default TopSection