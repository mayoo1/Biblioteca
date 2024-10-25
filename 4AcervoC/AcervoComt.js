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
        <MenuButton title="Piso 1. Biblioteca Infantil y Juvenil José Rosas Moreno" onPress={() => navigation.navigate('Acp1')} imageSource={require('../fotos/Libreria11.jpeg')}/>
        <MenuButton title="Piso 2. Acervo General Contemporáneo" onPress={() => navigation.navigate('Acp2')} imageSource={require('../fotos/Libreria4.jpg')}/>
        <MenuButton title="Piso 3. Hemeroteca Contemporánea" onPress={() => navigation.navigate('Acp3')} imageSource={require('../fotos/Libreria6.jpg')}/>
        <MenuButton title="Piso 4. Colecciones Especiales Nacionales" onPress={() => navigation.navigate('Acp4')} imageSource={require('../fotos/Libreria5.jpg')}/>
        <MenuButton title="Piso 5. Colecciones Internacionales" onPress={() => navigation.navigate('Acp5')} imageSource={require('../fotos/Coleccion3.jpg')}/>
        <MenuButton title="Recursos Electrónicos" onPress={() => navigation.navigate('Acre')} imageSource={require('../fotos/RE.png')}/>
       </ScrollView>
    </View>
  );
};

export default App;

