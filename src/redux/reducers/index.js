const expand = (state = false, action) => {
    switch(action.type){
        case 'Toggle': return !state
        default : return state
    }
}

const savings = (state = {}, action) =>{
    switch(action.type){
        case 'Set_Savings' : return action.payload
        default : return state
    }
}

const recommendations = (state = {}, action) =>{
    switch(action.type){
        case 'Set_Recommendations' : return action.payload
        default : return state
    }
}

export {expand, savings, recommendations}