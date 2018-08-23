import React,{Component} from 'react';
import { View,ScrollView,StyleSheet,Dimensions,Image,ImageBackground } from 'react-native';
import { Text } from 'react-native-elements';
import TopBar from '../components/TopBar';
import pic from '../images/sample.jpg';
import Background from '../images/background.png';



class Profile extends Component{

    render(){
        return(
            <ImageBackground source={Background} style={Styles.backImage}>
            <ScrollView>
                <TopBar title={'Profile'}  navigation={() => {this.props.navigation.goBack()}} />
                    <View style={Styles.headerContainer}>
                        <Image source={pic} style={Styles.img}/>
                        <Text style={Styles.textStyle}>Name: Player 1</Text>
                        <Text style={Styles.textStyle}>Date of Birth: 1994/09/19</Text>
                        <Text style={Styles.textStyle}>Position: Defender</Text>
                        <Text style={Styles.textStyle}>Role: Crucial first team player</Text>
                    </View>
            </ScrollView>
            </ImageBackground>
        )
    };
}

const Styles = StyleSheet.create({
    img:{
        // width:Dimensions.get('window').width/2,
        // height: Dimensions.get('window').height/2,
        width: 200,
        height: 200,
        borderRadius:20,
        paddingVertical: 20,
        borderWidth: 4,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 15,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
    headerContainer:{
        alignItems: 'center',
        justifyContent: 'center', 
            },
        textStyle:{
            fontSize:18,
            textAlign:'left',
            color:'black',
            fontWeight:'200'
        },

        backImage:{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height
        }

})

export default Profile;