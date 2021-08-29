import React, {useState, useEffect} from 'react';
import { View, ActivityIndicator, ScrollView } from 'react-native';
import { Text, Divider } from 'react-native-elements';
import axios from 'axios';
import ProductHeader from '../components/product-detail/ProductHeader';
import ProductSpecs from '../components/product-detail/ProductSpecs';
import ProductCTA from '../components/product-detail/ProductCTA';

const ProductDetailScreen = ({ route, navigation }) => {
    const productId = route.params.productId;
    const API_URL_BASE = 'https://fakestoreapi.com/products/';

    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(API_URL_BASE + productId)
        .then((res) => {
            setProduct(res.data);
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
                <Text h3>Error fetching product details...</Text>
            </View>
        )
    }

    return (
        <ScrollView>
            <Text h1 h1Style={{fontSize:24, padding:20}}>{product.title}</Text>
            <ProductHeader product={product} navigation={navigation} />
            <ProductSpecs product={product} navigation={navigation} />
            <ProductCTA  product={product} navigation={navigation} />
        </ScrollView>
    );
}

export default ProductDetailScreen;