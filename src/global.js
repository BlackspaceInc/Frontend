import { serviceAddressSubscript } from "./utilities/addressResolution/addressResolution";

var suffix = serviceAddressSubscript()

export const backend = {
    user_service: suffix !== '' ? 'http://user-service.' + suffix + ":9100/" : 'http://user-service:9100/',
    company_management_service: suffix !== '' ? 'http://company-management-service.' + suffix + ':9898/query' : 'http://localhost:9898/query',
}