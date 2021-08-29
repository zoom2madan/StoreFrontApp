import React from 'react'
import { Icon } from 'react-native-elements'

const Hamburger = ({ navigation }) => {
    return (
        <Icon
            color="#fff"
            name="menu"
            onPress={() => navigation.toggleDrawer()}
        />
    )
}

export default Hamburger;