import type { Prisma, ProposalActivitity } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ProposalActivitityCreateArgs>({
  proposalActivitity: {
    one: {
      data: {
        description: 'String',
        Proposal: {
          create: {
            proposalCode: 2192021,
            department: 'String',
            agency: 'String',
            title: 'String',
            solicitationNumber: 3931588,
            dueDate: '2024-02-21T01:13:08.617Z',
            questionsDueDate: '2024-02-21T01:13:08.617Z',
            sourceOfRfp: 'String',
            naics: 'String',
            setAside: true,
            contractType: 'String',
            competition: 'String',
            specialSkills: 'String',
            clearenceRequirements: 'String',
            custonmerId: 3576211,
          },
        },
      },
    },
    two: {
      data: {
        description: 'String',
        Proposal: {
          create: {
            proposalCode: 899317,
            department: 'String',
            agency: 'String',
            title: 'String',
            solicitationNumber: 2086584,
            dueDate: '2024-02-21T01:13:08.617Z',
            questionsDueDate: '2024-02-21T01:13:08.617Z',
            sourceOfRfp: 'String',
            naics: 'String',
            setAside: true,
            contractType: 'String',
            competition: 'String',
            specialSkills: 'String',
            clearenceRequirements: 'String',
            custonmerId: 8915369,
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  ProposalActivitity,
  'proposalActivitity'
>
