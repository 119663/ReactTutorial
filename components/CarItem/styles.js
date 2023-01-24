import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    carContainer :{
        width: '100%',
        height: '100%',
      },
      titles :{
         marginTop: '30%',
         width: '100%',
         alignItems: 'center',
      },
      maintitle :{
         fontSize: 40,
         fontWeight: '700',
          },
      subtitle :{
         fontSize: 50,
         color: '#5c5e62' //grey
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode :'cover',  //or contain
        position: 'absolute',  //helps see the text on the image
      }
    
    
});

export default styles;