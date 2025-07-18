import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InicioScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}></Text>
    </View>
  );
};

export default InicioScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20 },
});