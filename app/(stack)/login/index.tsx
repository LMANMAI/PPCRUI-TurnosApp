import { estilosGlobales } from '../../../styles/estilos_globales';
import React, { useState } from 'react';
import { View,Text,TextInput,TouchableOpacity,Image,KeyboardAvoidingView,Platform} from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  Login: undefined;
  Home: undefined; 
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen: React.FC = () => {
  const [dniOrEmail, setDniOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NavigationProp>();

  const handleLogin = () => {
    console.log('Ingresando con:', dniOrEmail, password);
    navigation.navigate('Home');
  };

  return (
    <KeyboardAvoidingView
      style={estilosGlobales.container}
      behavior={Platform.select({ ios: 'padding', android: undefined })}
    >
      <Image
        source={require('../assets/images/logo-ituzaingo.png')}
        style={estilosGlobales.logo}
        resizeMode="contain"
      />

      <Text style={estilosGlobales.label}>Ingresa con DNI o con tu mail</Text>
      <TextInput
        style={estilosGlobales.input}
        placeholder="Ej: 01.001.200"
        value={dniOrEmail}
        onChangeText={setDniOrEmail}
        keyboardType="default"
        autoCapitalize="none"
      />

      <Text style={estilosGlobales.label}>Contraseña</Text>
      <TextInput
        style={estilosGlobales.input}
        placeholder="Ingresa tu contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity onPress={() => console.log('Olvidaste tu contraseña')}>
        <Text style={estilosGlobales.forgot}>¿Olvidaste la contraseña?</Text>
      </TouchableOpacity>

      <View style={estilosGlobales.buttonContainer}>
        <TouchableOpacity style={estilosGlobales.outlineButton} onPress={() => console.log('Registro')}>
          <Text style={estilosGlobales.outlineButtonText}>Registrarme</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilosGlobales.primaryButton} onPress={handleLogin}>
          <Text style={estilosGlobales.primaryButtonText}>Ingresar →</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;