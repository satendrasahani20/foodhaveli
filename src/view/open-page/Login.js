import React from 'react'
import { View } from 'react-native'
import { Divider, Text } from 'react-native-paper'
import TextInputCustom from '../../common/component/text-input/TextInputCustom'
import ButtonLarge from '../../common/component/buttons/ButtonLarge'
import DeviderCustom from '../../common/component/devider/DeviderCustom'

const Login = () => {
    return (
        <View>
            <TextInputCustom
                label={"Email Address"}
                placeholder="Eg: testemail@example.com"
            />
            <TextInputCustom
                label={"Password"}
                placeholder="************"
            />
            <ButtonLarge
                title={"Login"}
                textColor='white'
            />
            <DeviderCustom />
            <ButtonLarge
                title={"Login With  Google"}
                textColor='gray'
                iconName={"google"}
                colorsType='lightGray'
            />
        </View>
    )
}

export default Login