import { StyleSheet } from "react-native";

export default StyleSheet.create({
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  flexCenter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  Roboto: {
    fontFamily: "'Roboto', sans-serif",
  },
  taskText: {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "600",
    color: "#363636",
    fontSize: 15
  },
  title: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: 20,
    fontWeight: "600",
    color: "#494949",
    marginLeft: -5
  },
  doneTaskBTN: {
    backgroundColor: "#f34747",
    width: 20,
    height: 20,
    marginLeft: 5,
    marginRight: 10,
    borderRadius: 6
  },
  pendingTaskBTN: {
    width: 20,
    height: 20,
    marginLeft: 5,
    marginRight: 10,
    borderRadius: 6,
    borderWidth: 2.6,
    borderColor: `#${Math.floor(Math.random() * 16777215).toString(16).length === 6 ?
        Math.floor(Math.random() * 16777215).toString(16) :
        "000000"
      }`
  },
  input: {
    backgroundColor: "#f9f8f9",
    color: "#d3d3d3",
    width: "100%",
    borderRadius: 6,
    fontSize: 14,
    fontFamily: "Roboto, sans-serif",
    paddingHorizontal: 7,
    borderWidth: 0
  },
  bold: {
    fontSize: 14,
    fontFamily: "Roboto, sans-serif",
    fontWeight: "600"
  }
})
