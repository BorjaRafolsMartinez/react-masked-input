import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'
import MaskedInput from './MaskedInput'

export default {
	title: 'Example2/Button',
	component: MaskedInput,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		value: {
			defaultValue: '10',
			type: 'string'
		},
		mask: {
			defaultValue: '99999',
			type: 'string'
		},
		onChange: {
			action: 'onChange'
		}
	},
} as ComponentMeta<typeof MaskedInput>

const Template: ComponentStory<typeof MaskedInput> = (args) => <MaskedInput {...args} />


export const NumericMask = Template.bind({})