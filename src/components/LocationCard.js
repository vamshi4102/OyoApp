import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LocationCard = (props) => {
    const location = props.data;
  return (
    <View style={styles.card}>
        <Image source={{uri:location.image}} style={styles.image} />
      <Text style={styles.location}>{location.name}</Text>
    </View>
  )
}

export default LocationCard

const styles = StyleSheet.create({
    card:{
        // backgroundColor:'red',
        height:100,
        marginRight:20,
       justifyContent:'center'
    },
    image:{
        width:70,
        height:70,
        resizeMode:'cover',
        borderRadius:35,
        alignSelf:'center',
    },
    location:{
        textAlign:'center',
        marginTop:10
    }
})