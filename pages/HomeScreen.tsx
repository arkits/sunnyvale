import React, { useEffect } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { Colors, FAB, ProgressBar } from "react-native-paper";
import { readData, writeData } from "../lib/store";
import { useKeepAwake } from "expo-keep-awake";
import Clock from "../components/Clock";
import NewsFeed from "../components/NewsFeed";
import WeatherFeed from "../components/WeatherFeed";

const DEFAULT_UNSPLASH_URI =
  "https://source.unsplash.com/1280x800/?nature,space";

function HomeScreen({ navigation }) {
  const [imageSource, setImageSource] = React.useState({
    uri: null,
  });

  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [secondsProgress, setSecondsProgress] = React.useState(0);

  const updateWallpaper = () => {
    // generate timestamped URI
    let uri = `${DEFAULT_UNSPLASH_URI}&t=${Date.now()}`;

    // update the imageSource state
    setImageSource({
      uri: uri,
    });

    // persist current imageSource
    writeData("CURRENT_WALLPAPER_URI", uri);
  };

  useEffect(() => {
    if (imageSource.uri === null) {
      updateWallpaper();
    }

    setTimeout(() => {
      const date = new Date();
      const seconds = date.getSeconds();
      setCurrentDate(date);
      setSecondsProgress(seconds / 60);
    }, 1000);
  }, [currentDate]);

  useKeepAwake();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={imageSource}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.overlay} />

        <ProgressBar progress={secondsProgress} color={Colors.white} />

        <Clock date={currentDate} />

        <View style={styles.widgetsContainer}>
          <NewsFeed />
          <WeatherFeed />
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
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 44,
    marginLeft: 44,
    marginRight: 44,
  },
  image: {
    flex: 1,
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default HomeScreen;
