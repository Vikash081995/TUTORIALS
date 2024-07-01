import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>BoxScreen</Text>
      <Text style={styles.textStyle}>Child#1</Text>
      <Text style={styles.textStyle}>Child#2</Text>
      <Text style={styles.textStyle}>Child#3</Text>
      <Text style={styles.textStyle}>Child#4</Text>
    </View>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "row",
    height: 200,
    alignItems: "center"
  },
  textStyle: {
    borderWidth: 1,
    borderColor: "red",
    marginVertical: 20,
    marginHorizontal: 20
  }
});
