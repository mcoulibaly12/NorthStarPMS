import type { Proposal } from '@prisma/client'

import {
  proposals,
  proposal,
  createProposal,
  updateProposal,
  deleteProposal,
} from './proposals'
import type { StandardScenario } from './proposals.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('proposals', () => {
  scenario('returns all proposals', async (scenario: StandardScenario) => {
    const result = await proposals()

    expect(result.length).toEqual(Object.keys(scenario.proposal).length)
  })

  scenario('returns a single proposal', async (scenario: StandardScenario) => {
    const result = await proposal({ id: scenario.proposal.one.id })

    expect(result).toEqual(scenario.proposal.one)
  })

  scenario('creates a proposal', async () => {
    const result = await createProposal({
      input: {
        proposalCode: 7385051,
        department: 'String',
        agency: 'String',
        title: 'String',
        solicitationNumber: 507205,
        dueDate: '2024-03-30T16:15:00.820Z',
        questionsDueDate: '2024-03-30T16:15:00.820Z',
        sourceOfRfp: 'String',
        naics: 'String',
        setAside: true,
        contractType: 'String',
        competition: 'String',
        specialSkills: 'String',
        clearenceRequirements: 'String',
        custonmerId: 9870620,
      },
    })

    expect(result.proposalCode).toEqual(7385051)
    expect(result.department).toEqual('String')
    expect(result.agency).toEqual('String')
    expect(result.title).toEqual('String')
    expect(result.solicitationNumber).toEqual(507205)
    expect(result.dueDate).toEqual(new Date('2024-03-30T16:15:00.820Z'))
    expect(result.questionsDueDate).toEqual(
      new Date('2024-03-30T16:15:00.820Z')
    )
    expect(result.sourceOfRfp).toEqual('String')
    expect(result.naics).toEqual('String')
    expect(result.setAside).toEqual(true)
    expect(result.contractType).toEqual('String')
    expect(result.competition).toEqual('String')
    expect(result.specialSkills).toEqual('String')
    expect(result.clearenceRequirements).toEqual('String')
    expect(result.custonmerId).toEqual(9870620)
  })

  scenario('updates a proposal', async (scenario: StandardScenario) => {
    const original = (await proposal({
      id: scenario.proposal.one.id,
    })) as Proposal
    const result = await updateProposal({
      id: original.id,
      input: { proposalCode: 6711077 },
    })

    expect(result.proposalCode).toEqual(6711077)
  })

  scenario('deletes a proposal', async (scenario: StandardScenario) => {
    const original = (await deleteProposal({
      id: scenario.proposal.one.id,
    })) as Proposal
    const result = await proposal({ id: original.id })

    expect(result).toEqual(null)
  })
})
