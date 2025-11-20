import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ConservationStatus } from '../data/species';

type Props = { status: ConservationStatus };

export default function StatusBadge({ status }: Props) {
  const map = {
    safe: { label: 'Segura', bg: 'rgba(74,222,128,0.2)', color: '#4ade80' },
    vulnerable: { label: 'Vulnerável', bg: 'rgba(251,191,36,0.2)', color: '#fbbf24' },
    endangered: { label: 'Em Perigo', bg: 'rgba(239,68,68,0.2)', color: '#ef4444' },
  }[status];

  return (
    <View style={[styles.badge, { backgroundColor: map.bg }]}>
      <Text style={[styles.text, { color: map.color }]}>{map.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 11,
    fontWeight: '600',
  },
});
