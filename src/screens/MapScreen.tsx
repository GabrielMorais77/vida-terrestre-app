import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MapScreen() {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Mapa de Áreas de Risco</Text>
      <View style={styles.mapBox}>
        <Text style={styles.mapText}>
          Aqui entraria o mapa (Google Maps / OpenStreetMap) com:
          {'\n'}• Marcadores de áreas de desmatamento
          {'\n'}• Avistamentos recentes de fauna/flora
          {'\n'}• Zona de risco destacada
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#020617',
    padding: 20,
  },
  title: {
    color: '#f9fafb',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 14,
  },
  mapBox: {
    flex: 1,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#4b5563',
    backgroundColor: '#020617',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapText: {
    color: '#9ca3af',
    fontSize: 13,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});
