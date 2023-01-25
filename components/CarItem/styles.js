import { StyleSheet, Dimensions } from 'react-native';

//dimensions help take the height of the screen

const styles = StyleSheet.create({
    carContainer :{
        width: '100%',
        height: Dimensions.get('window').height,
      },
      titles :{
         marginTop: '30%',
         width: '100%',
         alignItems: 'center',
      },
      maintitle :{
         fontSize: 40,
         fontWeight: '600',
          },
          
      taglines:{
         textDecorationline: 'underline',
        },

      subtitle :{
         fontSize: 40,
         color: '#5c5e62' //grey
      },
 
      image: {
        width: '100%',
        height: '100%',
        resizeMode :'cover',  //or contain
        position: 'absolute',  //helps see the text on the image
      },
      //button styling
      buttonsContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%',

      }
    
});

export default styles;