import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface HijoProps {
  contador: number;
  incrementar: () => void;
  decrementar: () => void;
}

const Hijo: React.FC<HijoProps> = ({ contador, incrementar, decrementar }) => {
  return (
    <View style={styles.container}>
      
      <Button title="Decrementar (-)" onPress={decrementar} />
      <Button title="Incrementar (+)" onPress={incrementar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    marginBottom : 20,
  },
  counter: {
    fontSize: 18,
    marginHorizontal: 10,
  },
});

export default Hijo;
