
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
            let isInSchedule = false

            thingsToPractice.forEach(item =>{
                if(item.id === action.product.id){
                    isInSchedule = true
                }
            })
            if(!isInSchedule){
                thingsToPractice.push({...action.product})
            }

            return{
                ...state,
                practiceSchedule: thingsToPractice,
                howManyThingsToPractice: state.howManyThingsToPractice + 1
            }

        case "DELETE_PRACTICE_ITEM":
            let deleteThingsInSchedule = [...state.practiceSchedule]
            let moreThanOneItem = false

            if(!moreThanOneItem){
                const indexOfObject = deleteThingsInSchedule.findIndex(object => {
                    return object.id === action.product.id;
                })

                deleteThingsInSchedule.splice(indexOfObject, 1)
            }
            
            return {
                ...state,
                practiceSchedule: deleteThingsInSchedule,
                howManyThingsToPractice: state.howManyThingsToPractice - 1
            }

        default: 
            return state
    }
}

export default reducers