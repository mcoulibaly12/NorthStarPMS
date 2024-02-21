import type {
  QueryResolvers,
  MutationResolvers,
  SocioEconDesignationRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const socioEconDesignations: QueryResolvers['socioEconDesignations'] =
  () => {
    return db.socioEconDesignation.findMany()
  }

export const socioEconDesignation: QueryResolvers['socioEconDesignation'] = ({
  sedID,
}) => {
  return db.socioEconDesignation.findUnique({
    where: { sedID },
  })
}

export const createSocioEconDesignation: MutationResolvers['createSocioEconDesignation'] =
  ({ input }) => {
    return db.socioEconDesignation.create({
      data: input,
    })
  }

export const updateSocioEconDesignation: MutationResolvers['updateSocioEconDesignation'] =
  ({ sedID, input }) => {
    return db.socioEconDesignation.update({
      data: input,
      where: { sedID },
    })
  }

export const deleteSocioEconDesignation: MutationResolvers['deleteSocioEconDesignation'] =
  ({ sedID }) => {
    return db.socioEconDesignation.delete({
      where: { sedID },
    })
  }

export const SocioEconDesignation: SocioEconDesignationRelationResolvers = {
  Company: (_obj, { root }) => {
    return db.socioEconDesignation
      .findUnique({ where: { sedID: root?.sedID } })
      .Company()
  },
}
