import React from 'react';
import { View, Dimensions } from 'react-native';
import { Text, Image } from 'react-native-elements';

const ProductHeader = ({product, navigation}) => {
    const windowWidth = Dimensions.get('window').width || 340;
    console.log('Window width is ' + windowWidth);
    return ( 
        <View style={{padding: 0, marginBottom:30}}>
            <Image
                source={{ uri: product.image }}
                style={{ width: windowWidth, height: windowWidth}}
                />
        </View>
     );
}
 
export default ProductHeader;
