import type {
  QueryResolvers,
  MutationResolvers,
  CustomerPointOfContactRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const customerPointOfContacts: QueryResolvers['customerPointOfContacts'] =
  () => {
    return db.customerPointOfContact.findMany()
  }

export const customerPointOfContact: QueryResolvers['customerPointOfContact'] =
  ({ id }) => {
    return db.customerPointOfContact.findUnique({
      where: { id },
    })
  }

export const createCustomerPointOfContact: MutationResolvers['createCustomerPointOfContact'] =
  ({ input }) => {
    return db.customerPointOfContact.create({
      data: input,
    })
  }

export const updateCustomerPointOfContact: MutationResolvers['updateCustomerPointOfContact'] =
  ({ id, input }) => {
    return db.customerPointOfContact.update({
      data: input,
      where: { id },
    })
  }

export const deleteCustomerPointOfContact: MutationResolvers['deleteCustomerPointOfContact'] =
  ({ id }) => {
    return db.customerPointOfContact.delete({
      where: { id },
    })
  }

export const CustomerPointOfContact: CustomerPointOfContactRelationResolvers = {
  customer: (_obj, { root }) => {
    return db.customerPointOfContact
      .findUnique({ where: { id: root?.id } })
      .customer()
  },
}
