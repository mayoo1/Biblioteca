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
        <MenuButton title="Jaime Sabines" onPress={() => navigation.navigate('P2udg')} imageSource={require('../fotos/persona1.jpg')}/>
        <MenuButton title="Manuel R. Lapuente" onPress={() => navigation.navigate('P2udg2')} imageSource={require('../fotos/persona2.jpg')}/>
        <MenuButton title="Joe y a su chica" onPress={() => navigation.navigate('P2udg3')} imageSource={require('../fotos/anonimo.jpg')}/>
        <MenuButton title="Crisálida" onPress={() => navigation.navigate('P2udg4')} imageSource={require('../fotos/persona3.jpg')}/>
      </ScrollView>
    </View>
  );
};

export default App;
