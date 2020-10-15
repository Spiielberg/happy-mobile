import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function OrphanageDetails() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orphanage Details</Text>
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
