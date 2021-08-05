import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { createContext, useState } from 'react';
import { TaskInterface } from "../interfaces/Task";

type contextInit = {
  tasks: TaskInterface[],
  setTasks: (n: any) => void
}

const TasksContext = createContext<contextInit>({
  tasks: [],
  setTasks: () => { }
});

const TasksProvider = ({ children }: { children: any }) => {
  const [tasks, setTasks] = useState([])
  const [firstRender, setFirstRender] = useState(true)
  useEffect(() => {
    //save/get changes on async storage
    if (firstRender) {
      const Async = async () => {
        const value = await AsyncStorage.getItem("tasks")
        if (value) setTasks(JSON.parse(value))
      }
      Async()
      setFirstRender(false)
    } else {
      const Async = async () => await AsyncStorage.setItem("tasks", JSON.stringify(tasks))
      Async()
    }
  }, [tasks, firstRender])

  const data = { tasks, setTasks };

  return <TasksContext.Provider value={data}>{children}</TasksContext.Provider>;
};

export { TasksProvider };
export default TasksContext
