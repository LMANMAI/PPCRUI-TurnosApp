import React, { useMemo, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { router } from "expo-router";
import { estilosGlobales } from "../../styles/estilos_globales";

const RegisterPasswordScreen: React.FC = () => {
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");

  const minLen = 8;

  const isValid = useMemo(() => {
    if (pass.length < minLen) return false;
    return pass === pass2;
  }, [pass, pass2]);

  const errorMsg = useMemo(() => {
    if (!pass && !pass2) return "";
    if (pass.length > 0 && pass.length < minLen)
      return `La contraseña debe tener al menos ${minLen} caracteres.`;
    if (pass2.length > 0 && pass !== pass2)
      return "Las contraseñas no coinciden.";
    return "";
  }, [pass, pass2]);

  const onContinue = () => {
    // Avanza al siguiente paso. Cambiá esta ruta si corresponde.
    router.push("/(tabs)/inicio");
  };

  return (
    <KeyboardAvoidingView
      style={estilosGlobales.container}
      behavior={Platform.select({ ios: "padding", android: undefined })}
    >
      {/* Logo */}
      {/* <Image
        source={require("../../../assets/images/logo-ituzaingo.png")}
        style={estilosGlobales.logo}
        resizeMode="contain"
      /> */}

      {/* Contraseña */}
      <Text style={estilosGlobales.label}>Ingresa una contraseña</Text>
      <TextInput
        style={[
          estilosGlobales.input,
          !!errorMsg && estilosGlobales.inputError,
        ]}
        placeholder="********"
        secureTextEntry
        value={pass}
        onChangeText={setPass}
        autoCapitalize="none"
      />

      {/* Repetir contraseña */}
      <Text style={estilosGlobales.label}>Repitamos la contraseña</Text>
      <TextInput
        style={[
          estilosGlobales.input,
          !!errorMsg && estilosGlobales.inputError,
        ]}
        placeholder="********"
        secureTextEntry
        value={pass2}
        onChangeText={setPass2}
        autoCapitalize="none"
      />

      {!!errorMsg && (
        <Text style={estilosGlobales.helperError}>{errorMsg}</Text>
      )}

      {/* Botones */}
      <View style={[estilosGlobales.buttonContainer, { marginTop: 12 }]}>
        <TouchableOpacity
          style={estilosGlobales.outlineButton}
          onPress={() => router.back()}
        >
          <Text style={estilosGlobales.outlineButtonText}>
            Editar los datos personales
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            estilosGlobales.primaryButton,
            !isValid && estilosGlobales.primaryButtonDisabled,
          ]}
          onPress={onContinue}
          disabled={!isValid}
          accessibilityState={{ disabled: !isValid }}
          activeOpacity={!isValid ? 1 : 0.7}
        >
          <Text style={estilosGlobales.primaryButtonText}>Continuar →</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterPasswordScreen;
