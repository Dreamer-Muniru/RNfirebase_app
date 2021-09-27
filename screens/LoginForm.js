import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import {loginEmailAccount, loginError} from '../redux/actions/authAction';


class LoginForm extends Component{
  constructor(props){
    super(props)
    this.state={
      email: "",
      password: ""
    }
  }
  handleUpdateState =(name, value) =>{
    this.setState({
      [name]:value
    })
  }

  handleOnSubmit = () =>{
   
    this.props.loginEmailAccount(this.state.email, this.state.password)
  }
  render(){
    const {navigation, auth} = this.props
    return (
      <View style={styles.container}>
      <View style={styles.wrapper}>
          <View style={styles.header}>
              <Text style={styles.text}>Login</Text>
              {
                auth.error.login &&
                <Text style={{color: 'red'}}>
                  {auth.error.login}
                </Text>
              }
          </View>
              <View style={styles.inputField}>
              <TextInput placeholder="Email" 
                onChangeText={(text)=>
                {this.handleUpdateState('email', text)}}
                value={this.state.email}
                style={[styles.inputBox, 
                styles.field, styles.borderRadius]} />

              <TextInput placeholder="Password"
                 value={this.state.password}
                 secureTextEntry={true}
                 onChangeText={(text)=>
                   {this.handleUpdateState('password', text)}}
                style={[styles.inputBox, 
                styles.borderRadius]}/>
              <Text style={styles.forgot}>Forgot Password?</Text>
          <View>
              <TouchableOpacity onPress={this.handleOnSubmit}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
          </View>

          <View style={styles.login}>
              <Text style={styles.account}>Don't have an account?</Text>
              <Text onPress={() =>{
                navigation.navigate("Register")
              }}
              style={styles.log}>Sign Up</Text>
          </View>
          
          </View>
          
      </View>
  </View>

  )
  }
}

const styles = StyleSheet.create({
    header: {
       marginLeft: 50,
        marginTop: 30,
      },
      wrapper:{
        borderRadius: 10,
        width: '90%',
        justifyContent: 'center',
        top: 80,
        right: 30,
        left: 20,
        height: 550,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#ddd',
      },

      text:{
        fontSize: 38,
        textAlign: 'left',
        fontWeight: 'bold',
        color: '#4f2bce'
    
      },
      forgot:{
          textAlign: 'right',
          marginTop: 0,
          marginBottom: 50,
          marginRight: 30,
          color: '#2a7365',
          fontWeight: 'bold',
          fontSize: 15
      },
    
      login:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 40,
        marginBottom: 40
        
      },
      account:{
        fontSize: 15
      },
      log:{
          color: '#4f2bce',
          fontSize: 15,
          paddingLeft: 7,
          fontWeight: 'bold'
      },

      // Input flied Styling
      inputField:{
        fontSize: 10,
        marginLeft: 40,
        marginTop: 50,

      
      },
      field:{
          marginBottom: 30
      },
      inputBox: {
        marginBottom: 10,
        width: '90%',
        height: 50,
        fontSize: 16
      },
      borderRadius:{
        borderBottomWidth: 3,
        borderBottomColor: '#4f2bce',
      },
    
      button:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4f2bce',
        marginLeft: 15,
        fontSize: 20,
        width: '80%',
        height: 50,
        borderRadius: 12,  
    
      },
      buttonText:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
        
    
      }
  })
 
  const mapStateToProps = (state)=>{
    return {auth:state}
  }
  export default connect(mapStateToProps, {loginEmailAccount, loginError})(LoginForm)
  