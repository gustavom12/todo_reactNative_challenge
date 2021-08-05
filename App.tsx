import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, } from 'react-native';
import Navbar from './src/components/navbar';
import Home from './src/pages/Home';
import { SafeAreaProvider, } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import CreateTask from './src/pages/createTask';
import { TasksProvider } from './src/context/tasks..context';

export default function App() {
  const Stack = createStackNavigator()
  return (
      <SafeAreaProvider>
        <NavigationContainer>
          <TasksProvider>
            <Stack.Navigator>
              <Stack.Screen
                name="home"
                component={Home}
                options={{
                  header: () => <Navbar />,
                  cardStyle: {
                    backgroundColor: "#fff",
                  }
                }}
              />
              <Stack.Screen
                name="createTask"
                component={CreateTask}
                options={{
                  header: () => null,
                  cardStyle: {
                    backgroundColor: "#fff",
                  }
                }}
              />
            </Stack.Navigator>
            <StatusBar style="auto" />
          </TasksProvider>
        </NavigationContainer>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    //padding top of navbar size as it is in position absolute
    paddingTop: "80px"
  },
});
