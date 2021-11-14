import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function NewsFeed() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#fff",
          fontSize: 30,
          fontFamily: "Inter_700Bold",
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
          fontFamily: "Inter_500Medium",
        }}
      >
        Twitter shouldn’t be hiding basic app improvements behind its Blue
        paywall
      </Text>
      <Text
        style={{
          color: "#fff",
          fontSize: 20,
          fontFamily: "Inter_400Regular",
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
