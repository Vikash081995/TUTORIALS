import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

export default ResultsDetail;

const styles = StyleSheet.create({
  container: {
    marginLeft: 10
  },
  image: {
    width: 250,
    borderRadius: 4
  },
  name: {
    fontWeight: "bold",
    fontSize: 16
  }
});
