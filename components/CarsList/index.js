import { Text, View, FlatList,Dimensions} from 'react-native';

import styles from './styles';
import cars from './cars';
import CarItem from '../CarItem';

const CarsList= (props)=>{
    return(
        <View style={styles.container}>
            <FlatList
             data={cars}
             //renders the items in the list i.e the cars
             renderItem={({item}) => <CarItem car={item} /> }
             //hiding the scrolling indicator
             showsVerticalScrollIndicator={false}
             //aligning items when yous scroll to the next
             snapToAlignment={'start'}
             //speed of animation when flatlist moves up or down
             decelerationRate={'fast'}
             snapToInterval={Dimensions.get('window').height}
            />
            </View>
    );
};

export default CarsList;