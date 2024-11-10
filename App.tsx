import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Hijo from './Hijo';

const App: React.FC = () => {
  const [contador, setContador] = useState<number>(0);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {contador}</Text>
      <Hijo contador={contador} incrementar={incrementar} decrementar={decrementar} />
      
      <Text style={styles.otroTexto}>Héctor Mauricio Loor G.</Text>
      <Text style={styles.otroTexto}>Aplicaciones Moviles II</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  otroTexto: {
    fontSize: 12,
    fontWeight: 'condensedBold',
  },
});

export default App;
