import { createStore } from 'redux';
import reducer from '../reducer/reducerApp'

const store = createStore(reducer)

export default store;