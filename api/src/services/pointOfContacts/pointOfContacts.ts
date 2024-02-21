import type {
  QueryResolvers,
  MutationResolvers,
  PointOfContactRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const pointOfContacts: QueryResolvers['pointOfContacts'] = () => {
  return db.pointOfContact.findMany()
}

export const pointOfContact: QueryResolvers['pointOfContact'] = ({ id }) => {
  return db.pointOfContact.findUnique({
    where: { id },
  })
}

export const createPointOfContact: MutationResolvers['createPointOfContact'] =
  ({ input }) => {
    return db.pointOfContact.create({
      data: input,
    })
  }

export const updatePointOfContact: MutationResolvers['updatePointOfContact'] =
  ({ id, input }) => {
    return db.pointOfContact.update({
      data: input,
      where: { id },
    })
  }

export const deletePointOfContact: MutationResolvers['deletePointOfContact'] =
  ({ id }) => {
    return db.pointOfContact.delete({
      where: { id },
    })
  }

export const PointOfContact: PointOfContactRelationResolvers = {
  Company: (_obj, { root }) => {
    return db.pointOfContact.findUnique({ where: { id: root?.id } }).Company()
  },
}
