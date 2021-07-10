
export const forgetPasswordByPhoneNumberReducer = (state = {}, action) => {
    switch (action.type) {
        case "FORGETPASSWORD_PHONENUMBER_REQUEST":
            return {
                loading: true,
                withdrawInfo: action.payload,
            };
        case "FORGETPASSWORD_PHONENUMBER_SUCCESS":
            return {
                loading: false,
                withdrawInfo: action.payload,
            };
        case "FORGETPASSWORD_PHONENUMBER_FAIL":
            return {
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};


export const forgetPasswordByVerifyOtpReducer = (state = {}, action) => {
    switch (action.type) {
        case "FORGETPASSWORD_VERIFYOTP_REQUEST":
            return {
                loading: true,
                withdrawInfo: action.payload,
            };
        case "FORGETPASSWORD_VERIFYOTP_SUCCESS":
            return {
                loading: false,
                withdrawInfo: action.payload,
            };
        case "FORGETPASSWORD_VERIFYOTP_FAIL":
            return {
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export const confirmPasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case "CONFIRMPASSWORD_REQUEST":
            return {
                loading: true,
                withdrawInfo: action.payload,
            };
        case "CONFIRMPASSWORD_SUCCESS":
            return {
                loading: false,
                withdrawInfo: action.payload,
            };
        case "CONFIRMPASSWORD_FAIL":
            return {
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};