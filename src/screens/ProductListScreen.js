import React, {useState, useEffect} from 'react';
import { View, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import axios from 'axios';
import ProductListItem from '../components/product-list/ProductListItem';

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

const ProductListScreen = ({ route, navigation }) => {
    const category = route.params.category;
    const categoryCapitalized = capitalize(category);

    const API_URL_BASE = 'https://fakestoreapi.com/products/category/';

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(API_URL_BASE + category)
        .then((res) => {
            setData(res.data);
            setIsLoading(false);
        })
        .catch((err)=>{
            setIsLoading(false);
            setError(err);
       })

    }, []);

    if(isLoading){
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <ActivityIndicator size="large" color="red"></ActivityIndicator>
            </View>
        )
    }

    if(error){
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text h3>Error fetching products...</Text>
            </View>
        )
    }

    return (
        <View>
            {/* <Text h1 h1Style={{fontSize:24}}>{categoryCapitalized}</Text> */}

            <FlatList
                style={styles.productListStyle}
                data={data}
                keyExtractor={item => item.id.toString()}
                renderItem = {({item}) => (
                    <ProductListItem product={item} navigation={navigation} />
                )}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    productListStyle: {
        paddingBottom: 36
    }
});
export default ProductListScreen;