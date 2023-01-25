import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
     position: 'absolute',
     top: 50,
     //zindex used for displaying
     zIndex: 100,
     //flexmode used to display logo and menu in the same line as the text
     flexDirection:'row',
     //to spread logo and menu justify content and add width
     justifyContent:'space-between',
     width: '100%',
     //use padding to remove the logo and menu from being too close to the margin
     paddingHorizontal:20,

    },
    logo: {
     width:100,
     height:20,
     resizeMode:'contain',
    },
    menu: {
     width:25,
     height:25,
     resizeMode:'contain',
    }

});

export default styles;