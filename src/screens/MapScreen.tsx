import { RouteProp, useRoute } from "@react-navigation/native";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, StyleSheet, Text, View } from "react-native";
import MapView, { Circle, Marker, Region } from "react-native-maps";
import type { TabParamList } from "../../App";
import { speciesList } from "../data/species";

type MapRouteProp = RouteProp<TabParamList, "Mapa">;

export default function MapScreen() {
  const route = useRoute<MapRouteProp>();
  const [region, setRegion] = useState<Region | null>(null);
  const [loading, setLoading] = useState(true);

  // Se veio um speciesId da tela de detalhes, foca nessa espécie
  const focusSpeciesId = route.params?.focusSpeciesId;
  const focusSpecies = speciesList.find((s) => s.id === focusSpeciesId);

  useEffect(() => {
    (async () => {
      try {
        // Se tem espécie com coordenada, prioriza ela
        if (focusSpecies?.latitude && focusSpecies.longitude) {
          setRegion({
            latitude: focusSpecies.latitude,
            longitude: focusSpecies.longitude,
            latitudeDelta: 0.2,
            longitudeDelta: 0.2,
          });
          setLoading(false);
          return;
        }

        // Senão, tenta usar localização do usuário
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          // Fallback: região default (Brasil)
          setRegion({
            latitude: -14.235,
            longitude: -51.9253,
            latitudeDelta: 40,
            longitudeDelta: 40,
          });
          setLoading(false);
          return;
        }

        const loc = await Location.getCurrentPositionAsync({});
        setRegion({
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        });
      } catch (e) {
        console.error(e);
        Alert.alert("Erro", "Não foi possível obter a localização.");
        setRegion({
          latitude: -14.235,
          longitude: -51.9253,
          latitudeDelta: 40,
          longitudeDelta: 40,
        });
      } finally {
        setLoading(false);
      }
    })();
  }, [focusSpecies?.latitude, focusSpecies?.longitude]);

  if (loading || !region) {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
        <Text style={styles.loadingText}>Carregando mapa...</Text>
      </View>
    );
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title} accessibilityRole="header">
        Mapa de Áreas de Risco
      </Text>

      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={setRegion}
        accessibilityLabel="Mapa com avistamentos de espécies e áreas de risco"
      >
        {/* Marcadores de espécies */}
        {speciesList
          .filter((s) => s.latitude && s.longitude)
          .map((s) => (
            <Marker
              key={s.id}
              coordinate={{ latitude: s.latitude!, longitude: s.longitude! }}
              title={s.name}
              description={`${s.location} • ${s.lastSeen}`}
              accessibilityLabel={`Espécie ${s.name} no mapa`}
            >
              <Text style={{ fontSize: 20 }}>{s.icon}</Text>
            </Marker>
          ))}

        {/* Exemplo de zona de risco */}
        {speciesList
          .filter((s) => s.riskArea && s.latitude && s.longitude)
          .map((s) => (
            <Circle
              key={`risk-${s.id}`}
              center={{ latitude: s.latitude!, longitude: s.longitude! }}
              radius={5000} // 5km
              strokeColor="rgba(248,113,113,0.8)"
              fillColor="rgba(248,113,113,0.25)"
            />
          ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#020617",
  },
  center: {
    flex: 1,
    backgroundColor: "#020617",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 8,
    color: "#9ca3af",
  },
  title: {
    color: "#f9fafb",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  map: {
    flex: 1,
  },
});
