import { serviceAddressSubscript } from "./utilities/addressResolution/addressResolution";

var suffix = serviceAddressSubscript()

export const backend = {
    user_service: 'http://68.183.248.735:9100/',
    company_management_service: 'http://138.197.232.159:9898/query',
}
