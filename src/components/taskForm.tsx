import React, { useContext } from "react";
import { TextInputMask } from "react-native-masked-text";
import { Picker } from '@react-native-picker/picker';
import { View, Text, TouchableOpacity } from "react-native";
import { Input } from "react-native-elements";
import styles from "../utils/styles";

function TaskForm(props: any) {
  const { task, setTask, error, submit } = props
  return (
    <>
      <View>
        <Text style={[styles.bold, { marginLeft: 8, marginBottom: 4 }]}>Title</Text>
        <Input
          inputContainerStyle={{ borderBottomWidth: 0, paddingLeft: 0 }}
          style={[styles.input]}
          value={task.text}
          onChangeText={(value) => { setTask({ ...task, text: value }) }}
        />
      </View>
      <View>
        <Text style={[styles.bold, { marginLeft: 8, marginBottom: 4 }]}>Deadline</Text>
        <TextInputMask
          type={'datetime'}
          options={{
            format: 'YYYY/MM/DD'
          }}
          style={[styles.input, { paddingHorizontal: 14, paddingVertical: 10 }]}
          value={task.deadline}
          onChangeText={text => {
            setTask({ ...task, deadline: text })
          }}
        />
      </View>
      <View style={[styles.flex, { flexWrap: "nowrap", width: "100%" }]}>
        <View style={{ width: "50%" }}>
          <Text style={[styles.bold, { marginLeft: 8, marginBottom: 4 }]}>Start time</Text>
          <TextInputMask
            type={'datetime'}
            options={{
              format: 'HH:mm'
            }}
            style={[styles.input, { paddingHorizontal: 14, paddingVertical: 10 }]}
            value={task.startTime}
            onChangeText={text => {
              setTask({ ...task, startTime: text })
            }}
          />
        </View>
        <View style={{ width: "50%" }}>
          <Text style={[styles.bold, { marginLeft: 8, marginBottom: 4 }]}>End time</Text>
          <TextInputMask
            type={'datetime'}
            options={{
              format: 'HH:mm'
            }}
            style={[styles.input, { paddingHorizontal: 14, paddingVertical: 10 }]}
            value={task.endTime}
            onChangeText={text => {
              setTask({ ...task, endTime: text })
            }}
          />
        </View>
      </View>
      <View>
        <Text style={[styles.bold, { marginLeft: 8, marginBottom: 4 }]}>Remind</Text>
        <Picker
          style={[styles.input, { paddingHorizontal: 14, paddingVertical: 10 }]}
          onValueChange={(itemValue) => { setTask({ ...task, remind: itemValue }) }}
          selectedValue={task.remind}
        >
          <Picker.Item label="10 minutes early" value="10" />
          <Picker.Item label="20 minutes early" value="20" />
          <Picker.Item label="30 minutes early" value="30" />
          <Picker.Item label="40 minutes early" value="40" />
          <Picker.Item label="50 minutes early" value="50" />
          <Picker.Item label="1 hour early" value="60" />
          <Picker.Item label="2 hour early" value="120" />
          <Picker.Item label="3 hour early" value="180" />
          <Picker.Item label="4 hour early" value="240" />
          <Picker.Item label="5 hour early" value="300" />
        </Picker>
      </View>
      <View>
        <Text style={[styles.bold, { marginLeft: 8, marginBottom: 4 }]}>Repeat</Text>
        <Picker
          style={[styles.input, { paddingHorizontal: 14, paddingVertical: 10 }]}
          onValueChange={(itemValue) => { setTask({ ...task, repeat: itemValue }) }}
          selectedValue={task.repeat}
        >
          <Picker.Item label="daily" value="daily" />
          <Picker.Item label="weekly" value="weekly" />
          <Picker.Item label="monthly" value="monthly" />
        </Picker>
      </View>
      <View style={[styles.flexCenter, { marginTop: 30 }]}>
        <Text style={{ color: "#ff0000" }}>{error}</Text>
      </View>
      <TouchableOpacity
        onPress={submit}
        style={[styles.flexCenter, {
          backgroundColor: "#25c06e",
          paddingVertical: 12,
          borderRadius: 11,
          marginTop: "auto",
          marginBottom: 30
        }]}>
        <Text style={[styles.Roboto, { color: "#fff", }]}>
          Create a task
        </Text>
      </TouchableOpacity>
    </>
  )
}
export default TaskForm
