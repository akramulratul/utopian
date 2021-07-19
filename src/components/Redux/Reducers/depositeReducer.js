export const addDepositeReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_DEPOSITE_REQUEST':
            return {
                loading: true, depositeInfo: action.payload
            }
        case 'ADD_DEPOSITE_SUCCESS':
            return {
                loading: false, depositeInfo: action.payload
            }
        case 'ADD_DEPOSITE_FAIL':
            return {
                loading: false, error: action.payload
            }

        default:
            return state;
    }
}

export const depositHistoryReducer = (state = {}, action) => {
    switch (action.type) {
        case 'DEPOSITE_HISTORY_REQUEST':
            return {
                loading: true, depositeInfo: action.payload
            }
        case 'DEPOSITE_HISTORY_SUCCESS':
            return {
                loading: false, depositInfo: action.payload
            }
        case 'DEPOSITE_HISTORY_FAIL':
            return {
                loading: false, error: action.payload
            }

        default:
            return state;
    }
}


export const getUserDepositMethodReducer = (state = {}, action) => {
    switch (action.type) {
        case 'DEPOSIT_METHOD_HISTORY_REQUEST':
            return {
                loading: true, depositMethodHistory: action.payload
            }
        case 'DEPOSIT_METHOD_HISTORY_SUCCESS':
            return {
                loading: false, depositMethodHistory: action.payload
            }
        case 'DEPOSIT_METHOD_HISTORY_FAIL':
            return {
                loading: false, error: action.payload
            }

        default:
            return state;
    }
}