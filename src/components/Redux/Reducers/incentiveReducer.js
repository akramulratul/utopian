

export const incentiveHistoryReducer = (state = {}, action) => {
    switch (action.type) {
        case 'INCENTIVE_HISTORY_REQUEST':
            return {
                loading: true, incentiveInfo: action.payload
            }
        case 'INCENTIVE_HISTORY_SUCCESS':
            return {
                loading: false, incentiveInfo: action.payload
            }
        case 'INCENTIVE_HISTORY_FAIL':
            return {
                loading: false, error: action.payload
            }

        default:
            return state;
    }
}

export const adminIncentiveApprovedReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADMIN_INCENTIVE_APPROVED_REQUEST':
            return {
                loading: true, ApprovedInfo: action.payload
            }
        case 'ADMIN_INCENTIVE_APPROVED_SUCCESS':
            return {
                loading: false, ApprovedInfo: action.payload
            }
        case 'ADMIN_INCENTIVE_APPROVED_FAIL':
            return {
                loading: false, error: action.payload
            }

        default:
            return state;
    }
}

export const adminIncentiveDeclineReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADMIN_INCENTIVE_DECLINE_REQUEST':
            return {
                loading: true, ApprovedInfo: action.payload
            }
        case 'ADMIN_INCENTIVE_DECLINE_SUCCESS':
            return {
                loading: false, ApprovedInfo: action.payload
            }
        case 'ADMIN_INCENTIVE_DECLINE_FAIL':
            return {
                loading: false, error: action.payload
            }

        default:
            return state;
    }
}


export const incentiveTeamHistoryReducer = (state = {}, action) => {
    switch (action.type) {
        case 'INCENTIVE_HISTORY_REQUEST':
            return {
                loading: true, incentiveInfo: action.payload
            }
        case 'INCENTIVE_HISTORY_SUCCESS':
            return {
                loading: false, incentiveInfo: action.payload
            }
        case 'INCENTIVE_HISTORY_FAIL':
            return {
                loading: false, error: action.payload
            }

        default:
            return state;
    }
}

export const adminTeamIncentiveApprovedReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADMIN_INCENTIVE_APPROVED_REQUEST':
            return {
                loading: true, ApprovedInfo: action.payload
            }
        case 'ADMIN_INCENTIVE_APPROVED_SUCCESS':
            return {
                loading: false, ApprovedInfo: action.payload
            }
        case 'ADMIN_INCENTIVE_APPROVED_FAIL':
            return {
                loading: false, error: action.payload
            }

        default:
            return state;
    }
}

export const adminTeamIncentiveDeclineReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADMIN_INCENTIVE_DECLINE_REQUEST':
            return {
                loading: true, ApprovedInfo: action.payload
            }
        case 'ADMIN_INCENTIVE_DECLINE_SUCCESS':
            return {
                loading: false, ApprovedInfo: action.payload
            }
        case 'ADMIN_INCENTIVE_DECLINE_FAIL':
            return {
                loading: false, error: action.payload
            }

        default:
            return state;
    }
}

