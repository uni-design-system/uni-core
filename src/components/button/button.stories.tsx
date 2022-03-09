import React from 'react';
import { Button, ButtonProps } from './button.component';

export default {
  title: 'Buttons',
  component: Button,
  // decorators: [withThemes(null, [LightTheme, DarkTheme], {providerFn})],
  argTypes: {
    children: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } }
  }
};

export const BasicButton = (args: ButtonProps) => <Button {...args} />;
BasicButton.args = {
  disabled: false,
  children: 'Sample'
}

BasicButton.story = {
  name: 'Button',
};
