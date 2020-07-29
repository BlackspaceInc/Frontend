import { serviceAddressSubscript } from "./utilities/addressResolution/addressResolution";

var suffix = serviceAddressSubscript()

export const backend = {
    user_service: process.env.REACT_APP_ENVIRONMENT === 'Production' ||
                  process.env.REACT_APP_ENVIRONMENT === 'Staging' || 
                  process.env.REACT_APP_ENVIRONMENT === 'Default' ? '/v1' : 'http://localhost:9100/v1',
    company_management_service: process.env.REACT_APP_ENVIRONMENT === 'Production' ||
                                process.env.REACT_APP_ENVIRONMENT === 'Staging' || 
                                process.env.REACT_APP_ENVIRONMENT === 'Default' ? '/query' : 'http://localhost:9898/query',
}
