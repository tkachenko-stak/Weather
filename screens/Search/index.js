import React from 'react'
import { ScrollView } from 'react-native'
import DetalisWeather from '../../components/DetalisWeather'
import { GooglePlacesAutocompleteAddress } from '../../components'
import style from './style'

const Search = () => (
  <ScrollView keyboardShouldPersistTaps='always' style={style.container}>
    <GooglePlacesAutocompleteAddress />
    <DetalisWeather />
  </ScrollView>
)

export default Search
