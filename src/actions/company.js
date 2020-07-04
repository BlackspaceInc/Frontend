import { gql } from 'apollo-boost';
import axios from "axios";
import {backend} from "../global";
import {isEmpty} from "../utilities/validation/validation";
import {
    THIRD_PARTY_COMPANIES_LOAD_SUCCESS,
    THIRD_PARTY_COMPANIES_LOADING, THIRD_PARTY_COMPANY_LOAD_FAIL,
    THIRD_PARTY_COMPANY_LOAD_SUCCESS, THIRD_PARTY_COMPANY_LOADING,
    THIRD_PARTY_PAGINATED_COMPANIES_LOAD_FAIL,
    THIRD_PARTY_PAGINATED_COMPANIES_LOAD_SUCCESS,
    THIRD_PARTY_PAGINATED_COMPANIES_LOADING

} from "./types";
import {GET_COMPANY, GET_PAGINATED_COMPANIES, GET_COMPANIES} from "../queries/company";

export const getPaginatedThirdPartyCompanies = (limit,useQuery) => async (dispatch) => {
    try {
        const {loading, error, data } = useQuery(GET_PAGINATED_COMPANIES(limit));

        if(isEmpty(data)){
            throw "no data returned";
        }

        if(!isEmpty(error)){
            throw error
        }

        switch (loading) {
            case true:
                dispatch({
                    type: THIRD_PARTY_PAGINATED_COMPANIES_LOADING,
                    payload: data
                });
                break;
            default:
                dispatch({
                    type: THIRD_PARTY_PAGINATED_COMPANIES_LOAD_SUCCESS,
                    payload: data
                });
                break;
        }

    } catch (err) {
        dispatch({
            type: THIRD_PARTY_PAGINATED_COMPANIES_LOAD_FAIL
        });
    }
};

export const getThirdPartyCompanies = (useQuery) => async (dispatch) => {
    try {
        const {loading, error, data } = useQuery(GET_COMPANIES());

        console.log(data)

        if(isEmpty(data)){
            throw "no data returned";
        }

        if(!isEmpty(error)){
            throw error
        }

        switch (loading) {
            case true:
                dispatch({
                    type: THIRD_PARTY_COMPANIES_LOADING,
                    payload: data
                });
                break;
            default:
                dispatch({
                    type: THIRD_PARTY_COMPANIES_LOAD_SUCCESS,
                    payload: data
                });
                break;
        }

    } catch (err) {
        dispatch({
            type: THIRD_PARTY_PAGINATED_COMPANIES_LOAD_FAIL
        });
    }
};

export const getThirdPartyCompany = (id,useQuery) => async (dispatch) => {
    try {
        const {loading, error, data } = useQuery(GET_COMPANY(id));

        if(isEmpty(data)){
            throw "no data returned";
        }

        if(!isEmpty(error)){
            throw error
        }

        switch (loading) {
            case true:
                dispatch({
                    type: THIRD_PARTY_COMPANY_LOADING,
                    payload: data
                });
                break;
            default:
                dispatch({
                    type: THIRD_PARTY_COMPANY_LOAD_SUCCESS,
                    payload: data
                });
                break;
        }

    } catch (err) {
        dispatch({
            type: THIRD_PARTY_COMPANY_LOAD_FAIL
        });
    }
};