import {
    FIND_BY_COMPANY, SET_COMPANY, FIND_BY_SUY, FIND_BY_CONTACT, CHANGE_STATUS, CHANGE_TYPE, CHANGE_PRICE
} from '../actionTypes'


export const setCompany = (companyInfo) => ({
    type: SET_COMPANY, payload: {companyInfo}
})
export const findByCompany = (findOptions) => ({
    type: FIND_BY_COMPANY, payload: {findOptions}
});

export const findBySuy = (findOptions) => ({
    type: FIND_BY_SUY, payload: {findOptions}
});
export const findByContact = (findOptions) => ({
    type: FIND_BY_CONTACT, payload: {findOptions}
});

export const changeByStatus = (changeOptions) => ({
    type: CHANGE_STATUS, payload: {changeOptions}
});
export const changeByType = (changeOptions) => ({
    type: CHANGE_TYPE, payload: {changeOptions}
});
export const changeByPrice = (changeOptions) => ({
    type: CHANGE_PRICE, payload: {changeOptions}
});











