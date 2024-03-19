import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
const NearByButton = () => {
  return (
    <TouchableOpacity onPress={()=>console.warn('search nearby locations')}>
      <View style={styles.card}>
        <Ionicons name="paper-plane" size={24} color="white" />
      </View>
      <Text style={styles.location}>Near by</Text>
    </TouchableOpacity>
  );
};

export default NearByButton;

const styles = StyleSheet.create({
  card: {
    width: 70,
    height: 70,
    marginHorizontal: 10,
    justifyContent: "center",
    backgroundColor: "#333",
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
  },

  location: {
    textAlign: "center",
    marginTop: 10,
  },
});
