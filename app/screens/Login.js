import React, {Component} from 'react';
import { View, ScrollView,Image,
     Dimensions,
     StyleSheet,
     TouchableOpacity,
     ImageBackground,
     AsyncStorage,
     KeyboardAvoidingView,
 } from 'react-native';

import {Text, b, Button} from 'react-native-elements';
import {Input} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import logo from '../images/logo.png';
import Background from '../images/background.png';

import { userhandler } from '../config/userHandler';
import {connect} from 'react-redux';
import * as actions from '../actions'


class Login extends Component {
   constructor(props){
       super(props);
       this.state ={
        username:'',
        password:'',
       }
   }

   componentDidMount() {
       this._loadInitialState().done();
   }

   _loadInitialState = async () => {
       var value = await AsyncStorage.getItem('user');
       if(value !== null) {
           this.props.navigation.navigate('GameSummary');
       }
   }

   login = () => {
    /*fetch('https://portal.diskinine9.co.za/api/login',{
    method:'POST',
    Headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
    })
})

.then((Response) => Response.json())
.then ((res) => {
    if(res.success === true) {
        AsyncStorage.setItem('user', res.user);
        this.props.navigation.navigate('GameSummary')
    }

    else{*/
        alert('you are not in the database');
    //}
//})
//.done();
}


    render(){
        return(
            <ImageBackground
            source={Background}
            style={{height:Dimensions.get('window').height,
                    width:Dimensions.get('window').width }}
        >

            <ScrollView bahavior ='padding' style={{flex:1}}>

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
                    style={{borderBottomColor:'red', borderBottomWidth:1,textDecorationColor:'black'}}
                    onChange={(username) => {this.setState({username})}}
                    underlineColorAndroid = 'transparent'
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
                    
                    sesureTextEntry={true}
                    style={{borderBottomColor:'red', borderBottomWidth:1,textDecorationColor:'black'}}
                    onChange={(password) => {this.setState({password})}}
                    underlineColorAndroid = 'transparent'
                />

            </View>

            <View style={{alignSelf:'center', width: Dimensions.get('window').width/1.4, marginTop:15}} >

            <TouchableOpacity>
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
                onPress={this.login}
            />
            </TouchableOpacity>

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
            </ImageBackground>
        )
    }
}



const styles = StyleSheet.create({
    contaner:{
        flex:1,
    },

    Input_view:{
        alignSelf:'center',
        width:'200'
    }

})

export default connect(null,actions)(Login);