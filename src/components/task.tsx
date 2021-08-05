import React, { useContext } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Icon } from 'react-native-elements'
import TasksContext from "../context/tasks..context";
import { TaskInterface } from "../interfaces/Task";
import styles from "../utils/styles";

function Task({ task }: { task: TaskInterface }) {
  const {setTasks} = useContext(TasksContext)

  return (
    <View style={[styles.flex,{marginBottom: 15}]}>
      {
        task.done ?
          <TouchableOpacity style={[styles.doneTaskBTN, styles.flexCenter]}>
            <Icon name="check" size={13} color="#fff" />
          </TouchableOpacity>
          :
          <TouchableOpacity
            style={[styles.pendingTaskBTN, styles.flexCenter]}
            onPress={()=>{
              setTasks((val:any)=>{
                val[val.indexOf(task)].done = true
                return [...val]
              })
            }}
          >
            <Icon name="check" size={13} color="#fff" />
          </TouchableOpacity>
      }
      <Text style={styles.taskText}>{task.text}</Text>
    </View>
  )
}
export default Task
