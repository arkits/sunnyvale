import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { prettyDate, prettyTime } from "../lib/dates";

export default function Clock() {
  const [timeTextHeader, setTimeTextHeader] = React.useState("");
  const [timeTextFooter, setTimeTextFooter] = React.useState("");

  useEffect(() => {
    setTimeout(() => {
      const date = new Date();

      setTimeTextHeader(prettyTime(date));
      setTimeTextFooter(prettyDate(date));
    }, 1000);
  });

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#fff",
          fontSize: 90,
          fontFamily: "Inter_700Bold",
        }}
      >
        {timeTextHeader}
      </Text>
      <Text
        style={{
          color: "#fff",
          fontSize: 40,
          fontFamily: "Inter_500Medium",
        }}
      >
        {timeTextFooter}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
