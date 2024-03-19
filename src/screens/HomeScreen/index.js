import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import { Filters, Locations } from "../../aseets/data";
import LocationCard from "../../components/LocationCard";
import NearByButton from "../../components/NearByButton";
import FilterCard from "../../components/FilterCard";
import HotelCard from "../../components/HotelCard";
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* topbar */}
      <View style={styles.top_bar}>
        <TouchableOpacity style={styles.top_bar_menu}>
          <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>
        <Image
          style={styles.top_bar_logo}
          source={{
            uri: "https://www.oyorooms.com/officialoyoblog/wp-content/uploads/2019/10/OYO-LOGO-4-e1571170966754.png",
          }}
        />
        <View style={styles.top_bar_right} />
      </View>
      {/* search bar */}
      <View style={styles.search_bar}>
        <View style={styles.search_bar_left}>
          <Feather name="search" size={30} color="black" />
        </View>
        <View style={styles.search_bar_right}>
          <Text style={styles.search_bar_location}>Banglore</Text>
          <Text style={styles.search_bar_dates}>18 Mar - 19 Mar | 1 geast</Text>
        </View>
      </View>
      {/* locations */}
      <View style={styles.locations}>
        <FlatList
          data={Locations}
          horizontal
          renderItem={({ item }) => <LocationCard data={item} />}
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={<NearByButton />}
        />
      </View>
      {/* filters */}
      <View style={styles.filters}>
      <FlatList
        data={Filters}
        renderItem={({ item }) => <FilterCard data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      </View>
      {/* handpicked hotels */}
      <Text style={styles.heading}>Handpicked for you</Text>
      <HotelCard />
    </View>
  );
};

export default HomeScreen;
