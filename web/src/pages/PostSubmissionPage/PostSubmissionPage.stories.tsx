import type { Meta, StoryObj } from '@storybook/react'

import PostSubmissionPage from './PostSubmissionPage'

const meta: Meta<typeof PostSubmissionPage> = {
  component: PostSubmissionPage,
}

export default meta

type Story = StoryObj<typeof PostSubmissionPage>

export const Primary: Story = {}
