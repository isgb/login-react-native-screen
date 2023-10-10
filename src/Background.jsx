import React from 'react'
import { View,ImageBackground,Text } from 'react-native'

const Background = ({children}) => {
  return (
    <View>

      <ImageBackground 
          source={require("./assets/leaves.jpg")} 
          style={{ height: '100%'}}> 

        <View>
          {children}
        </View>

      </ImageBackground>

    </View>
  )
}

export default Background