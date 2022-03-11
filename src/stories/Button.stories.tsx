import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// @ts-ignore
import { withThemes } from '@react-theming/storybook-addon';

import { Button } from './Button';
import { BuiltInThemes, DefaultThemeId } from '../core/theme/theme.records';
import { ThemeProvider } from '../core/theme/theme.provider';
import { ThemeProps } from '../core/theme/theme.model';

// create decorator
const themingDecorator = withThemes(ThemeProvider, [DefaultThemeId]);

const providerFn = ({theme, children}: any & ThemeProps) => {
  return <ThemeProvider themeId={theme.id} themes={BuiltInThemes}>{children}</ThemeProvider>;
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
