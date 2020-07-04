import {gql} from "apollo-boost";

export const GET_COMPANIES = () => {
    return gql`{
        getCompanies{
            name
            address
            link
            number
            id
        }
    }
    `
}

export const GET_PAGINATED_COMPANIES = (numCompanies) => {
  return gql`{
       getPaginatedCompanies(limit: ${numCompanies}){
              name
              address
              link
              number
              id
          }
      }
  `
}

export const GET_COMPANY = (companyId) => {
    return gql`{
         getCompany(id: ${companyId}){
                name
                address
                link
                number
                id
            }
        }
    `
}