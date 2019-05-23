import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5D5652"
  },
  square: {
    borderWidth: 1,
    width: 100,
    height: 100,

    justifyContent: "center",
    alignItems: "center",
    borderColor: "rgba(255,255,255,0.2)"
  },
  row: {
    flexDirection: "row"
  },
  borderLeft: {
    borderLeftWidth: 0
  },
  borderTop: {
    borderTopWidth: 0
  },
  borderRight: {
    borderRightWidth: 0
  },
  borderBottom: {
    borderBottomWidth: 0
  },
  icon: {
    width: 65,
    height: 65
  },
  winnerText: {
    marginTop: 25,
    borderColor: "#29AB87",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  reset: {
    fontSize: 16,
    color: "#FFFFFF"
  }
});

export default style;
