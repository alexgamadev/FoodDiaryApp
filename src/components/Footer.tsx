import React from 'react';
import {
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors
} from 'react-native/Libraries/NewAppScreen';

type FooterProps = {
    children: any
}

const Footer = ({ children }: FooterProps) => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <View style={[styles.footerContainer, { backgroundColor: isDarkMode ? Colors.black : Colors.white }]}>
            <Text
                style={[
                    styles.footerDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}>
                {children}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footerContainer: {
        marginTop: 4,
        paddingHorizontal: 24
    },
    footerDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default Footer;