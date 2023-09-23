import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Snackbar, useTheme } from 'react-native-paper';
const SnakBar = () => {
    const [visible, setVisible] = React.useState(true);

    const onToggleSnackBar = () => setVisible(!visible);
    const onDismissSnackBar = () => setVisible(false);
    const theme = useTheme();
    return (
        <View style={styles.container}>
            <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button>
            <Snackbar
                visible={visible}
                style={{ backgroundColor: theme.colors.primary }}
                onDismiss={onDismissSnackBar}
                action={{
                    label: 'Undo',
                    onPress: () => {
                        // Do something
                    },
                }}>
                Hey there! I'm a Snackbar.
            </Snackbar>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
});

export default SnakBar