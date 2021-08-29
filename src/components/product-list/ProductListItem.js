import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, ListItem, Avatar, Chip, Button } from 'react-native-elements';

const ProductListItem = ({product, navigation}) => {
    return ( 
        <TouchableOpacity
            onPress={() => {
                navigation.navigate({
                    name: 'ProductDetailScreen',
                    params: { productId: product.id },
                    merge: true
                })
        }}>
        <ListItem bottomDivider>
            <Avatar size="large" source={{uri: product.image}} />
            <ListItem.Content>
                <ListItem.Title>{product.title}</ListItem.Title>
                <ListItem.Subtitle>${product.price}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
        </ListItem>
        </TouchableOpacity>
     );
}
 
export default ProductListItem;