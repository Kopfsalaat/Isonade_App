import { Avatar, AvatarImage, Box, Button, ButtonText, HStack, Progress, ProgressFilledTrack, VStack } from '@gluestack-ui/themed';
import { View, Text, Image, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';

function HomeScreen({navigation }) {
    // Se obtiene el usuario del store de redux. osea los datos del usuario
    const user = useSelector(state => state.user.value);
    // Se retorna la vista de la pantalla de inicio
    return (
        <View>
            <Text>Hola {user.name} {user.lastName}</Text>
            <Button style={{width: 200, marginBottom: 100}} onPress={() => navigation.navigate('Settings')}>
                <ButtonText>ir a Configuración</ButtonText>
            </Button>

            <HStack space="lg" width="$full">
                <Box width="auto">
                    <Avatar size="xl" borderRadius="$full">
                        <AvatarImage source={require('../../assets/pictures/Fondo.jpg')}/>
                    </Avatar>
                </Box>
                <Box width="auto">
                    <Avatar size="xl" borderRadius="$full">
                        <AvatarImage source={require('../../assets/pictures/Fondo.jpg')}/>
                    </Avatar>
                </Box>
                <Box width="auto">
                    <Avatar size="xl" borderRadius="$full">
                        <AvatarImage source={require('../../assets/pictures/Fondo.jpg')}/>
                    </Avatar>
                </Box>
            </HStack>
        </View>
    );
};

const styles = StyleSheet.create({
    progress: {
        width: 300,
        height: 30,
        backgroundColor: 'lightgray',
        borderRadius: 50,
    },
    filledTrack: {
        height: "100%",
        width: "100%",
        borderRadius: 50
    }
});

export default HomeScreen;