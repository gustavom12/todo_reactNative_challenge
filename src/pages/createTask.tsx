import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon, } from "react-native-elements";
import styles from "../utils/styles";
import TasksContext from "../context/tasks..context";
import TaskForm from "../components/taskForm";

function CreateTask({ navigation }: { navigation: any }) {
  const { setTasks } = useContext(TasksContext)
  const [error, setError] = useState<any>(null);
  const initValue = {
    done: false,
    text: "",
    deadline: "2021/08/04",
    startTime: "10:00",
    endTime: "10:30",
    remind: "10",
    repeat: "weekly"
  }
  const [task, setTask] = useState(initValue);
  const submit = async () => {
    setError(null)
    if (task.text.length === 0) {
      setError("Task must have a title")
      return;
    }
    if (Number(task.startTime.split(":")[0]) > 23) {
      setError("Set a valid start time")
      return;
    }
    if (
      Number(task.endTime.split(":")[0]) > 23 ||
      Number(task.startTime.split(":")[0]) >
      Number(task.endTime.split(":")[0])
    ) {
      setError("Set a valid end time")
      return;
    }
    setTasks((Tasks: any) => [...Tasks, task])
    setTask(initValue)
  }
  return (
    <>
      <View style={[styles.flex, {
        height: 80,
        paddingTop: 13, borderBottomWidth: 1.5, borderBottomColor: "#ddd"
      }]}>
        <Icon name="chevron-left" color="#000" size={20} onPress={() => {
          navigation.goBack()
        }} />
        <Text style={[styles.Roboto, { fontWeight: "600", fontSize: 18 }]}> Add task </Text>
      </View>
      <View style={{ paddingHorizontal: 15, paddingTop: 30, minHeight: "100%" }}>
        <TaskForm task={task} setTask={setTask} error={error} submit={submit} />
      </View>
    </>
  )
}
export default CreateTask
