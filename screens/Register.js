import React, { Component } from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux';
import {createEmailAccount, registerError} from '../redux/actions/authAction';

class Register extends Component {
  constructor(props){
    super(props)
    this.state={
      email: "",
      password: "",
      confirm: ""
    }
  }
  handleUpdateState =(name, value) =>{
    this.setState({
      [name]:value
    })
  }

  handleOnSubmit = () =>{
    if(this.state.password !== this.state.confirm){
      this.props.registerError("Passwords do not match")
      return;
    }
    this.props.createEmailAccount(this.state.email, this.state.password)
  }
  render(){
    const {navigation, auth} = this.props
    return(

        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <Text style={styles.text}>Sign Up</Text>
                </View>
                    <View style={styles.inputField}>
                    {
                      auth.error.register &&
                      <Text style={{color: 'red'}}>
                      {auth.error.register}
                      </Text>
                    }
                    <TextInput
                      placeholder="Email"
                      onChangeText={(text)=>
                        {this.handleUpdateState('email', text)}}
                      value={this.state.email}
                      
                      style={[styles.inputBox, 
                      styles.borderRadius]}/>
                    <TextInput
                      placeholder="Password" 
                      value={this.state.password}
                      secureTextEntry={true}
                      onChangeText={(text)=>
                        {this.handleUpdateState('password', text)}}
                      style={[styles.inputBox, 
                      styles.borderRadius]}/>
                    <TextInput
                     placeholder="Password Again"
                     value={this.state.confirm}
                     onChangeText={(text)=>
                      {this.handleUpdateState('confirm', text)}}
                     secureTextEntry={true}
                    style={[styles.inputBox,
                     styles.borderRadius]}/>
                <View>
                    <TouchableOpacity onPress={this.handleOnSubmit}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.login}>
                    <Text style={styles.account}>You already have account?</Text>
                    <Text onPress={()=>{
                        navigation.navigate("LoginForm")
                    }}
                    style={styles.log}>Log in</Text>
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
        top: 40,
        right: 30,
        left: 20,
        height: 660,
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
      inputBox: {
        marginBottom: 40,
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
  });

  const mapStateToProps = (state)=>{
    return {auth:state}
  }
  export default connect(mapStateToProps, {createEmailAccount, registerError})(Register)
  