import type { Meta, StoryObj } from '@storybook/react'

import EvaluationPage from './EvaluationPage'

const meta: Meta<typeof EvaluationPage> = {
  component: EvaluationPage,
}

export default meta

type Story = StoryObj<typeof EvaluationPage>

export const Primary: Story = {}
