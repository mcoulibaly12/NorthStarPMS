import type { Prisma, ProposalActivity } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ProposalActivityCreateArgs>({
  proposalActivity: {
    one: {
      data: {
        description: 'String',
        Proposal: {
          create: {
            proposalCode: 3363471,
            department: 'String',
            agency: 'String',
            title: 'String',
            solicitationNumber: 3002873,
            dueDate: '2024-03-30T16:14:50.949Z',
            questionsDueDate: '2024-03-30T16:14:50.949Z',
            sourceOfRfp: 'String',
            naics: 'String',
            setAside: true,
            contractType: 'String',
            competition: 'String',
            specialSkills: 'String',
            clearenceRequirements: 'String',
            custonmerId: 1422741,
          },
        },
      },
    },
    two: {
      data: {
        description: 'String',
        Proposal: {
          create: {
            proposalCode: 3868967,
            department: 'String',
            agency: 'String',
            title: 'String',
            solicitationNumber: 2889979,
            dueDate: '2024-03-30T16:14:50.949Z',
            questionsDueDate: '2024-03-30T16:14:50.949Z',
            sourceOfRfp: 'String',
            naics: 'String',
            setAside: true,
            contractType: 'String',
            competition: 'String',
            specialSkills: 'String',
            clearenceRequirements: 'String',
            custonmerId: 1670116,
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  ProposalActivity,
  'proposalActivity'
>
