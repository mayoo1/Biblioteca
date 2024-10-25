import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView} from 'react-native';
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
      <MenuButton title="2.1 Acervo General" onPress={() => navigation.navigate('Ahp2ag')} imageSource={require('../fotos/Libreria13.png')}/>
      <MenuButton title="2.2 Colección Privada" onPress={() => navigation.navigate('Ahp2cp')} imageSource={require('../fotos/Libreria15.png')}/>
      <MenuButton title="2.3 Tesoro" onPress={() => navigation.navigate('Ahp2tac')} imageSource={require('../fotos/Libreria14.png')}/>
      <MenuButton title="2.4 Archivos Visuales y Sonoros: Fonoteca" onPress={() => navigation.navigate('Ahp2avs')} imageSource={require('../fotos/disco.png')}/>
    </View>
  );
};

export default App;
