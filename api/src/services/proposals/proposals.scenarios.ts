import type { Prisma, Proposal } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ProposalCreateArgs>({
  proposal: {
    one: {
      data: {
        proposalCode: 9623558,
        department: 'String',
        agency: 'String',
        title: 'String',
        solicitationNumber: 4376984,
        dueDate: '2024-03-30T16:15:00.880Z',
        questionsDueDate: '2024-03-30T16:15:00.880Z',
        sourceOfRfp: 'String',
        naics: 'String',
        setAside: true,
        contractType: 'String',
        competition: 'String',
        specialSkills: 'String',
        clearenceRequirements: 'String',
        custonmerId: 7840995,
      },
    },
    two: {
      data: {
        proposalCode: 4390878,
        department: 'String',
        agency: 'String',
        title: 'String',
        solicitationNumber: 2320592,
        dueDate: '2024-03-30T16:15:00.880Z',
        questionsDueDate: '2024-03-30T16:15:00.880Z',
        sourceOfRfp: 'String',
        naics: 'String',
        setAside: true,
        contractType: 'String',
        competition: 'String',
        specialSkills: 'String',
        clearenceRequirements: 'String',
        custonmerId: 2398733,
      },
    },
  },
})

export type StandardScenario = ScenarioData<Proposal, 'proposal'>
