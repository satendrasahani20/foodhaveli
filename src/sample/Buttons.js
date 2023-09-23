import React from 'react'
import { View } from 'react-native'
import ButtonLarge from '../common/component/buttons/ButtonLarge'

const Buttons = () => {
    return (
        <View>
            <ButtonLarge title={"Login"} textColor='white' />
            <ButtonLarge title={"Sign Up with Google"} colorsType='lightGray' iconName={"google"} />
            <ButtonLarge title={"Login disabled"} textColor='white' disabled={true} />
            <ButtonLarge title={"Sign Up with disabled"} disabled={true} colorsType='lightGray' iconName={"google"} />
            <ButtonLarge title={"Sign Up with disabled"} disabled={true} loading={true} colorsType='lightGray' iconName={"google"} />
            <ButtonLarge title={"Login "} textColor='white' btnSize='medium' />
            <ButtonLarge title={"Login"} loading={true} textColor='white' btnSize='medium' />
            <ButtonLarge title={"White Back"} loading={true} textColor='black' colorsType='white' />
        </View>
    )
}

export default Buttons