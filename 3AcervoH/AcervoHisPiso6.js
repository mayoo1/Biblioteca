import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../3Diseno';

const { width, height } = Dimensions.get('window');

const MenuButton = ({ title, onPress, imageSource }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={[styles.buttonM, {height: width * 0.2, width: width * 0.95}]}>
    <Image source={imageSource} style={[styles.buttonImageM, {height: width * 0.15, width: width * 0.15}]}/>
    <Text style={styles.buttonTextM}>{title}</Text>
    <Image source={require('../fotos/ico1.png')} style={{height: width * 0.1, width: width * 0.1}}/>
  </TouchableOpacity>
);

const App = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.containerM}>
      <ScrollView contentContainerStyle={styles.scrollM}>
        <MenuButton title="6.1 Tesoros Bibliográficos" onPress={() => navigation.navigate('Ahp6Te')} imageSource={require('../fotos/GaleriaHis4.png')}/>
        <MenuButton title="6.2 Acervo Especial" onPress={() => navigation.navigate('Ahp6Ac')} imageSource={require('../fotos/craneo.jpg')}/>
        <MenuButton title="6.3 Obras Bibliográficas editadas entre los Siglos XVII y XX" onPress={() => navigation.navigate('Ahp6Obr')}  imageSource={require('../fotos/Libros1.jpg')}/>
        <MenuButton title="6.4 Sala Jalisciense" onPress={() => navigation.navigate('Ahp6Sal')} imageSource={require('../fotos/Libreria.jpg')}/>
      </ScrollView>
    </View>
  );
};

export default App;