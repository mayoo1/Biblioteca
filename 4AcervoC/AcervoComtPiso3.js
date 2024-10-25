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
        <MenuButton title="3.1 Hemeroteca Contemporánea" onPress={() => navigation.navigate('Acp3d1')} imageSource={require('../fotos/hc.jpg')} />
        <MenuButton title="3.2 Área de Tiflotecnia" onPress={() => navigation.navigate('Acp3d2')} imageSource={require('../fotos/at.png')} />
        <MenuButton title="3.3 Colección de Pueblos Indígenas" onPress={() => navigation.navigate('Acp3d3')} imageSource={require('../fotos/cpi.png')} />
        <MenuButton title="3.4 Módulo INEGI" onPress={() => navigation.navigate('Acp3d4')} imageSource={require('../fotos/inegi.png')} />
      </ScrollView>
    </View>
  );
};

export default App;

