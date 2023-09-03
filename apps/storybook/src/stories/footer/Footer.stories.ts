import type { Meta, StoryObj } from '@storybook/react';
import Footer from 'ui/components/footer/Footer';

const meta = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    nextjs: {
      router: {
        basePath: '/profile',
      },
    },
  },
};
