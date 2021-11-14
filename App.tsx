import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text, } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import {
  NavigationContainer,
} from "@react-navigation/native";
import {
  Provider as PaperProvider,
} from "react-native-paper";
import theme from "./theme";
import HomeScreen from "./pages/HomeScreen";
import SettingsScreen from "./pages/SettingsScreen";
import { Appbar } from 'react-native-paper';

const Stack = createStackNavigator();

function CustomNavigationBar({ navigation, back, route }) {

  // no NavigationBar on the HomeScreen
  if (route.name === 'Home') {
    return null
  }

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={route.name} />
    </Appbar.Header>
  );
}


export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator initialRouteName="Home"
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

