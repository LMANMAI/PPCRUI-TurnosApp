// app/(stack)/register-confirm.tsx
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";
import { estilosGlobales } from "../../styles/estilos_globales";

export default function RegisterConfirm() {
  return (
    <KeyboardAvoidingView
      style={estilosGlobales.container}
      behavior={Platform.select({ ios: "padding", android: undefined })}
    >
      {/* Logo superior */}
      {/* <Image
        source={require("../../../assets/images/logo-ituzaingo.png")}
        style={estilosGlobales.logo}
        resizeMode="contain"
      /> */}

      {/* Card de contenido */}
      <View style={local.card}>
        {/* Ilustración */}
        {/* <Image
          // Reemplazá por tu asset real
          source={require("../../../assets/images/illustrations/register-success.png")}
          style={local.illustration}
          resizeMode="contain"
        /> */}

        {/* Título y mensaje */}
        <Text style={local.title}>¡Registro exitoso!</Text>
        <Text style={local.subtitle}>
          Tu cuenta fue creada correctamente. Ya podés iniciar sesión y usar la
          app.
        </Text>

        {/* Botones */}
        <View style={[estilosGlobales.buttonContainer, { marginTop: 12 }]}>
          <TouchableOpacity
            style={estilosGlobales.primaryButton}
            onPress={() => router.replace("/(stack)/login")}
          >
            <Text style={estilosGlobales.primaryButtonText}>
              Iniciar sesión
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={estilosGlobales.outlineButton}
            onPress={() => router.replace("/(tabs)/inicio")}
          >
            <Text style={estilosGlobales.outlineButtonText}>Ir al inicio</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const local = StyleSheet.create({
  card: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
  },
  illustration: { width: 220, height: 160, marginBottom: 12 },
  title: { fontSize: 22, fontWeight: "700", color: "#0f172a", marginTop: 8 },
  subtitle: {
    fontSize: 14,
    color: "#475569",
    textAlign: "center",
    marginTop: 8,
  },
});
