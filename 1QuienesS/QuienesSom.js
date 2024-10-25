import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../3Diseno';

const { width } = Dimensions.get('window');

const MenuButton = ({ title, onPress, imageSource }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={1} style={[styles.buttonM, {height: width * 0.2, width: width * 0.95}]}>
    <Image source={imageSource} style={[styles.buttonImageM, {height: width * 0.15, width: width * 0.15}]}/>
    <Text style={styles.buttonTextM}>{title}</Text>
    <Image source={require('../fotos/ico1.png')} style={{height: width * 0.1, width: width * 0.1}}/>
  </TouchableOpacity>
);

const App = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.containerM}>
      <MenuButton title="Acerca de la Biblioteca" onPress={() => navigation.navigate('Qsab')} imageSource={require('../fotos/Libros1.jpg')}/>
      <MenuButton title="Historia" onPress={() => navigation.navigate('Qsh')} imageSource={require('../fotos/Historia.jpg')}/>
      <MenuButton title="Directorio" onPress={() => navigation.navigate('Qsd')} imageSource={require('../fotos/Logo2.png')}/>
      <MenuButton title="Ubicación" onPress={() => navigation.navigate('Qsu')} imageSource={require('../fotos/Mapa.png')}/>
      <MenuButton title="Conoce la Biblioteca" onPress={() => navigation.navigate('Qscb')} imageSource={require('../fotos/Biblioteca1.jpg')}/>
      <MenuButton title="La Biblioteca en Redes Sociales" onPress={() => navigation.navigate('Qsr')} imageSource={require('../fotos/Redes.png')}/>
      <MenuButton title="Créditos de la Aplicación" onPress={() => navigation.navigate('Qsc')} imageSource={require('../fotos/Biblioteca2.jpg')}/>
    </View>
  );
};

export default App;