import beats from '../../assets/beatData'
import fills from '../../assets/fillData'

const reducers = (state, action) => {

    if(state === undefined){
        state = {
            beats: beats,
            fills: fills
        }
    }

    switch(action.type){

        default: 
            return state
    }
}

export default reducers