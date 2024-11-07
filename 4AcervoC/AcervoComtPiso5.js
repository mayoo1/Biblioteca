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
        <MenuButton title="5.1 Biblioteca Paul Rivel del CCC-IFAL" onPress={() => navigation.navigate('Acp5d1')} imageSource={require('../fotos/novedades.png')} />
        <MenuButton title="5.2 Biblioteca Benjamin Franklin" onPress={() => navigation.navigate('Acp5d2')} imageSource={require('../fotos/bibliobf.png')} />
        <MenuButton title="5.3 Biblioteca Josep Maria Muria I Romani" onPress={() => navigation.navigate('Acp5d3')} imageSource={require('../fotos/biblioj.png')} />
        <MenuButton title="5.4 Ventana de Shanghai" onPress={() => navigation.navigate('Piso5')} imageSource={require('../fotos/shangai2.png')} />
        <MenuButton title="5.5 Otras Colecciones" onPress={() => navigation.navigate('Acp5d5')} imageSource={require('../fotos/cpi.png')} />
      </ScrollView>
    </View>
  );
};

export default App;
