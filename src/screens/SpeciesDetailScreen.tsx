import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../../App';
import StatusBadge from '../components/StatusBadge';
import { speciesList } from '../data/species';

type Props = NativeStackScreenProps<RootStackParamList, 'SpeciesDetail'>;

export default function SpeciesDetailScreen({ route, navigation }: Props) {
  const { id } = route.params;
  const species = speciesList.find((s) => s.id === id);

  if (!species) {
    return (
      <View style={styles.center}>
        <Text style={{ color: '#fff' }}>Espécie não encontrada.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.root} contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.icon}>{species.icon}</Text>
      <Text style={styles.name}>{species.name}</Text>
      <Text style={styles.scientific}>{species.scientificName}</Text>
      <StatusBadge status={species.status} />

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Localização</Text>
        <Text style={styles.cardText}>{species.location}</Text>
        <Text style={styles.cardSub}>Último registro: {species.lastSeen}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Descrição</Text>
        <Text style={styles.cardText}>
          Aqui você pode descrever habitat, comportamento, importância ecológica
          e ameaças principais dessa espécie.
        </Text>
      </View>

      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate('Tabs')} // você pode mandar para tab "Mapa" depois
      >
        <Text style={styles.btnText}>Ver em mapa</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#020617',
  },
  center: {
    flex: 1,
    backgroundColor: '#020617',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 60,
    textAlign: 'center',
    marginBottom: 10,
  },
  name: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
  },
  scientific: {
    color: 'rgba(148,163,184,0.9)',
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 12,
  },
  card: {
    backgroundColor: 'rgba(15,23,42,0.9)',
    borderRadius: 18,
    padding: 14,
    marginTop: 14,
  },
  cardTitle: {
    color: '#e5e7eb',
    fontWeight: '600',
    marginBottom: 4,
  },
  cardText: {
    color: '#9ca3af',
    fontSize: 13,
  },
  cardSub: {
    color: '#6b7280',
    fontSize: 11,
    marginTop: 4,
  },
  btn: {
    marginTop: 20,
    backgroundColor: '#22c55e',
    borderRadius: 999,
    paddingVertical: 12,
    alignItems: 'center',
  },
  btnText: {
    color: '#022c22',
    fontWeight: '700',
  },
});
