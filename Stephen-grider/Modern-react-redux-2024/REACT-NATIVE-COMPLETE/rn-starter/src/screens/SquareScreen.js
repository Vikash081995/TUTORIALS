import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ColorCounter from "./ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => setRed(red + 1)}
        onDecrese={() => setRed(red - 1)}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => setBlue(blue + 1)}
        onDecrese={() => setBlue(blue - 1)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setGreen(green + 1)}
        onDecrese={() => setGreen(green - 1)}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`
        }}
      />
    </View>
  );
};

export default SquareScreen;

const styles = StyleSheet.create({});
