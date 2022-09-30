
export const loadBeats = (data) => {

    return {
        type: "LOAD_BEAT_DATA",
        product: data
    }
}
export const loadFills = (data) => {
    
    return {
        type: "LOAD_FILL_DATA",
        product: data
    }
}
export const addToPractice = (item) => {
    
    return {
        type: "ADD_TO_PRACTICE",
        product: item
    }
}