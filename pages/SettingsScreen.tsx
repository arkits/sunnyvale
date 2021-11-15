import React, { useEffect } from "react";
import { View } from "react-native";
import { ScrollView, StyleSheet } from "react-native";
import { Button, List, TextInput } from "react-native-paper";
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
        <List.Subheader>Weather Settings</List.Subheader>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            mode="outlined"
            label="Location"
            placeholder="Sunnyvale"
            style={{ width: "80%", paddingRight: 20 }}
          />
          <Button
            icon="camera"
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            Save
          </Button>
        </View>
      </List.Section>
      <List.Section>
        <List.Subheader>Developer Stuff</List.Subheader>
        <List.Item
          title="IS_DARK_MODE"
          description={JSON.stringify(isDarkModeEnabled)}
          left={() => <List.Icon icon="weather-night" />}
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
    paddingRight: 150,
    paddingTop: 20,
  },
});

export default SettingsScreen;
