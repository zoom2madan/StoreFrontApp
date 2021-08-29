import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { getHeaderTitle } from '@react-navigation/elements';

import HomeScreen from '../../screens/HomeScreen';
import ContactUsScreen from '../../screens/ContactUsScreen';
import { ElectronicsCategoryNavigator, 
         JeweleryCategoryNavigator, 
         MensClothingCategoryNavigator,  
         WomensClothingCategoryNavigator} from './ProductListDetailNavigator';

const Drawer = createDrawerNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen 
                    name="HomeScreen" 
                    component={HomeScreen} 
                    options={{ drawerLabel: 'Home', title: 'Home' }} 
                />

                <Drawer.Screen 
                    name="ElectronicsCategoryDrawerScreen"
                    initialParams={{ category: 'electronics' }}
                    component={ElectronicsCategoryNavigator}
                    options={{ drawerLabel: 'Electronics', title: 'Electronics' }} 
                />

                <Drawer.Screen 
                    name="JeweleryCategoryDrawerScreen"
                    initialParams={{ category: 'jewelery' }}
                    component={JeweleryCategoryNavigator}
                    options={{ drawerLabel: 'Jewelery', title: 'Jewelery' }} 
                />

                <Drawer.Screen 
                    name="MensClothingCategoryDrawerScreen"
                    initialParams={{ category: 'men\'s clothing' }}
                    component={MensClothingCategoryNavigator}
                    options={{ drawerLabel: 'Mens Clothing', title: 'Mens Clothing' }} 
                />

                <Drawer.Screen 
                    name="WomensClothingCategoryDrawerScreen"
                    initialParams={{ category: 'women\'s clothing' }}
                    component={WomensClothingCategoryNavigator}
                    options={{ drawerLabel: 'Womens Clothing', title: 'Womens Clothing' }} 
                />

                <Drawer.Screen 
                    name="ContactUsScreen" 
                    component={ContactUsScreen} 
                    options={{ drawerLabel: 'Contact Us', title: 'Contact Us' }} 
                />
            </Drawer.Navigator>
        </NavigationContainer >
    );
}

export default RootNavigator;

/*

 screenOptions={{
    header: ({ navigation, route, options }) => {
        const title = getHeaderTitle(options, route.name);
        return <AppHeader title={title} style={options.headerStyle} navigation={navigation} />;
    }
}}

*/