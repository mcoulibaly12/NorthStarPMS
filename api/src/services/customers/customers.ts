import type {
  QueryResolvers,
  MutationResolvers,
  CustomerRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const customers: QueryResolvers['customers'] = () => {
  return db.customer.findMany()
}

export const customer: QueryResolvers['customer'] = ({ id }) => {
  return db.customer.findUnique({
    where: { id },
  })
}

export const createCustomer: MutationResolvers['createCustomer'] = ({
  input,
}) => {
  return db.customer.create({
    data: input,
  })
}

export const updateCustomer: MutationResolvers['updateCustomer'] = ({
  id,
  input,
}) => {
  return db.customer.update({
    data: input,
    where: { id },
  })
}

export const deleteCustomer: MutationResolvers['deleteCustomer'] = ({ id }) => {
  return db.customer.delete({
    where: { id },
  })
}

export const Customer: CustomerRelationResolvers = {
  pointOfContact: (_obj, { root }) => {
    return db.customer.findUnique({ where: { id: root?.id } }).pointOfContact()
  },
}
