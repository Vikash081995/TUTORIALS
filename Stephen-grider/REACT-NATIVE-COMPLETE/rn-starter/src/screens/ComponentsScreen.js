import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>This is a component screenn</Text>;
      <Text style={styles.subHeaderStyles}>Hi There!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  },
  subHeaderStyles: {
    fontSize: 20
  }
});

export default ComponentsScreen;
