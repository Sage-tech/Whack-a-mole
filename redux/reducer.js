import { ADD_SCORE } from './actionTypes'
const initialState = {
score:0
}
// Adding Plus one to our score
const scoreReducer = (state = initialState, action) => {
switch(action.type) {
case ADD_SCORE: return {
...state,
score: state.score +1
}
default: return state
}
}

export default scoreReducer
// so it can be used everywhere in the project 