import type { Meta, StoryObj } from '@storybook/vue3';

import NotelButton from '../components/NotelButton.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: NotelButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
    type: { control: 'radio', options: ['primary', 'warning','danger'] },
  },
  args: { size: 'medium' }, // default value
} satisfies Meta<typeof NotelButton>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    size: 'medium',
    type: 'primary',
  },
};

export const Warning: Story = {
  args: {
    size: 'large',
    type: 'primary',
  },
};


