import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { prettyDate } from "../../lib/dates";
import Heading1 from "../text/Heading1";

export default function DateWidget({ date }: { date: Date }) {
  const [dateText, setDateText] = React.useState("");

  useEffect(() => {
    setTimeout(() => {
      setDateText(prettyDate(date));
    }, 1000);
  });

  return (
    <View style={styles.container}>
      <Heading1 text={dateText}></Heading1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
  },
});
