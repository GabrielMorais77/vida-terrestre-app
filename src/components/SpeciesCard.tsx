import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Species } from '../data/species';
import StatusBadge from './StatusBadge';

type Props = {
  item: Species;
  onPress: () => void;
};

export default function SpeciesCard({ item, onPress }: Props) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.iconBox}>
        <Text style={styles.icon}>{item.icon}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.scientific}>{item.scientificName}</Text>
        <StatusBadge status={item.status} />
        <Text style={styles.meta}>{item.location} • {item.lastSeen}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(15,23,42,0.8)',
    borderRadius: 20,
    padding: 14,
    flexDirection: 'row',
    gap: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(148,163,184,0.3)',
  },
  iconBox: {
    width: 70,
    height: 70,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'linear-gradient(135deg, #4ade80, #22c55e)', // só estético; RN não tem gradient nativo
  },
  icon: {
    fontSize: 38,
  },
  info: {
    flex: 1,
  },
  name: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 2,
  },
  scientific: {
    color: 'rgba(148,163,184,0.9)',
    fontStyle: 'italic',
    fontSize: 12,
    marginBottom: 6,
  },
  meta: {
    marginTop: 6,
    color: 'rgba(148,163,184,0.9)',
    fontSize: 11,
  },
});
