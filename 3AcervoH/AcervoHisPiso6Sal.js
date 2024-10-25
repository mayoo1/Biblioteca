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
        <MenuButton title="6.4.1 Impresos Mexicanos desde el siglo XVII hasta 1930" onPress={() => navigation.navigate('Ahp6Sald1')} imageSource={require('../fotos/gdlp.jpg')} />
        <MenuButton title="6.4.2 Misceláneas" onPress={() => navigation.navigate('Ahp6Sald2')} imageSource={require('../fotos/Libro1.jpg')} />
        <MenuButton title="6.4.3 Impresos en Guadalajara siglos XVII al XX" onPress={() => navigation.navigate('Ahp6Sald3')} imageSource={require('../fotos/Libros5.jpg')} />
        <MenuButton title="6.4.4 Fondo Jalisco Histórico" onPress={() => navigation.navigate('Ahp6Sald4')} imageSource={require('../fotos/Antiguo5.jpg')} />
      </ScrollView>
    </View>
  );
};

export default App;
