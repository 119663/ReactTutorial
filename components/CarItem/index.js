import { Text, View, ImageBackground} from 'react-native';
import StyledButton from "../StyledButton";
//importing styles.js
import styles from './styles';

const CarItem= (props)=>{

    //there is the name i.e. model x and a tagline underneath the name and an image
    //helps in that instead of hardoding model x it picks it
    const{name, tagline,taglineCTA, image}=props.car;

    return(
        <View style = {styles.carContainer}>

        <ImageBackground 
        source={image} 
        style={styles.image}
        />
 
         <View style = {styles.titles} >
          <Text style={styles.maintitle}>{name} </Text>
          <Text style={styles.subtitle}>
          {tagline}
          {''} 
          <Text style = {styles.taglines}> 
          {/* //nesting text inside another but styling it individually,  ''renders an empty spae btwn tagline and taglineCTA */}
          {taglineCTA}
          </Text>
          </Text>
          </View>

          {/* put button in a view to be able to style easily */}
          <View style = {styles.buttonsContainer}>
          <StyledButton 
          type="primary" 
          content={"Custom Order"} 
          onPress={() =>{
            console.warn("Custom Order was pressed");
          }}
          /> 

          <StyledButton 
          type="secondary" 
          content={"Existing Inventory"} 
          onPress={() =>{
            console.warn("Existing Inventory was pressed");
          }}
          /> 
          </View>

          {/* //sending sth from parent to child */}
        
        </View>
    );
};

export default CarItem;