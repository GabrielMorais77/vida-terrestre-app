import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ScannerScreen() {
  const [result, setResult] = useState<string | null>(null);

  const fakeScan = () => {
    setResult('Provavelmente: Pau-Brasil (Paubrasilia echinata) • Status: Em Perigo');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Scanner de Espécies</Text>

      <View style={styles.cameraArea}>
        <Text style={styles.cameraText}>
          Área de pré-visualização da câmera.
          {'\n'}(No app real: usar expo-camera.)
        </Text>
      </View>

      <Pressable style={styles.btn} onPress={fakeScan}>
        <Text style={styles.btnText}>Simular reconhecimento 📸</Text>
      </Pressable>

      {result && (
        <View style={styles.resultBox}>
          <Text style={styles.resultTitle}>Resultado do reconhecimento</Text>
          <Text style={styles.resultText}>{result}</Text>
        </View>
      )}
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
  cameraArea: {
    flex: 1,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#4b5563',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  cameraText: {
    color: '#9ca3af',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  btn: {
    backgroundColor: '#22c55e',
    borderRadius: 999,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  btnText: {
    color: '#022c22',
    fontWeight: '700',
  },
  resultBox: {
    backgroundColor: 'rgba(15,23,42,0.9)',
    borderRadius: 16,
    padding: 12,
  },
  resultTitle: {
    color: '#e5e7eb',
    fontWeight: '600',
    marginBottom: 4,
  },
  resultText: {
    color: '#9ca3af',
    fontSize: 13,
  },
});
