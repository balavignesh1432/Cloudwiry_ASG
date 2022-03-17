import {createStore,combineReducers} from 'redux'
import { expand, savings, recommendations } from '../reducers'

const store = createStore(combineReducers({expand, savings, recommendations}))

export {store}