import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../3Diseno';

const { width } = Dimensions.get('window');

const MenuButton = ({ title, onPress, imageSource }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={[styles.buttonM, {height: width * 0.2, width: width * 0.95}]}>
    <Image source={imageSource} style={[styles.buttonImageM, {height: width * 0.15, width: width * 0.15}]} />
    <Text style={styles.buttonTextM}>{title}</Text>
    <Image source={require('../fotos/ico1.png')} style={{height: width * 0.1, width: width * 0.1}} />
  </TouchableOpacity>
);

const App = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.containerM}>
      <MenuButton 
        title="Piso 1. Archivos y Mapoteca" 
        onPress={() => navigation.navigate('Ahp1')} 
        imageSource={require('../fotos/GaleriaHis3.png')}
      />
      <MenuButton 
        title="Piso 2. Biblioteca Álvarez del Castillo y Fonoteca" 
        onPress={() => navigation.navigate('Ahp2')} 
        imageSource={require('../fotos/Libreria6.jpg')}
      />
      <MenuButton 
        title="Piso 3. Periódicos de Jalisco" 
        onPress={() => navigation.navigate('Ahp3')} 
        imageSource={require('../fotos/Antiguo1.jpg')}
      />
      <MenuButton 
        title="Piso 4. Publicaciones seriadas de Jalisco (Del S.XIX hasta 1982) y Fonoteca" 
        onPress={() => navigation.navigate('Ahp4')} 
        imageSource={require('../fotos/Libreria7.jpg')}
      />
      <MenuButton 
        title="Piso 5. Acervo General, Fondos Particulares, Cinemáteca y Fototeca de Jalisco" 
        onPress={() => navigation.navigate('Ahp5')} 
        imageSource={require('../fotos/Libros1.jpg')}
      />
      <MenuButton 
        title="Piso 6. Fondos Especiales" 
        onPress={() => navigation.navigate('Ahp6')} 
        imageSource={require('../fotos/Libros4.jpeg')}
      />
    </View>
  );
};


export default App;
