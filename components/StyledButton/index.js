import { Text, View, Pressable} from 'react-native';
import styles from './styles';

const StyledButton= (props)=>{  //props=properties

    const type = props.type;
    const content = props.content;
    const onPress = props.onPress;

    //if type is primary the color will be black if not i will be white
    const backgroundColor = type === 'primary'?'#171A20CC' : '#FFFFFFa6';
    const textColor = type === 'primary'?'#FFFFFF' : '#171A20';


    //to merge two styles together you put them inside an array
    return(
        <View style={styles.container}>
         <Pressable
               style= {[styles.button, {backgroundColor: backgroundColor}]}
               onPress={() => onPress()}>

                <Text style={[styles.text, {color:textColor}]}>{content}</Text>
                {/* //content takes name as a variable so instead of puting custom order or existing inventory it picks it */}
            </Pressable>  
        </View>
    );
};

export default StyledButton;