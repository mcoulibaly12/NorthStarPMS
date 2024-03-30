import type {
  QueryResolvers,
  MutationResolvers,
  ProposalActivityRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const proposalActivities: QueryResolvers['proposalActivities'] = () => {
  return db.proposalActivity.findMany()
}

export const proposalActivity: QueryResolvers['proposalActivity'] = ({
  id,
}) => {
  return db.proposalActivity.findUnique({
    where: { id },
  })
}

export const createProposalActivity: MutationResolvers['createProposalActivity'] =
  ({ input }) => {
    return db.proposalActivity.create({
      data: input,
    })
  }

export const updateProposalActivity: MutationResolvers['updateProposalActivity'] =
  ({ id, input }) => {
    return db.proposalActivity.update({
      data: input,
      where: { id },
    })
  }

export const deleteProposalActivity: MutationResolvers['deleteProposalActivity'] =
  ({ id }) => {
    return db.proposalActivity.delete({
      where: { id },
    })
  }

export const ProposalActivity: ProposalActivityRelationResolvers = {
  Proposal: (_obj, { root }) => {
    return db.proposalActivity
      .findUnique({ where: { id: root?.id } })
      .Proposal()
  },
}
