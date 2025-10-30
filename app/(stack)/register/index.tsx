import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  FlatList,
  StyleSheet,
} from "react-native";
import { estilosGlobales } from "../../../styles/estilos_globales";
import { router } from "expo-router";

const BARRIOS_MOCK = [
  "Centro",
  "Villa Ariza",
  "San Alberto",
  "Udaondo",
  "El Pilar",
  "Parque Leloir",
];

const RegisterScreen = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [idSocial, setIdSocial] = useState("");
  const [email, setEmail] = useState("");
  const [barrio, setBarrio] = useState<string | null>(null);
  const [openBarrio, setOpenBarrio] = useState(false);

  // Solo dígitos (máx 8)
  const onChangeIdSocial = (t: string) => {
    const digits = t.replace(/\D/g, "").slice(0, 8);
    setIdSocial(digits);
  };

  const goNext = () => {
    // No pasamos params ni guardamos nada
    router.push("/(stack)/register-password");
  };

  return (
    <KeyboardAvoidingView
      style={estilosGlobales.container}
      behavior={Platform.select({ ios: "padding", android: undefined })}
    >
      <Image
        source={require("../../../assets/images/logo-ituzaingo.png")}
        style={estilosGlobales.logo}
        resizeMode="contain"
      />

      <View style={local.row}>
        <View style={local.col}>
          <Text style={estilosGlobales.label}>Nombre</Text>
          <TextInput
            style={estilosGlobales.input}
            placeholder="Ej: Usuario"
            value={nombre}
            onChangeText={setNombre}
          />
        </View>
        <View style={local.col}>
          <Text style={estilosGlobales.label}>Apellido</Text>
          <TextInput
            style={estilosGlobales.input}
            placeholder="Ej: Apellido"
            value={apellido}
            onChangeText={setApellido}
          />
        </View>
      </View>

      <Text style={estilosGlobales.label}>
        Ingresa tu identificación social
      </Text>
      <TextInput
        style={estilosGlobales.input}
        placeholder="Puede ser tu dni"
        value={idSocial}
        onChangeText={onChangeIdSocial}
        keyboardType="number-pad" // teclado numérico
        maxLength={8} // por si acaso
        autoCapitalize="none"
      />

      <Text style={estilosGlobales.label}>Ingresa tu mail</Text>
      <TextInput
        style={estilosGlobales.input}
        placeholder="correo@correo.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={estilosGlobales.label}>Selecciona tu barrio</Text>
      <TouchableOpacity
        onPress={() => setOpenBarrio(true)}
        activeOpacity={0.7}
        style={[estilosGlobales.input, local.select]}
      >
        <Text style={{ color: barrio ? "#333" : "#9aa0a6" }}>
          {barrio ?? "Selecciona"}
        </Text>
        <Text style={{ fontSize: 16, color: "#9aa0a6" }}>▾</Text>
      </TouchableOpacity>

      <View style={[estilosGlobales.buttonContainer, { marginTop: 8 }]}>
        <TouchableOpacity
          style={estilosGlobales.outlineButton}
          onPress={() => router.replace("/(stack)/login")}
        >
          <Text style={estilosGlobales.outlineButtonText}>Ya tengo cuenta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={estilosGlobales.primaryButton}
          onPress={goNext}
        >
          <Text style={estilosGlobales.primaryButtonText}>Continuar →</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={openBarrio} transparent animationType="fade">
        <TouchableOpacity
          style={local.modalBackdrop}
          onPress={() => setOpenBarrio(false)}
          activeOpacity={1}
        >
          <View style={local.modalCard}>
            <FlatList
              data={BARRIOS_MOCK}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    setBarrio(item);
                    setOpenBarrio(false);
                  }}
                  style={local.option}
                >
                  <Text style={{ color: "#333" }}>{item}</Text>
                </TouchableOpacity>
              )}
              ItemSeparatorComponent={() => <View style={local.sep} />}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const local = StyleSheet.create({
  row: { flexDirection: "row", gap: 12 },
  col: { flex: 1 },
  select: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.25)",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  modalCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 8,
    maxHeight: 300,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  option: { paddingHorizontal: 16, paddingVertical: 12 },
  sep: { height: 1, backgroundColor: "#f1f1f1" },
});
