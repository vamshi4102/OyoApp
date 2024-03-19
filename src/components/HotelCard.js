import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
const HotelCard = () => {
  const Hotel = {
    id: "1",
    image:
      "https://images.oyoroomscdn.com/uploads/hotel_image/169046/medium/skfbjmrklxoy.jpg",
  };
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: Hotel.image }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.ratings}>
        <AntDesign name="star" size={24} color="red" />
        <Text style={styles.rating_count}>4.5 (2535)</Text>
      </View>
      <Text style={styles.name}>OYO Flagship hotel skyscape.. </Text>
      <Text style={styles.address}>
        Yeshwantapur near railway station Banglore{" "}
      </Text>
      <View style={styles.price_container}>
        <Text style={styles.price}>852</Text>
        <Text style={styles.previous_price}>2523</Text>
        <Text style={styles.discount}>75% OFF</Text>
      </View>
      <Text style={styles.tax}>+109 Taxes and fees</Text>
    </View>
  );
};

export default HotelCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 25,
    width: "100%",
    height: "100%",
  },
  image: {
    width: 350,
    height: 200,
    borderRadius: 15,
  },
  ratings: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  rating_count: {
    fontSize: 18,
    color: "gray",
  },
  name: {
    fontSize: 20,
    color: "#333",
  },
  address: {
    fontSize: 18,
    color: "lightgray",
  },
  price_container:{
    flexDirection:'row',
    alignItems:"center",
    marginVertical:10
  },
  price:{
    fontSize:23,
    fontWeight:'bold',
    marginRight:10
  },
previous_price:{
  fontSize:23,
  marginRight:10,
  textDecorationLine:'line-through'
},
discount:{
  fontSize:18,
  marginRight:10,
  color:'green'
},
tax:{
  color:'lightgray',
  fontSize:18
}
});
