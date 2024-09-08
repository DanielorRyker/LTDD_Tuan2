import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

const QuadraticForm = ({ onSolve }) => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');

  return (
    <View style={styles.container}>
      <Text>Giải phương trình bậc 2: ax² + bx + c = 0</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập a"
        keyboardType="numeric"
        onChangeText={setA}
        value={a}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập b"
        keyboardType="numeric"
        onChangeText={setB}
        value={b}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập c"
        keyboardType="numeric"
        onChangeText={setC}
        value={c}
      />
      <Button title="Giải" onPress={() => onSolve(a, b, c)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '80%',
  },
});

export default QuadraticForm;
