import type { FindCompanyById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Company from 'src/components/Company/Company'

export const QUERY = gql`
  query FindCompanyById($id: Int!) {
    company: company(id: $id) {
      id
      companyName
      addressOne
      addressTwo
      city
      state
      zipCode
      dunsNumber
      cageNumber
      websiteUrl
      phoneNumber
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Company not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ company }: CellSuccessProps<FindCompanyById>) => {
  return <Company company={company} />
}
