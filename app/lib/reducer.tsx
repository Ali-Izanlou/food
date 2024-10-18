
export const initialState = {
    p: []
}



export function reducer(state: { p: [] }, action: { type: string, payload: any }) {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                p : action.payload
            }
        default:
            return state
    }
}