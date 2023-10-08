import { Box, Button, Center, HStack, Avatar, AvatarImage, ButtonText } from '@gluestack-ui/themed';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ImageBackground } from 'react-native-web';
import { AntDesign } from '@expo/vector-icons';

function ModalInfo({ navigator })
{
    return (
        <View>
            <Box sx={{"@base": {height: 914}}}>
                <ImageBackground source={require('../../assets/pictures/coral.png')} resizeMode="cover" style={{flex: 1, justifyContent: 'center'}} imageStyle={{opacity: 0.5}}>
                    <Box style={{paddingLeft: 20}}>
                        <Button borderRadius='$full' size='lg' backgroundColor='#00327B' style={{width: 50, height: 50}} onPress={() => navigation.navigate('Home')}>
                            <AntDesign name="arrowleft" size={24} color="white" />
                        </Button>
                    </Box>
                    <Box style={{ paddingVertical: 10, paddingHorizontal: 50}}>
                        <Center><Text style={{fontFamily: 'Lemon-Regular', fontSize: 30, paddingBottom: 15, color: 'white'}}>Río Valdivia</Text></Center>
                        <Text style={{fontFamily: 'Lemon-Regular', fontSize: 25, color: '#00327B'}}>Información</Text>
                        <Text style={{fontFamily: 'BalooTammudu2-VariableFont_wght', fontSize: 18}}>
                            El Río Valdivia es un corto curso natural de agua de Chile que discurre por la Región de Los Ríos
                        </Text>
                        <Text style={{fontFamily: 'Lemon-Regular', fontSize: 25, color: '#00327B', paddingBottom: 10}}>Calidad del Agua</Text>
                        <Box style={styles.progress} >
                            <Image accessibilityLabel="Fondo" source={require("../../assets/pictures/progress.png")} style={styles.filledTrack}/>
                        </Box>
                        <Text style={{fontFamily: 'Lemon-Regular', fontSize: 25, color: '#00327B', paddingTop: 10}}>Ecosistema</Text>
                        <Center>
                            <HStack space="2xl" width="$full">
                                <Box width="auto">
                                    <Avatar size="xl" borderRadius="$full">
                                        <AvatarImage source={require('../../assets/pictures/tortuga.png')}/>
                                    </Avatar>
                                    <Center><Text style={{fontFamily: 'BalooTammudu2-VariableFont_wght', fontSize: 18}}>
                                        Tortuga
                                    </Text></Center>
                                </Box>
                                <Box width="auto">
                                    <Avatar size="xl" borderRadius="$full">
                                        <AvatarImage source={require('../../assets/pictures/conchitas.png')}/>
                                    </Avatar>
                                    <Center><Text style={{fontFamily: 'BalooTammudu2-VariableFont_wght', fontSize: 18}}>
                                        Conchas
                                    </Text></Center>
                                </Box>
                                <Box width="auto">
                                    <Avatar size="xl" borderRadius="$full">
                                        <AvatarImage source={require('../../assets/pictures/delfines.png')}/>
                                    </Avatar>
                                    <Center><Text style={{fontFamily: 'BalooTammudu2-VariableFont_wght', fontSize: 18}}>
                                        Delfines
                                    </Text></Center>
                                </Box>
                            </HStack>
                        </Center>
                        <Text style={{fontFamily: 'Lemon-Regular', fontSize: 25, color: '#00327B'}}>¿Como puedes ayudar?</Text>
                        <Text style={{fontFamily: 'BalooTammudu2-VariableFont_wght', fontSize: 18}}>
                            No tires basura
                        </Text>
                    </Box>
                </ImageBackground>
            </Box>
        </View>
  )
};

const styles = StyleSheet.create({
    progress: {
        width: 300,
        height: 30,
        backgroundColor: 'lightgray',
        borderRadius: 50,
    },
    filledTrack: {
        height: 30,
        width: "40%",
        borderRadius: 50
    }
});

export default ModalInfo;