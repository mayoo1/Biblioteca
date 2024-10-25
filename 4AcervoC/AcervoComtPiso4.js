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
        <MenuButton title="4.1 Fondo de Jalisco" onPress={() => navigation.navigate('Acp4d1')} imageSource={require('../fotos/fj.png')} />
        <MenuButton title="4.2 Colección Universidad de Guadalajara" onPress={() => navigation.navigate('Acp4d2')} imageSource={require('../fotos/udg.png')} />
        <MenuButton title="4.3 Biblioteca Ignacio L. Vallarta" onPress={() => navigation.navigate('Acp4d3')} imageSource={require('../fotos/biblioilv.png')} />
        <MenuButton title="4.4 Fondo Enrique Estrada Faudón" onPress={() => navigation.navigate('Acp4d4')} imageSource={require('../fotos/persona5.jpg')} />
        <MenuButton title="4.5 Fondo Biodiversidad Dr. Enrique Beltrán" onPress={() => navigation.navigate('Acp4d5')} imageSource={require('../fotos/persona6.jpg')} />
        <MenuButton title="4.6 Hemeroteca Especializada sobre la Universidad de Guadalajara" onPress={() => navigation.navigate('Acp4d6')} imageSource={require('../fotos/Logo17.png')} />
        <MenuButton title="4.7 Mediateca, Documentos Sonoros y Cine" onPress={() => navigation.navigate('Acp4d7')} imageSource={require('../fotos/persona7.jpg')} />
      </ScrollView>
    </View>
  );
};

export default App;

