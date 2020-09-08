import React from 'react'
import { useDispatch } from 'react-redux'
import { View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { getCityDataByName } from '../../modules/actions'
import { googleApiKey } from '../../key'
import style from './style'

const url = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api'

const GooglePlacesAutocompleteAddress = () => {
  const dispatch = useDispatch()

  const handlerAutocomplete = value => dispatch(getCityDataByName(value))

  return (
    <View style={style.wrapAutocomplite}>
      <GooglePlacesAutocomplete
        query={{ key: googleApiKey, language: 'en' }}
        onPress={data => handlerAutocomplete(data.terms[0].value)}
        requestUrl={{ url, useOnPlatform: 'web' }}
        styles={style}
      />
    </View>
  )
}

export default GooglePlacesAutocompleteAddress
