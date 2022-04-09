import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { OPENWEATHER_API_KEY } from "@env";

export default function WeatherWidget() {
  const [weather, setWeather] = React.useState({});

  const updateWeather = () => {
    console.log(
      "Updating Weather... OPENWEATHER_API_KEY: ",
      OPENWEATHER_API_KEY
    );
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=sunnyvale&appid=${OPENWEATHER_API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Finished WeatherFeed!");
        setWeather(data);
      });
  };

  useEffect(() => {
    updateWeather();
  }, []);

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#fff",
          fontSize: 25,
          fontFamily: "Inter_700Bold",
        }}
      >
        Weather
      </Text>

      <View style={{ justifyContent: "center", flexDirection: "row" }}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri: `https://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@2x.png`,
          }}
        />

        <Text
          style={{
            color: "#fff",
            fontSize: 70,
            fontFamily: "Inter_500Medium",
          }}
        >
          {parseInt(weather?.main?.temp)} °C
        </Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            color: "#fff",
            fontSize: 30,
            fontFamily: "Inter_400Regular",
          }}
        >
          {weather?.weather?.[0]?.main} in Sunnyvale
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 20,
    justifyContent: "center",
  },
});
