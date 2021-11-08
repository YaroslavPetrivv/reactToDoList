import {FIND_BY_COMPANY, FIND_BY_CONTACT, FIND_BY_SUY, CHANGE_STATUS, CHANGE_TYPE, CHANGE_PRICE} from "../actionTypes";

const initialState = {
    findByCompany: '',
    findBySuy: '',
    findByContact: '',
    status: 'All',
    type: 'All',
    price: 'All'
}


export default function filterReducer(state = initialState, action) {
    switch (action.type) {
        case  FIND_BY_COMPANY: {
            return {
                ...state,
                findByCompany: action.payload.findOptions
            }
        }
        case  FIND_BY_SUY: {
            return {
                ...state,
                findBySuy: action.payload.findOptions
            }
        }
        case  FIND_BY_CONTACT: {
            return {
                ...state,
                findByContact: action.payload.findOptions
            }
        }
        case  CHANGE_STATUS: {
            return {
                ...state,
                status: action.payload.changeOptions
            }
        }
        case  CHANGE_TYPE: {
            return {
                ...state,
                type: action.payload.changeOptions
            }
        }
        case  CHANGE_PRICE: {
            return {
                ...state,
                price: action.payload.changeOptions
            }
        }
        default:
            return state
    }
}
