import type { FindSocioEconDesignationBySedID } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import SocioEconDesignation from 'src/components/SocioEconDesignation/SocioEconDesignation'

export const QUERY = gql`
  query FindSocioEconDesignationBySedID($sedID: Int!) {
    socioEconDesignation: socioEconDesignation(sedID: $sedID) {
      sedID
      sedDescription
      companyId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>SocioEconDesignation not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  socioEconDesignation,
}: CellSuccessProps<FindSocioEconDesignationBySedID>) => {
  return <SocioEconDesignation socioEconDesignation={socioEconDesignation} />
}
