import { Box, Button, ButtonText, Center, Image, VStack, set } from '@gluestack-ui/themed';
import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { getCurrentLocation } from '../utils/location';
import getNearbyWatersInfo from '../api/getNearbyWatersInfo';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { setLocation, setWatersInfo } from '../store/watersInfoSlice';

function InicioScreen({ navigation }) {

    const [loading, setLoading] = React.useState(false);
    const dispatch = useDispatch();

    const user = useSelector(state => state.user.value);

    const userSingIn = user.name !== '' && user.lastName !== '';

    async function start() {
        setLoading(true);
        const location = await getCurrentLocation();
        dispatch(setLocation(location));
        const nearbyWatersInfo = await getNearbyWatersInfo(location);
        dispatch(setWatersInfo(nearbyWatersInfo));
        setLoading(false);
        navigation.navigate('Map');
    }

    return (
        <View> 
            <Box sx={{h: "100%"}}>
                <ImageBackground accessibilityLabel='Fondo del océano' source={require('../../assets/pictures/Fondo.jpg')} resizeMode="cover" style={{flex: 1, justifyContent: 'center'}}>
                    <Center>
                    <Box style={{ paddingTop: 75}}><Image alt='Ballena' size="lg" source={require('../../assets/pictures/ballena.png')}/></Box>
                        <Text style={{ fontFamily: 'Lemon-Regular', fontSize: 40, color: 'white', paddingTop: 15, paddingBottom: 50 }}>ISONADE</Text>
                        { loading ?
                            <Text style={styles.loadingText}>Loading...</Text>
                            :
                            <VStack space="lg">
                            {
                                userSingIn ? 
                                <Box>
                                    <Button style={styles.button} onPress={() => start()}>
                                        <ButtonText style={styles.buttonText}>Start</ButtonText>
                                    </Button>
                                </Box>
                                :
                                <Box>
                                    <Button style={styles.button} onPress={() => navigation.navigate('Settings')}>
                                        <ButtonText style={styles.buttonText}>Sing Up</ButtonText>
                                    </Button>
                                </Box>
                            }
                        </VStack>

                        }
                    </Center>
                </ImageBackground>
            </Box>
        </View>
    );
};

const styles = StyleSheet.create({
    loadingText: {
        fontFamily: 'Lemon-Regular',
        fontSize: 20,
        color: 'white'
    },
    button: {
        width: 150,
        backgroundColor: 'white'
    },
    buttonText: {
        width: 150,
        paddingTop: 20,
        height: "100%",
        color: '#00327B',
        fontFamily: 'Baloo',
        textAlign: 'center',
        textAlignVertical: 'top',
    }
});

export default InicioScreen;