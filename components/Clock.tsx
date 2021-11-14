import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { format, formatDistance, formatRelative, subDays } from "date-fns";

export default function Clock() {
  const [timeTextHeader, setTimeTextHeader] = React.useState("");
  const [timeTextFooter, setTimeTextFooter] = React.useState("");

  useEffect(() => {
    setTimeout(() => {
      const date = new Date();

      setTimeTextHeader(format(date, "hh:mm:ss"));
      setTimeTextFooter(format(date, "EEE, LLL do yyyy"));
    }, 1000);
  });

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#fff",
          fontSize: 90,
          fontWeight: "bold",
        }}
      >
        {timeTextHeader}
      </Text>
      <Text
        style={{
          color: "#fff",
          fontSize: 40,
          fontWeight: "bold",
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
