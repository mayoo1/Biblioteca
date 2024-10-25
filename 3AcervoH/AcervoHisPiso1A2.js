import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView} from 'react-native';
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
        <MenuButton title="1.2.1 Ramo Civil. Supremo Tribunal" onPress={() => navigation.navigate('Ahp1A2d1')} imageSource={require('../fotos/Antiguo11.jpg')} />
        <MenuButton title="1.2.2 Ramo Criminal. Supremo Tribunal de Justicia" onPress={() => navigation.navigate('Ahp1A2d2')} imageSource={require('../fotos/Antiguo16.jpg')} />
        <MenuButton title="1.2.3 Ramo Administrativo. Supremo Tribunal" onPress={() => navigation.navigate('Ahp1A2d3')} imageSource={require('../fotos/Antiguo13.jpg')} />
        <MenuButton title="1.2.4 Libros de Jueces y magistrados. Supremo Tribunal" onPress={() => navigation.navigate('Ahp1A2d4')} imageSource={require('../fotos/Antiguo14.jpg')} />
        <MenuButton title="1.2.5 Exámenes de Abogados. Supremo Tribunal" onPress={() => navigation.navigate('Ahp1A2d5')} imageSource={require('../fotos/Antiguo15.jpg')} />
      </ScrollView>
  </View>
  );
};

export default App;