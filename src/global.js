import { serviceAddressSubscript } from "./utilities/addressResolution/addressResolution";

var suffix = serviceAddressSubscript()

export const backend = {
    user_service: suffix !== '' ? 'http://user-service.' + suffix + ":9100/" : 'http://user-service.default.svc.cluster.local:9100/',
    company_management_service: suffix !== '' ? 'http://company-management-service.' + suffix + ':9898/query' : 'http://company-management-service.default.svc.cluster.local:9898/query',
}