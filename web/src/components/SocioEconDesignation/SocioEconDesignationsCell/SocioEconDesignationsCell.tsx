import type { FindSocioEconDesignations } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import SocioEconDesignations from 'src/components/SocioEconDesignation/SocioEconDesignations'

export const QUERY = gql`
  query FindSocioEconDesignations {
    socioEconDesignations {
      sedID
      sedDescription
      companyId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No socioEconDesignations yet. '}
      <Link to={routes.newSocioEconDesignation()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  socioEconDesignations,
}: CellSuccessProps<FindSocioEconDesignations>) => {
  return <SocioEconDesignations socioEconDesignations={socioEconDesignations} />
}
