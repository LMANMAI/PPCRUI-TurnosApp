import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";

export default function TurnosScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ marginBottom: 8 }}
        >
          <FontAwesome name="chevron-left" size={18} />
        </TouchableOpacity>

        <Text style={styles.h1}>Turnos</Text>
        <Text style={styles.subtitle}>
          Encontrá un turno disponible cerca tuyo
        </Text>

        <View style={styles.searchRow}>
          <TextInput
            placeholder="Buscar por especialidad, médico o centro de salud"
            style={styles.input}
          />
          <FontAwesome name="search" size={20} color="#666" />
        </View>

        <View style={styles.filtersRow}>
          <TouchableOpacity style={styles.select}>
            <Text>Selecciona una especialidad</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.primaryBtn}>
            <Text style={{ color: "#fff" }}>Buscar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  h1: { fontSize: 28, fontWeight: "800", color: "#1A3D5B" },
  subtitle: { fontSize: 13, color: "#59626A", marginBottom: 12 },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 44,
    marginBottom: 10,
  },
  input: { flex: 1, paddingVertical: 8, marginRight: 8 },
  filtersRow: { flexDirection: "row", gap: 10, marginBottom: 16 },
  select: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  primaryBtn: {
    width: 100,
    height: 40,
    backgroundColor: "#1A73E8",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F7F7",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E1E1E1",
    padding: 12,
    marginBottom: 12,
  },
  cardTitle: { fontWeight: "700", color: "#344050", marginBottom: 4 },
  cardText: { fontSize: 13, color: "#555" },
});
