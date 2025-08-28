import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const isWeb = Platform.OS === "web";
const storage = {
  getItem: async (k: string) =>
    isWeb ? AsyncStorage.getItem(k) : SecureStore.getItemAsync(k),
  setItem: async (k: string, v: string) =>
    isWeb ? AsyncStorage.setItem(k, v) : SecureStore.setItemAsync(k, v),
  deleteItem: async (k: string) =>
    isWeb ? AsyncStorage.removeItem(k) : SecureStore.deleteItemAsync(k),
};

const ACCESS = "accessToken";
const REFRESH = "refreshToken";
const USER = "authUser";

export const saveTokens = async (access: string, refresh: string) => {
  await storage.setItem(ACCESS, access);
  await storage.setItem(REFRESH, refresh);
};
export const getAccessToken = () => storage.getItem(ACCESS);
export const getRefreshToken = () => storage.getItem(REFRESH);

export const saveUser = async (user: any) => {
  await storage.setItem(USER, JSON.stringify(user));
};
export const getUser = async () => {
  const raw = await storage.getItem(USER);
  return raw ? JSON.parse(raw) : null;
};

export const clearSession = async () => {
  await storage.deleteItem(ACCESS);
  await storage.deleteItem(REFRESH);
  await storage.deleteItem(USER);
};
