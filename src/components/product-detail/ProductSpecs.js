import React from 'react';
import { View } from 'react-native';
import { Text, ListItem, Icon } from 'react-native-elements';

const ProductSpecs = ({product, navigation}) => {
    return ( 
        <View>
            <ListItem key={1} bottomDivider>
                <Icon name="finger-print-outline" type="ionicon"/>
                <ListItem.Content>
                    <ListItem.Title>#{product.id}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
            <ListItem key={2} bottomDivider>
                <Icon name="information-outline" type="ionicon" />
                <ListItem.Content>
                    <ListItem.Title>{product.title}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
            <ListItem key={3} bottomDivider>
                <Icon name="pricetag-outline" type="ionicon" />
                <ListItem.Content>
                    <ListItem.Title>${product.price}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
            <ListItem key={4} bottomDivider>
                <Icon name="document-text-outline" type="ionicon" />
                <ListItem.Content>
                    <ListItem.Title>{product.description}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
            <ListItem key={5} bottomDivider>
                <Icon name="folder-open-outline" type="ionicon" />
                <ListItem.Content>
                    <ListItem.Title>{product.category}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        </View>
     );
}
 
export default ProductSpecs;