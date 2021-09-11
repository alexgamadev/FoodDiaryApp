
export interface ColourTheme {
    primary: string;
    onPrimary: string;
    surface: string;
    onSurface: string;
    background: string;
}

export interface SpaceTheme {
    base: number;
    double: number;
}

export interface Theme {
    id: string;
    colour: ColourTheme;
    space: SpaceTheme;
}