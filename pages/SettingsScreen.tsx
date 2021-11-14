import React, { useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { List } from "react-native-paper";
import { readData } from "../lib/store";

function SettingsScreen({ navigation }) {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = React.useState(false);

  useEffect(() => {
    readData("IS_DARK_MODE")
      .then((value) => {
        setIsDarkModeEnabled(value);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <ScrollView style={styles.container}>
      <List.Section>
        <List.Subheader>Developer Stuff</List.Subheader>
        <List.Item
          title="Dark Mode"
          description={JSON.stringify(isDarkModeEnabled)}
          left={() => <List.Icon icon="folder" />}
        />
      </List.Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    flexDirection: "column",
    paddingLeft: 150,
    paddingRight: 20,
    paddingTop: 20,
  },
});

export default SettingsScreen;
