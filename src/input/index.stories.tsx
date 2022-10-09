import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Input from './index.tsx.hbs'

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
  children: 'Input',
  size: 'medium'
}


export const Basic = () => {
  return (
    <>
      <Input type="primary">Primary  Input</ Input>
    </>
  )
}
