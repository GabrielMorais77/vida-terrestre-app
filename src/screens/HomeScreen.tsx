import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import type { TabParamList } from "../../App";
import SpeciesCard from "../components/SpeciesCard";
import { speciesList } from "../data/species";
import { t } from "../i18n";
import { theme } from "../theme"; // 👈 importa o tema

type Props = BottomTabScreenProps<TabParamList, "Inicio">;

export default function HomeScreen({ navigation }: Props) {
  const [query, setQuery] = useState("");

  const filtered = speciesList.filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.scientificName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.phoneScreen}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{t("home.title")}</Text>
          <Text style={styles.headerSubtitle}>{t("home.subtitle")}</Text>
        </View>

        {/* Busca + botão scanner */}
        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder={t("home.searchPlaceholder")}
            placeholderTextColor="rgba(255,255,255,0.6)"
            value={query}
            onChangeText={setQuery}
            accessible
            accessibilityLabel="Campo de busca de espécies"
          />
          <Pressable
            style={styles.scanBtn}
            onPress={() => navigation.navigate("Scanner")}
            accessibilityRole="button"
            accessibilityLabel="Ir para o scanner de espécies"
          >
            <Text>📷</Text>
          </Pressable>
        </View>

        {/* Lista + navegação para detalhes (stack pai) */}
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            paddingHorizontal: theme.spacing(5),
            paddingBottom: theme.spacing(10),
          }}
          renderItem={({ item }) => (
            <SpeciesCard
              item={item}
              onPress={() =>
                navigation
                  .getParent()
                  ?.navigate("SpeciesDetail", { id: item.id })
              }
            />
          )}
        />
      </View>

      {/* Botão flutuante de scanner */}
      <Pressable
        style={styles.floatingScan}
        onPress={() => navigation.navigate("Scanner")}
        accessibilityRole="button"
        accessibilityLabel="Abrir scanner de espécies"
      >
        <Text style={{ fontSize: 26, color: "#fff" }}>📸</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.colors.background, // 👈 veio do tema
    alignItems: "center",
    justifyContent: "center",
  },
  phoneScreen: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: theme.colors.background,
  },
  header: {
    paddingHorizontal: theme.spacing(5),
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(4),
    // esse verde de topo é mais específico, mantive literal
    backgroundColor: "#052e16",
  },
  headerTitle: {
    color: theme.colors.text,
    fontSize: 24,
    fontWeight: "700",
    marginBottom: theme.spacing(1),
  },
  headerSubtitle: {
    color: "rgba(209,250,229,0.8)",
    fontSize: 14,
  },
  searchBar: {
    marginHorizontal: theme.spacing(5),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.pill,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: theme.spacing(3.5),
  },
  searchIcon: {
    fontSize: 18,
    color: "rgba(148,163,184,0.8)",
    marginRight: theme.spacing(2),
  },
  searchInput: {
    flex: 1,
    paddingVertical: theme.spacing(2.5),
    color: theme.colors.text,
  },
  scanBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primary,
    marginLeft: theme.spacing(2),
  },
  quickActions: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  actionCard: {
    flex: 1,
    backgroundColor: "rgba(22,163,74,0.2)",
    borderRadius: 18,
    padding: 12,
  },
  actionIcon: {
    fontSize: 28,
    marginBottom: 6,
  },
  actionTitle: {
    color: theme.colors.text,
    fontWeight: "600",
    fontSize: 15,
  },
  actionSubtitle: {
    color: "rgba(209,213,219,0.9)",
    fontSize: 11,
  },
  alertBanner: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 14,
    borderRadius: 18,
    padding: 12,
    backgroundColor: "#dc2626",
  },
  alertIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  alertTitle: {
    color: "#fef2f2",
    fontWeight: "700",
    marginBottom: 2,
  },
  alertSubtitle: {
    color: "#fee2e2",
    fontSize: 12,
  },
  sectionTitle: {
    color: theme.colors.text,
    fontSize: 17,
    fontWeight: "600",
    marginHorizontal: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
  floatingScan: {
    position: "absolute",
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
});
