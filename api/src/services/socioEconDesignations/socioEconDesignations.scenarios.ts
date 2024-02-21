import type { Prisma, SocioEconDesignation } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SocioEconDesignationCreateArgs>({
  socioEconDesignation: {
    one: {
      data: {
        sedDescription: 'String',
        Company: {
          create: {
            companyName: 'String',
            addressOne: 'String',
            city: 'String',
            state: 'String',
            zipCode: 'String',
            websiteUrl: 'String',
            phoneNumber: 'String',
          },
        },
      },
    },
    two: {
      data: {
        sedDescription: 'String',
        Company: {
          create: {
            companyName: 'String',
            addressOne: 'String',
            city: 'String',
            state: 'String',
            zipCode: 'String',
            websiteUrl: 'String',
            phoneNumber: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  SocioEconDesignation,
  'socioEconDesignation'
>
