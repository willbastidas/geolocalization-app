import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { MapHTMLAttributes } from 'react';
import MapView, {Marker} from 'react-native-maps';
import {styles} from './styles/estilos';
// import {local_default} from './components/localizacion_default'



export default function App() {
   const [mapRegion, setMapRegion] = React.useState ({
      lat: 10.49032,
      long: -66.85351,
      latDelta: 0.09,
      longDelta: 0.04,
   });

  return (
    <View style={styles.container}>
        <MapView style={styles.map}
          initialRegion={{
            latitude: 10.49032,
            longitude: -66.85351, 
            tatitudeDelta: 0.09,
            longitudeDelta: 0.04,
          }}
         > 
         </MapView>
    </View>
  );
}
