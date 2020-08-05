export var serviceAddressSubscript = () => {
    var subscript = ''

    switch (process.env.REACT_APP_ENVIRONMENT) {
        case 'Default':
            subscript = 'default.svc.cluster.local'
            break;
        case 'Production':
            subscript = 'production.svc.cluster.local'
            break;
        case 'Development':
            subscript = 'development.svc.cluster.local'
            break;
        case 'Local':
            break;
        case 'Staging':
            subscript = 'staging.svc.cluster.local'
            break;
        case 'Test':
            subscript = 'test.svc.cluster.local'
            break;
        default:
            break;
    }

    return subscript
}