import * as React from 'react';
import { TextInput } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { checkErrors } from '../../functions/CommonFunction';
const TextInputCustom = ({ label, placeholder, keyboardType = "default", secureTextEntry = false, errors, name }) => {
  const [text, setText] = React.useState('');

  return (
    <SafeAreaView style={{ marginTop: 16 }}>
      <Text variant="labelLarge" style={{ marginLeft: 10, marginBottom: 10, color: checkErrors(errors, name) ? "red" : "#374151" }}>{label}</Text>
      <TextInput
        style={{ height: 48, borderRadius: 12, borderWidth: 1, borderColor: checkErrors(errors, name) ? "red" : "#BEC5D1", paddingLeft: 20 }}
        onChangeText={(e) => setText(e)}
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={text}
        secureTextEntry={secureTextEntry}
      />
      {
        secureTextEntry && (
          <IconButton
          style={{ position: "absolute", right: 10, marginTop: 34 }}
          icon={false?"eye":"eye-off"}
          iconColor={"gray"}
          size={20}
          onPress={() => console.log('Pressed')}
        />
        )
      }
    
    </SafeAreaView>
  );
};

export default TextInputCustom;