import React, { useContext } from "react";
import { View, Text } from "react-native";
import TasksContext from "../context/tasks..context";
import styles from "../utils/styles";
import Task from "./task";

function PendingTasks() {
  const { tasks } = useContext(TasksContext)
  return (
    <View style={{marginTop: 45}}>
      <Text style={[styles.title, { marginBottom: 35 }]}> Pending tasks </Text>
      {tasks.filter(a => !a.done).length === 0 &&
        <Text> You don't have pending tasks </Text>
      }
      {
        tasks.filter(a => !a.done).reverse().map((task, i) =>
          <Task key={i} task={task} />
        )
      }
    </View>
  )
}
export default PendingTasks
