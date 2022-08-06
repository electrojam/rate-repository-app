import React from 'react'
import { ScrollView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import Constants from  'expo-constants'
import {Link, useLocation} from 'react-router-native'

import StyledText from './StyledText'
import theme from '../theme'

const AppBarTab = ({ children, to }) => {
    const { pathname } = useLocation()
    const active = pathname === to

    const textStyles = [
        styles.text,
        active && styles.active
    ]

    return (
        <Link to={to} component={TouchableWithoutFeedback}>
            <StyledText fontWeight='bold' style={textStyles}>
                {children}
            </StyledText>            
        </Link>
    )
}

const AppBar = () => {
    return (
    <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
            <AppBarTab to='/'>Repositories</AppBarTab>
            <AppBarTab to='/signin'>Sign In</AppBarTab>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight + 10
    },
    text: {
        color: theme.appBar.textPrimary,
        paddingHorizontal: 10
    },
    scroll: {
        paddingBottom: 15
    },
    text: {
        color: theme.appBar.textSecondary,
        paddingHorizontal: 10
    },
    active: {
        color: theme.appBar.textPrimary
    }
})

export default AppBar