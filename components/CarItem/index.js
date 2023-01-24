import { Text, View, ImageBackground} from 'react-native';
import StyledButton from "../StyledButton";
import styles from './styles';

const CarItem= (props)=>{
    return(
        <View style = {styles.carContainer}>

        <ImageBackground 
        source={require('../../assets/images/ModelX.jpeg')} 
        style={styles.image}
        />
 
         <View style = {styles.titles} >
          <Text style={styles.maintitle}>Model S </Text>
          <Text style={styles.subtitle}>Starting at $69,940 </Text>
          </View>

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

          {/* //sending sth from parent to child */}
        
        </View>
    );
};

export default CarItem;