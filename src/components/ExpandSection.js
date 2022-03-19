import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Insights from './Insights';

import { Button, Divider } from '@mui/material';

import '../styles/style.css'

function ExpandSection(){

    const savings = useSelector((state)=>state.savings)
    const recommendations = useSelector((state)=>state.recommendations)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch({type:'Set_Savings', payload:{key:'Monthly Savings', value:'$69,042.30', icon:'Dollar'}})
        dispatch({type:'Set_Recommendations', payload:{key:'Recommendations', value:'312', icon:'Star'}})
    },[dispatch])

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