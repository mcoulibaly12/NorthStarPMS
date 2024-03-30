import type { ProposalActivity } from '@prisma/client'

import {
  proposalActivities,
  proposalActivity,
  createProposalActivity,
  updateProposalActivity,
  deleteProposalActivity,
} from './proposalActivities'
import type { StandardScenario } from './proposalActivities.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('proposalActivities', () => {
  scenario(
    'returns all proposalActivities',
    async (scenario: StandardScenario) => {
      const result = await proposalActivities()

      expect(result.length).toEqual(
        Object.keys(scenario.proposalActivity).length
      )
    }
  )

  scenario(
    'returns a single proposalActivity',
    async (scenario: StandardScenario) => {
      const result = await proposalActivity({
        id: scenario.proposalActivity.one.id,
      })

      expect(result).toEqual(scenario.proposalActivity.one)
    }
  )

  scenario('creates a proposalActivity', async (scenario: StandardScenario) => {
    const result = await createProposalActivity({
      input: {
        description: 'String',
        proposalId: scenario.proposalActivity.two.proposalId,
      },
    })

    expect(result.description).toEqual('String')
    expect(result.proposalId).toEqual(scenario.proposalActivity.two.proposalId)
  })

  scenario('updates a proposalActivity', async (scenario: StandardScenario) => {
    const original = (await proposalActivity({
      id: scenario.proposalActivity.one.id,
    })) as ProposalActivity
    const result = await updateProposalActivity({
      id: original.id,
      input: { description: 'String2' },
    })

    expect(result.description).toEqual('String2')
  })

  scenario('deletes a proposalActivity', async (scenario: StandardScenario) => {
    const original = (await deleteProposalActivity({
      id: scenario.proposalActivity.one.id,
    })) as ProposalActivity
    const result = await proposalActivity({ id: original.id })

    expect(result).toEqual(null)
  })
})
