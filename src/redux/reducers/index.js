const expand = (state = false, action) => {
    switch(action.type){
        case 'Toggle': return !state
        default : return state
    }
}

const savings = (state = {key:'Monthly Savings', value:'$69,042.30', icon:'Dollar'}, action) =>{
    switch(action.type){
        case 'Set_Savings' : return action.payload
        default : return state
    }
}

const recommendations = (state = {key:'Recommendations', value:'312', icon:'Star'}, action) =>{
    switch(action.type){
        case 'Set_Recommendations' : return action.payload
        default : return state
    }
}

export {expand, savings, recommendations}