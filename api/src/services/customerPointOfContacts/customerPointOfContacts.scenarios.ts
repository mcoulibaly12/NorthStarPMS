import type { Prisma, CustomerPointOfContact } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CustomerPointOfContactCreateArgs>(
  {
    customerPointOfContact: {
      one: {
        data: {
          firstName: 'String',
          lastName: 'String',
          email: 'String2685688',
          phoneNumber: 'String',
          customer: {
            create: {
              title: 'String',
              address: 'String',
              email: 'String',
              phoneNumber: 'String',
              csz: 'String',
            },
          },
        },
      },
      two: {
        data: {
          firstName: 'String',
          lastName: 'String',
          email: 'String9226016',
          phoneNumber: 'String',
          customer: {
            create: {
              title: 'String',
              address: 'String',
              email: 'String',
              phoneNumber: 'String',
              csz: 'String',
            },
          },
        },
      },
    },
  }
)

export type StandardScenario = ScenarioData<
  CustomerPointOfContact,
  'customerPointOfContact'
>
