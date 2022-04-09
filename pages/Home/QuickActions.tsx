import React from "react";
import { StyleSheet, View } from "react-native";
import { FAB } from "react-native-paper";
import { readData, writeData } from "../../lib/store";

export default function QuickActions({
  updateWallpaper,
  setImageSource,
}: {
  updateWallpaper: any;
  setImageSource: any;
}) {
  return (
    <View style={styles.container}>
      <FAB
        style={{
          marginRight: 16,
        }}
        icon="refresh"
        onPress={() => {
          updateWallpaper();
        }}
      />

      <FAB
        icon="weather-night"
        label="Night Mode"
        onPress={() => {
          // Handle toggling Dark Mode

          readData("IS_DARK_MODE").then((darkMode) => {
            if (darkMode === "true") {
              // Disable Dark Mode
              writeData("IS_DARK_MODE", "false");

              readData("CURRENT_WALLPAPER_URI").then((uri) => {
                setImageSource({ uri: uri });
              });
            } else {
              // Enable Dark Mode
              writeData("IS_DARK_MODE", "true");

              // Set dark image as background
              setImageSource({ uri: "https://i.imgur.com/Olu1p7w.png" });

              // TODO: reduce display brightness
            }
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    margin: 16,
    left: 0,
    bottom: 0,
  },
});
