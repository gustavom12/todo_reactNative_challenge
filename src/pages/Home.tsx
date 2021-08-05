import React, { } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import CompletedTasks from "../components/completedTasks";
import PendingTasks from "../components/pendingTasks";
import styles from "../utils/styles";
function Home({ navigation }: { navigation: any }) {
  return (
      <View style={{ paddingTop: 80,paddingBottom: 20, paddingHorizontal: 20, minHeight: "100%" }}>
        <CompletedTasks />
        <PendingTasks />
        <TouchableOpacity
          onPress={()=>{
            navigation.navigate("createTask")
          }}
          style={[styles.flexCenter, {
            backgroundColor: "#25c06e",
            paddingVertical: 10,
            borderRadius: 11,
            marginTop: "auto"
          }]}>
          <Text style={[styles.Roboto, { color: "#fff", }]}>
            Add a task
          </Text>
        </TouchableOpacity>
      </View>
  )
}
export default Home
