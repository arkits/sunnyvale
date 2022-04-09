import React from "react";
import { Text } from "react-native";

export default function Heading1({ text }: { text: string }) {
  return (
    <Text style={{ color: "#fff", fontSize: 20, fontFamily: "Inter_700Bold" }}>
      {text}
    </Text>
  );
}
