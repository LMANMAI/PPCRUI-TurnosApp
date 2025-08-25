// config/constants.ts
import Constants from 'expo-constants';
import { Platform } from 'react-native';

const resolveBase = () => {
  const env = process.env.EXPO_PUBLIC_API_BASE?.replace(/\/$/, '');
  if (env) return env;

  const hostUri =
    (Constants as any).expoConfig?.hostUri ??
    (Constants as any).manifest2?.extra?.expoClient?.hostUri ??
    (Constants as any).manifest?.debuggerHost;

  if (hostUri) {
    const host = hostUri.split(':')[0];
    return `http://${host}:3000/api/v1`;
  }

  return Platform.OS === 'android'
    ? 'http://10.0.2.2:3000/api/v1'
    : 'http://localhost:3000/api/v1';
};

const BASE = resolveBase();

export const USER = {
  LOGIN_USER: `${BASE}/auth/login`,
};
