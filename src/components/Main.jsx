import React from 'react';
import { View } from 'react-native';
import { Route, Routes } from 'react-router-native'

import RepositoryList from './RepositoryList.jsx';
import AppBar from './AppBar';
import LogInPage from '../pages/LogIn.jsx';

const Main = () => {
    return (
        <View style={{ flex: 1 }}>
            <AppBar />  
            <Routes>
                <Route path='/' exact element={<RepositoryList />} />
                <Route path='/signin' exact element={<LogInPage />} />
            </Routes>
        </View>
    )
}

export default Main