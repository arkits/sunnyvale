import React, { useEffect } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { Colors, ProgressBar } from "react-native-paper";
import { writeData } from "../../lib/store";
import { useKeepAwake } from "expo-keep-awake";

import SettingsFab from "./SettingsFab";
import QuickActions from "./QuickActions";

import NewsWidget from "../../components/widgets/NewsWidget";
import DateWidget from "../../components/widgets/DateWidget";
import ClockWidget from "../../components/widgets/ClockWidget";

import Heading1 from "../../components/text/Heading1";
import WeatherWidget from "../../components/widgets/WeatherWidget";

const DEFAULT_UNSPLASH_URI =
  "https://source.unsplash.com/1280x800/?nature,space";

export default function Home({ navigation }: any) {
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
        style={styles.bgImage}
      >
        <View style={styles.bgImageOverlay} />

        <ProgressBar progress={secondsProgress} color={Colors.white} />

        <View style={styles.widgetsContainer}>
          <View style={styles.clockWidget}>
            <DateWidget date={currentDate} />
            <ClockWidget date={currentDate} />
          </View>

          <View style={styles.nowWidget}>
            <NewsWidget />
            <WeatherWidget />
          </View>
        </View>

        <QuickActions
          updateWallpaper={updateWallpaper}
          setImageSource={setImageSource}
        />
        <SettingsFab navigation={navigation} />
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
  bgImage: {
    flex: 1,
  },
  bgImageOverlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  widgetsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    marginLeft: 150,
  },
  clockWidget: {
    alignContent: "center",
    marginRight: 50,
  },
  nowWidget: {
    marginLeft: 80,
    alignContent: "center",
    maxWidth: "50%",
  },
  settingsFab: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
