import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ResultDisplay = ({ result }) => {
  return (
    <View style={styles.container}>
      <Text>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default ResultDisplay;
