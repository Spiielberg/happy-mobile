import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CreateOrphanage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Orphanage</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#333',
    fontSize: 46,
    fontWeight: 'bold',
  },
});
