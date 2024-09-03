import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const goToCounterSection = () => {
    navigation.navigate('CounterSection');
  };

  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <View style={styles.container}>
      {/* Otros contenidos de tu pantalla de inicio */}
      <Button title="Ver Contador" onPress={goToCounterSection} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;

