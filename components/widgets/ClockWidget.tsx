import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { prettyHour, prettyMin } from "../../lib/dates";

export default function ClockWidget({ date }: { date: Date }) {
  const [timeTextHour, setTimeTextHour] = React.useState("");
  const [timeTextMin, setTimeTextMin] = React.useState("");

  useEffect(() => {
    setTimeout(() => {
      setTimeTextHour(prettyHour(date));
      setTimeTextMin(prettyMin(date));
    }, 1000);
  });

  return (
    <View style={styles.container}>
      <Text style={styles.clockText}>{timeTextHour}</Text>
      <Text style={styles.clockText}>{timeTextMin}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  clockText: {
    color: "#fff",
    fontFamily: "Inter_700Bold",
    fontSize: 200,
    lineHeight: 200,
  },
});
