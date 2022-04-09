import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import theme from "./theme";
import HomeScreen from "./pages/Home";
import SettingsScreen from "./pages/SettingsScreen";
import { Appbar } from "react-native-paper";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
  Inter_500Medium,
  Inter_100Thin,
} from "@expo-google-fonts/inter";

import * as ScreenOrientation from "expo-screen-orientation";

const Stack = createStackNavigator();

function CustomNavigationBar({
  navigation,
  back,
  route,
}: {
  navigation: any;
  back: any;
  route: any;
}) {
  // no NavigationBar on the HomeScreen
  if (route.name === "Home") {
    return null;
  }

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={route.name} />
    </Appbar.Header>
  );
}

export default function App() {
  const [orientationIsLandscape, setOrientation] = useState(true);
  console.log("orientationIsLandscape", orientationIsLandscape);

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_500Medium,
    Inter_100Thin,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              header: (props) => <CustomNavigationBar {...props} />,
            }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    );
  }
}
