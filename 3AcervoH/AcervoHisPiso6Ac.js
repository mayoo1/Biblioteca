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
        <MenuButton title="6.2.1 Colección de Biblias" onPress={() => navigation.navigate('Ahp6Acd1')} imageSource={require('../fotos/Libro4.jpg')}/>
        <MenuButton title="6.2.2 Colección de Thesaurus" onPress={() => navigation.navigate('Ahp6Acd2')} imageSource={require('../fotos/Libro3.jpg')}/>
        <MenuButton title="6.2.3 Colección de leyes de Indias" onPress={() => navigation.navigate('Ahp6Acd3')} imageSource={require('../fotos/Libro5.jpg')}/>
        <MenuButton title="6.2.4 Colección de Medicina" onPress={() => navigation.navigate('Ahp6Acd4')} imageSource={require('../fotos/craneo.jpg')}/>
        <MenuButton title="6.2.5 Colección de Música" onPress={() => navigation.navigate('Ahp6Acd5')} imageSource={require('../fotos/musica.jpg')}/>
        <MenuButton title="6.2.6 Colección de Testigos" onPress={() => navigation.navigate('Ahp6Acd6')} imageSource={require('../fotos/Antiguo21.png')}/>
      </ScrollView>
    </View>
  );
};

export default App;
