import React from "react";
import { Image, StyleSheet } from "react-native";
import { Button, ButtonText, View } from "@gluestack-ui/themed";
import { AntDesign } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from "react-redux";

function MapScreen({ navigation })
{
  const { location, watersNearby } = useSelector(state => state.watersInfo.value);
  const [origin, setOrigin] = React.useState(location);

  const markers = watersNearby;

  function openModal(waterInfo) {
    navigation.navigate('ModalInfo', {waterInfo});
  }
  
  return (
      <View style={styles.container}>
        <Button style={styles.profile} onPress={() => navigation.navigate('Home')}>
          <ButtonText>
            <AntDesign name="user" size={24} />
          </ButtonText>
        </Button>
        <MapView
          style={styles.map}
          initialRegion={origin}
        >
          <Marker
            coordinate={{latitude: origin.latitude, longitude: origin.longitude}}
            title="Location"
            description="Your current location"
            onPress={() => console.log('Marker pressed')}
          >
              <Image
                accessibilityLabel="Marcador de ubicación"
                source={require('../../assets/markers/viajero.png')}
                style={{width: 40, height: 40}}
                resizeMode="contain"
              />
          </Marker>
          {markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.origin}
              title={marker.name}
              onPress={() => openModal(marker)}
            >
                <Image
                  accessibilityLabel="Marcador de ubicación"
                  source={require('../../assets/markers/marker.png')}
                  style={{width: 40, height: 40}}
                  resizeMode="contain"
                />
            </Marker>
          ))}

        </MapView>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
    profile: {
      position: 'absolute',
      bottom: 50,
      left: 30,
      zIndex: 999,
      borderRadius: 50,
      height: 60,
      width: 60,
      padding: 0,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
    }
  });

export default MapScreen;