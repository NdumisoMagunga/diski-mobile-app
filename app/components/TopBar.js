import React,{Component} from 'react';
import {View,StyleSheet,Image,Text,TouchableOpacity,Dimensions} from 'react-native';
import {Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons'
const logo = require('../images/logo.png')

class TopBar extends Component{
    render(){
        return(
            <View style={styles.container}>
            <View style={styles.innerContainer}>
            <TouchableOpacity style={{width:60,paddingHorizontal:10}} onPress={this.props.navigation}>
            <Icon size={25} color='black' name='md-arrow-back' /> 
            </TouchableOpacity>
            <Text style={styles.text}>{this.props.title}</Text>
            <Image source={logo} style={styles.logo} />
            </View>
                <Divider style={styles.divider} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:50,
        backgroundColor:'transparent'
    },
    innerContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    block:{
        height: 40,
        width:90,
        backgroundColor:'white'
    },
    logo:{
        height: 50,
        width:110,
        resizeMode:'contain',
    },
    text:{
      
        fontSize:18,
        fontWeight:'800',
        textAlign:'right',
        color:'black',
        marginLeft:0
    },
    divider:{
        width: Dimensions.get('window').width,
        height:0.5,
        backgroundColor:'grey'
    },

})

export default TopBar;