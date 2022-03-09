import {ThemeProvider} from "../src/core/theme/theme.provider";
import {BuiltInThemes} from "../src/core/theme/theme.records";
import {addDecorator} from "@storybook/react";
import {LightTheme} from "../src/core/theme/themes/light.theme";
import {DarkTheme} from "../src/core/theme/themes/dark.theme";
import React from "react";
import {withThemes} from "@react-theming/storybook-addon/dist/preview";

const providerFn = ({theme, children}) => {
  return <ThemeProvider themeId={theme.id} themes={BuiltInThemes}>{children}</ThemeProvider>;
};

addDecorator(withThemes(null, [LightTheme, DarkTheme], { providerFn }));


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
