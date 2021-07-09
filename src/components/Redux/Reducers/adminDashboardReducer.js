
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