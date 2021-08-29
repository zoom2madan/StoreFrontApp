import React from 'react';
import { Text, View, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductListScreen from '../../screens/ProductListScreen';
import ProductDetailScreen from '../../screens/ProductDetailScreen';

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false
}

const ElectronicsCategoryNavigator = ({ route, navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name="ElectronicsCategoryScreen"
                initialParams={{ category: 'electronics' }}
                component={ProductListScreen}
                options={{ drawerLabel: 'Electronics', title: 'Electronics' }} 
            />
            <Stack.Screen
                name="ProductDetailScreen"
                component={ProductDetailScreen}
            />
        </Stack.Navigator>
    );
}

const JeweleryCategoryNavigator = ({ route, navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name="JeweleryCategoryScreen"
                initialParams={{ category: 'jewelery' }}
                component={ProductListScreen}
                options={{ drawerLabel: 'Jewelery', title: 'Jewelery' }} 
            />
            <Stack.Screen
                name="ProductDetailScreen"
                component={ProductDetailScreen}
            />
        </Stack.Navigator>
    );
}
const MensClothingCategoryNavigator = ({ route, navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name="MensClothingCategoryScreen"
                initialParams={{ category: 'men\'s clothing' }}
                component={ProductListScreen}
                options={{ drawerLabel: 'Mens Clothing', title: 'Mens Clothing' }} 
            />
            <Stack.Screen
                name="ProductDetailScreen"
                component={ProductDetailScreen}
            />
        </Stack.Navigator>
    );
}
const WomensClothingCategoryNavigator = ({ route, navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name="WomensClothingCategoryScreen"
                initialParams={{ category: 'women\'s clothing' }}
                component={ProductListScreen}
                options={{ drawerLabel: 'Womens Clothing', title: 'Womens Clothing' }} 
            />
            <Stack.Screen
                name="ProductDetailScreen"
                component={ProductDetailScreen}
            />
        </Stack.Navigator>
    );
}

export { ElectronicsCategoryNavigator,
         JeweleryCategoryNavigator,
         MensClothingCategoryNavigator, 
         WomensClothingCategoryNavigator};