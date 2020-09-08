import React from 'react'
import { useSelector } from 'react-redux'
import { View, Text } from 'react-native'
import styles from './style.js'

const DetalisWeather = () => {
  const { currentDataWeather } = useSelector(({ session }) => session)

  const main = currentDataWeather?.main || {}
  const name = currentDataWeather?.name || ''
  const array = Object.keys(main).map(item => ({ key: item, value: main[item] }))

  return (
    <View>
      <Text style={styles.nameCity}>City name: {name}</Text>
      {array?.map((item, index) => (
        <View key={index} style={styles.viewList}>
          <Text style={styles.textItem}>
            {item?.key} {item?.value}
          </Text>
        </View>
      ))}
    </View>
  )
}

export default DetalisWeather
