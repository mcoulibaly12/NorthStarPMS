import type { Prisma, Customer } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CustomerCreateArgs>({
  customer: {
    one: {
      data: {
        title: 'String',
        address: 'String',
        email: 'String',
        phoneNumber: 'String',
        csz: 'String',
      },
    },
    two: {
      data: {
        title: 'String',
        address: 'String',
        email: 'String',
        phoneNumber: 'String',
        csz: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Customer, 'customer'>
