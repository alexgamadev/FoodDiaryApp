import { ColourTheme, SpacingTheme, Theme } from "./Theme.interface";

const DEFAULT_LIGHT_COLOUR_THEME: ColourTheme = {
    primary: '#03a9f4',
    onPrimary: '#fff',
    surface: '#fff',
    onSurface: '#000',
    background: '#dedede',
}

const DEFAULT_LIGHT_SPACING_THEME: SpacingTheme = {
    base: 8,
    double: 16,
}

export const DEFAULT_LIGHT_THEME_ID = 'default-light';

export const DEFAULT_LIGHT_THEME: Theme = {
    id: DEFAULT_LIGHT_THEME_ID,
    colour: DEFAULT_LIGHT_COLOUR_THEME,
    spacing: DEFAULT_LIGHT_SPACING_THEME,
};