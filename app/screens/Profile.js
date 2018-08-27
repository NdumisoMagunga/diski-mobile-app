import React,{Component} from 'react';
import { View,ScrollView,StyleSheet,Dimensions,Image,ImageBackground } from 'react-native';
import { Container,Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';
import TopBar from '../components/TopBar';
import pic from '../images/sample.jpg';
import Background from '../images/background.png';



class Profile extends Component{

    render(){
        return(
            <ImageBackground source={Background} style={Styles.backImage} >
            <ScrollView>
                <TopBar title={'Profile'}  navigation={() => {this.props.navigation.goBack()}} />
                    <View style={Styles.headerContainer}>
                        <Image source={pic} style={Styles.img}/>
                    </View>
                    
                   <Container>
                       <Content>
                           <List>
                               <ListItem>
                                   <Left>
                                       <Text style={{fontWeight:'bold'}}>Name:</Text> 
                                   </Left>
                                   <Left>
                                       <Text style={{flexDirection:'row'}}>Ndumiso Magunga</Text>
                                   </Left>
                               </ListItem>

                               <ListItem>
                                   <Left>
                                       <Text style={{fontWeight:'bold'}}>Date Of Birth:</Text> 
                                   </Left>
                                   <Left>
                                       <Text style={{flexDirection:'row'}}>09/SEP/1994</Text>
                                   </Left>
                               </ListItem>

                                <ListItem>
                                   <Left>
                                       <Text style={{fontWeight:'bold'}}>Position:</Text> 
                                   </Left>
                                   <Left>
                                       <Text style={{flexDirection:'row'}}>Defender</Text>
                                   </Left>
                               </ListItem>

                                <ListItem>
                                   <Left>
                                       <Text style={{fontWeight:'bold'}}>Team:</Text> 
                                   </Left>
                                   <Left>
                                       <Text style={{flexDirection:'row'}}>The Bees</Text>
                                   </Left>
                               </ListItem>
                           </List>
                       </Content>
                   </Container>
            </ScrollView>
            </ImageBackground>
        )
    };
}

const Styles = StyleSheet.create({
    img:{
        // width:Dimensions.get('window').width/2,
        // height: Dimensions.get('window').height/2,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height/2,
       
    },
    headerContainer:{
        alignItems: 'center',
        justifyContent: 'center', 
            },
        textStyle:{
            fontSize:17,
            color:'black',
            fontWeight:'bold',
            textAlign:'justify',
            fontFamily:'italic',
            
            
           
           
        },

        backImage:{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height
        }

})

export default Profile;