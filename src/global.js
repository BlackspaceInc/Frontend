import { serviceAddressSubscript } from "./utilities/addressResolution/addressResolution";

var suffix = serviceAddressSubscript()

export const backend = {
    user_service: 'http://157.230.197.135:9100/',
    company_management_service: 'http://157.230.198.168:9898/query',
}
