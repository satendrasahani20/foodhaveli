import React from 'react'
import { Image, View } from 'react-native'
import { Text } from 'react-native-paper'
import Icons from '../icons/LocalIcons'
import ButtonLarge from '../buttons/ButtonLarge'
import RestrauntListsStyle from './style/RestrauntListsStyle'
const FoodImage = require("../../../assets/food-items/2.jpg")
const RestrauntLists = () => {
    return (
        <View style={RestrauntListsStyle.container }>
            <View>
                <Image source={FoodImage} style={RestrauntListsStyle.restraunt} />
            </View>
            <View>
                <Text variant='titleMedium' style={{ marginLeft: 16 }}>SR restraunt Mumbai</Text>
                <View style={{ flexDirection: "row" }}>
                    <Icons name="location" styles={{ marginLeft: 16, marginTop: 6 }} />
                    <Text variant='bodySmall' style={{ width: 160, margin: 10, marginTop: 3 }}>kazi Deiry, Taiger Pass Chittagong</Text>
                    <ButtonLarge title={"Buy"} textColor='white' btnSize='medium' />
                </View>
            </View>
        </View>
    )
}

export default RestrauntLists