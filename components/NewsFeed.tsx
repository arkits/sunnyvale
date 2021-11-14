import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function NewsFeed() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#fff",
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        News Feed
      </Text>
      <Text
        style={{
          color: "#fff",
          fontSize: 40,
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        Twitter shouldn’t be hiding basic app improvements behind its Blue
        paywall
      </Text>
      <Text
        style={{
          color: "#fff",
          fontSize: 20,
          fontWeight: "bold",
          fontStyle: "italic",
        }}
      >
        Ars Technica - March 24, 2020
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    justifyContent: "center",
  },
});
