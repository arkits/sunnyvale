import AsyncStorage from "@react-native-async-storage/async-storage";

export async function writeData(key: string, value: any) {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log(`Wrote Data - key=${key} value=${jsonValue}`);
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
