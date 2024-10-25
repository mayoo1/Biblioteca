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
        <MenuButton title="5.1 Obras Bibliográficas editadas entre los Siglos XVII y XX" onPress={() => navigation.navigate('Ahp5o')} imageSource={require('../fotos/Antiguo19.png')}/>
        <MenuButton  title="5.2 Fondo de Impresos Europeos Siglos XVII y XVIII" onPress={() => navigation.navigate('Ahp5f')} imageSource={require('../fotos/Libreria4.jpg')}/>
        <MenuButton title="5.3 Fondo Histórico Siglo XX" onPress={() => navigation.navigate('Ahp5fh')} imageSource={require('../fotos/Antiguo20.png')}/>
        <MenuButton title="5.4 Fondos Particulares" onPress={() => navigation.navigate('Ahp5fp')} imageSource={require('../fotos/Libreria.jpg')}/>
        <MenuButton title="5.5 Cinemática" onPress={() => navigation.navigate('Ahp5c')} imageSource={require('../fotos/persona7.jpg')}/>
        <MenuButton title="5.6 Fototeca de Jalisco" onPress={() => navigation.navigate('Ahp5fo')} imageSource={require('../fotos/Libreria5.jpg')}/>
      </ScrollView>
    </View>
  );
};

export default App;
