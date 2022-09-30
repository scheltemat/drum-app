
const reducers = (state, action) => {

    if(state === undefined){
        state = {
            beats: [],
            fills: [],
            practiceSchedule: [],
            howManyThingsToPractice: 0
        }
    }

    switch(action.type){

        case "LOAD_BEAT_DATA":
            return {
                ...state,
                beats: action.product
            }

        case "LOAD_FILL_DATA":
            return {
                ...state,
                fills: action.product
            }

        case "ADD_TO_PRACTICE":
            let thingsToPractice = [...state.practiceSchedule]

            return{
                ...state,
                practiceSchedule: thingsToPractice,
                howManyThingsToPractice: state.howManyThingsToPractice + 1
            }

        default: 
            return state
    }
}

export default reducers