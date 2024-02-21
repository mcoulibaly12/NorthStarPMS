import type { Prisma, PointOfContact } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PointOfContactCreateArgs>({
  pointOfContact: {
    one: {
      data: {
        firstName: 'String',
        lastName: 'String',
        title: 'String',
        email: 'String',
        phoneNumber: 'String',
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
        firstName: 'String',
        lastName: 'String',
        title: 'String',
        email: 'String',
        phoneNumber: 'String',
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

export type StandardScenario = ScenarioData<PointOfContact, 'pointOfContact'>
