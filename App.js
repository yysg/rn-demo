/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  StyleSheet, View
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const App = () => {
  const [page, setPage] = useState('home')
  const [region, setRegion] = useState({
    latitude: 35.6772007,
    longitude: 139.7456575,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  })
  const [coordinate, setCoordinate] = useState({
    latitude: 35.6772007,
    longitude: 139.7456575,
  })
  return (
    <View style={StyleSheet.absoluteFillObject}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        provider={PROVIDER_GOOGLE}
        region={region}
      // onRegionChange={(region)=>setRegion(region)}
      >
        <Marker draggable
          title={"coordinate"}
          description={JSON.stringify(coordinate)}
          coordinate={coordinate}
          onDragEnd={(e) => setCoordinate(e.nativeEvent.coordinate)}
        />
      </MapView>
      <View style={{ position: 'absolute', top: 100, left: 50 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  body: {
    height: '90%',
  },
  homeContainer: {
    flex: 1,
    height: '100%',
    // backgroundColor: 'green'
  },
  favoriateContainer: {
    height: '100%',
    backgroundColor: 'yellow'
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});

export default App;
