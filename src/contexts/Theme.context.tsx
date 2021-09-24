import React, { useState, useCallback, useMemo } from 'react';

import { DEFAULT_DARK_THEME } from "interfaces/DefaultDark.theme";
import { DEFAULT_LIGHT_THEME } from "interfaces/DefaultLight.theme";
import { Theme } from "interfaces/Theme.interface";

interface ProvidedValues {
    theme: Theme;
    toggleTheme: () => void;
}

const Context = React.createContext<ProvidedValues>({
    theme: DEFAULT_LIGHT_THEME,
    toggleTheme: () => {
        console.log('ThemeProvider is not rendered!');
    }
});

interface Props {
    initialTheme: Theme;
    children?: React.ReactNode;
}

export const ThemeProvider = React.memo<Props>((props) => {
    const [theme, setTheme] = useState<Theme>(props.initialTheme);

    // A callback for toggling the theme
    const ToggleThemeCallback = useCallback(() => {
        setTheme((currentTheme) => {
            if (currentTheme.id === DEFAULT_LIGHT_THEME.id) {
                return DEFAULT_DARK_THEME;
            }

            if (currentTheme.id === DEFAULT_DARK_THEME.id) {
                return DEFAULT_LIGHT_THEME;
            }

            return currentTheme;
        });
    }, []);

    // A memoized store of the current theme
    const MemoizedValue = useMemo(() => {
        const value: ProvidedValues = {
            theme,
            toggleTheme: ToggleThemeCallback
        };

        return value;
    }, [theme, ToggleThemeCallback]);

    return (
        <Context.Provider value={MemoizedValue}>
            {props.children}
        </Context.Provider>
    );
});