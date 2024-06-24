import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState } from "react";

const ColorScreen = () => {
  const [colors, setColor] = useState([]);
  return (
    <View>
      <Button
        title="Add a color"
        onPress={() => {
          setColor([...colors, randomRgb()]);
        }}
      />

      <FlatList
        data={colors}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green},${blue})`;
};

export default ColorScreen;

const styles = StyleSheet.create({});
