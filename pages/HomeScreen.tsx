import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { FAB } from "react-native-paper";
import Clock from "../components/Clock";
import NewsFeed from "../components/NewsFeed";
import { writeData } from "../lib/store";

const DEFAULT_UNSPLASH_URI =
  "https://source.unsplash.com/1280x800/?nature,space";

function HomeScreen({ navigation }) {
  const [imageSource, setImageSource] = React.useState({
    uri: DEFAULT_UNSPLASH_URI,
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={imageSource}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.overlay} />
        <View style={styles.widgetsContainer}>
          <Clock />
          <NewsFeed />
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            position: "absolute",
            margin: 16,
            left: 0,
            bottom: 0,
          }}
        >
          <FAB
            style={{
              marginRight: 16,
            }}
            icon="refresh"
            onPress={() => {
              // update the image source
              setImageSource({
                uri: `${DEFAULT_UNSPLASH_URI}&t=${Date.now()}`,
              });
            }}
          />
          <FAB
            style={{
              marginRight: 16,
            }}
            icon="weather-night"
            onPress={() => {
              // enable night mode

              // set background image to black
              setImageSource({ uri: "https://i.imgur.com/Olu1p7w.png" });

              // TODO: reduce display brightness
              writeData("IS_DARK_MODE", true);
            }}
          />
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            position: "absolute",
            margin: 16,
            right: 0,
            bottom: 0,
          }}
        >
          <FAB icon="cog" onPress={() => navigation.navigate("Settings")} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    flexDirection: "column",
  },
  widgetsContainer: {
    flex: 1,
    flexDirection: "row",
  },
  image: {
    flex: 1,
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default HomeScreen;
