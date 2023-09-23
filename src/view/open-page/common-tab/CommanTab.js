import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Text, useTheme } from 'react-native-paper'

const CommanTab = ({ childElement, setModal, modalName }) => {
    const theme = useTheme()
    const checkActive = (tabName) => {
        if (tabName == modalName) {
            return { textDecorationLine: "underline", color: theme.colors.primary }
        }
    }
    return (
        <View style={{ marginTop: 15 }}>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => setModal("user-register")}>
                    <Text variant='titleLarge' style={{ marginRight: 30,...checkActive("user-register") }}>Create Account</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModal("login")}>
                    <Text variant='titleLarge' style={{ marginLeft: 30 ,...checkActive("login")}}>Login</Text>
                </TouchableOpacity>
            </View>
            {childElement}
        </View>
    )
}

export default CommanTab