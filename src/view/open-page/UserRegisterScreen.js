import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import TextInputCustom from '../../common/component/text-input/TextInputCustom'
import ButtonLarge from '../../common/component/buttons/ButtonLarge'
import DeviderCustom from '../../common/component/devider/DeviderCustom'

const UserRegisterScreen = () => {
    return (
        
            <View>
                <TextInputCustom
                    label={"Full Name"}
                    placeholder="Enter Your Full Name"
                />
                <TextInputCustom
                    label={"Email Address"}
                    placeholder="Eg: testemail@example.com"
                />
                <TextInputCustom
                    label={"Password"}
                    placeholder="************"
                />
                <TextInputCustom
                    label={"Confirm Password"}
                    placeholder="************"
                />
                <ButtonLarge
                    title={"Registration"}
                    textColor='white'
                />
                <DeviderCustom/>
                <ButtonLarge
                    title={"Registration"}
                    textColor='gray'
                    iconName={"google"}
                    colorsType='lightGray'
                />
            </View>
    )
}

export default UserRegisterScreen