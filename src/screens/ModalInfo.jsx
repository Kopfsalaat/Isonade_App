import { Box, Button, Center, HStack, Avatar, AvatarImage, ButtonText, ScrollView } from '@gluestack-ui/themed';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function ModalInfo({ route, navigation })
{
    const { waterInfo } = route.params;
    return (
        <ScrollView>
            <Button style={styles.buttonBack} onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" style={styles.buttonBacText} color="white" />
            </Button>
            <Box sx={{h: "100%", paddingTop: 100}}>
                <ImageBackground source={require("../../assets/pictures/coral.png")} resizeMode="cover" style={{flex: 1, justifyContent: 'center', alignItems: "center"}} imageStyle={{opacity: 0.5}}>
                    <Box style={{ paddingVertical: 10, paddingHorizontal: 50}}>
                        <Center>
                            <Text style={{fontFamily: 'Lemon-Regular', fontSize: 30, paddingBottom: 15, color: "#00327B"}}>
                                {waterInfo.name}
                            </Text>
                        </Center>
                        <Text style={{fontFamily: 'Lemon-Regular', fontSize: 25, color: '#00327B'}}>Information</Text>
                        <Text style={{fontFamily: 'Baloo', fontSize: 18}}>
                            {waterInfo.description}
                        </Text>
                        <Text style={{fontFamily: 'Lemon-Regular', fontSize: 25, color: '#00327B', paddingBottom: 10}}>Water Quality</Text>
                        <Box sx={{justifyContent: "center", alignItems: "center"}}>
                            <Box style={styles.progress} >
                                <Image accessibilityLabel="Fondo" source={require("../../assets/pictures/progress.png")} style={{...styles.filledTrack, width: `${waterInfo.waterQuality.value*100}%`}}/>
                            </Box>
                        </Box>
                        <Text style={{fontFamily: 'Lemon-Regular', fontSize: 25, color: '#00327B', paddingTop: 10}}>Environment</Text>
                        <Center>
                            <HStack space="2xl" width="$full">
                                {
                                    waterInfo.environment.map(spices => (
                                        <Box width="auto">
                                            <Avatar size="xl" borderRadius="$full">
                                                <AvatarImage source={require('../../assets/pictures/conchitas.png')}/>
                                            </Avatar>
                                            <Center>
                                                <Text style={{fontFamily: 'Baloo', fontSize: 18}}>
                                                    {spices.name}
                                                </Text>
                                            </Center>
                                        </Box>
                                    ))
                                }
                            </HStack>
                        </Center>
                        <Text style={{fontFamily: 'Lemon-Regular', fontSize: 25, color: '#00327B'}}>Advices</Text>
                        {
                            waterInfo.advices.map(advice => (
                                <Text style={{fontFamily: 'Baloo', fontSize: 18}}>
                                    {advice}
                                </Text>
                            ))
                        }
                    </Box>
                </ImageBackground>
            </Box>
        </ScrollView>
  )
};

const styles = StyleSheet.create({
    buttonBack: {
        width: 50,
        height: 50,
        backgroundColor: '#00327B',
        borderRadius: 50,
        position: 'absolute',
        zIndex: 10,
        top: 80,
        left: 20
    },
    buttonBacText: {
        width: 50,
        height: "100%",
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 24
    },
    progress: {
        width: 300,
        height: 30,
        backgroundColor: 'lightgray',
        borderRadius: 50,
    },
    filledTrack: {
        height: 30,
        borderRadius: 50
    }
});

export default ModalInfo;