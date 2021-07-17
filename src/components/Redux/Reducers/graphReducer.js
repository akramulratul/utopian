
export const graphReducer = (state = {}, action) => {
    switch (action.type) {
        case "GRAPH_REQUEST":
            return {
                loading: true,
                graphData: action.payload,
            };
        case "GRAPH_SUCCESS":
            return {
                loading: false,
                graphData: action.payload,
            };
        case "GRAPH_FAIL":
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};