import { useSelector } from 'react-redux';
import Insights from './Insights';

import { Button, Divider } from '@mui/material';

import '../styles/style.css'

function ExpandSection(){

    const savings = useSelector((state)=>state.savings)
    const recommendations = useSelector((state)=>state.recommendations)

    function handleClick(){
        console.log("Button Clicked")
    }

    return (
            <div className='expandSection'>
                <div className='insightSection'>
                    <Insights title={savings.key} subtitle={savings.value} icon={savings.icon} />
                    <Divider className='verticalDivider' orientation='vertical' flexItem />
                    <Insights title={recommendations.key} subtitle={recommendations.value} icon={recommendations.icon}/>
                </div>
                <div className='buttonSection'>
                    <Button className='button' variant='contained' onClick={handleClick} >CREATE AN INITIATIVE</Button>
                    <Divider className='horizontalDivider'/>
                </div>
            </div>
    )
}

export default ExpandSection