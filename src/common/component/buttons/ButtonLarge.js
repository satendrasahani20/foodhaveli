import React from 'react'
import { Button } from "react-native-paper"
import buttons from './style/buttons';
import { useTheme } from 'react-native-paper';
import { buttonFonts, checkIcons } from '../../functions/CommonFunction';
import { getDynamicStyles } from "../../functions/CommonFunction.js"
import { Text, View } from 'react-native';
const ButtonLarge = ({
    iconName,
    title,
    onPress,
    mode = "contained",
    colorsType = "primary",
    textColor = "black",
    disabled = false,
    loading = false,
    btnSize = "large",
    style,
}) => {
    const theme = useTheme();
    return (
        <Button icon={checkIcons(iconName)}
            style={{ ...buttons.largeButton,...style, ...getDynamicStyles(theme, disabled, colorsType, btnSize) }}
            mode={mode}
            onPress={onPress}
            textColor={textColor}
            disabled={disabled}
            loading={loading}
        >
            <Text style={buttonFonts(btnSize)}>
                {title}
            </Text>

        </Button>
    )
}

export default ButtonLarge