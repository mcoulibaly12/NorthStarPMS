import type { Meta, StoryObj } from '@storybook/react'

import ReviewPage from './ReviewPage'

const meta: Meta<typeof ReviewPage> = {
  component: ReviewPage,
}

export default meta

type Story = StoryObj<typeof ReviewPage>

export const Primary: Story = {}
