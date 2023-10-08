import React from "react";
import { Image, StyleSheet } from "react-native";
import { Button, ButtonText, View } from "@gluestack-ui/themed";
import { AntDesign } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';

function MapScreen({ navigation })
{
    const [origin, setOrigin] = React.useState({
        latitude: 60.93388263559193, 
        longitude: -117.05849658510526,
        latitudeDelta: 1.8,
        longitudeDelta: 1.8,
      });

    const markers = [
      {
        origin: {
          latitude: 60.99259059307894,
          longitude: -116.3173882770687
        }
      },
      {
        origin: {
          latitude: 60.911058454479196,
          longitude: -117.61276320106656
        }
      },
      {
        origin: {
          latitude: 60.537503163143704,
          longitude: -117.52919218777555
        }
      }
    ]
    
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
                title="Location"
                description="Your current location"
                onPress={() => console.log('Marker pressed')}
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