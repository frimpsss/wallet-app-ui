import { View, Text } from 'react-native'
import React from 'react'
import { colors } from '../../utils'

const Home = () => {
  return (
    <View style={{
      flex: 1, 
      alignItems: "center", 
      justifyContent: "center", 
      backgroundColor: colors.white
    }}>
      <Text style={{
        fontFamily: "poppins-regular"
      }}>Home</Text>
    </View>
  )
}

export default Home