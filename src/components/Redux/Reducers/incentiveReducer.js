

export const incentiveHistoryReducer = (state = {}, action) => {
    switch (action.type) {
        case 'INCENTIVE_HISTORY_REQUEST':
            return {
                loading: true, INCENTIVEInfo: action.payload
            }
        case 'INCENTIVE_HISTORY_SUCCESS':
            return {
                loading: false,INCENTIVEInfo: action.payload
            }
        case 'INCENTIVE_HISTORY_FAIL':
            return {
                loading: false, error: action.payload
            }

        default:
            return state;
    }
}