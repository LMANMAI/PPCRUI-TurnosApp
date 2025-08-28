import { Stack, useRouter, useSegments } from "expo-router";
import React, { useEffect } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { AuthProvider, useAuth } from "../context/AuthContext";

function AuthGate({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, rehydrated, loading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (!rehydrated) return;
    const inAuthGroup = segments[0] === "(auth)";
    if (!isAuthenticated && !inAuthGroup) router.replace("/(stack)/login");
    if (isAuthenticated && inAuthGroup) router.replace("/inicio");
  }, [isAuthenticated, rehydrated, segments]);

  if (!rehydrated) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#005EB8" />
      </View>
    );
  }

  return (
    <>
      {children}
      {loading && (
        <View style={styles.overlay}>
          <ActivityIndicator size="large" color="#005EB8" />
        </View>
      )}
    </>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <AuthGate>
        <Stack screenOptions={{ headerShown: false }} />
      </AuthGate>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255,255,255,0.65)",
    alignItems: "center",
    justifyContent: "center",
  },
});
