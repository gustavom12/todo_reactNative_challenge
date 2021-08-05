import React, { useContext } from "react";
import { View, Text } from "react-native";
import TasksContext from "../context/tasks..context";
import styles from "../utils/styles";
import Task from "./task";

function CompletedTasks() {
  const { tasks } = useContext(TasksContext)
  return (
    <View style={{ marginTop: 15 }}>
      <Text style={[styles.title, { marginBottom: 30 }]}> Completed tasks </Text>
      {tasks.filter(a => a.done).reverse().length === 0 &&
        <Text> You don't have completed tasks </Text>
      }
      {
        tasks.filter(a => a.done).map((task, i) =>
          <Task key={i} task={task} />
        )
      }
    </View>
  )
}
export default CompletedTasks
