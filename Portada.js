import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import React, { useEffect } from 'react';

const App = () => {
  const navigation = useNavigation();
  useFocusEffect(
    React.useCallback(() => {
      const timer = setTimeout(() => {
        navigation.navigate('INICIO');
      }, 2500); 
      return () => clearTimeout(timer);
    }, [navigation])
  );

  return (
    <View style={{backgroundColor:'#7C2422', width:'100%', height:'100%'}}>
      <View style={{backgroundColor:'#003865', width:'100%', height:'15%', borderColor:'white', borderWidth:0}}>
        <Image style={{width:'20%', height:'100%', borderColor:'white', borderWidth:0}} source={require('./fotos/Logoudg.png')} />
        <Text style={styles.title}>
          UNIVERSIDAD DE GUADALAJARA
        </Text>
        <View style={{ borderWidth: 1, borderColor: 'white', width: '70%', marginTop: 40, marginLeft:'25%' }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    height: '100%',
    width: '100%',
    borderColor: 'red',
    borderWidth: 0,
  },
  imag1: {
    height:'5%',
    width:'100%'
  },
  imag2: {
    width:'100%',
    height:'7%',
  },
  title: {
    fontSize: 19,
    fontWeight: 'thin',
    fontStyle:'italic',
    fontWeight:'bold',
    color: 'white',
    marginTop:'-32%',
    marginLeft:'20%',
    borderColor:'white', 
    borderWidth:0,
    width:'80%'
  },
  carouselImage: {
    borderColor: 'white',
    borderWidth: 0,
    margin:'auto',
    marginTop: 50,
    width: 300,
    height: 400,
    borderRadius: 30,
  }
});

export default App;
