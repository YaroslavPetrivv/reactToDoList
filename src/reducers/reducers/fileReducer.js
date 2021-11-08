import {SET_COMPANY} from "../actionTypes";

const initialState = {
    companyInfo: [],
    findCompanyInfo: [],
    currentPage: 1,
    totalPages: 0,
    isLoading: false,
    perPage: 0,
    active: true,
}


export default function fileReducer(state = initialState, action) {
    switch (action.type) {
        case SET_COMPANY : {
            return {
                ...state,
                companyInfo: action.payload.companyInfo,
                isLoading: false,
                isEmpty: false
            }
        }
        default:
            return state
    }
}
