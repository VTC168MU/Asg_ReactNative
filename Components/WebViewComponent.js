import React from "react";
import { View } from "react-native";
import WebView from "react-native-webview";

export default function WebViewComponent() {
  return (
    <WebView
      source={{ uri: "https://www.google.com" }}
    ></WebView>
  );
}
