import { ColourTheme, SpacingTheme, Theme } from './Theme.interface';

const DEFAULT_DARK_COLOUR_THEME: ColourTheme = {
    primary: '#03a9f4',
    onPrimary: '#fff',
    surface: '#545454',
    onSurface: '#fff',
    background: '#3f3f3f',
    footer: '#121212',
};

const DEFAULT_DARK_SPACING_THEME: SpacingTheme = {
    base: 8,
    double: 16,
};

export const DEFAULT_DARK_THEME_ID = 'default-dark';

export const DEFAULT_DARK_THEME: Theme = {
    id: DEFAULT_DARK_THEME_ID,
    colour: DEFAULT_DARK_COLOUR_THEME,
    spacing: DEFAULT_DARK_SPACING_THEME,
};