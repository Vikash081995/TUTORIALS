import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "./ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="aredf" imageSource={""} score={9} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
