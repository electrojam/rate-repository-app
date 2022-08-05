import React from 'react';
import { Text, View } from 'react-native';
import { Redirect, Route, Routes, Switch } from 'react-router-native'

import RepositoryList from './RepositoryList.jsx';
import AppBar from './AppBar.jsx';

const Main = () => {
    return (
        <View style={{ flex: 1 }}>
            <AppBar />  
            <Routes>
                <Route path='/' exact element={<RepositoryList />} />
                <Route path='/signin' element={<Text>Working on it</Text>} />
            </Routes>
        </View>
    )
}

export default Main