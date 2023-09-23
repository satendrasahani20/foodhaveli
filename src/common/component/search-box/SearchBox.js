import React, { useState } from 'react'
import { View } from 'react-native'
import { TextInput } from 'react-native';
import { List, Text, useTheme } from 'react-native-paper';
import Icons from '../icons/LocalIcons';
import SearchLists from './SearchLists';

const SearchBox = () => {
    const [text, setText] = useState("");
    const theme = useTheme();
    
    return (
        <View style={{ marginTop: 14, marginLeft: 20, marginRight: 20 }}>
            <TextInput
                style={{ height: 48, borderRadius: 12, backgroundColor: theme.colors["lightGray"], paddingLeft: 70 }}
                onChangeText={(e) => setText(e)}
                placeholder={"search"}
                value={text}
            />
            <Icons
                name="search"
                styles={{ position: "absolute",  marginTop: 16,marginLeft:40 }}
            />
            <List.Section>
                <List.Subheader>search <Text style={{fontStyle:"italic"}}>" Biryan in under 250 "</Text></List.Subheader>
                <SearchLists/>
            </List.Section>
        </View>
    )
}

export default SearchBox