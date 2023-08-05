import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons'; // Importa los iconos que necesites

function Perfil() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="account" size={80} color="black" />
      <Text style={styles.welcomeText}>¡Bienvenido a tu perfil!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default Perfil;
