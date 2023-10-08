import { Box, Button, ButtonText, Center, Image } from '@gluestack-ui/themed';
import { View, Text, ImageBackground } from 'react-native';

function InicioScreen({ navigation }) {

    const goToHomePage = () => {
        navigation.navigate('ModalInfo')
    }

    return (
        <View> 
            <Box sx={{h: "100%"}}>
                <ImageBackground accessibilityLabel='Fondo del océano' source={require('../../assets/pictures/Fondo.jpg')} resizeMode="cover" style={{flex: 1, justifyContent: 'center'}}>
                    <Center>
                    <Box style={{ paddingTop: 75}}><Image alt='Ballena' size="lg" source={require('../../assets/pictures/ballena.png')}/></Box>
                        <Text style={{ fontFamily: 'Lemon-Regular', fontSize: 40, color: 'white', paddingTop: 15, paddingBottom: 50 }}>ISONADE</Text>
                        <Box style={{ padding: 15}}>
                            <Button style={{width: 150, backgroundColor: 'white' }} onPress={goToHomePage}>
                                <ButtonText style={{ color: '#00327B', fontFamily: 'BalooTammudu2-VariableFont_wght', paddingTop: 8}}>Iniciar Sesion</ButtonText>
                            </Button>
                        </Box>
                        <Box style={{paddingTop: 15}}>
                            <Button style={{width: 150, backgroundColor: 'white'}} onPress={() => navigation.navigate('Settings')}>
                                <ButtonText style={{ color: '#00327B', fontFamily: 'BalooTammudu2-VariableFont_wght', paddingTop: 8}}>Registrarse</ButtonText>
                            </Button>
                        </Box>
                    </Center>
                </ImageBackground>
            </Box>
        </View>
    );
};

export default InicioScreen;