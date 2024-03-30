import type { CustomerPointOfContact } from '@prisma/client'

import {
  customerPointOfContacts,
  customerPointOfContact,
  createCustomerPointOfContact,
  updateCustomerPointOfContact,
  deleteCustomerPointOfContact,
} from './customerPointOfContacts'
import type { StandardScenario } from './customerPointOfContacts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('customerPointOfContacts', () => {
  scenario(
    'returns all customerPointOfContacts',
    async (scenario: StandardScenario) => {
      const result = await customerPointOfContacts()

      expect(result.length).toEqual(
        Object.keys(scenario.customerPointOfContact).length
      )
    }
  )

  scenario(
    'returns a single customerPointOfContact',
    async (scenario: StandardScenario) => {
      const result = await customerPointOfContact({
        id: scenario.customerPointOfContact.one.id,
      })

      expect(result).toEqual(scenario.customerPointOfContact.one)
    }
  )

  scenario(
    'creates a customerPointOfContact',
    async (scenario: StandardScenario) => {
      const result = await createCustomerPointOfContact({
        input: {
          firstName: 'String',
          lastName: 'String',
          email: 'String5487819',
          phoneNumber: 'String',
          customerId: scenario.customerPointOfContact.two.customerId,
        },
      })

      expect(result.firstName).toEqual('String')
      expect(result.lastName).toEqual('String')
      expect(result.email).toEqual('String5487819')
      expect(result.phoneNumber).toEqual('String')
      expect(result.customerId).toEqual(
        scenario.customerPointOfContact.two.customerId
      )
    }
  )

  scenario(
    'updates a customerPointOfContact',
    async (scenario: StandardScenario) => {
      const original = (await customerPointOfContact({
        id: scenario.customerPointOfContact.one.id,
      })) as CustomerPointOfContact
      const result = await updateCustomerPointOfContact({
        id: original.id,
        input: { firstName: 'String2' },
      })

      expect(result.firstName).toEqual('String2')
    }
  )

  scenario(
    'deletes a customerPointOfContact',
    async (scenario: StandardScenario) => {
      const original = (await deleteCustomerPointOfContact({
        id: scenario.customerPointOfContact.one.id,
      })) as CustomerPointOfContact
      const result = await customerPointOfContact({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
