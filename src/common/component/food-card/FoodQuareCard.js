
import React from 'react'
import { Image, View } from 'react-native'
import { Text } from 'react-native-paper'
import Icons from '../icons/LocalIcons'
import FoodQuareCardStyle from './style/FoodQuareCardStyle'
const FoodImage = require("../../../assets/food-items/2.jpg")
const FoodQuareCard = () => {
    return (
        <View style={FoodQuareCardStyle.container}>
            <Image style={FoodQuareCardStyle.imageArea} source={FoodImage} />
            <Text variant='titleMedium' style={FoodQuareCardStyle.foodTitle}>Checken Biryani</Text>
            <View style={{ flex: 1,flexDirection:"row",width:100 }}>
                <View>
                    <Icons name="location" styles={{ margin: 10, marginTop: 6 }} />
                </View>
                <View>
                    <Text variant='bodySmall'>Ambrosia Hotel &
                        Restaurant</Text>
                </View>
            </View>
        </View>
    )
}

export default FoodQuareCard