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
        <MenuButton title="Colección Alberto Gómez Barbosa" onPress={() => navigation.navigate('Ahp5fod1')} imageSource={require('../fotos/persona9.jpg')}/>
        <MenuButton title="Colección Emilio Garcia Riera (Sección Fotográfica)"  onPress={() => navigation.navigate('Ahp5fod2')} imageSource={require('../fotos/Libro2.jpg')}/>
      </ScrollView>
    </View>
  );
};

export default App;