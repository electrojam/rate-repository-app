import React from 'react'
import { ViewPropTypes, StyleSheet, View } from 'react-native'
import Constants from  'expo-constants'
import {Link} from 'react-router-native'

import StyledText from './StyledText'
import theme from '../theme'

const AppBarTab = ({active, children, to}) => {
    return (
        <Link to={to}>
            <StyledText fontWeight='bold' style={styles.text}>
                {children}
            </StyledText>            
        </Link>
    )
}

const AppBar = () => {
  return (
    <View style={styles.container}>
        <AppBarTab active to='/'>Repositories</AppBarTab>
        <AppBarTab active to='/sigin'>Sign In</AppBarTab>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10
    },
    text: {
        color: theme.appBar.textPrimary
    }
})

export default AppBar