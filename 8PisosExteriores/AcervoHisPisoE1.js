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
        <MenuButton title="1.1.1 Ramo Civil. Real Audiencia" onPress={() => navigation.navigate('Doc1')} imageSource={require('../fotos/Antiguo2.jpg')}/>
        <MenuButton title="1.1.2 Ramo Criminal. Real Audiencia" onPress={() => navigation.navigate('Doc2')} imageSource={require('../fotos/Antiguo3.jpg')}/>
        <MenuButton title="1.1.3 Ramo Fiscal. Real Audiencia" onPress={() => navigation.navigate('Doc3')}  imageSource={require('../fotos/Antiguo4.jpg')}/>
        <MenuButton title="1.1.4 Bienes de difuntos. Real Audiencia" onPress={() => navigation.navigate('Doc4')} imageSource={require('../fotos/Antiguo6.jpg')}/>
      </ScrollView>
    </View>
  );
};

export default App;