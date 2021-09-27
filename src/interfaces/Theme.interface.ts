import { StringUnitLength } from "luxon";

export interface ColourTheme {
    primary: string;
    onPrimary: string;
    surface: string;
    onSurface: string;
    onSurfaceFaded: string;
    background: string;
    footer: string;
}

export interface SpacingTheme {
    base: number;
    double: number;
}

export interface Theme {
    id: string;
    colour: ColourTheme;
    spacing: SpacingTheme;
}