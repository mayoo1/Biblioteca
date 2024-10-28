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
          <MenuButton title="1.1. Archivo de la Real Audiencia de la Nueva Galicia" onPress={() => navigation.navigate('Piso1')} imageSource={require('../fotos/GaleriaHis3.png')} />
          <MenuButton title="1.2. Supremo Tribunal de Justicia del Estado de Jalisco" onPress={() => navigation.navigate('Ahp1A2')} imageSource={require('../fotos/Antiguo3.jpg')} />
          <MenuButton title="1.3. Dirección General de Instrucción Publica" onPress={() => navigation.navigate('Ahp1A3')} imageSource={require('../fotos/Antiguo4.jpg')} />
          <MenuButton title="1.4. Hospital" onPress={() => navigation.navigate('Ahp1A4')} imageSource={require('../fotos/Antiguo6.jpg')} />
          <MenuButton title="1.5. Archivos Particulares" onPress={() => navigation.navigate('Ahp1A5')} imageSource={require('../fotos/Antiguo5.jpg')} />
          <MenuButton title="1.6. Microfilmes" onPress={() => navigation.navigate('Ahp1A6')} imageSource={require('../fotos/micro.jpg')} />
          <MenuButton title="1.7. Mapoteca" onPress={() => navigation.navigate('Ahp1A7')} imageSource={require('../fotos/GaleriaHis5.png')} />
        </ScrollView>
      </View>
    );
  };
  
  export default App;