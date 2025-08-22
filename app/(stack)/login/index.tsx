import { estilosGlobales } from "../../../styles/estilos_globales";
import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Login">;

//helpeers
const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim().toLowerCase());

const isValidDNI = (value: string) => {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 8;
};

const LoginScreen: React.FC = () => {
  const [dniOrEmail, setDniOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation<NavigationProp>();

  const isDniOrEmailValid = useMemo(() => {
    const v = dniOrEmail.trim();
    if (!v) return false;
    return isValidDNI(v) || isValidEmail(v);
  }, [dniOrEmail]);

  const isDisabled = useMemo(() => {
    return !isDniOrEmailValid || password.trim() === "";
  }, [isDniOrEmailValid, password]);

  const showDniOrEmailError = dniOrEmail.length > 0 && !isDniOrEmailValid;

  const handleLogin = () => {
    console.log("Ingresando con:", dniOrEmail, password);
    router.replace("/(tabs)/inicio");
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

      <Text style={estilosGlobales.label}>Ingresa con DNI o con tu mail</Text>
      <TextInput
        style={[
          estilosGlobales.input,
          showDniOrEmailError && estilosGlobales.inputError,
        ]}
        placeholder="Ej: 12.345.678 o usuario@mail.com"
        value={dniOrEmail}
        onChangeText={setDniOrEmail}
        keyboardType="default"
        autoCapitalize="none"
      />
      {showDniOrEmailError && (
        <Text style={estilosGlobales.helperError}>
          Ingresá un DNI válido (7–8 dígitos, con o sin puntos) o un correo
          válido.
        </Text>
      )}
      <Text style={estilosGlobales.label}>Contraseña</Text>
      <TextInput
        style={estilosGlobales.input}
        placeholder="Ingresa tu contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity onPress={() => console.log("Olvidaste tu contraseña")}>
        <Text style={estilosGlobales.forgot}>¿Olvidaste la contraseña?</Text>
      </TouchableOpacity>

      <View style={estilosGlobales.buttonContainer}>
        <TouchableOpacity
          style={estilosGlobales.outlineButton}
          onPress={() => {
            router.replace("/(stack)/register");
            console.log("Registro");
          }}
        >
          <Text style={estilosGlobales.outlineButtonText}>Registrarme</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            estilosGlobales.primaryButton,
            isDisabled && estilosGlobales.primaryButtonDisabled,
          ]}
          accessibilityState={{ disabled: isDisabled }}
          activeOpacity={isDisabled ? 1 : 0.7}
          disabled={isDisabled}
          onPress={handleLogin}
        >
          <Text style={estilosGlobales.primaryButtonText}>Ingresar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
