import type {
  QueryResolvers,
  MutationResolvers,
  ProposalActivitityRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const proposalActivitities: QueryResolvers['proposalActivitities'] =
  () => {
    return db.proposalActivitity.findMany()
  }

export const proposalActivitity: QueryResolvers['proposalActivitity'] = ({
  id,
}) => {
  return db.proposalActivitity.findUnique({
    where: { id },
  })
}

export const createProposalActivitity: MutationResolvers['createProposalActivitity'] =
  ({ input }) => {
    return db.proposalActivitity.create({
      data: input,
    })
  }

export const updateProposalActivitity: MutationResolvers['updateProposalActivitity'] =
  ({ id, input }) => {
    return db.proposalActivitity.update({
      data: input,
      where: { id },
    })
  }

export const deleteProposalActivitity: MutationResolvers['deleteProposalActivitity'] =
  ({ id }) => {
    return db.proposalActivitity.delete({
      where: { id },
    })
  }

export const ProposalActivitity: ProposalActivitityRelationResolvers = {
  Proposal: (_obj, { root }) => {
    return db.proposalActivitity
      .findUnique({ where: { id: root?.id } })
      .Proposal()
  },
}
