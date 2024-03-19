import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "90%",
    alignSelf: "center",
  },
  top_bar: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  top_bar_menu: {},
  top_bar_logo: {
    width: 90,
    height: 30,
  },
  top_bar_right: {
    backgroundColor: "white",
    padding: 10,
  },
  //   --------------search bar
  search_bar: {
    width: "100%",
    height: 60,
    backgroundColor: "#f5f5f5",
    marginVertical: 15,
    flexDirection: "row",
    borderRadius: 35,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  search_bar_left: {},
  search_bar_right: {
    marginLeft: 20,
    gap: 5,
  },
  search_bar_location: {
    fontWeight: "bold",
    fontSize: 16,
  },
  search_bar_dates: {
    color: "gray",
  },
  locations:{
    marginVertical:10
  },
filters:{
marginTop:20
},
heading:{
fontSize:25,
fontWeight:'bold',
marginVertical:15
},
});
export default styles;
