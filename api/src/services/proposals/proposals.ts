import type {
  QueryResolvers,
  MutationResolvers,
  ProposalRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const proposals: QueryResolvers['proposals'] = () => {
  return db.proposal.findMany()
}

export const proposal: QueryResolvers['proposal'] = ({ id }) => {
  return db.proposal.findUnique({
    where: { id },
  })
}

export const createProposal: MutationResolvers['createProposal'] = ({
  input,
}) => {
  return db.proposal.create({
    data: input,
  })
}

export const updateProposal: MutationResolvers['updateProposal'] = ({
  id,
  input,
}) => {
  return db.proposal.update({
    data: input,
    where: { id },
  })
}

export const deleteProposal: MutationResolvers['deleteProposal'] = ({ id }) => {
  return db.proposal.delete({
    where: { id },
  })
}

export const Proposal: ProposalRelationResolvers = {
  activities: (_obj, { root }) => {
    return db.proposal.findUnique({ where: { id: root?.id } }).activities()
  },
}
