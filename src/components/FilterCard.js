import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
const FilterCard = (props) => {
    const filter = props.data;
  return (
    <View style={styles.filter}>
      <Text style={styles.text}>{filter.name}</Text>
      <Feather name="chevron-down" size={24} color="black" />
    </View>
  )
}

export default FilterCard

const styles = StyleSheet.create({
    filter:{
    borderColor:"#f5f5f5",
    borderWidth:1,
    borderRadius:25,
    marginRight:15,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:"center",
    paddingHorizontal:15,
    paddingVertical:10,
    },
    text:{
        fontSize:17
    }
})