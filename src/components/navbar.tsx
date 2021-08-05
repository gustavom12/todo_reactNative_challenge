import React, { } from "react";
import { View, Text, Image } from "react-native";
import styles from "../utils/styles";
import search from "../../assets/images/search.png"
import menu from "../../assets/images/menu.png"
import bell from "../../assets/images/bell.png"
function Navbar() {
  return (
    <View style={[ styles.flex,{
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        position: "absolute",
        top: 0,
        left: 0,
        borderBottomColor: "#ddd",
        borderBottomWidth: 1.5,
        height: 80,
        paddingTop: 13
      }]}>
      <Text style={{ fontSize: 22,color: "#3a3a3a", fontWeight: "600" ,fontFamily: "'Roboto', sans-serif" }}>To-do App</Text>
      <View style={styles.flex}>
        <Image source={search} style={{ height: 18, width: 18, marginRight: 20 }} />
        <Image source={bell} style={{ height: 18, width: 18, marginRight: 20 }} />
        <Image source={menu} style={{ height: 18, width: 18 }} />
      </View>
    </View>
  )
}
export default Navbar
