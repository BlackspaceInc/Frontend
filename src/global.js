import { serviceAddressSubscript } from "./utilities/addressResolution/addressResolution";

var suffix = serviceAddressSubscript()

export const backend = {
    user_service: '/v1',
    company_management_service: '/query',
}
