// app/(tabs)/inicio/index.tsx
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const InicioScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>¡Bienvenido, Usuario!</Text>

        <View style={styles.grid}>
          <TouchableOpacity style={styles.button}>
            <FontAwesome name="search" size={24} color="#1A73E8" />
            <Text style={styles.buttonLabel}>Turnos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <FontAwesome name="building-o" size={24} color="#1A73E8" />
            <Text style={styles.buttonLabel}>Centros</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <FontAwesome name="user-md" size={24} color="#1A73E8" />
            <Text style={styles.buttonLabel}>Médicos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <FontAwesome name="file-text-o" size={24} color="#1A73E8" />
            <Text style={styles.buttonLabel}>Trámites</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <FontAwesome name="heartbeat" size={24} color="#1A73E8" />
            <Text style={styles.buttonLabel}>Riesgo de vida</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <FontAwesome name="plus" size={24} color="#1A73E8" />
            <Text style={styles.buttonLabel}>Más acciones</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Beneficios</Text>
        <View style={styles.card}>
          <Text style={styles.cardText}>No hay beneficios disponibles</Text>
        </View>

        <Text style={styles.sectionTitle}>Próximos turnos</Text>
        <View style={styles.card}>
          <FontAwesome name="calendar-o" size={20} color="#888" />
          <Text style={[styles.cardText, { marginTop: 6 }]}>
            No tenés turnos programados.{"\n"}
            <Text style={styles.cardNote}>
              Explorá la cartilla para solicitar uno cuando lo necesites.
            </Text>
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Mis trámites</Text>
        <View style={styles.card}>
          <FontAwesome name="envelope-o" size={20} color="#888" />
          <Text style={[styles.cardText, { marginTop: 6 }]}>
            No hay trámites activos.{"\n"}
            <Text style={styles.cardNote}>
              Iniciá un trámite desde la sección correspondiente cuando lo
              necesites.
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InicioScreen;

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },
  container: {
    padding: 16,
    marginTop: 20,
  },
  header: {
    fontSize: 34,
    fontWeight: "700",
    color: "#1A3D5B",
    marginBottom: 16,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    // alignItems: "center",
    //marginBottom: 16,
    // borderColor: "red",
    // borderWidth: 1,
    maxHeight: 200,
    alignContent: "flex-start",
    gap: 10,
  },
  button: {
    width: "30%",
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: "#CED4DA",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    flexGrow: 1,
  },
  buttonLabel: {
    marginTop: 6,
    fontSize: 12,
    textAlign: "center",
    color: "#1A73E8",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#344050",
    marginBottom: 8,
  },
  card: {
    backgroundColor: "#F7F7F7",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E1E1E1",
    padding: 12,
    marginBottom: 16,
    alignItems: "center",
  },
  cardText: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
  cardNote: {
    fontSize: 12,
    color: "#777",
  },
});
