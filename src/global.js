import { serviceAddressSubscript } from "./utilities/addressResolution/addressResolution";

var suffix = serviceAddressSubscript()

const userServiceIp = '157.230.197.135'
const companyServiceIp = '157.230.198.168'

export const backend = {
    user_service: suffix !== '' ? 'http://user-service.' + suffix + ":9100/" : 'http://' + userServiceIp + ':9100/',
    company_management_service: suffix !== '' ? 'http://company-management-service.' + suffix + ':9898/query' : 'http://' + companyServiceIp + ':9898/query',
}
