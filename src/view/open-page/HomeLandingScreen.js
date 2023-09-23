import React, { useState } from 'react'
import ModalBottom from '../../common/component/bottom-modal/ModalBottom'
import { Text, useTheme } from 'react-native-paper'
import { View } from 'react-native'
import { Image } from 'react-native'
import ButtonLarge from '../../common/component/buttons/ButtonLarge'
import Buttons from '../../sample/Buttons'
import HomeLandingCss from './style/HomeLandingCss'
import Login from './Login'
import UserRegisterScreen from './UserRegisterScreen'
import CommanTab from './common-tab/CommanTab'
const HomeIcon = require("../../assets/images/home-icon.png");
const HomeLandingScreen = () => {
    const theme = useTheme()
    const [modalName, setModalName] = useState("")
    const content = () => {
        if (modalName == "login") {
            return <CommanTab setModal={setModal} modalName={modalName} childElement={<Login />}/>
        }else if(modalName == "user-register"){
            return <CommanTab setModal={setModal} modalName={modalName} childElement={<UserRegisterScreen />}/>
        }
    }
    const setModal=(screenName)=>{
        setModalName(screenName)
    }
    const closeModal=()=>{
        setModalName("")
    }
    return (
        <View style={HomeLandingCss.container}>
            <ModalBottom open={modalName} closeModal={closeModal} childElement={content()} />
            <Image source={HomeIcon} style={HomeLandingCss.imageIcon} />
            <Text variant='titleLarge' style={HomeLandingCss.title}>Welcome</Text>
            <Text variant='bodyMedium' style={HomeLandingCss.slogan}>Before enjoying Foodmedia services
                Please register first</Text>
            <ButtonLarge onPress={()=>setModal("user-register")} title={"Create Account"} textColor='white' style={{ marginTop: 50 }} />
            <ButtonLarge onPress={()=>setModal("login")} title={"Login"} textColor={theme.colors.primary} colorsType='lightPrimary' style={{ marginTop: 10 }} />
            <Text variant='bodyMedium' style={{ width: "95%", textAlign: "center", padding: 10, textTransform: "capitalize" }}>
                By logging in or registering, you have agreed to <Text style={{ color: theme.colors.primary }}> the Terms and Conditions</Text> and <Text style={{ color: theme.colors.primary }}>Privacy Policy.</Text></Text>
        </View>
    )
}

export default HomeLandingScreen