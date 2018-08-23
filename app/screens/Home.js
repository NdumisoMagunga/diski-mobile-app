import React, { Component } from 'react';
import {
    ImageBackground,
    StyleSheet,
    View,
    Dimensions,
    TouchableOpacity,
    Image
} from 'react-native';
import {
    Button,
    Text
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

import background from '../images/background.png';
import logo from '../images/logo.png';
import TopBar from '../components/TopBar';

class Home extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <ImageBackground 
                source={background}
                style={styles.container}
            >
            <TopBar title={''} navigation={()=> this.props.navigation.goBack()} />
                <View style={{alignSelf: 'center'}}>
                <Image source={logo} style={{resizeMode: 'contain', marginTop:100, width: Dimensions.get("window").width/1.35,height:170}}/>
                </View>


                <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'center',alignItems:'center',paddingTop:20,paddingHorizontal:20}}>
                    
                
                <TouchableOpacity onPress={()=> {this.props.navigation.navigate('Fixture')}}>
                    <Image source={require('../images/icons/fixtures.png')} style={styles.actionIcons} />
                    <Text style ={styles.actionIconText}>FIXTURES</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> {this.props.navigation.navigate('SelectTeam')}}>
                    <Image source={require('../images/icons/matchcenter.png')} style={styles.actionIcons} />
                    <Text style ={styles.actionIconText}>MATCH DAY</Text>
                </TouchableOpacity>
               
                <TouchableOpacity onPress={()=> {this.props.navigation.navigate('Results')}}>
                    <Image source={require('../images/icons/results.png')} style={styles.actionIcons} />
                    <Text style ={styles.actionIconText}>RESULTS</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Logs')}}>
                        <Image source={require('../images/icons/logs.png')} style={styles.actionIcons} />
                         <Text style ={styles.actionIconText}>LOGS</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('News')}}>
                        <Image source={require('../images/icons/player.png')} style={styles.actionIcons} />
                         <Text style ={styles.actionIconText}>NEWS</Text>
                </TouchableOpacity>

               

                </View>
             


                <TouchableOpacity
                    onPress={ () => {this.props.navigation.navigate('Select')}}
                >
                <Text style={{marginTop: 15,textAlign: 'center', color: 'rgba(201,0,0,1)'}}> <Icon name='md-arrow-back' color='rgba(201,0,0,1)' size={16}/> BACK</Text>
                </TouchableOpacity>


            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width, 
        height: Dimensions.get('window').height,

    },
    actionIcons:{
        width:55,
        height:55,
        margin:3,
        marginHorizontal:20
    },
    actionIconText:{
        color:'black',
        fontSize:12,
        textAlign:'center',
        marginBottom:10
    }
});

export default Home;