import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MasScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Pantalla Más</Text>
    </View>
  );
};

export default MasScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});