import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
    FlatList,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import SpeciesCard from '../components/SpeciesCard';
import { speciesList } from '../data/species';

type RootStackParamList = {
  Tabs: undefined;
  SpeciesDetail: { id: string };
};

type Props = NativeStackScreenProps<RootStackParamList, 'Tabs'>;

export default function HomeScreen({ navigation }: Props) {
  const [query, setQuery] = useState('');

  const filtered = speciesList.filter((s) =>
    s.name.toLowerCase().includes(query.toLowerCase()) ||
    s.scientificName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.phoneScreen}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>🌿 Vida Terrestre</Text>
          <Text style={styles.headerSubtitle}>Protegendo a biodiversidade</Text>
        </View>

        {/* Busca + botão scanner */}
        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar espécies..."
            placeholderTextColor="rgba(255,255,255,0.6)"
            value={query}
            onChangeText={setQuery}
          />
          <Pressable
            style={styles.scanBtn}
            onPress={() => navigation.navigate('Tabs')}
          >
            <Text>📷</Text>
          </Pressable>
        </View>

        {/* Ações rápidas */}
        <View style={styles.quickActions}>
          <View style={styles.actionCard}>
            <Text style={styles.actionIcon}>🦜</Text>
            <Text style={styles.actionTitle}>Fauna</Text>
            <Text style={styles.actionSubtitle}>523 espécies</Text>
          </View>
          <View style={styles.actionCard}>
            <Text style={styles.actionIcon}>🌺</Text>
            <Text style={styles.actionTitle}>Flora</Text>
            <Text style={styles.actionSubtitle}>1.247 espécies</Text>
          </View>
        </View>

        {/* Alerta de risco */}
        <View style={styles.alertBanner}>
          <Text style={styles.alertIcon}>⚠️</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.alertTitle}>Área de Risco Próxima</Text>
            <Text style={styles.alertSubtitle}>Desmatamento detectado a 2.3 km</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Descobertas Recentes</Text>

        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 40 }}
          renderItem={({ item }) => (
            <SpeciesCard
              item={item}
              onPress={() =>
                navigation.getParent()?.navigate('SpeciesDetail', { id: item.id })
              }
            />
          )}
        />
      </View>

      {/* Botão flutuante de scanner */}
      <Pressable
        style={styles.floatingScan}
        onPress={() => navigation.navigate('Tabs')}
      >
        <Text style={{ fontSize: 26, color: '#fff' }}>📸</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // linear-gradient removed: use expo-linear-gradient or a dedicated component for gradients
    backgroundColor: '#020617',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneScreen: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#020617',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 16,
    backgroundColor: '#052e16',
  },
  headerTitle: {
    color: '#ecfdf5',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
  },
  headerSubtitle: {
    color: 'rgba(209,250,229,0.8)',
    fontSize: 14,
  },
  searchBar: {
    marginHorizontal: 20,
    marginTop: 16,
    marginBottom: 10,
    backgroundColor: 'rgba(15,23,42,0.9)',
    borderRadius: 999,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  searchIcon: {
    fontSize: 18,
    color: 'rgba(148,163,184,0.8)',
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    color: '#fff',
  },
  scanBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#22c55e',
    marginLeft: 8,
  },
  quickActions: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  actionCard: {
    flex: 1,
    backgroundColor: 'rgba(22,163,74,0.2)',
    borderRadius: 18,
    padding: 12,
  },
  actionIcon: {
    fontSize: 28,
    marginBottom: 6,
  },
  actionTitle: {
    color: '#f9fafb',
    fontWeight: '600',
    fontSize: 15,
  },
  actionSubtitle: {
    color: 'rgba(209,213,219,0.9)',
    fontSize: 11,
  },
  alertBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 14,
    borderRadius: 18,
    padding: 12,
    backgroundColor: '#dc2626',
  },
  alertIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  alertTitle: {
    color: '#fef2f2',
    fontWeight: '700',
    marginBottom: 2,
  },
  alertSubtitle: {
    color: '#fee2e2',
    fontSize: 12,
  },
  sectionTitle: {
    color: '#f9fafb',
    fontSize: 17,
    fontWeight: '600',
    marginHorizontal: 20,
    marginBottom: 8,
  },
  floatingScan: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#22c55e',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
});
