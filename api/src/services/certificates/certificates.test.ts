import type { Certificate } from '@prisma/client'

import {
  certificates,
  certificate,
  createCertificate,
  updateCertificate,
  deleteCertificate,
} from './certificates'
import type { StandardScenario } from './certificates.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('certificates', () => {
  scenario('returns all certificates', async (scenario: StandardScenario) => {
    const result = await certificates()

    expect(result.length).toEqual(Object.keys(scenario.certificate).length)
  })

  scenario(
    'returns a single certificate',
    async (scenario: StandardScenario) => {
      const result = await certificate({ id: scenario.certificate.one.id })

      expect(result).toEqual(scenario.certificate.one)
    }
  )

  scenario('creates a certificate', async (scenario: StandardScenario) => {
    const result = await createCertificate({
      input: {
        description: 'String',
        expirationDate: '2024-03-30T16:11:25.877Z',
        companyId: scenario.certificate.two.companyId,
      },
    })

    expect(result.description).toEqual('String')
    expect(result.expirationDate).toEqual(new Date('2024-03-30T16:11:25.877Z'))
    expect(result.companyId).toEqual(scenario.certificate.two.companyId)
  })

  scenario('updates a certificate', async (scenario: StandardScenario) => {
    const original = (await certificate({
      id: scenario.certificate.one.id,
    })) as Certificate
    const result = await updateCertificate({
      id: original.id,
      input: { description: 'String2' },
    })

    expect(result.description).toEqual('String2')
  })

  scenario('deletes a certificate', async (scenario: StandardScenario) => {
    const original = (await deleteCertificate({
      id: scenario.certificate.one.id,
    })) as Certificate
    const result = await certificate({ id: original.id })

    expect(result).toEqual(null)
  })
})
