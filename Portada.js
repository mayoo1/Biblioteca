import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import React, { useEffect } from 'react';

const App = () => {
  const navigation = useNavigation();
  useFocusEffect(
    React.useCallback(() => {
      const timer = setTimeout(() => {
        navigation.navigate('INICIO');
      }, 1000); 
      return () => clearTimeout(timer);
    }, [navigation])
  );

  return (
    <View>
      <Text>

      </Text>
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
