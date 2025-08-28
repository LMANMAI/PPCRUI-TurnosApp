import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useAuth } from "../../../context/AuthContext";

const MasScreen: React.FC = () => {
  const { logout } = useAuth();
  return (
    <View style={styles.container}>
      <Text>Pantalla Más</Text>
      <TouchableOpacity
        style={[]}
        onPress={() => {
          logout();
        }}
      >
        <Text style={{}}>Salir</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MasScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
