import type { ProposalActivitity } from '@prisma/client'

import {
  proposalActivitities,
  proposalActivitity,
  createProposalActivitity,
  updateProposalActivitity,
  deleteProposalActivitity,
} from './proposalActivitities'
import type { StandardScenario } from './proposalActivitities.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('proposalActivitities', () => {
  scenario(
    'returns all proposalActivitities',
    async (scenario: StandardScenario) => {
      const result = await proposalActivitities()

      expect(result.length).toEqual(
        Object.keys(scenario.proposalActivitity).length
      )
    }
  )

  scenario(
    'returns a single proposalActivitity',
    async (scenario: StandardScenario) => {
      const result = await proposalActivitity({
        id: scenario.proposalActivitity.one.id,
      })

      expect(result).toEqual(scenario.proposalActivitity.one)
    }
  )

  scenario(
    'creates a proposalActivitity',
    async (scenario: StandardScenario) => {
      const result = await createProposalActivitity({
        input: {
          description: 'String',
          proposalId: scenario.proposalActivitity.two.proposalId,
        },
      })

      expect(result.description).toEqual('String')
      expect(result.proposalId).toEqual(
        scenario.proposalActivitity.two.proposalId
      )
    }
  )

  scenario(
    'updates a proposalActivitity',
    async (scenario: StandardScenario) => {
      const original = (await proposalActivitity({
        id: scenario.proposalActivitity.one.id,
      })) as ProposalActivitity
      const result = await updateProposalActivitity({
        id: original.id,
        input: { description: 'String2' },
      })

      expect(result.description).toEqual('String2')
    }
  )

  scenario(
    'deletes a proposalActivitity',
    async (scenario: StandardScenario) => {
      const original = (await deleteProposalActivitity({
        id: scenario.proposalActivitity.one.id,
      })) as ProposalActivitity
      const result = await proposalActivitity({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
