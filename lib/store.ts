import AsyncStorage from "@react-native-async-storage/async-storage";

export async function writeData(key: string, value: any) {
  try {
    console.log(`Writing Data - key=${key} value=${value}`);
    return await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error(e);
  }
}

export async function readData(key: string) {
  try {
    return AsyncStorage.getItem(key);
  } catch (e) {
    console.error(e);
  }
}
