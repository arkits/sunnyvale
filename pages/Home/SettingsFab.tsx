import React from "react";
import { StyleSheet, View } from "react-native";
import { FAB } from "react-native-paper";

export default function SettingsFab({ navigation }: any) {
  return (
    <View style={styles.settingsFab}>
      <FAB icon="cog" onPress={() => navigation.navigate("Settings")} />
    </View>
  );
}

const styles = StyleSheet.create({
  settingsFab: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
