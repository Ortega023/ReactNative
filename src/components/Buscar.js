import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function Buscar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Aquí puedes implementar la lógica de búsqueda
    // Por ahora, simplemente mostraremos el término de búsqueda en la consola.
    console.log('Término de búsqueda:', searchTerm);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla de búsqueda</Text>
      <TextInput
        style={styles.input}
        placeholder="Buscar..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <Button title="Buscar" onPress={handleSearch} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});

export default Buscar;
