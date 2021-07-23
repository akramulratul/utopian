

export const depositMethodReducer = (state = {}, action) => {
    switch (action.type) {
        case 'DEPOSIT_METHOD_REQUEST':
            return {
                loading: true, depositOption: action.payload
            }
        case 'DEPOSIT_METHOD_SUCCESS':
            return {
                loading: false, depositOption: action.payload
            }
        case 'DEPOSIT_METHOD_FAIL':
            return {
                loading: false, error: action.payload
            }

        default:
            return state;
    }
}
export const depositMethodHistoryReducer = (state = {}, action) => {
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

export const updateDepositMethodHistoryReducer = (state = {}, action) => {
    switch (action.type) {
        case 'DEPOSIT_METHOD_HISTORY_UPDATE_REQUEST':
            return {
                loading: true, depositMethodHistory: action.payload
            }
        case 'DEPOSIT_METHOD_HISTORY_UPDATE_SUCCESS':
            return {
                loading: false, depositMethodHistory: action.payload
            }
        case 'DEPOSIT_METHOD_HISTORY_UPDATE_FAIL':
            return {
                loading: false, error: action.payload
            }

        default:
            return state;
    }
}
export const deleteDepositMethodReducer = (state = {}, action) => {
    switch (action.type) {
        case 'DELETE_DEPOSIT_METHOD_HISTORY_REQUEST':
            return {
                loading: true, depositMethodHistory: action.payload
            }
        case 'DELETE_DEPOSIT_METHOD_HISTORY_SUCCESS':
            return {
                loading: false, depositMethodHistory: action.payload
            }
        case 'DELETE_DEPOSIT_METHOD_HISTORY_FAIL':
            return {
                loading: false, error: action.payload
            }

        default:
            return state;
    }
}