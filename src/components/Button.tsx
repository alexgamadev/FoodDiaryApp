import { useTheme } from "contexts/Theme.context";
import { Theme } from "interfaces/Theme.interface";
import React, { useMemo } from "react";
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from "react-native";

const createStyles = (theme: Theme) => {
    return StyleSheet.create({
        buttonContainer: {
            backgroundColor: theme.colour.surface,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            width: 50,
            height: 50,
            marginBottom: 5
        },
        buttonText: {
            color: theme.colour.primary,
            fontSize: 20
        }
    });
}

type ButtonProps = {
    onPressCallback: (event: GestureResponderEvent) => void,
    children: any
}

const Button = ({ onPressCallback, children }: ButtonProps) => {
    const { theme } = useTheme();

    const styles = useMemo(
        () => createStyles(theme),
        [theme]
    );

    return (
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={(event) => onPressCallback(event)}>
            <Text style={styles.buttonText}>{children}</Text>
        </TouchableOpacity>
    );

}

export default Button;