import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from '../screens/LoginForm';
import {Text, TouchableOpacity, StyleSheet} from 'react-native'
import Register from '../screens/Register'
import Home from '../screens/Home';
import {connect} from 'react-redux'
import{logout} from '../redux/actions/authAction'

const Stack = createStackNavigator()
const AppContainer = ({auth, logout}) => {
  return (
    <NavigationContainer>
    {
    auth.login ?
    //Show Home
      <Stack.Navigator>
        <Stack.Screen name="Home" 
          options={{
            headerRight:()=>(
              <TouchableOpacity onPress={logout}
              style={styles.logout_header}>
                <Text>Logout</Text>
              </TouchableOpacity>
            )
          }}
        component={Home} />
      </Stack.Navigator>
      :
    //Show login & register
    <Stack.Navigator>
      <Stack.Screen name="LoginForm" component={LoginForm} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
    }
    </NavigationContainer>
  
     
  )
}

const styles = StyleSheet.create({
  logout_header:{
    marginRight: 20,

  }
})
const mapStateToProps = (state)=>{
  return {auth:state}
}
export default connect(mapStateToProps, {logout}) (AppContainer);




