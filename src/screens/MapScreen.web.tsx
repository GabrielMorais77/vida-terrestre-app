import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function MapScreen() {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Mapa indisponível na versão web</Text>
      <Text style={styles.text}>
        Abra o app no Expo Go (Android/iOS) para visualizar o mapa com áreas de
        risco e avistamentos.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#020617",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    color: "#f9fafb",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
    textAlign: "center",
  },
  text: {
    color: "#9ca3af",
    fontSize: 14,
    textAlign: "center",
  },
});
