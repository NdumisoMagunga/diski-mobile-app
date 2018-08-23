import React, {Component} from 'react';
import { View, ScrollView,Image, Dimensions,StyleSheet,TouchableOpacity, ToastAndroid,
    ActivityIndicator,Linking,Platform,
 } from 'react-native';
import {Text, b, Button} from 'react-native-elements';
import {Input} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import logo from '../images/logo.png';

import { userhandler } from '../config/userHandler';
import {connect} from 'react-redux';
import * as actions from '../actions'

class Login extends Component {
    state = {
        isLoading:false,
    };

    componentDidMount(){

    }

    loginWithAccount = () => {
        this.setState({
            isLoading:true,
        });

        fetch('http://portal.diskinine9.co.za/api/login', {
            method: 'POST',
            header: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email : this.state.email,
                password: this.state.password,
            }),
        }).then((result) => result.json())
        .then(user => {

            if(user._id){
                this.setState({
                    isLoading:false,
                });

                userhandler.saveUser(user);
                this.props.navigation.navigate('');
                ToastAndroid.show("Successfully logged In", ToastAndroid.SHORT)
                this.setState({
                    isLoading:false
                });
            }else{

                this.setState({
                    isLoading:false
                });
                ToastAndroid.show("oppp!! Failed to log in, please try again", ToastAndroid.SHORT)
            }
        })
    }
    render(){
        const { user } = this.state;
        return(
            <ScrollView style={styles.contaner}>

            <View style={{alignSelf:'center'}}>
            <Image source={logo} style={{resizeMode: 'contain', marginTop:50, width: Dimensions.get("window").width/1.25,height:150}}/>
            </View>

            <View >
                <Text style={{textAlign:'center', fontWeight:'200', marginTop:10}} h4>SIGN IN WITH YOUR EMAIL ADDRESS</Text>
            </View>
            
            <View style={{alignSelf:'center', width: Dimensions.get('window').width/1.4, marginTop:15,borderColor:'red'}}>
                <Input
                keyboardType={'email-address'}
                placeholder='Email'
                
                leftIcon={<Icon
                    name='user'
                    size={24}
                    color='black'
                    />} 
                    style={{borderBottomColor:'red', borderBottomWidth:1}}
                    onChange={(e) => {this.setState({email: e.target.value})}}
                />


                <Input
                placeholder='Password'
                type='password'
                required={true}
                leftIcon={<Icon
                    name='lock'
                    size={24}
                    color='black'
                    />} 
                    style={{borderBottomColor:'red', borderBottomWidth:1}}
                    onChange={(e) => {this.setState({password: e.target.value})}}
                />

            </View>

            <View style={{alignSelf:'center', width: Dimensions.get('window').width/1.4, marginTop:15}} >
            <Button
                    title="Login"
                    titleStyle={{ fontWeight: "200" }}
                    buttonStyle={{
                    backgroundColor: "rgba(0, 0,0, 1)",
                    height: 40,
                    borderColor: "transparent",
                    borderWidth: 0,
                    borderRadius: 5,
                    width: 295,
                    marginTop:15
                }}     
            />

             <Button
                    title="Back"
                    titleStyle={{ fontWeight: "200" }}
                    buttonStyle={{
                    backgroundColor: "rgba(205, 0,0, 1)",
                    
                    height: 40,
                    borderColor: "transparent",
                    borderWidth: 0,
                    borderRadius: 5,
                    width: 295,
                    marginTop:15, 
                }}
                onPress ={ () => {this.props.navigation.navigate('Select')}} 
            />
            </View>

            <TouchableOpacity>
                <Text style={{color:'red', textAlign:'center', margin:10}}>forgot your password?</Text>
            </TouchableOpacity>
            </ScrollView>
        )
    }
}



const styles = StyleSheet.create({
    contaner:{
        flex:1,
        backgroundColor:'white'
    },

    Input_view:{
        alignSelf:'center',
        width:'200'
    }

})

export default connect(null,actions)(Login);