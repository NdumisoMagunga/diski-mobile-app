import React, { Component } from 'react';
import {Text, Divider} from 'react-native-elements';
import {ScrollView, View,StyleSheet,Dimensions,TouchableOpacity,Image,ImageBackground} from 'react-native';
import TopBar from '../components/TopBar';
import image from '../images/sample.jpg';
import Background from '../images/background.png';

class MatchDay extends Component {
   
    render(){
        return(
            <ImageBackground source={Background}  style={styles.backImage} >
            <ScrollView>
                <TopBar title={'MATCH DAY'} navigation={ () => {this.props.navigation.goBack()}}/>
                <Text style={styles.header} h3>LINE UP</Text>
                <Divider style={styles.divider}/>

                <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'center',alignItems:'center',paddingTop:20,paddingHorizontal:10}}>

                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Profile')}}>
                        <View>
                        <Image  style={styles.actionIcons} source={image} />
                        </View>
                        <Text style={styles.player1}>player</Text>
                    </TouchableOpacity>

                     <TouchableOpacity onPress={() => {this.props.navigation.navigate('Profile')}}>
                        <View>
                        <Image  style={styles.actionIcons} source={image} />
                        </View>
                        <Text style={styles.player1}>player</Text>
                    </TouchableOpacity>

                     <TouchableOpacity onPress={() => {this.props.navigation.navigate('Profile')}}>
                        <View>
                        <Image  style={styles.actionIcons} source={image} />
                        </View>
                        <Text style={styles.player1}>player</Text>
                    </TouchableOpacity>

                </View>
                <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'center',alignItems:'center',paddingTop:20,paddingHorizontal:10}}>
               
                     <TouchableOpacity onPress={() => {this.props.navigation.navigate('Profile')}}>
                        <View>
                        <Image  style={styles.actionIcons} source={image} />
                        </View>
                        <Text style={styles.player1}>player</Text>
                    </TouchableOpacity>

                     <TouchableOpacity onPress={() => {this.props.navigation.navigate('Profile')}}>
                        <View>
                        <Image  style={styles.actionIcons} source={image} />
                        </View>
                        <Text style={styles.player1}>player</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Profile')}}>
                        <View>
                        <Image  style={styles.actionIcons} source={image} />
                        </View>
                        <Text style={styles.player1}>player</Text>
                    </TouchableOpacity>

                </View>

                 <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'center',alignItems:'center',paddingTop:10,paddingHorizontal:15}}>
                 <TouchableOpacity onPress={() => {this.props.navigation.navigate('Profile')}}>
                        <View>
                        <Image  style={styles.actionIcons} source={image} />
                        </View>
                        <Text style={styles.player1}>player</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Profile')}}>
                        <View>
                        <Image  style={styles.actionIcons} source={image} />
                        </View>
                        <Text style={styles.player1}>player</Text>
                    </TouchableOpacity>

                     <TouchableOpacity onPress={() => {this.props.navigation.navigate('Profile')}}>
                        <View>
                        <Image  style={styles.actionIcons} source={image} />
                        </View>
                        <Text style={styles.player1}>player</Text>
                    </TouchableOpacity>

                </View>

                 <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'center',alignItems:'center',paddingTop:10,paddingHorizontal:15}}>
                 <TouchableOpacity onPress={() => {this.props.navigation.navigate('Profile')}}>
                        <View>
                        <Image  style={styles.actionIcons} source={image} />
                        </View>
                        <Text style={styles.player1}>player</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Profile')}}>
                        <View>
                        <Image  style={styles.actionIcons} source={image} />
                        </View>
                        <Text style={styles.player1}>player</Text>
                    </TouchableOpacity>

                     <TouchableOpacity onPress={() => {this.props.navigation.navigate('Profile')}}>
                        <View>
                        <Image  style={styles.actionIcons} source={image} />
                        </View>
                        <Text style={styles.player1}>player</Text>
                    </TouchableOpacity>

                </View>

                <Text style={styles.header} h3>SUBSTITUTES</Text>
                <Divider style={styles.divider}/>
                <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',justifyContent:'center',alignItems:'center',paddingTop:10,paddingHorizontal:20}}>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Profile')}}>
                        <View>
                        <Image  style={styles.actionIcons} source={image} />
                        </View>
                        <Text style={styles.player1}>player</Text>
                    </TouchableOpacity>

                     <TouchableOpacity onPress={() => {this.props.navigation.navigate('Profile')}}>
                        <View>
                        <Image  style={styles.actionIcons} source={image} />
                        </View>
                        <Text style={styles.player1}>player</Text>
                    </TouchableOpacity>

                     <TouchableOpacity onPress={() => {this.props.navigation.navigate('Profile')}}>
                        <View>
                        <Image  style={styles.actionIcons} source={image} />
                        </View>
                        <Text style={styles.player1}>player</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Profile')}}>
                        <View>
                        <Image  style={styles.actionIcons} source={image} />
                        </View>
                        <Text style={styles.player1}>player</Text>
                    </TouchableOpacity>

                     <TouchableOpacity onPress={() => {this.props.navigation.navigate('Profile')}}>
                        <View>
                        <Image  style={styles.actionIcons} source={image} />
                        </View>
                        <Text style={styles.player1}>player</Text>
                    </TouchableOpacity>
                </View>
          </ScrollView>
          </ImageBackground>
        );
    }
};

const styles = StyleSheet.create({
   
    container:{
        flex:1,
        backgroundColor:'white',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    actionIcons:{
        width:55,
        height:55,
        margin:3,
        marginHorizontal:20,
        borderWidth:1,
        borderColor:'black',
        borderRadius:5
        
    },
    header:{
        marginTop:15,
        alignSelf:'center',
        color:'black',
        fontSize:16
    },
    divider:{
        width: Dimensions.get('window').width,
        height:0.5,
        backgroundColor:'grey'
    },

    player1:{
        width:55,
        height:55,
        margin:5,
        marginHorizontal:20,
       
    },
    backImage:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }

})

export default MatchDay;