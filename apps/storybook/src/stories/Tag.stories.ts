import type { Meta, StoryObj } from '@storybook/react';

import Tag from 'ui/components/tag/Tag';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Tag',
  component: Tag,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    mode: {
      control: 'radio',
      options: ['Main', 'Gray', 'Transparent', 'Stroke'],
    },
    size: {
      control: 'radio',
      options: ['lg', 'sm'],
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Main: Story = {
  args: {
    mode: 'Main',
    size: 'lg',
    label: 'Tag',
    hasDelete: false,
  },
};