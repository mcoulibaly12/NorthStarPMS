import type { Prisma, Proposal } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ProposalCreateArgs>({
  proposal: {
    one: {
      data: {
        proposalCode: 3534278,
        department: 'String',
        agency: 'String',
        title: 'String',
        solicitationNumber: 5088241,
        dueDate: '2024-02-21T01:12:59.604Z',
        questionsDueDate: '2024-02-21T01:12:59.604Z',
        sourceOfRfp: 'String',
        naics: 'String',
        setAside: true,
        contractType: 'String',
        competition: 'String',
        specialSkills: 'String',
        clearenceRequirements: 'String',
        custonmerId: 6141650,
      },
    },
    two: {
      data: {
        proposalCode: 4356769,
        department: 'String',
        agency: 'String',
        title: 'String',
        solicitationNumber: 8485241,
        dueDate: '2024-02-21T01:12:59.604Z',
        questionsDueDate: '2024-02-21T01:12:59.604Z',
        sourceOfRfp: 'String',
        naics: 'String',
        setAside: true,
        contractType: 'String',
        competition: 'String',
        specialSkills: 'String',
        clearenceRequirements: 'String',
        custonmerId: 6484811,
      },
    },
  },
})

export type StandardScenario = ScenarioData<Proposal, 'proposal'>
