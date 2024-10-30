import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Dimensions, Linking} from 'react-native';
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
        <MenuButton title="Intranet" onPress={() => navigation.navigate('Acred1')} imageSource={require('../fotos/Antiguo17.jpg')} />
        <MenuButton title="Bases de Datos" onPress={() => { Linking.openURL('https://wdg.biblio.udg.mx/') }} imageSource={require('../fotos/Logo38.png')} />
        <MenuButton title="Autoaprendizaje de idiomas" onPress={() => navigation.navigate('Acred3')} imageSource={require('../fotos/Libreria12.jpg')} />
      </ScrollView>
    </View>
  );
};

export default App;
