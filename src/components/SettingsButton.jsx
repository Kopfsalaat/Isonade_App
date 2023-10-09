import { Button, ButtonText } from "@gluestack-ui/themed";
import { Pressable, StyleSheet } from "react-native";
import { EvilIcons } from '@expo/vector-icons';

function SettingsButton({navigation})
{
    return (
        <Pressable style={styles.button} onPress={() => navigation.navigate('Settings')}>
            <EvilIcons style={styles.icon} name="gear" size={30} color="black" />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 30,
        height: 30,
    },
    icon: {
        width: "100%",
        height: "100%",
    }
});


export default SettingsButton;