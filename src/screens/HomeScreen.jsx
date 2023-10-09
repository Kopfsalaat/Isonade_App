import { Entypo } from '@expo/vector-icons';
import { Avatar, AvatarImage, Box, Button, ButtonText, HStack, Progress, ProgressFilledTrack, VStack } from '@gluestack-ui/themed';
import { View, Text, Image, StyleSheet, Pressable, Linking} from 'react-native';
import { useSelector } from 'react-redux';

function HomeScreen({navigation }) {
    // Se obtiene el usuario del store de redux. osea los datos del usuario
    const user = useSelector(state => state.user.value);
    // Se retorna la vista de la pantalla de inicio
    return (
        <View>
            <VStack sx={{alignItems: "center", marginVertical: 50}} space="lg">
                <Box sx={{elevation: 5, bgColor: "transparent", borderRadius: 50}}>
                    <Image
                        accessibilityLabel="Profile picture"
                        source={require('../../assets/markers/viajero.png')}
                        style={{width: 100, height: 100, borderRadius: 50, backgroundColor: "white"}}
                        resizeMode="contain"
                    />
                </Box>
                <Text style={{fontFamily: "Lemon-Regular", fontSize: 24}}>{user.name} {user.lastName}</Text>
            </VStack>

            <VStack sx={{alignItems: "center"}}>
                <Text style={{fontSize: 18, fontFamily: "Lemon-Regular"}}>Badges</Text>
                <HStack space="lg" width="$full" sx={{justifyContent: "center"}}>
                    <Box width="auto">
                        <Avatar size="lg" borderRadius="$full">
                            <AvatarImage source={require('../../assets/pictures/badges/badge1.png')}/>
                        </Avatar>
                    </Box>
                    <Box width="auto">
                        <Avatar size="lg" borderRadius="$full">
                            <AvatarImage source={require('../../assets/pictures/badges/badge2.png')}/>
                        </Avatar>
                    </Box>
                    <Box width="auto">
                        <Avatar size="lg" borderRadius="$full">
                            <AvatarImage source={require('../../assets/pictures/badges/badge3.png')}/>
                        </Avatar>
                    </Box>
                </HStack>
            </VStack>

            <VStack sx={{alignItems: "center", marginTop: 50}}>
                <Text style={{fontSize: 18, fontFamily: "Lemon-Regular"}}>Credits</Text>
                <VStack>
                    <Box style={styles.container}>
                        <Text style={styles.text}>Candado: </Text>
                        <Pressable onPress={() => Linking.openURL('https://www.flaticon.es/iconos-gratis/bloquear')} title="bloquear iconos">
                            <Text style={styles.link}>Bloquear iconos creados por Freepik - Flaticon</Text>
                        </Pressable>
                    </Box>
                    <Box style={styles.container}>
                        <Text style={styles.text}>Señal Peligro: </Text>
                        <Pressable onPress={() => Linking.openURL('https://www.flaticon.es/iconos-gratis/importante')} title="importante iconos">
                            <Text style={styles.link}>Importante iconos creados por Freepik - Flaticon</Text>
                        </Pressable>
                    </Box>
                    <Box style={styles.container}>
                        <Text style={styles.text}>Usuario: </Text>
                        <Pressable onPress={() => Linking.openURL('https://www.flaticon.es/iconos-gratis/usuario')} title="usuario iconos">
                            <Text style={styles.link}>Usuario iconos creados por Kiranshastry - Flaticon</Text>
                        </Pressable>
                    </Box>
                    <Box style={styles.container}>
                        <Text style={styles.text}>Mar: </Text>
                        <Pressable onPress={() => Linking.openURL('https://www.flaticon.es/iconos-gratis/oceano')} title="oceano iconos">
                            <Text style={styles.link}>Oceano iconos creados por Freepik - Flaticon</Text>
                        </Pressable>
                    </Box>
                    <Box style={styles.container}>
                        <Text style={styles.text}>X: </Text>
                        <Pressable onPress={() => Linking.openURL('https://www.flaticon.es/iconos-gratis/cerca')} title="cerca iconos">
                            <Text style={styles.link}>Cerca iconos creados por Darius Dan - Flaticon</Text>
                        </Pressable>
                    </Box>
                    <Box style={styles.container}>
                        <Text style={styles.text}>Viajero: </Text>
                        <Pressable onPress={() => Linking.openURL('https://www.flaticon.es/iconos-gratis/turista')} title="turista iconos">
                            <Text style={styles.link}>Turista iconos creados por Amethyst prime - Flaticon</Text>
                        </Pressable>
                    </Box>
                    
                    <Text style={styles.text}>Burbujas:</Text>
                    <Box style={{marginLeft: 10}}>
                        <Pressable onPress={() => Linking.openURL('https://www.flaticon.es/iconos-gratis/jabon')} title="jabón iconos" style={styles.pressableContainer}>
                            <Entypo name="dot-single" size={10} color="black" />
                            <Text style={styles.link}>Jabón iconos creados por catkuro - Flaticon</Text>
                        </Pressable>
                        <Pressable onPress={() => Linking.openURL('https://www.flaticon.es/iconos-gratis/burbujas')} title="burbujas iconos" style={styles.pressableContainer}>
                            <Entypo name="dot-single" size={10} color="black" />
                            <Text style={styles.link}>Burbujas iconos creados por xnimrodx - Flaticon</Text>
                        </Pressable>
                        <Pressable onPress={() => Linking.openURL('https://www.flaticon.es/iconos-gratis/burbujas')} title="burbujas iconos" style={styles.pressableContainer}>
                            <Entypo name="dot-single" size={10} color="black" />
                            <Text style={styles.link}>Burbujas iconos creados por kerismaker - Flaticon</Text>
                        </Pressable>
                        <Pressable onPress={() => Linking.openURL('https://www.flaticon.es/iconos-gratis/jabon')} title="jabón iconos" style={styles.pressableContainer}>
                            <Entypo name="dot-single" size={10} color="black" />
                            <Text style={styles.link}>Jabón iconos creados por Freepik - Flaticon</Text>
                        </Pressable>
                    </Box>
                </VStack>
            </VStack>
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
    },
    container: {
        flexDirection: "row",
    },
    text: {
        fontSize: 10,
    },
    link: {
        fontSize: 10,
        color: "#0645AD",
        textDecorationLine: "underline",
    },
    pressableContainer: {
        flexDirection: "row",
    },
});

export default HomeScreen;