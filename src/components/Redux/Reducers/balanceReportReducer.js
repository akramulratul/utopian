export const incentiveBalanceReportHistory = (state = {}, action) => {
    switch (action.type) {
        case 'INCENTIVE_BALANCE_REPORT_HISTORY_REQUEST':
            return {
                loading: true, balanceReportInfo: action.payload
            }
        case 'INCENTIVE_BALANCE_REPORT_HISTORY_SUCCESS':
            return {
                loading: false, balanceReportInfo: action.payload
            }
        case 'NCENTIVE_BALANCE_REPORT_HISTORY_FAIL':
            return {
                loading: false, error: action.payload
            }

        default:
            return state;
    }
}