import React from 'react'
import { List} from 'react-native-paper'
import { Image } from 'react-native';

const SearchLists = () => {
    // temp product lists
    const Firsticon = require("../../../assets/food-items/1.png");
    const Secondicon = require("../../../assets/food-items/2.png");
    const Fourthicon = require("../../../assets/food-items/4.png");

    const lists = [Firsticon, Secondicon, Fourthicon];

    return (
        lists?.map((item, index) => (
            <List.Item title={"Biryani "+(index+1)}
            style={{marginLeft:16}}
            key={index} left={() => 
            <Image source={item}   style={{ width: 22, height: 22 }}/>} />
        ))

    )
}

export default SearchLists