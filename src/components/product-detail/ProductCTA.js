import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';

const ProductCTA = ({product, navigation}) => {
    return ( 
        <View>
            <View style={styles.ctaPanel}>
            <Button
                icon={ <Icon name="cart-outline" type="ionicon" size={15} color="white" /> }
                title=" Add to Cart "
            />
            <Button
                icon={ <Icon name="flash-outline" type="ionicon" size={15} color="white" /> }
                title=" Buy Now "
            />
            </View>
            <View style={styles.wideButton}>
                <Button 
                    type="outline" 
                    title=" Back to product list "
                    onPress={() => { navigation.goBack() }}
                />
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    ctaPanel: {
        flex: 1,
        padding:20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'stretch'
    },
    wideButton:{
        paddingHorizontal:40,
        marginBottom: 10
    }
});
export default ProductCTA;