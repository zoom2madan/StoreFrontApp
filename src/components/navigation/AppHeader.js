import React from 'react';
import { Header } from 'react-native-elements/dist/header/Header';
import Hamburger from './Hamburger';

const AppHeader = ({ title, style }) => {
    return (
        <Header
            leftComponent={<Hamburger />}
            centerComponent={{ text: title, style: style }}
            rightComponent={{ icon: 'home', color: '#fff' }}
        />
    );
}

export default AppHeader;
