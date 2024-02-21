import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String3368443',
        hashedPassword: 'String',
        salt: 'String',
        company: {
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
        email: 'String7835647',
        hashedPassword: 'String',
        salt: 'String',
        company: {
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

export type StandardScenario = ScenarioData<User, 'user'>
