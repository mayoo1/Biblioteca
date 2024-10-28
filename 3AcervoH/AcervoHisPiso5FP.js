import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
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
      <ScrollView contentContainerStyle={styles.scrollM}>
        <MenuButton title="5.4.1 Francisco Arreola Adame" onPress={() => navigation.navigate('Ahp5fpd1')} imageSource={require('../fotos/persona10.jpg')} />
        <MenuButton title="5.4.2 Jorge Enciso Alatorre" onPress={() => navigation.navigate('Ahp5fpd2')} imageSource={require('../fotos/persona11.jpg')} />
        <MenuButton title="5.4.3 José Cornejo Franco" onPress={() => navigation.navigate('Ahp5fpd3')} imageSource={require('../fotos/persona12.jpg')} />
        <MenuButton title="5.4.4 Pedro Espinosa y Dávalos" onPress={() => navigation.navigate('Ahp5fpd4')} imageSource={require('../fotos/persona13.jpg')} />
        <MenuButton title="5.4.5 Paulino Machorro Narváez" onPress={() => navigation.navigate('Ahp5fpd5')} imageSource={require('../fotos/persona14.jpg')} />
        <MenuButton title="5.4.6 Luis M. Rivera" onPress={() => navigation.navigate('Ahp5fpd6')} imageSource={require('../fotos/persona15.jpg')} />
        <MenuButton title="5.4.7 Saul Rodiles Piña" onPress={() => navigation.navigate('Ahp5fpd7')} imageSource={require('../fotos/persona16.jpg')} />
        <MenuButton title="5.4.8 Lorenzo Martínez Negrete" onPress={() => navigation.navigate('Ahp5fpd8')} imageSource={require('../fotos/persona17.jpg')} />
        <MenuButton title="5.4.9 Agustín Rivera y Sanromán" onPress={() => navigation.navigate('Ahp5fpd9')} imageSource={require('../fotos/persona18.jpg')} />
        <MenuButton title="5.4.10 Felipe de la Rosa" onPress={() => navigation.navigate('Ahp5fpd10')} imageSource={require('../fotos/persona19.jpg')} />
        <MenuButton title="5.4.11 Antonio Peñafiel" onPress={() => navigation.navigate('Ahp5fpd11')} imageSource={require('../fotos/persona20.jpg')} />
        <MenuButton title="5.4.12 Araceli Ibarra Bellon" onPress={() => navigation.navigate('Ahp5fpd12')} imageSource={require('../fotos/anonima.jpg')} />
        <MenuButton title="5.4.13 Phil Weigand Moore" onPress={() => navigation.navigate('Ahp5fpd13')} imageSource={require('../fotos/persona21.jpg')} />
        <MenuButton title="5.4.15 Arturo Rivas Sainz" onPress={() => navigation.navigate('Ahp5fpd15')} imageSource={require('../fotos/persona22.jpg')} />
        <MenuButton title="5.4.16 Colecciones Editoriales" onPress={() => navigation.navigate('Ahp5fpd16')} imageSource={require('../fotos/Libros6.jpg')} />
        <MenuButton title="5.4.17 Colección Alfonso L. Fots Díaz" onPress={() => navigation.navigate('Ahp5fpd17')} imageSource={require('../fotos/pintura.jpg')} />
        <MenuButton title="5.4.18 Colección Alberto Gómez Barbosa" onPress={() => navigation.navigate('Ahp5fpd18')} imageSource={require('../fotos/persona9.jpg')} />
        <MenuButton title="5.4.19 Colección Ignacio Retes" onPress={() => navigation.navigate('Ahp5fpd19')} imageSource={require('../fotos/persona23.jpg')} />
        <MenuButton title="5.4.20 Gabriel Retes Balzaretti" onPress={() => navigation.navigate('Ahp5fpd20')} imageSource={require('../fotos/persona24.jpg')} />
        <MenuButton title="5.4.21 Ignacio Igor Arreola Haro" onPress={() => navigation.navigate('Ahp5fpd21')} imageSource={require('../fotos/persona25.jpg')} />
        <MenuButton title="5.4.22 Fondo Preparatoria de Jalisco" onPress={() => navigation.navigate('Ahp5fpd22')} imageSource={require('../fotos/prepa.png')} />
        <MenuButton title="5.4.23 Colección Federico Solórzano Barreto" onPress={() => navigation.navigate('Ahp5fpd23')} imageSource={require('../fotos/persona26.jpg')} />
        <MenuButton title="5.4.24 Colección Álvaro Matute y  Evelia Trejo" onPress={() => navigation.navigate('Ahp5fpd24')} imageSource={require('../fotos/persona27.jpg')} />
        
      </ScrollView>
    </View>
  );
};

export default App;

