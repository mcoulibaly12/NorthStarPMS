import type { Prisma, Certificate } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CertificateCreateArgs>({
  certificate: {
    one: {
      data: {
        description: 'String',
        expirationDate: '2024-03-30T16:11:25.917Z',
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
        description: 'String',
        expirationDate: '2024-03-30T16:11:25.917Z',
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

export type StandardScenario = ScenarioData<Certificate, 'certificate'>
