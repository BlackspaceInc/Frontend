import {
	THIRD_PARTY_COMPANY_LOAD_SUCCESS,
	THIRD_PARTY_COMPANIES_LOAD_SUCCESS,
	THIRD_PARTY_PAGINATED_COMPANIES_LOAD_SUCCESS,
	THIRD_PARTY_COMPANY_LOAD_FAIL,
	THIRD_PARTY_PAGINATED_COMPANIES_LOAD_FAIL,
	THIRD_PARTY_COMPANIES_LOAD_FAIL, THIRD_PARTY_COMPANIES_LOADING,
	THIRD_PARTY_COMPANY_LOADING, THIRD_PARTY_PAGINATED_COMPANIES_LOADING
} from '../actions/types';

const initialState = {
	thirdPartyCompanies: null,
	error: null,
	loading: false,
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case THIRD_PARTY_COMPANY_LOAD_SUCCESS:
			return {
				...state,
				thirdPartyCompanies: payload,
				error: null,
				loading: false,
			}
		case THIRD_PARTY_COMPANIES_LOAD_SUCCESS || THIRD_PARTY_PAGINATED_COMPANIES_LOAD_SUCCESS:
			return {
				...state,
				thirdPartyCompanies: payload,
				error: null,
				loading: false,
			}
		case THIRD_PARTY_COMPANY_LOAD_FAIL:
			return {
				...state,
				thirdPartyCompanies: null,
				error: payload,
				loading: false,
			}
		case THIRD_PARTY_PAGINATED_COMPANIES_LOAD_FAIL || THIRD_PARTY_COMPANIES_LOAD_FAIL:
			return {
				...state,
				thirdPartyCompanies: null,
				error: payload,
				loading: false,
			}
		case THIRD_PARTY_COMPANY_LOADING:
			return {
				...state,
				thirdPartyCompanies: null,
				error: null,
				loading: true,
			}
		case THIRD_PARTY_COMPANIES_LOADING || THIRD_PARTY_PAGINATED_COMPANIES_LOADING:
			return {
				...state,
				thirdPartyCompanies: null,
				error: null,
				loading: true,
			}
		default:
			return state;
	}
}