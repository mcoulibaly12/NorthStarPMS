import type { Prisma, Company } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CompanyCreateArgs>({
  company: {
    one: {
      data: {
        companyName: 'String',
        addressOne: 'String',
        city: 'String',
        state: 'String',
        zipCode: 'String',
        websiteUrl: 'String',
        phoneNumber: 'String',
      },
    },
    two: {
      data: {
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
})

export type StandardScenario = ScenarioData<Company, 'company'>
