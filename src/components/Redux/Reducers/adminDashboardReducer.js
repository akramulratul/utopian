
export const adminDashboardReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADMINDASHBOARD_HISTORY_REQUEST':
            return {
                loading: true, adminInfo: action.payload
            }
        case 'ADMINDASHBOARD_HISTORY_SUCCESS':
            return {
                loading: false, adminInfo: action.payload
            }
        case 'ADMINDASHBOARD_HISTORY_FAIL':
            return {
                loading: false, error: action.payload
            }

        default:
            return state;
    }
}

export const adminUserListReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADMIN_ALL_USER_LIST_REQUEST':
            return {
                loading: true, userListInfo: action.payload
            }
        case 'ADMIN_ALL_USER_LIST_SUCCESS':
            return {
                loading: false, userListInfo: action.payload
            }
        case 'ADMIN_ALL_USER_LIST_FAIL':
            return {
                loading: false, error: action.payload
            }

        default:
            return state;
    }
}

