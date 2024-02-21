import type { PointOfContact } from '@prisma/client'

import {
  pointOfContacts,
  pointOfContact,
  createPointOfContact,
  updatePointOfContact,
  deletePointOfContact,
} from './pointOfContacts'
import type { StandardScenario } from './pointOfContacts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('pointOfContacts', () => {
  scenario(
    'returns all pointOfContacts',
    async (scenario: StandardScenario) => {
      const result = await pointOfContacts()

      expect(result.length).toEqual(Object.keys(scenario.pointOfContact).length)
    }
  )

  scenario(
    'returns a single pointOfContact',
    async (scenario: StandardScenario) => {
      const result = await pointOfContact({
        id: scenario.pointOfContact.one.id,
      })

      expect(result).toEqual(scenario.pointOfContact.one)
    }
  )

  scenario('creates a pointOfContact', async (scenario: StandardScenario) => {
    const result = await createPointOfContact({
      input: {
        firstName: 'String',
        lastName: 'String',
        title: 'String',
        email: 'String',
        phoneNumber: 'String',
        companyId: scenario.pointOfContact.two.companyId,
      },
    })

    expect(result.firstName).toEqual('String')
    expect(result.lastName).toEqual('String')
    expect(result.title).toEqual('String')
    expect(result.email).toEqual('String')
    expect(result.phoneNumber).toEqual('String')
    expect(result.companyId).toEqual(scenario.pointOfContact.two.companyId)
  })

  scenario('updates a pointOfContact', async (scenario: StandardScenario) => {
    const original = (await pointOfContact({
      id: scenario.pointOfContact.one.id,
    })) as PointOfContact
    const result = await updatePointOfContact({
      id: original.id,
      input: { firstName: 'String2' },
    })

    expect(result.firstName).toEqual('String2')
  })

  scenario('deletes a pointOfContact', async (scenario: StandardScenario) => {
    const original = (await deletePointOfContact({
      id: scenario.pointOfContact.one.id,
    })) as PointOfContact
    const result = await pointOfContact({ id: original.id })

    expect(result).toEqual(null)
  })
})
