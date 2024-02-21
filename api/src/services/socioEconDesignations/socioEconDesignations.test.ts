import type { SocioEconDesignation } from '@prisma/client'

import {
  socioEconDesignations,
  socioEconDesignation,
  createSocioEconDesignation,
  updateSocioEconDesignation,
  deleteSocioEconDesignation,
} from './socioEconDesignations'
import type { StandardScenario } from './socioEconDesignations.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('socioEconDesignations', () => {
  scenario(
    'returns all socioEconDesignations',
    async (scenario: StandardScenario) => {
      const result = await socioEconDesignations()

      expect(result.length).toEqual(
        Object.keys(scenario.socioEconDesignation).length
      )
    }
  )

  scenario(
    'returns a single socioEconDesignation',
    async (scenario: StandardScenario) => {
      const result = await socioEconDesignation({
        sedID: scenario.socioEconDesignation.one.sedID,
      })

      expect(result).toEqual(scenario.socioEconDesignation.one)
    }
  )

  scenario(
    'creates a socioEconDesignation',
    async (scenario: StandardScenario) => {
      const result = await createSocioEconDesignation({
        input: {
          sedDescription: 'String',
          companyId: scenario.socioEconDesignation.two.companyId,
        },
      })

      expect(result.sedDescription).toEqual('String')
      expect(result.companyId).toEqual(
        scenario.socioEconDesignation.two.companyId
      )
    }
  )

  scenario(
    'updates a socioEconDesignation',
    async (scenario: StandardScenario) => {
      const original = (await socioEconDesignation({
        sedID: scenario.socioEconDesignation.one.sedID,
      })) as SocioEconDesignation
      const result = await updateSocioEconDesignation({
        sedID: original.sedID,
        input: { sedDescription: 'String2' },
      })

      expect(result.sedDescription).toEqual('String2')
    }
  )

  scenario(
    'deletes a socioEconDesignation',
    async (scenario: StandardScenario) => {
      const original = (await deleteSocioEconDesignation({
        sedID: scenario.socioEconDesignation.one.sedID,
      })) as SocioEconDesignation
      const result = await socioEconDesignation({ sedID: original.sedID })

      expect(result).toEqual(null)
    }
  )
})
