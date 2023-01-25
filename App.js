import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CarsList from './components/CarsList';
import Header from './components/Header';

export default function App() {
  return ( 
    <View style={styles.container}>
  
      {/* //this ar item can be used different times for mutiple cars
      <CarItem 
      name = {"Model X"} 
      tagline={"Starting from $69,940"} 
      taglineCTA={"Touchless Delivery"}
      //impost an image from assets
      image={require('./assets/images/ModelX.jpeg')}/> */}
      <Header/>
      <CarsList/>

      <StatusBar style="auto"  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
  },
});


