import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { MapHTMLAttributes } from 'react';
import MapView from 'react-native-maps';
import {styles} from './styles/estilos';
// import {local_default} from './components/localizacion_default'



export default function App() {
  //  const [origin, setOrigin] = React.useState ({
  //     latitute: 10.488314,
  //     longitude: -66.855794,
  // });

  return (
    <View style={styles.container}>
        <MapView style={styles.map}
        //   initialRegion={{
        //     latitude: origin.latitude,
        //     longitude: origin.longitude,
        //     latitudeDelta: 0.09,
        //     longitudeDelta: 0.04,
        //   }}
         />
    </View>
  );
}
