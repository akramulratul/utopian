
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

export const adminUserDetailsListReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADMIN_USER_LIST_DETAILS_REQUEST':
            return {
                loading: true, userListInfo: action.payload
            }
        case 'ADMIN_USER_LIST_DETAILS_SUCCESS':
            return {
                loading: false, userListInfo: action.payload
            }
        case 'ADMIN_USER_LIST_DETAILS_FAIL':
            return {
                loading: false, error: action.payload
            }

        default:
            return state;
    }
}

export const adminUserSuspendReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADMIN_USER_SUSPEND_REQUEST':
            return {
                loading: true, suspendPerson: action.payload
            }
        case 'ADMIN_USER_SUSPEND_SUCCESS':
            return {
                loading: false, suspendPerson: action.payload
            }
        case 'ADMIN_USER_SUSPEND_FAIL':
            return {
                loading: false, error: action.payload
            }

        default:
            return state;
    }
}

export const adminUserTemporarySuspendReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADMIN_USER_TEMPORARY_SUSPEND_REQUEST':
            return {
                loading: true, suspendPerson: action.payload
            }
        case 'ADMIN_USER_TEMPORARY_SUSPEND_SUCCESS':
            return {
                loading: false, suspendPerson: action.payload
            }
        case 'ADMIN_USER_TEMPORARY_SUSPEND_FAIL':
            return {
                loading: false, error: action.payload
            }

        default:
            return state;
    }
}


