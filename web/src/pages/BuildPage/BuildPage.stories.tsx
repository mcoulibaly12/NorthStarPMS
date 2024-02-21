import type { Meta, StoryObj } from '@storybook/react'

import BuildPage from './BuildPage'

const meta: Meta<typeof BuildPage> = {
  component: BuildPage,
}

export default meta

type Story = StoryObj<typeof BuildPage>

export const Primary: Story = {}
