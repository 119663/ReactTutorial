import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
container: {
  width: '100%',
  padding: 10,
},
button: {
  backgroundColor: '#FFFFFF',
  height: 40,
  borderRadius: 20, //rounds the button
  justifyContent: 'center',
  alignItems: 'center',
},
text: {
  fontSize: 12,
  fontWeight: '500',
  textTransform: 'uppercase'
}
});

export default styles;