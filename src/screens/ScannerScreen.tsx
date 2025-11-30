import { CameraView, useCameraPermissions } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import React, { useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

// Tipo de resposta da IA (top-3)
type Prediction = {
  label: string;
  probability: number; // 0–1
};

// Helper só pra simular latência
const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function ScannerScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState<Prediction[] | null>(null);

  // ref para CameraView (nativo)
  const cameraRef = useRef<CameraView | null>(null);

  // ====== IA (onde você pode plugar endpoint real) ======
  async function classifyImage(
    base64: string | undefined
  ): Promise<Prediction[]> {
    if (!base64) {
      return [
        {
          label: "Não foi possível ler a imagem",
          probability: 0.0,
        },
      ];
    }

    // 🔗 EXEMPLO DE INTEGRAÇÃO REAL (descomentar quando tiver backend)
    /*
    try {
      const res = await fetch("https://seu-backend.com/api/classify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageBase64: base64 }),
      });

      if (!res.ok) {
        throw new Error("Erro na API de IA");
      }

      const data = await res.json();
      // Esperando algo como: { predictions: [{ label: string, probability: number }, ...] }
      return data.predictions;
    } catch (e) {
      console.error("Erro IA:", e);
      return [
        {
          label: "Não foi possível classificar a imagem no momento",
          probability: 0,
        },
      ];
    }
    */

    // 🌱 MODO PROTÓTIPO: "um pouco mais inteligente" que o Pau-brasil fixo

    await delay(900);

    // heuristicazinha: se base64 for muito pequeno, assume baixa confiança
    const approxSizeKb = base64.length / 1024;

    if (approxSizeKb < 40) {
      // foto ruim / muito pequena / sem detalhes
      return [
        {
          label: "Baixa confiança na identificação",
          probability: 0.2,
        },
        {
          label: "Tente aproximar mais da espécie e melhorar a iluminação",
          probability: 0.15,
        },
        {
          label: "Nenhuma espécie identificada com segurança",
          probability: 0.1,
        },
      ];
    }

    // mock mais realista para fotos "ok"
    return [
      { label: "Espécie de vegetação nativa (protótipo)", probability: 0.6 },
      { label: "Espécie possivelmente ornamental", probability: 0.25 },
      { label: "Classificação inconclusiva", probability: 0.15 },
    ];
  }

  // ====== FOTO COM CÂMERA ======
  async function handleCapture() {
    if (!cameraRef.current) return;

    try {
      setIsScanning(true);
      setResult(null);

      const photo = await cameraRef.current.takePictureAsync({
        base64: true,
        quality: 0.8,
      });

      if (!photo.base64) {
        Alert.alert("Erro", "Não foi possível obter os dados da imagem.");
        return;
      }

      const preds = await classifyImage(photo.base64);
      setResult(preds);
    } catch (e) {
      console.error(e);
      Alert.alert("Erro", "Não foi possível processar a imagem.");
    } finally {
      setIsScanning(false);
    }
  }

  // ====== FOTO DA GALERIA ======
  async function handlePickFromGallery() {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      Alert.alert("Permissão", "Permissão para acessar a galeria foi negada.");
      return;
    }

    const res = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      quality: 0.8,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (res.canceled || !res.assets?.[0]?.base64) return;

    try {
      setIsScanning(true);
      setResult(null);
      const preds = await classifyImage(res.assets[0].base64);
      setResult(preds);
    } catch (e) {
      console.error(e);
      Alert.alert("Erro", "Não foi possível processar a imagem.");
    } finally {
      setIsScanning(false);
    }
  }

  // ====== ESTADOS DE PERMISSÃO ======
  if (!permission) {
    // Enquanto carrega o estado da permissão
    return (
      <View style={styles.center}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!permission.granted) {
    // 🔥 TELA DE PERMISSÃO MAIS BONITA
    return (
      <View style={styles.permissionRoot}>
        <View style={styles.permissionCard}>
          <View style={styles.permissionIconWrapper}>
            <Text style={styles.permissionIcon}>📷</Text>
          </View>

          <Text style={styles.permissionTitle}>Permitir acesso à câmera</Text>
          <Text style={styles.permissionText}>
            Para escanear fauna e flora, o aplicativo precisa usar a câmera do
            seu dispositivo. Nenhuma imagem será enviada sem a sua ação.
          </Text>

          <Pressable
            style={styles.permissionBtnPrimary}
            onPress={requestPermission}
            accessibilityRole="button"
            accessibilityLabel="Conceder permissão de acesso à câmera"
          >
            <Text style={styles.permissionBtnPrimaryText}>
              Permitir uso da câmera
            </Text>
          </Pressable>

          <Pressable
            style={styles.permissionBtnSecondary}
            onPress={() => {
              Alert.alert(
                "Permissão necessária",
                "Sem a câmera, o scanner de espécies não poderá funcionar."
              );
            }}
            accessibilityRole="button"
            accessibilityLabel="Entender por que a câmera é necessária"
          >
            <Text style={styles.permissionBtnSecondaryText}>Agora não</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  // ====== UI PRINCIPAL ======
  return (
    <View style={styles.root}>
      <Text style={styles.title} accessibilityRole="header">
        Scanner de Espécies
      </Text>

      <View
        style={styles.cameraWrapper}
        accessible
        accessibilityLabel="Pré-visualização da câmera para capturar espécimes"
      >
        <CameraView ref={cameraRef} style={styles.camera} facing="back" />
      </View>

      <View style={styles.actionsRow}>
        <Pressable
          style={styles.secondaryBtn}
          onPress={handlePickFromGallery}
          disabled={isScanning}
          accessibilityRole="button"
          accessibilityLabel="Selecionar foto da galeria para identificar espécie"
        >
          <Text style={styles.secondaryBtnText}>Escolher da galeria</Text>
        </Pressable>

        <Pressable
          style={styles.primaryBtn}
          onPress={handleCapture}
          disabled={isScanning}
          accessibilityRole="button"
          accessibilityLabel="Capturar foto com a câmera para identificar espécie"
        >
          {isScanning ? (
            <ActivityIndicator color="#022c22" />
          ) : (
            <Text style={styles.primaryBtnText}>Capturar</Text>
          )}
        </Pressable>
      </View>

      {result && (
        <View
          style={styles.resultCard}
          accessibilityRole="summary"
          accessibilityLabel="Resultado do reconhecimento de espécie"
        >
          <Text style={styles.resultTitle}>Sugestões da IA (protótipo)</Text>
          {result.map((p) => (
            <Text key={p.label} style={styles.resultText}>
              {p.label} — {(p.probability * 100).toFixed(1)}%
            </Text>
          ))}

          <Text style={styles.resultHint}>
            Esta IA é demonstrativa. Para resultados reais, conecte a um modelo
            de reconhecimento de imagens treinado para fauna/flora.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#020617",
    padding: 16,
  },
  center: {
    flex: 1,
    backgroundColor: "#020617",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },

  // ====== PERMISSÃO ======
  permissionRoot: {
    flex: 1,
    backgroundColor: "#020617",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  permissionCard: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "rgba(15,23,42,0.98)",
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: "#1f2937",
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 12 },
    elevation: 10,
  },
  permissionIconWrapper: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "rgba(34,197,94,0.15)",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 16,
  },
  permissionIcon: {
    fontSize: 30,
  },
  permissionTitle: {
    color: "#f9fafb",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },
  permissionText: {
    color: "#9ca3af",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 16,
  },
  permissionBtnPrimary: {
    backgroundColor: "#22c55e",
    paddingVertical: 12,
    borderRadius: 999,
    alignItems: "center",
    marginBottom: 8,
  },
  permissionBtnPrimaryText: {
    color: "#022c22",
    fontWeight: "700",
    fontSize: 15,
  },
  permissionBtnSecondary: {
    paddingVertical: 10,
    borderRadius: 999,
    alignItems: "center",
  },
  permissionBtnSecondaryText: {
    color: "#9ca3af",
    fontWeight: "500",
    fontSize: 14,
  },

  // ====== UI PRINCIPAL ======
  title: {
    color: "#f9fafb",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
    textAlign: "center",
  },
  cameraWrapper: {
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#1f2937",
    backgroundColor: "#020617",
    height: 260,
    marginBottom: 16,
  },
  camera: {
    flex: 1,
  },
  actionsRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 16,
  },
  primaryBtn: {
    flex: 1,
    backgroundColor: "#22c55e",
    paddingVertical: 12,
    borderRadius: 999,
    alignItems: "center",
  },
  primaryBtnText: {
    color: "#022c22",
    fontWeight: "700",
  },
  secondaryBtn: {
    flex: 1,
    borderColor: "#22c55e",
    borderWidth: 1,
    paddingVertical: 12,
    borderRadius: 999,
    alignItems: "center",
  },
  secondaryBtnText: {
    color: "#22c55e",
    fontWeight: "600",
  },
  resultCard: {
    marginTop: 8,
    backgroundColor: "rgba(15,23,42,0.95)",
    borderRadius: 16,
    padding: 12,
  },
  resultTitle: {
    color: "#e5e7eb",
    fontWeight: "600",
    marginBottom: 4,
  },
  resultText: {
    color: "#9ca3af",
    fontSize: 13,
  },
  resultHint: {
    marginTop: 8,
    color: "#6b7280",
    fontSize: 11,
  },
});
