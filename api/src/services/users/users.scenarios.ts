import type { Prisma, User } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String4639716',
        isAdmin: true,
        roles: 'ADMIN',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
    two: {
      data: {
        email: 'String2963871',
        isAdmin: true,
        roles: 'ADMIN',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
