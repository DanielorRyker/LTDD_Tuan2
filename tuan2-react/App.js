import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import QuadraticForm from './components/QuadraticForm';
import ResultDisplay from './components/ResultDisplay';
import solveQuadratic from './utils/solveQuadratic';

export default function App() {
  const [result, setResult] = useState('');

  const handleSolve = (a, b, c) => {
    const solution = solveQuadratic(a, b, c);
    setResult(solution);
  };

  return (
    <View style={styles.container}>
      <QuadraticForm onSolve={handleSolve} />
      <ResultDisplay result={result} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});
