import React from "react";
import { StyleSheet } from "react-native";
import { View } from "@gluestack-ui/themed";
import MapView from 'react-native-maps';

function MapScreen({})
{
    const [origin, setOrigin] = React.useState({
        latitude: -39.821016,
        longitude: -73.233558,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    
    return (
        <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={origin}
            />
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
  });

export default MapScreen;