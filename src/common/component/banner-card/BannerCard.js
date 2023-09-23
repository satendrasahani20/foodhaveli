import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { Text } from 'react-native-paper';
const brandLogo = require("../../../assets/images/brand-1.png")
const FoodIcon = require("../../../assets/food-items/1.png")
const BannerCard = () => {

    return (
        <View style={{ height: 128, marginLeft: 10, marginRight: 10, marginTop: 10, }}>
            <LinearGradient
                colors={['#FF9F06', '#FFE1B4']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.linearGradient}>
                <View>
                    <Image source={brandLogo} style={{ marginTop: 9 }} />
                    <Text style={styles.title} variant='titleLarge'>
                        Flash Offer
                    </Text>
                    <Text style={styles.description} variant='bodySmall'>
                        We are here with the best
                        deserts intown.
                    </Text>
                    <Text style={styles.orderBtn} variant='titleSmall'>
                    Order >
                    </Text>
                </View>
                <View>
                   <Image source={FoodIcon} style={{width:130,height:130,position:"absolute",left:72}}/>
                </View>
            </LinearGradient>
        </View>
    )
}

// Later on in your styles..
var styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        flexDirection:"row",
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        borderRadius: 28
    },
    title: {
        fontWeight: "bold",
        marginLeft: 10,
        marginTop: 4,
        color: '#ffffff',
    },
    description: {
        width: 168,
        color: '#ffffff',
        marginLeft: 10
    },
    orderBtn: {
        fontWeight: "bold",
        marginLeft: 10,
        marginTop: 2,
        color: '#ffffff',
    }
});

export default BannerCard