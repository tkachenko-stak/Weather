import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Text, View, Alert } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { getCityDataByCoordinate } from '../../modules/actions'
import { toCelcium } from '../../common/helpers'
import { useIsFocused } from '@react-navigation/native'
import Geolocation from '@react-native-community/geolocation'
import styles from './style'

const initialValue = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

const Map = ({ navigation }) => {
  const [region, setRegion] = useState(initialValue)
  const currentDataWeather = useSelector(({ session }) => session.currentDataWeather)
  const isFocused = useIsFocused()
  const dispatch = useDispatch()
  
  const temperature = toCelcium(currentDataWeather?.main.temp).toFixed(1)

  useEffect(() => {
    const coord = currentDataWeather?.coord
    if(isFocused && coord) {
      wrapSetRegion(coord.lat, coord.lon)
    }
  }, [isFocused])

  const wrapSetRegion = (latitude, longitude) => setRegion({ ...region, latitude, longitude })

  useEffect(() => {
    dispatch(getCityDataByCoordinate(region.latitude, region.longitude))
  }, [region])

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords
        wrapSetRegion(latitude, longitude)
      },
      error => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    )
  }, [])

  return (
    <MapView
      onLongPress={({ nativeEvent: { coordinate } }) => wrapSetRegion( coordinate.latitude, coordinate.longitude )}
      style={styles.container}
      provider={PROVIDER_GOOGLE}
      region={region}
    >
      {currentDataWeather && (
        <MapView.Marker coordinate={region} onPress={() => navigation.navigate('Search')}>
          <View style={styles.marker}>
            <View>
              <Text style={styles.titleMarker}>{currentDataWeather?.name}</Text>
            </View>
            <View>
              <Text style={styles.titleMarker}>{temperature} C</Text>
            </View>
          </View>
        </MapView.Marker>
      )}
    </MapView>
  )
}

export default Map
